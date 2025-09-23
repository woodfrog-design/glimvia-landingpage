import Link from 'next/link';
import { ThemedImage } from './themed-image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <ThemedImage
        lightSrc="/glimvia-logo-dark.svg"
        darkSrc="/glimvia-logo-light.svg"
        alt="Glimvia Logo"
        width={24}
        height={24}
      />
      <span className="text-xl font-semibold text-foreground">
        Glimvia
      </span>
    </Link>
  );
}