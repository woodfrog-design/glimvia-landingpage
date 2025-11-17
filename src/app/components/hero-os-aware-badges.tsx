"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AppleStoreBadge, GooglePlayBadge, TechSpecsBadge } from './exact-badges';
import { useIsMobile } from '@/hooks/use-mobile';

type OS = 'ios' | 'android' | 'unknown';

function getMobileOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(userAgent)) return 'android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return 'ios';
  return 'unknown';
}

export function HeroOSAwareBadges({ 
  iosHref = "#",
  androidHref = "#",
  techSpecsHref = "#"
}: {
  iosHref?: string;
  androidHref?: string;
  techSpecsHref?: string;
}) {
  const isMobile = useIsMobile();
  const [detectedOS, setDetectedOS] = useState<OS>('unknown');

  useEffect(() => {
    setDetectedOS(getMobileOS());
  }, []);

  // We use props for URLs now
  const liveAndroidUrl = androidHref;
  const liveIosUrl = iosHref;

  if (isMobile) {
    // Mobile: Prioritize the detected OS
    if (detectedOS === 'ios') {
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
            <AppleStoreBadge href={liveIosUrl} disabled={false} />
            <TechSpecsBadge href={techSpecsHref} />
          </div>
          <div className="text-center">
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Now available on the App Store</strong>
            </motion.p>
            <Link 
              href={liveAndroidUrl} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block"
            >
              Also available on Google Play
            </Link>
          </div>
        </div>
      );
    }
    
    if (detectedOS === 'android') {
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
            <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
            <TechSpecsBadge href={techSpecsHref} />
          </div>
          <div className="text-center">
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Now available on Google Play</strong>
            </motion.p>
            <Link 
              href={liveIosUrl} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block"
            >
              Also available on the App Store
            </Link>
          </div>
        </div>
      );
    }
    
    // Mobile but OS unknown
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          <AppleStoreBadge href={liveIosUrl} disabled={false} />
          <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
          <TechSpecsBadge href={techSpecsHref} />
        </div>
        <motion.p 
          className="text-sm text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <strong>Now available on iOS and Android</strong>
        </motion.p>
      </div>
    );
  }

  // Desktop: Show all three badges
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <AppleStoreBadge href={liveIosUrl} disabled={false} />
        <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
        <TechSpecsBadge href={techSpecsHref} />
      </div>
      
      <motion.p 
        className="text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <strong>Download for iOS and Android</strong>
      </motion.p>
    </div>
  );
}