// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from './firebase';

// // Contact form submission
// export interface ContactFormData {
//   name: string;
//   email: string;
//   company?: string;
//   subject: string;
//   message: string;
//   inquiryType: string;
//   phone?: string;
// }

// // Local storage backup functions
// const saveToLocal = (type: 'contact' | 'support', data: any) => {
//   if (typeof window === 'undefined') return null;
  
//   try {
//     const key = `${type}_submissions`;
//     const submissions = JSON.parse(localStorage.getItem(key) || '[]');
//     const newSubmission = {
//       ...data,
//       timestamp: new Date().toISOString(),
//       id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//       savedLocally: true,
//     };
//     submissions.push(newSubmission);
//     localStorage.setItem(key, JSON.stringify(submissions));
    
//     console.log(`💾 ${type} form saved locally:`, newSubmission.id);
//     return newSubmission.id;
//   } catch (error) {
//     console.error('Local storage failed:', error);
//     return null;
//   }
// };

// export const submitContactForm = async (data: ContactFormData) => {
//   console.log('📧 Submitting contact form...');
  
//   // Try Firebase first
//   if (db) {
//     try {
//       console.log('🔥 Trying Firebase...');
//       const docRef = await addDoc(collection(db, 'contact_forms'), {
//         ...data,
//         timestamp: serverTimestamp(),
//         status: 'new',
//         userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
//         source: 'website',
//       });
      
//       console.log('✅ Contact form saved to Firebase:', docRef.id);
//       return {
//         success: true,
//         id: docRef.id,
//         method: 'firebase',
//       };
//     } catch (firebaseError) {
//       console.error('❌ Firebase submission failed:', firebaseError);
      
//       // Fall back to local storage
//       const localId = saveToLocal('contact', data);
//       if (localId) {
//         return {
//           success: true,
//           id: localId,
//           method: 'local_backup',
//           note: 'Saved locally due to server issue - we will process it manually',
//         };
//       }
//     }
//   } else {
//     console.log('🔧 Firebase not available, saving locally...');
//     const localId = saveToLocal('contact', data);
//     if (localId) {
//       return {
//         success: true,
//         id: localId,
//         method: 'local_only',
//         note: 'Saved locally - Firebase not configured',
//       };
//     }
//   }
  
//   // If everything fails
//   throw new Error('Unable to save form data. Please try again or contact us directly at hello@glimvia.app');
// };

// // Support ticket submission
// export interface SupportFormData {
//   title: string;
//   category: string;
//   priority: string;
//   description: string;
//   name?: string;
//   email: string;
//   phone?: string;
//   organization?: string;
//   supersetVersion: string;
//   openForCall: boolean;
// }

// export const submitSupportTicket = async (data: SupportFormData, ticketId: string) => {
//   console.log('🎫 Submitting support ticket:', ticketId);
  
//   // Try Firebase first
//   if (db) {
//     try {
//       console.log('🔥 Trying Firebase...');
//       const docRef = await addDoc(collection(db, 'support_tickets'), {
//         ...data,
//         ticketId,
//         timestamp: serverTimestamp(),
//         status: 'new',
//         userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
//         source: 'website',
//       });
      
//       console.log('✅ Support ticket saved to Firebase:', docRef.id);
//       return {
//         success: true,
//         id: docRef.id,
//         ticketId,
//         method: 'firebase',
//       };
//     } catch (firebaseError) {
//       console.error('❌ Firebase submission failed:', firebaseError);
      
//       // Fall back to local storage
//       const localId = saveToLocal('support', { ...data, ticketId });
//       if (localId) {
//         return {
//           success: true,
//           id: localId,
//           ticketId,
//           method: 'local_backup',
//           note: 'Saved locally due to server issue - we will process it manually',
//         };
//       }
//     }
//   } else {
//     console.log('🔧 Firebase not available, saving locally...');
//     const localId = saveToLocal('support', { ...data, ticketId });
//     if (localId) {
//       return {
//         success: true,
//         id: localId,
//         ticketId,
//         method: 'local_only',
//         note: 'Saved locally - Firebase not configured',
//       };
//     }
//   }
  
//   // If everything fails
//   throw new Error('Unable to save support ticket. Please try again or email us directly at support@glimvia.app');
// };

// // Generate ticket ID
// export const generateTicketId = (): string => {
//   const timestamp = Date.now();
//   const random = Math.random().toString(36).substring(2, 5).toUpperCase();
//   return `GLM-${timestamp}-${random}`;
// };

// // Helper function to retrieve locally saved submissions (for debugging)
// export const getLocalSubmissions = () => {
//   if (typeof window === 'undefined') return { contact: [], support: [] };
  
//   return {
//     contact: JSON.parse(localStorage.getItem('contact_submissions') || '[]'),
//     support: JSON.parse(localStorage.getItem('support_submissions') || '[]'),
//   };
// };

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

// Local storage backup functions
const saveToLocal = (type: 'contact' | 'support', data: any) => {
  if (typeof window === 'undefined') return null;
  
  try {
    const key = `${type}_submissions`;
    const submissions = JSON.parse(localStorage.getItem(key) || '[]');
    const newSubmission = {
      ...data,
      timestamp: new Date().toISOString(),
      id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      savedLocally: true,
    };
    submissions.push(newSubmission);
    localStorage.setItem(key, JSON.stringify(submissions));
    
    console.log(`💾 ${type} form saved locally:`, newSubmission.id);
    return newSubmission.id;
  } catch (error) {
    console.error('Local storage failed:', error);
    return null;
  }
};

export const submitContactForm = async (data: ContactFormData) => {
  console.log('📧 Submitting contact form...');
  
  // Try Firebase first
  if (db) {
    try {
      console.log('🔥 Trying Firebase...');
      const docRef = await addDoc(collection(db, 'contact_forms'), {
        ...data,
        timestamp: serverTimestamp(),
        status: 'new',
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
        source: 'website',
      });
      
      console.log('✅ Contact form saved to Firebase:', docRef.id);
      return {
        success: true,
        id: docRef.id,
        method: 'firebase',
      };
    } catch (firebaseError) {
      console.error('❌ Firebase submission failed:', firebaseError);
      
      // Fall back to local storage
      const localId = saveToLocal('contact', data);
      if (localId) {
        return {
          success: true,
          id: localId,
          method: 'local_backup',
          note: 'Saved locally due to server issue - we will process it manually',
        };
      }
    }
  } else {
    console.log('🔧 Firebase not available, saving locally...');
    const localId = saveToLocal('contact', data);
    if (localId) {
      return {
        success: true,
        id: localId,
        method: 'local_only',
        note: 'Saved locally - Firebase not configured',
      };
    }
  }
  
  // If everything fails
  throw new Error('Unable to save form data. Please try again.');
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
  console.log('🎫 Submitting support ticket:', ticketId);
  
  // Try Firebase first
  if (db) {
    try {
      console.log('🔥 Trying Firebase...');
      const docRef = await addDoc(collection(db, 'support_tickets'), {
        ...data,
        ticketId,
        timestamp: serverTimestamp(),
        status: 'new',
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
        source: 'website',
      });
      
      console.log('✅ Support ticket saved to Firebase:', docRef.id);
      return {
        success: true,
        id: docRef.id,
        ticketId,
        method: 'firebase',
      };
    } catch (firebaseError) {
      console.error('❌ Firebase submission failed:', firebaseError);
      
      // Fall back to local storage
      const localId = saveToLocal('support', { ...data, ticketId });
      if (localId) {
        return {
          success: true,
          id: localId,
          ticketId,
          method: 'local_backup',
          note: 'Saved locally due to server issue - we will process it manually',
        };
      }
    }
  } else {
    console.log('🔧 Firebase not available, saving locally...');
    const localId = saveToLocal('support', { ...data, ticketId });
    if (localId) {
      return {
        success: true,
        id: localId,
        ticketId,
        method: 'local_only',
        note: 'Saved locally - Firebase not configured',
      };
    }
  }
  
  // If everything fails
  throw new Error('Unable to save support ticket. Please try again.');
};

// Generate ticket ID
export const generateTicketId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `GLM-${timestamp}-${random}`;
};

// Helper function to retrieve locally saved submissions (for debugging)
export const getLocalSubmissions = () => {
  if (typeof window === 'undefined') return { contact: [], support: [] };
  
  return {
    contact: JSON.parse(localStorage.getItem('contact_submissions') || '[]'),
    support: JSON.parse(localStorage.getItem('support_submissions') || '[]'),
  };
};