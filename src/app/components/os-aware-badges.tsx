"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { OSBadge } from './os-badge';
import { useIsMobile } from '@/hooks/use-mobile'; // We'll use your existing hook

type OS = 'ios' | 'android';

function getMobileOS(): OS | 'unknown' {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(userAgent)) return 'android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return 'ios';
  return 'unknown';
}

export function OsAwareBadges() {
  const isMobile = useIsMobile();
  const [detectedOS, setDetectedOS] = useState<OS | 'unknown'>('unknown');

  useEffect(() => {
    setDetectedOS(getMobileOS());
  }, []);

  if (isMobile) {
    if (detectedOS === 'ios') {
      return (
        <div className="flex flex-col items-center gap-2">
          <OSBadge os="ios" storeUrl="#" />
          <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Also available on Google Play
          </Link>
        </div>
      );
    }
    if (detectedOS === 'android') {
      return (
        <div className="flex flex-col items-center gap-2">
          <OSBadge os="android" storeUrl="#" />
          <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Also available on the App Store
          </Link>
        </div>
      );
    }
  }

  // Default for desktop or if OS detection fails
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <div className="w-[150px] h-12 flex items-center justify-center"><OSBadge os="ios" storeUrl="#" /></div>
      <div className="w-[150px] h-12 flex items-center justify-center"><OSBadge os="android" storeUrl="#" /></div>
    </div>
  );
}