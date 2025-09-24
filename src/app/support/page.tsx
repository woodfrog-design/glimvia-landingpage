"use client";

import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Loader2, Ticket, HelpCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
import PageLayout from '@/app/components/page-layout';
import { motion } from 'framer-motion';

// Form validation schema
const supportSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters'),
  category: z.string().min(1, 'Please select a category'),
  priority: z.string().min(1, 'Please select a priority level'),
  description: z
    .string()
    .min(20, 'Please provide more details (minimum 20 characters)')
    .max(2000, 'Description must be less than 2000 characters'),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .optional()
    .or(z.literal('')),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true;
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = val.replace(/[\s\-\(\)]/g, '');
      return phoneRegex.test(cleanPhone);
    }, 'Please enter a valid phone number'),
  organization: z
    .string()
    .max(100, 'Organization name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  supersetVersion: z
    .string()
    .min(1, 'Superset version is required')
    .refine(
      (val) => /^\d+\.\d+(\.\d+)?$/.test(val.trim()),
      'Please enter a valid version format (e.g., 3.1.0)'
    ),
  openForCall: z.boolean().default(false),
});

type SupportForm = z.infer<typeof supportSchema>;

const categories = [
  { value: 'bug', label: 'Bug Report' },
  { value: 'feature-request', label: 'Feature Request' },
  { value: 'general', label: 'General Query' },
  { value: 'login-issue', label: 'Login Issue' },
  { value: 'dashboard-issue', label: 'Dashboard Issue' },
  { value: 'performance', label: 'Performance Issue' },
  { value: 'installation', label: 'Installation Help' },
  { value: 'integration', label: 'Integration Support' },
];

const priorities = [
  { value: 'low', label: 'Low - General inquiry' },
  { value: 'medium', label: 'Medium - Standard issue' },
  { value: 'high', label: 'High - Affects productivity' },
  { value: 'urgent', label: 'Urgent - Critical system down' },
];

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
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-3 font-headline">Ticket Submitted Successfully!</h1>
          <div className="mb-4">
            <p className="text-lg font-medium text-green-700 dark:text-green-400">
              Ticket ID: {ticketId}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Please save this ID for future reference
            </p>
          </div>
          <p className="text-muted-foreground mb-6">
            We've received your support request and will get back to you within 24-48 hours. 
            You'll receive email updates at the provided address.
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
  const [submitError, setSubmitError] = useState('');
  const [ticketId, setTicketId] = useState('');

  const form = useForm<SupportForm>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      title: '',
      category: '',
      priority: '',
      description: '',
      name: '',
      email: '',
      phone: '',
      organization: '',
      supersetVersion: '',
      openForCall: false,
    },
  });

  const generateTicketId = useCallback((): string => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `GLM-${timestamp}-${random}`;
  }, []);

  const onSubmit = async (data: SupportForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      const newTicketId = generateTicketId();
      
      // TODO: Replace with actual Firebase submission
      console.log('Support ticket submitted:', { ...data, ticketId: newTicketId });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setTicketId(newTicketId);
      setSubmitStatus('success');
      
      // Reset form after delay
      setTimeout(() => {
        form.reset();
        setSubmitStatus('idle');
        setTicketId('');
      }, 5000);
      
      // Google Analytics event (placeholder)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          form_name: 'support',
          method: 'form_submission',
        });
      }
    } catch (error: any) {
      console.error('Support ticket submission error:', error);
      setSubmitStatus('error');
      setSubmitError(error?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedPriority = form.watch('priority');

  // Success screen
  if (submitStatus === 'success') {
    return (
      <SuccessScreen 
        ticketId={ticketId} 
        onReset={() => {
          setSubmitStatus('idle');
          setTicketId('');
        }} 
      />
    );
  }

  return (
    <PageLayout 
      title="Support Center"
      description="Submit a detailed support request. Our team typically responds within 24-48 hours."
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Support Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Response Time</h3>
                  <p className="text-muted-foreground">24-48 hours</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Urgent tickets get priority
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Support Hours</h3>
                  <p className="text-muted-foreground">24/7 via ticket system</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Phone calls for urgent issues only
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ticket Tracking</h3>
                  <p className="text-muted-foreground">Email notifications</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You'll receive a unique ticket ID
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-background p-6 rounded-2xl border shadow-feature-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Ticket Title */}
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ticket Title / Subject *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Brief summary of the issue (5-100 characters)"
                            maxLength={100}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        <div className="text-xs text-muted-foreground text-right">
                          {field.value?.length || 0}/100 characters
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Category & Priority */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category / Issue Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
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
                          <FormLabel>Priority Level *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {priorities.map((priority) => (
                                <SelectItem key={priority.value} value={priority.value}>
                                  {priority.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Issue Description */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide detailed information about the issue:&#10;- What were you trying to do?&#10;- What happened instead?&#10;- What did you expect to happen?&#10;- Steps to reproduce (if applicable)"
                            rows={8}
                            maxLength={2000}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        <div className="text-xs text-muted-foreground text-right">
                          {field.value?.length || 0}/2000 characters
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" maxLength={50} {...field} />
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
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone Number {watchedPriority === 'urgent' && '*'}
                          </FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                          {watchedPriority === 'urgent' && (
                            <FormDescription>
                              Phone number is required for urgent tickets
                            </FormDescription>
                          )}
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
                            <Input placeholder="Your company or organization" maxLength={100} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Technical Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                    <FormField
                      control={form.control}
                      name="supersetVersion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apache Superset Version *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3.1.0" {...field} />
                          </FormControl>
                          <FormMessage />
                          <FormDescription>
                            You can find this in your Superset instance settings
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="openForCall"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-2">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium">
                              Available for phone call?
                            </FormLabel>
                            <FormDescription>
                              For urgent issues only
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                      size="lg"
                      variant="shiny"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Creating Ticket...
                        </>
                      ) : (
                        <>
                          <Ticket className="w-5 h-5 mr-2" />
                          Submit Support Ticket
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
                          <p className="text-xs text-red-500 dark:text-red-500 mt-2">
                            If the problem persists, please email us directly at support@glimvia.com
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}