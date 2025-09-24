import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

// reCAPTCHA verification function
async function verifyRecaptcha(token: string, action: string): Promise<boolean> {
  try {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, action }),
    });

    if (!response.ok) {
      throw new Error('reCAPTCHA verification failed');
    }

    const result = await response.json();
    return result.success && result.score > 0.5; // Minimum score threshold
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Contact form submission
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: string;
  phone?: string;
  recaptchaToken?: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Verify reCAPTCHA if token is provided
    if (data.recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(data.recaptchaToken, 'contact_form');
      if (!isValidRecaptcha) {
        throw new Error('reCAPTCHA verification failed. Please try again.');
      }
    }

    // Remove recaptchaToken from data before storing
    const { recaptchaToken, ...formData } = data;
    
    const docRef = await addDoc(collection(db, 'contact_forms'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
      recaptchaVerified: !!recaptchaToken,
    });
    
    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    if (error instanceof Error) {
      throw error; // Re-throw with original message
    }
    throw new Error('Failed to submit contact form. Please try again.');
  }
};

// Support ticket submission
export interface SupportFormData {
  title: string;
  category: string;
  priority: string;
  description: string;
  name?: string;
  email: string;
  phone?: string;
  organization?: string;
  supersetVersion: string;
  openForCall: boolean;
  recaptchaToken?: string;
}

export const submitSupportTicket = async (data: SupportFormData, ticketId: string) => {
  try {
    // Verify reCAPTCHA if token is provided
    if (data.recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(data.recaptchaToken, 'support_ticket');
      if (!isValidRecaptcha) {
        throw new Error('reCAPTCHA verification failed. Please try again.');
      }
    }

    // Remove recaptchaToken from data before storing
    const { recaptchaToken, ...formData } = data;
    
    const docRef = await addDoc(collection(db, 'support_tickets'), {
      ...formData,
      ticketId,
      timestamp: serverTimestamp(),
      status: 'new',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
      recaptchaVerified: !!recaptchaToken,
    });
    
    return {
      success: true,
      id: docRef.id,
      ticketId,
    };
  } catch (error) {
    console.error('Support ticket submission error:', error);
    if (error instanceof Error) {
      throw error; // Re-throw with original message
    }
    throw new Error('Failed to submit support ticket. Please try again.');
  }
};

// Generate ticket ID
export const generateTicketId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `GLM-${timestamp}-${random}`;
};