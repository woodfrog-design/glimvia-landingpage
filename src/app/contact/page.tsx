// "use client";

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { CheckCircle, AlertCircle, Loader2, Send, Mail, MessageSquare, Building } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import PageLayout from '@/app/components/page-layout';
// import { motion } from 'framer-motion';
// import { submitContactForm, type ContactFormData } from '@/lib/firebase-forms';

// // Regex for basic phone validation
// const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

// // Form validation schema with Sanity Checks
// const contactSchema = z.object({
//   name: z.string().trim().min(2, 'Name must be at least 2 characters'),
//   email: z.string().trim().toLowerCase().email('Please enter a valid email address'),
//   company: z.string().trim().optional(),
//   subject: z.string().trim()
//     .min(5, 'Subject must be at least 5 characters')
//     .refine(val => !/^test$/i.test(val), "Please enter a real subject"),
//   message: z.string().trim()
//     .min(20, 'Message must be at least 20 characters')
//     .refine(val => !/^asdf/i.test(val), "Please enter a valid message"),
//   inquiryType: z.string().min(1, 'Please select an inquiry type'),
//   phone: z.string().trim()
//     .optional()
//     .or(z.literal(''))
//     .refine((val) => !val || phoneRegex.test(val), 'Please enter a valid phone number'),
  
//   // Honeypot field (should remain empty)
//   website_url: z.string().optional(),
// });

// type ContactForm = z.infer<typeof contactSchema>;

// const inquiryTypes = [
//   { value: 'general', label: 'General Inquiry' },
//   { value: 'partnership', label: 'Partnership' },
//   { value: 'press', label: 'Press & Media' },
//   { value: 'feedback', label: 'Product Feedback' },
//   { value: 'business', label: 'Business Development' },
// ];

// // Success Screen Component
// function SuccessScreen({ onReset }: { onReset: () => void }) {
//   return (
//     <PageLayout showAnimatedSection={false}>
//       <div className="flex items-center justify-center min-h-[50vh]">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="max-w-md w-full text-center bg-background p-8 rounded-2xl border shadow-feature-card"
//         >
//           <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
//             <CheckCircle className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-2xl font-bold mb-3 font-headline">Message Sent Successfully!</h1>
//           <p className="text-muted-foreground mb-6">
//             Thank you for reaching out! We've received your message and will get back to you within 24 hours.
//           </p>
//           <Button onClick={onReset} className="w-full" variant="default">
//             Send Another Message
//           </Button>
//         </motion.div>
//       </div>
//     </PageLayout>
//   );
// }

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [submitError, setSubmitError] = useState('');

//   const form = useForm<ContactForm>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       company: '',
//       subject: '',
//       message: '',
//       inquiryType: '',
//       phone: '',
//       website_url: '', // Init honeypot
//     },
//   });

//   const onSubmit = async (data: ContactForm) => {
//     // 1. Honeypot Check
//     if (data.website_url) {
//       setSubmitStatus('success'); // Fake success
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('idle');
//     setSubmitError('');

//     try {
//       // Remove honeypot from data
//       const { website_url, ...cleanData } = data;

//       // 1. Submit to Firebase
//       const result = await submitContactForm(cleanData as ContactFormData);
      
//       if (result.success) {
//         // 2. Trigger Email Notification
//         fetch('/api/notify', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(cleanData),
//         }).catch(err => console.error('Failed to send notification:', err));

//         setSubmitStatus('success');
        
//         // Reset form after delay
//         setTimeout(() => {
//           form.reset();
//           setSubmitStatus('idle');
//         }, 5000);
        
//         // Google Analytics event
//         if (typeof window !== 'undefined' && (window as any).gtag) {
//           (window as any).gtag('event', 'generate_lead', {
//             form_name: 'contact',
//             method: 'form_submission',
//           });
//         }
//       }
//     } catch (error: any) {
//       console.error('Contact form submission error:', error);
//       setSubmitStatus('error');
//       setSubmitError(error?.message || 'Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Success screen
//   if (submitStatus === 'success') {
//     return (
//       <SuccessScreen 
//         onReset={() => {
//           setSubmitStatus('idle');
//         }} 
//       />
//     );
//   }

//   return (
//     <PageLayout 
//       title="Contact Us"
//       description="Have questions about Glimvia? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
//     >
//       <div className="mx-auto max-w-2xl lg:max-w-none">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Contact Info */}
//           <div className="lg:col-span-1">
//             <div className="space-y-8">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Email</h3>
//                   <p className="text-muted-foreground">hello@glimvia.app</p>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     We'll respond within 24 hours
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
//                   <MessageSquare className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Support</h3>
//                   <p className="text-muted-foreground">For technical issues</p>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     Visit our support center for faster help
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
//                   <Building className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">Partnership</h3>
//                   <p className="text-muted-foreground">Business opportunities</p>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     Let's explore working together
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-background p-6 rounded-2xl border shadow-feature-card">
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
//                   {/* HONEYPOT FIELD (Hidden) */}
//                   <div className="hidden" aria-hidden="true">
//                     <Input 
//                       tabIndex={-1}
//                       autoComplete="off"
//                       {...form.register("website_url")} 
//                       placeholder="Do not fill this out"
//                     />
//                   </div>

//                   {/* Name & Email */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <FormField
//                       control={form.control}
//                       name="name"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Full Name *</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Your full name" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Email Address *</FormLabel>
//                           <FormControl>
//                             <Input type="email" placeholder="your.email@example.com" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </div>

//                   {/* Company & Phone */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <FormField
//                       control={form.control}
//                       name="company"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Company</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Your company name" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="phone"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Phone Number</FormLabel>
//                           <FormControl>
//                             <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </div>

//                   {/* Inquiry Type & Subject */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <FormField
//                       control={form.control}
//                       name="inquiryType"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Inquiry Type *</FormLabel>
//                           <Select onValueChange={field.onChange} defaultValue={field.value}>
//                             <FormControl>
//                               <SelectTrigger>
//                                 <SelectValue placeholder="Select inquiry type" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               {inquiryTypes.map((type) => (
//                                 <SelectItem key={type.value} value={type.value}>
//                                   {type.label}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="subject"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Subject *</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Brief subject of your message" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </div>

//                   {/* Message */}
//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message *</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             placeholder="Tell us more about your inquiry. What would you like to discuss?"
//                             rows={6}
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Submit Button */}
//                   <div className="pt-4">
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full sm:w-auto"
//                       size="lg"
//                       variant="shiny"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="w-5 h-5 animate-spin mr-2" />
//                           Sending Message...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5 mr-2" />
//                           Send Message
//                         </>
//                       )}
//                     </Button>

//                     {submitStatus === 'error' && (
//                       <div className="mt-4 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
//                         <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-red-700 dark:text-red-300">
//                             Submission Failed
//                           </p>
//                           <p className="text-sm text-red-600 dark:text-red-400 mt-1">{submitError}</p>
//                           <p className="text-xs text-red-500 dark:text-red-500 mt-2">
//                             If the problem persists, please email us directly at hello@glimvia.app
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </form>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }


"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Loader2, Send, Mail, MessageSquare, Building, Shield } from 'lucide-react';
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
} from '@/components/ui/form';
import PageLayout from '@/app/components/page-layout';
import { motion } from 'framer-motion';
import { submitContactForm, type ContactFormData } from '@/lib/firebase-forms';

// Regex for basic phone validation
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

// Improved Validation Schema with Sanity Checks
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address'),
  company: z.string().trim().optional(),
  subject: z.string().trim()
    .min(5, 'Subject must be at least 5 characters')
    .refine(val => !/^test$/i.test(val), "Please enter a real subject"),
  message: z.string().trim()
    .min(20, 'Message must be at least 20 characters')
    .refine(val => !/^asdf/i.test(val), "Please enter a valid message"),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  phone: z.string().trim()
    .optional()
    .or(z.literal(''))
    .refine((val) => !val || phoneRegex.test(val), 'Please enter a valid phone number'),
  
  // Honeypot field (should remain empty)
  website_url: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'press', label: 'Press & Media' },
  { value: 'feedback', label: 'Product Feedback' },
  { value: 'business', label: 'Business Development' },
];

// Success Screen Component
function SuccessScreen({ onReset }: { onReset: () => void }) {
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
          <h1 className="text-2xl font-bold mb-3 font-headline">Message Sent Successfully!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out! We've received your message and will get back to you within 24 hours.
          </p>
          <Button onClick={onReset} className="w-full" variant="default">
            Send Another Message
          </Button>
        </motion.div>
      </div>
    </PageLayout>
  );
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      inquiryType: '',
      phone: '',
      website_url: '', // Init honeypot
    },
  });

  const onSubmit = async (data: ContactForm) => {
    // 1. Honeypot Check
    if (data.website_url) {
      setSubmitStatus('success'); // Fake success
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      // Remove honeypot from data
      const { website_url, ...cleanData } = data;

      // 1. Submit to Firebase
      const result = await submitContactForm(cleanData as ContactFormData);
      
      if (result.success) {
        // 2. Trigger Email Notification
        fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cleanData),
        }).catch(err => console.error('Failed to send notification:', err));

        setSubmitStatus('success');
        
        // Reset form after delay
        setTimeout(() => {
          form.reset();
          setSubmitStatus('idle');
        }, 5000);
        
        // Google Analytics event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            form_name: 'contact',
            method: 'form_submission',
          });
        }
      }
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setSubmitError(error?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (submitStatus === 'success') {
    return (
      <SuccessScreen 
        onReset={() => {
          setSubmitStatus('idle');
        }} 
      />
    );
  }

  return (
    <PageLayout 
      title="Contact Us"
      description="Have questions about Glimvia? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Message Us</h3>
                  <p className="text-muted-foreground">Fill out the form</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Support</h3>
                  <p className="text-muted-foreground">For technical issues</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visit our support center for faster help
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Partnership</h3>
                  <p className="text-muted-foreground">Business opportunities</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Let's explore working together
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-background p-6 rounded-2xl border shadow-feature-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* HONEYPOT FIELD (Hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <Input 
                      tabIndex={-1}
                      autoComplete="off"
                      {...form.register("website_url")} 
                      placeholder="Do not fill this out"
                    />
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
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

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
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
                            <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Inquiry Type & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="Brief subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry. What would you like to discuss?"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Security Note */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure SSL submission. Your data is protected.</span>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto" size="lg" variant="shiny">
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 animate-spin mr-2" />Sending...</>
                      ) : (
                        <><Send className="w-5 h-5 mr-2" />Send Message</>
                      )}
                    </Button>
                    {submitStatus === 'error' && (
                      <div className="mt-4 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-700 dark:text-red-300">Submission Failed</p>
                          <p className="text-sm text-red-600 dark:text-red-400 mt-1">{submitError}</p>
                          <p className="text-xs text-red-500 dark:text-red-500 mt-2">
                            If the problem persists, please try again later.
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