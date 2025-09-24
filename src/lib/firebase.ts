import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD_4K4fPdHncN1LnkdhnCBLqE44GH-HwIo",
  authDomain: "glimvia-wb.firebaseapp.com",
  projectId: "glimvia-wb",
  storageBucket: "glimvia-wb.firebasestorage.app",
  messagingSenderId: "107256681073",
  appId: "1:107256681073:web:57715a526ac96cd8056056",
  measurementId: "G-RG4BZEQ11Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser)
export const analytics = null;

export default app;

// Temporary test - remove after testing
export const testFirebaseConnection = async () => {
  try {
    const { collection, addDoc } = await import('firebase/firestore');
    const testDoc = await addDoc(collection(db, 'test'), {
      message: 'Firebase connection working',
      timestamp: new Date()
    });
    console.log('Firebase test successful:', testDoc.id);
    return true;
  } catch (error) {
    console.error('Firebase test failed:', error);
    return false;
  }
};