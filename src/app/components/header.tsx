"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { OSAwareButton } from './os-badge'; // Removed OSBadge
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { AppleStoreBadge, GooglePlayBadge } from './exact-badges'; // <-- Import new badges

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Support', href: '/support-ticket' },
];

// Helper function to get the mobile OS
function getMobileOS(): 'ios' | 'android' | 'unknown' {
    if (typeof window === 'undefined') return 'unknown';
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) return 'android';
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return 'ios';
    return 'unknown';
}

// Custom hook to detect scroll direction
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollDirection;
}

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const [detectedOS, setDetectedOS] = useState<'ios' | 'android' | 'unknown'>('unknown');

  const liveAndroidUrl = "https://play.google.com/store/apps/details?id=tech.woodfrog.glimvia&pcampaignid=web_share";
  const comingSoonIosUrl = "#download";

  useEffect(() => {
    setDetectedOS(getMobileOS());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Logo />
        </div>
        <nav className="hidden md:flex md:gap-8 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex flex-1 justify-end">
          <ThemeToggle />
          <OSAwareButton 
            iosUrl={comingSoonIosUrl} 
            androidUrl={liveAndroidUrl} 
            variant="shiny" 
            size="lg"
          >
            <Download />
            Download
          </OSAwareButton>
        </div>
        <div className="flex items-center md:hidden ml-auto">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <VisuallyHidden>
                  <SheetTitle>Mobile Menu</SheetTitle>
                  <SheetDescription>Navigation links for mobile</SheetDescription>
                </VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-full w-full p-0">
              <div className="flex h-full flex-col bg-background p-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <Logo />
                </div>
                <div className="flex flex-1 flex-col justify-start pt-8">
                  <nav className="flex flex-col items-center text-center space-y-4">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md py-3 px-4 text-xl font-medium text-foreground transition-colors hover:bg-accent"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex flex-col items-center gap-8 mt-12"
                  >
                    <ThemeToggle />
                    
                    {/* === UPDATED DEVICE-AWARE BADGE LOGIC === */}
                    <div className="flex flex-col items-center gap-4">
                      {detectedOS === 'ios' && (
                        <div className="flex flex-col items-center gap-3">
                          <AppleStoreBadge href={comingSoonIosUrl} disabled={true} />
                          <p className="text-sm text-muted-foreground">
                            Coming soon to the App Store
                          </p>
                          <Link href={liveAndroidUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                            <strong>Now available on Google Play</strong>
                          </Link>
                        </div>
                      )}
                      
                      {detectedOS === 'android' && (
                        <div className="flex flex-col items-center gap-3">
                          <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
                          <p className="text-sm text-muted-foreground">
                            <strong>Now available on Google Play</strong>
                          </p>
                          <Link href={comingSoonIosUrl} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                            Coming soon to the App Store
                          </Link>
                        </div>
                      )}

                      {detectedOS === 'unknown' && (
                        <div className="flex flex-col items-center gap-3">
                          <AppleStoreBadge href={comingSoonIosUrl} disabled={true} />
                          <GooglePlayBadge href={liveAndroidUrl} disabled={false} />
                          <p className="text-sm text-muted-foreground text-center">
                            <strong>Now on Google Play</strong> / Coming soon to iOS
                          </p>
                        </div>
                      )}
                    </div>
                    {/* ======================================= */}
                    
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}