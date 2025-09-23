"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ThemedImage } from './themed-image';
import { Button, ButtonProps } from '@/components/ui/button';
import { useState, useEffect } from 'react';

type OS = 'ios' | 'android';

type OSBadgeProps = {
  os: OS;
  storeUrl: string;
  className?: string;
};

const badgeConfig = {
  ios: {
    lightSrc: "/apple-app-store-badge-black.svg",
    darkSrc: "/apple-app-store-badge-white.svg",
    alt: "Download on the App Store",
    width: 120,
    height: 40,
  },
  android: {
    src: "/google-play-badge.svg",
    alt: "Get it on Google Play",
    width: 135,
    height: 40,
  },
};

// This is a simple component that just displays a badge.
export function OSBadge({ os, storeUrl, className }: OSBadgeProps) {
  const config = badgeConfig[os];

  return (
    <Link href={storeUrl} className={`block ${className}`}>
      {'src' in config ? (
        <Image
            src={config.src}
            alt={config.alt}
            width={config.width}
            height={config.height}
            className="h-12 w-auto transition-transform hover:scale-105"
        />
      ) : (
        <ThemedImage
            lightSrc={config.lightSrc}
            darkSrc={config.darkSrc}
            alt={config.alt}
            width={config.width}
            height={config.height}
            className="h-12 w-auto transition-transform hover:scale-105"
        />
      )}
    </Link>
  );
}

// This component is now only used for the main "Download" button in the header.
type OSAwareButtonProps = {
  iosUrl: string;
  androidUrl: string;
  children: React.ReactNode;
} & ButtonProps;


export function OSAwareButton({ iosUrl, androidUrl, children, ...props }: OSAwareButtonProps) {
    const [os, setOs] = useState<OS | 'unknown'>('unknown');

    function getMobileOS(): OS | 'unknown' {
      if (typeof window === 'undefined') return 'unknown';
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      if (/android/i.test(userAgent)) return 'android';
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return 'ios';
      return 'unknown';
    }

    useEffect(() => {
        setOs(getMobileOS());
    }, []);

    const url = os === 'ios' ? iosUrl : androidUrl;

    return (
        <Button asChild {...props}>
            <Link href={url}>{children}</Link>
        </Button>
    )
}