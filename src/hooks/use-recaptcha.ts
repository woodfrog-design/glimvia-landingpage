// "use client";

// import { useEffect, useState, useCallback } from 'react';

// declare global {
//   interface Window {
//     grecaptcha: any;
//   }
// }

// export function useRecaptcha() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

//   useEffect(() => {
//     if (!siteKey) {
//       console.warn('reCAPTCHA site key not found');
//       return;
//     }

//     // Check if reCAPTCHA is already loaded
//     if (window.grecaptcha) {
//       setIsLoaded(true);
//       return;
//     }

//     // Load reCAPTCHA script
//     const script = document.createElement('script');
//     script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
//     script.async = true;
//     script.defer = true;
    
//     script.onload = () => {
//       // Wait for reCAPTCHA to be ready
//       window.grecaptcha.ready(() => {
//         setIsLoaded(true);
//       });
//     };

//     script.onerror = () => {
//       console.error('Failed to load reCAPTCHA script');
//       setIsLoaded(false);
//     };

//     document.head.appendChild(script);

//     return () => {
//       // Cleanup script if component unmounts
//       const existingScript = document.querySelector(`script[src*="recaptcha"]`);
//       if (existingScript) {
//         document.head.removeChild(existingScript);
//       }
//     };
//   }, [siteKey]);

//   const executeRecaptcha = useCallback(async (action: string = 'submit'): Promise<string | null> => {
//     if (!siteKey) {
//       console.warn('reCAPTCHA site key not configured');
//       return null;
//     }

//     if (!isLoaded || !window.grecaptcha) {
//       console.warn('reCAPTCHA not loaded yet');
//       return null;
//     }

//     setIsLoading(true);

//     try {
//       const token = await window.grecaptcha.execute(siteKey, { action });
//       setIsLoading(false);
//       return token;
//     } catch (error) {
//       console.error('reCAPTCHA execution failed:', error);
//       setIsLoading(false);
//       return null;
//     }
//   }, [isLoaded, siteKey]);

//   return {
//     isLoaded,
//     isLoading,
//     executeRecaptcha,
//   };
// }