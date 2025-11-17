"use client";

import Link from 'next/link';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

type BadgeProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'>;

// Base badge component with theme awareness and glow effects
function BaseBadge({ href, className, children, disabled = false, ...props }: BadgeProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      // Subtle shake animation for disabled state
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 200);
      return;
    }
  };

  return (
    <motion.div
      className={cn("inline-block", isPressed && disabled ? "animate-pulse" : "")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={disabled ? "#" : href}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-start gap-3 px-5 py-3 min-w-[200px] h-14",
          "bg-black dark:bg-white text-white dark:text-black rounded-xl transition-all duration-300",
          "border border-gray-700 dark:border-gray-300",
          "text-sm font-medium overflow-hidden relative group",
          // Hover glow effect
          "hover:shadow-[0_0_30px_rgba(20,152,204,0.4)] dark:hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]",
          "hover:border-primary dark:hover:border-teal",
          disabled && "opacity-70 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex items-center gap-3">
          {children}
        </div>
        
        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-xl opacity-0"
          animate={isPressed ? { opacity: [0, 0.3, 0], scale: [0.8, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
}

// Apple App Store Badge with exact Apple logo
export function AppleStoreBadge({ href = "#", disabled = false }: { href?: string; disabled?: boolean }) {
  return (
    <BaseBadge href={href} disabled={disabled}>
      {/* Exact Apple Logo SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="flex-shrink-0"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-75">Download on the</div>
        <div className="text-base font-semibold leading-tight">App Store</div>
      </div>
    </BaseBadge>
  );
}

// Google Play Badge with exact Google Play icon
export function GooglePlayBadge({ href = "#", disabled = false }: { href?: string; disabled?: boolean }) {
  return (
    <BaseBadge href={href} disabled={disabled}>
      {/* Exact Google Play Logo SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="flex-shrink-0"
      >
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-75">Get it on</div>
        <div className="text-base font-semibold leading-tight">Google Play</div>
      </div>
    </BaseBadge>
  );
}

// Technical Specs Badge with theme-aware styling
export function TechSpecsBadge({ href = "#" }: { href?: string }) {
  return (
    <BaseBadge 
      href={href}
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:shadow-[0_0_30px_rgba(107,114,128,0.3)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FileText className="w-6 h-6 flex-shrink-0" />
      <div className="text-left">
        <div className="text-xs opacity-75">View</div>
        <div className="text-base font-semibold leading-tight">Tech Specs</div>
      </div>
    </BaseBadge>
  );
}

// Container component with "Coming Soon" text
export function DownloadBadges({ 
  showComingSoon = false,
  iosHref = "#",
  androidHref = "#",
  techSpecsHref = "#",
  disabled = false
}: {
  showComingSoon?: boolean;
  iosHref?: string;
  androidHref?: string;
  techSpecsHref?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <AppleStoreBadge href={iosHref} disabled={disabled} />
        <GooglePlayBadge href={androidHref} disabled={disabled} />
        <TechSpecsBadge href={techSpecsHref} />
      </div>
      
      {showComingSoon && disabled && (
        <motion.p 
          className="text-sm text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Coming soon to iOS and Android
        </motion.p>
      )}
    </div>
  );
}

// Alternative: Compact horizontal layout for mobile
export function DownloadBadgesCompact({ 
  showComingSoon = false,
  disabled = false 
}: {
  showComingSoon?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-row gap-3">
        <AppleStoreBadge href="#" disabled={disabled} />
        <GooglePlayBadge href="#" disabled={disabled} />
      </div>
      <TechSpecsBadge href="https://glimvia.notion.site/" />
      
      {showComingSoon && disabled && (
        <motion.p 
          className="text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Coming soon to app stores
        </motion.p>
      )}
    </div>
  );
}