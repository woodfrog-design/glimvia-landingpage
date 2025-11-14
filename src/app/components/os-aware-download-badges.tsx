// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { AppleStoreBadge, GooglePlayBadge } from './exact-badges';
// import { useIsMobile } from '@/hooks/use-mobile';

// type OS = 'ios' | 'android' | 'unknown';

// function getMobileOS(): OS {
//   if (typeof window === 'undefined') return 'unknown';
//   const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
//   if (/android/i.test(userAgent)) return 'android';
//   if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return 'ios';
//   return 'unknown';
// }

// export function OSAwareDownloadBadges({ 
//   showComingSoon = true,
//   disabled = true,
//   iosHref = "#",
//   androidHref = "#"
// }: {
//   showComingSoon?: boolean;
//   disabled?: boolean;
//   iosHref?: string;
//   androidHref?: string;
// }) {
//   const isMobile = useIsMobile();
//   const [detectedOS, setDetectedOS] = useState<OS>('unknown');

//   useEffect(() => {
//     setDetectedOS(getMobileOS());
//   }, []);

//   if (isMobile) {
//     // Mobile: Show only the appropriate badge for the detected OS
//     if (detectedOS === 'ios') {
//       return (
//         <div className="flex flex-col items-center gap-3">
//           <AppleStoreBadge href={iosHref} disabled={disabled} />
//           {showComingSoon && disabled && (
//             <>
//               <motion.p 
//                 className="text-sm text-muted-foreground"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 Coming soon to the App Store
//               </motion.p>
//               <Link 
//                 href={androidHref} 
//                 className="text-xs text-muted-foreground hover:text-primary transition-colors"
//               >
//                 Also available on Google Play
//               </Link>
//             </>
//           )}
//         </div>
//       );
//     }
    
//     if (detectedOS === 'android') {
//       return (
//         <div className="flex flex-col items-center gap-3">
//           <GooglePlayBadge href={androidHref} disabled={disabled} />
//           {showComingSoon && disabled && (
//             <>
//               <motion.p 
//                 className="text-sm text-muted-foreground"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 Coming soon to Google Play
//               </motion.p>
//               <Link 
//                 href={iosHref} 
//                 className="text-xs text-muted-foreground hover:text-primary transition-colors"
//               >
//                 Also available on the App Store
//               </Link>
//             </>
//           )}
//         </div>
//       );
//     }
    
//     // Mobile but OS unknown - show both stacked
//     return (
//       <div className="flex flex-col items-center gap-4">
//         <div className="flex flex-col gap-3">
//           <AppleStoreBadge href={iosHref} disabled={disabled} />
//           <GooglePlayBadge href={androidHref} disabled={disabled} />
//         </div>
//         {showComingSoon && disabled && (
//           <motion.p 
//             className="text-sm text-muted-foreground"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Coming soon to iOS and Android
//           </motion.p>
//         )}
//       </div>
//     );
//   }

//   // Desktop: Always show both badges side by side
//   return (
//     <div className="flex flex-col items-center gap-4">
//       <div className="flex flex-row items-center justify-center gap-4">
//         <AppleStoreBadge href={iosHref} disabled={disabled} />
//         <GooglePlayBadge href={androidHref} disabled={disabled} />
//       </div>
      
//       {showComingSoon && disabled && (
//         <motion.p 
//           className="text-sm text-muted-foreground"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           Coming soon to iOS and Android
//         </motion.p>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AppleStoreBadge, GooglePlayBadge } from './exact-badges';
import { useIsMobile } from '@/hooks/use-mobile';

type OS = 'ios' | 'android' | 'unknown';

function getMobileOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(userAgent)) return 'android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return 'ios';
  return 'unknown';
}

export function OSAwareDownloadBadges({ 
  iosHref = "#",
  androidHref = "#"
}: {
  iosHref?: string;
  androidHref?: string;
}) {
  const isMobile = useIsMobile();
  const [detectedOS, setDetectedOS] = useState<OS>('unknown');

  useEffect(() => {
    setDetectedOS(getMobileOS());
  }, []);

  const liveAndroidUrl = "https://play.google.com/store/apps/details?id=tech.woodfrog.glimvia&pcampaignid=web_share";
  const comingSoonIosUrl = "#download"; // Or iosHref

  if (isMobile) {
    // Mobile: Show only the appropriate badge for the detected OS
    if (detectedOS === 'ios') {
      return (
        <div className="flex flex-col items-center gap-3">
          <AppleStoreBadge href={comingSoonIosUrl} disabled={true} />
          <>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Coming soon to the App Store
            </motion.p>
            <Link 
              href={liveAndroidUrl} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <strong>Now available on Google Play</strong>
            </Link>
          </>
        </div>
      );
    }
    
    if (detectedOS === 'android') {
      return (
        <div className="flex flex-col items-center gap-3">
          <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
          <>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Now available on Google Play</strong>
            </motion.p>
            <Link 
              href={comingSoonIosUrl} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Coming soon to the App Store
            </Link>
          </>
        </div>
      );
    }
    
    // Mobile but OS unknown - show both stacked
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-3">
          <AppleStoreBadge href={comingSoonIosUrl} disabled={true} />
          <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
        </div>
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <strong>Now on Google Play</strong> / Coming soon to iOS
        </motion.p>
      </div>
    );
  }

  // Desktop: Always show both badges side by side
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <AppleStoreBadge href={comingSoonIosUrl} disabled={true} />
        <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
      </div>
      
      <motion.p 
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <strong>Now on Google Play</strong> / Coming soon to the App Store
      </motion.p>
    </div>
  );
}