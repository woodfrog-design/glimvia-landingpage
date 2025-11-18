"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Loader2, Send, Ticket, HelpCircle, AlertTriangle, Server, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import PageLayout from '@/app/components/page-layout';
import { motion } from 'framer-motion';
import { submitSupportTicket, generateTicketId, type SupportFormData } from '@/lib/firebase-forms';

// Regex for basic phone validation
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

// Improved Validation Schema with Sanity Checks
const ticketSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address'),
  phone: z.string().trim()
    .optional()
    .or(z.literal(''))
    .refine((val) => !val || phoneRegex.test(val), 'Please enter a valid phone number'),
  organization: z.string().trim().optional(),
  title: z.string().trim()
    .min(5, 'Title must be at least 5 characters')
    .refine(val => !/^test$/i.test(val), "Please provide a descriptive title"),
  category: z.string().min(1, 'Please select a category'),
  priority: z.string().min(1, 'Please select a priority level'),
  supersetVersion: z.string().trim().min(1, 'Please enter your Superset version'),
  description: z.string().trim()
    .min(20, 'Please provide more details (at least 20 characters)')
    .refine(val => !/^asdf/i.test(val), "Please provide a valid description"),
  openForCall: z.boolean().default(false),
  
  // Honeypot field - used to trap bots
  confirm_email: z.string().optional(),
});

type TicketForm = z.infer<typeof ticketSchema>;

// Success Screen Component
function SuccessScreen({ ticketId, onReset }: { ticketId: string; onReset: () => void }) {
  return (
    <PageLayout showAnimatedSection={false}>
      <div className="flex items-center justify-center min-h-[50vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center bg-background p-8 rounded-2xl border shadow-feature-card"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Ticket className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2 font-headline">Ticket Submitted!</h1>
          <div className="bg-muted/50 p-3 rounded-lg mb-4 inline-block">
            <p className="text-sm font-mono text-foreground">ID: {ticketId}</p>
          </div>
          <p className="text-muted-foreground mb-6">
            We have received your support request. Our engineering team will review it and get back to you shortly via email.
          </p>
          <Button onClick={onReset} className="w-full" variant="default">
            Submit Another Ticket
          </Button>
        </motion.div>
      </div>
    </PageLayout>
  );
}

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [createdTicketId, setCreatedTicketId] = useState('');
  const [submitError, setSubmitError] = useState('');

  const form = useForm<TicketForm>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      title: '',
      category: '',
      priority: 'medium',
      supersetVersion: '',
      description: '',
      openForCall: false,
      confirm_email: '', // Honeypot init
    },
  });

  const onSubmit = async (data: TicketForm) => {
    // 1. Honeypot check: If filled, it's a bot
    if (data.confirm_email) {
      console.log('Bot detected via honeypot');
      setSubmitStatus('success'); // Fake success to confuse bot
      setCreatedTicketId('SPAM-FILTERED');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    const ticketId = generateTicketId();

    try {
      // Remove honeypot before sending
      const { confirm_email, ...cleanData } = data;

      // 1. Submit to Firebase
      const result = await submitSupportTicket(cleanData as SupportFormData, ticketId);
      
      if (result.success) {
        // 2. Trigger Email Notification
        fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...cleanData, ticketId }),
        }).catch(err => console.error('Failed to send notification:', err));

        setCreatedTicketId(ticketId);
        setSubmitStatus('success');
        form.reset();
        
        // 3. Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'submit_ticket', {
            event_category: 'support',
            event_label: data.category,
            ticket_id: ticketId
          });
        }
      }
    } catch (error: any) {
      console.error('Ticket submission error:', error);
      setSubmitStatus('error');
      setSubmitError(error?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <SuccessScreen 
        ticketId={createdTicketId}
        onReset={() => {
          setSubmitStatus('idle');
          setCreatedTicketId('');
        }} 
      />
    );
  }

  return (
    <PageLayout 
      title="Support Center"
      description="Experiencing issues or have technical questions? Our engineering team is ready to help you get back on track."
    >
      <div className="mx-auto max-w-3xl">
        <div className="bg-background p-6 sm:p-8 rounded-2xl border shadow-feature-card">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              Please provide as much detail as possible to help us resolve your issue faster.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* HONEYPOT FIELD (Hidden) */}
              <div className="hidden" aria-hidden="true">
                <Input 
                  tabIndex={-1}
                  autoComplete="off"
                  {...form.register("confirm_email")} 
                  placeholder="Do not fill this out"
                />
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Technical Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Server className="w-4 h-4" /> Issue Details
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="connection">Connection Issue</SelectItem>
                            <SelectItem value="bug">Bug Report</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="account">Account/Billing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">Low - General Question</SelectItem>
                            <SelectItem value="medium">Medium - Minor Issue</SelectItem>
                            <SelectItem value="high">High - Major Feature Broken</SelectItem>
                            <SelectItem value="critical">Critical - App Crashing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="supersetVersion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Superset Version *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., v3.1.0 or SaaS" {...field} />
                      </FormControl>
                      <FormDescription>
                        The version of Apache Superset you are connecting to.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject *</FormLabel>
                      <FormControl>
                        <Input placeholder="Brief summary of the issue" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe the issue in detail. Steps to reproduce, expected behavior, etc." 
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="openForCall"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Open for a call?
                      </FormLabel>
                      <FormDescription>
                        Can our engineering team contact you for a quick debug session if needed?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                  variant="shiny"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Submitting Ticket...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Ticket
                    </>
                  )}
                </Button>

                {submitStatus === 'error' && (
                  <div className="mt-4 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-700 dark:text-red-300">
                        Submission Failed
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-400 mt-1">{submitError}</p>
                    </div>
                  </div>
                )}
              </div>

            </form>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
}