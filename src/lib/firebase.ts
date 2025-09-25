// import { initializeApp, getApps } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAnalytics, isSupported } from 'firebase/analytics';

// // Your web app's Firebase configuration
// // These values are now being pulled from environment variables
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// // We check if apps are already initialized to prevent errors during hot-reloads in development.
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// // Initialize Firestore
// export const db = getFirestore(app);

// // Initialize Analytics (only in the browser)
// export const analytics = typeof window !== 'undefined' 
//   ? isSupported().then(yes => yes ? getAnalytics(app) : null)
//   : null;

// export default app;

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Minimal Firebase configuration - only what we absolutely need
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase app and Firestore only
let app: any = null;
let db: any = null;

try {
  console.log('🔥 Initializing Firebase...');
  
  // Check if we have the minimum required config
  if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
    throw new Error('Missing required Firebase configuration');
  }
  
  // Initialize Firebase app
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  
  // Initialize Firestore only (no analytics, no other services)
  db = getFirestore(app);
  
  console.log('✅ Firebase and Firestore initialized successfully');
  console.log('📊 Project ID:', firebaseConfig.projectId);
  
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  console.log('📝 Forms will save locally instead');
  
  // Don't throw - let the app continue without Firebase
  app = null;
  db = null;
}

// Export only what we need
export { db };
export default app;