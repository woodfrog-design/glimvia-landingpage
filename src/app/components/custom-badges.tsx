"use client";

import Link from 'next/link';
import { Apple, Play, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

type BadgeProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

// Base badge component with consistent styling
function CustomBadge({ href, className, children }: BadgeProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 px-6 py-4 min-w-[200px] h-14",
        "bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200",
        "hover:scale-105 hover:shadow-lg border border-gray-700",
        "text-sm font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
}

// App Store Badge
export function AppStoreBadge({ href = "#" }: { href?: string }) {
  return (
    <CustomBadge href={href}>
      <Apple className="w-6 h-6" />
      <div className="text-left">
        <div className="text-xs text-gray-300">Download on the</div>
        <div className="text-base font-semibold">App Store</div>
      </div>
    </CustomBadge>
  );
}

// Google Play Badge
export function GooglePlayBadge({ href = "#" }: { href?: string }) {
  return (
    <CustomBadge href={href}>
      <Play className="w-6 h-6" />
      <div className="text-left">
        <div className="text-xs text-gray-300">Get it on</div>
        <div className="text-base font-semibold">Google Play</div>
      </div>
    </CustomBadge>
  );
}

// Technical Specifications Badge
export function TechSpecsBadge({ href = "#" }: { href?: string }) {
  return (
    <CustomBadge 
      href={href}
      className="bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300"
    >
      <FileText className="w-6 h-6" />
      <div className="text-left">
        <div className="text-xs text-gray-500">View</div>
        <div className="text-base font-semibold">Tech Specs</div>
      </div>
    </CustomBadge>
  );
}

// Alternative: Single line versions (more compact)
export function AppStoreBadgeCompact({ href = "#" }: { href?: string }) {
  return (
    <CustomBadge href={href} className="min-w-[180px]">
      <Apple className="w-5 h-5" />
      <span className="font-semibold">Download for iOS</span>
    </CustomBadge>
  );
}

export function GooglePlayBadgeCompact({ href = "#" }: { href?: string }) {
  return (
    <CustomBadge href={href} className="min-w-[180px]">
      <Play className="w-5 h-5" />
      <span className="font-semibold">Download for Android</span>
    </CustomBadge>
  );
}

export function TechSpecsBadgeCompact({ href = "#" }: { href?: string }) {
  return (
    <CustomBadge 
      href={href}
      className="bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300 min-w-[180px]"
    >
      <FileText className="w-5 h-5" />
      <span className="font-semibold">Technical Specs</span>
    </CustomBadge>
  );
}