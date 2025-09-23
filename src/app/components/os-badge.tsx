
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemedImage } from './themed-image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type OS = 'ios' | 'android';

type OSBadgeProps = {
  os: OS;
  storeUrl: string;
};

const badgeConfig = {
  ios: {
    lightSrc: "/apple-app-store-badge-black.svg",
    darkSrc: "/apple-app-store-badge-white.svg",
    alt: "Download on the App Store",
    otherOS: "Android",
    width: 120,
    height: 40,
  },
  android: {
    src: "/google-play-badge.svg",
    alt: "Get it on Google Play",
    otherOS: "iOS",
    width: 135,
    height: 40,
  },
};

function getMobileOS(): OS | 'unknown' {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }
  return 'unknown';
}


export function OSBadge({ os, storeUrl }: OSBadgeProps) {
  const [currentOS, setCurrentOS] = useState<OS | 'unknown'>('unknown');

  useEffect(() => {
    setCurrentOS(getMobileOS());
  }, []);
  
  if (currentOS !== 'unknown' && currentOS !== os) {
      return (
        <p className="text-xs text-muted-foreground">
            Also available on {badgeConfig[os].alt.includes('App Store') ? 'the App Store' : 'Google Play'}
        </p>
      );
  }

  const config = badgeConfig[os];

  return (
    <Link href={storeUrl} className="block">
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

export function OSAwareButton({ iosUrl, androidUrl }: { iosUrl: string, androidUrl: string }) {
    const [os, setOs] = useState<OS | 'unknown'>('unknown');

    useEffect(() => {
        setOs(getMobileOS());
    }, []);

    const url = os === 'ios' ? iosUrl : androidUrl;

    return (
        <Button asChild size="lg">
            <Link href={url}>Open your data in Glimvia</Link>
        </Button>
    );
}
