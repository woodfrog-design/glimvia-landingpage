"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function LaunchBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const liveAndroidUrl = "https://play.google.com/store/apps/details?id=tech.woodfrog.glimvia&pcampaignid=web_share";

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-50 w-full bg-gradient-to-r from-primary via-teal to-accent p-2 text-center text-sm font-medium text-primary-foreground overflow-hidden"
      >
        {/* Shine Animation */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] animate-shine",
            "opacity-50"
          )}
          style={{ animationDuration: '3s' }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-4">
          <PartyPopper className="h-5 w-5 flex-shrink-0" />
          <span className="text-xs sm:text-sm">
            We're live! Glimvia is now on the Google Play Store.
            <Link 
              href={liveAndroidUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-2 whitespace-nowrap underline font-bold hover:opacity-80 transition-opacity"
            >
              Get it now!
            </Link>
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-full hover:bg-black/10 absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}