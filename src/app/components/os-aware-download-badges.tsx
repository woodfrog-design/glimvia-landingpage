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

  if (isMobile) {
    if (detectedOS === 'ios') {
      return (
        <div className="flex flex-col items-center gap-3">
          <AppleStoreBadge href={iosHref} disabled={false} />
          <>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Now available on the App Store</strong>
            </motion.p>
            <Link 
              href={androidHref} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Also available on Google Play
            </Link>
          </>
        </div>
      );
    }
    
    if (detectedOS === 'android') {
      return (
        <div className="flex flex-col items-center gap-3">
          <GooglePlayBadge href={androidHref} disabled={false} />
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
              href={iosHref} 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Also available on the App Store
            </Link>
          </>
        </div>
      );
    }
    
    // Mobile but OS unknown
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-3">
          <AppleStoreBadge href={iosHref} disabled={false} />
          <GooglePlayBadge href={androidHref} disabled={false} />
        </div>
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <strong>Download for iOS and Android</strong>
        </motion.p>
      </div>
    );
  }

  // Desktop
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <AppleStoreBadge href={iosHref} disabled={false} />
        <GooglePlayBadge href={androidHref} disabled={false} />
      </div>
      
      <motion.p 
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <strong>Download for iOS and Android</strong>
      </motion.p>
    </div>
  );
}