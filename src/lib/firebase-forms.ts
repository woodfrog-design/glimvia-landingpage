import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

// Contact form submission
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: string;
  phone?: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_forms'), {
      ...data,
      timestamp: serverTimestamp(),
      status: 'new',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
    });
    
    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
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
}

export const submitSupportTicket = async (data: SupportFormData, ticketId: string) => {
  try {
    const docRef = await addDoc(collection(db, 'support_tickets'), {
      ...data,
      ticketId,
      timestamp: serverTimestamp(),
      status: 'new',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
    });
    
    return {
      success: true,
      id: docRef.id,
      ticketId,
    };
  } catch (error) {
    console.error('Support ticket submission error:', error);
    throw new Error('Failed to submit support ticket. Please try again.');
  }
};

// Generate ticket ID
export const generateTicketId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `GLM-${timestamp}-${random}`;
};