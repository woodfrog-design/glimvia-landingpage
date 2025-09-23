"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { ThemedImage } from './themed-image';
import { OSBadge } from './os-badge';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Support', href: '/support' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-300',
      isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
    )}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <ThemedImage
            lightSrc="/glimvia-logo-dark.svg"
            darkSrc="/glimvia-logo-light.svg"
            alt="Glimvia Logo"
            width={100}
            height={25}
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
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
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-primary/90 hover:bg-primary text-primary-foreground font-bold transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Link href="#download">Download</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background">
                <VisuallyHidden>
                    <SheetTitle>Mobile Menu</SheetTitle>
                    <SheetDescription>A list of navigation links and actions for mobile devices.</SheetDescription>
                </VisuallyHidden>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <ThemedImage
                      lightSrc="/glimvia-logo-dark.svg"
                      darkSrc="/glimvia-logo-light.svg"
                      alt="Glimvia Logo"
                      width={100}
                      height={25}
                    />
                  </Link>
                  <ThemeToggle />
                </div>
                <nav className="mt-8 flex-1 flex-col space-y-6">
                  {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                  ))}
                </nav>
                <div
                  className="mt-auto pt-8 border-t"
                >
                  <div className="flex flex-col items-center gap-4">
                    <OSBadge os="ios" storeUrl="#" />
                    <OSBadge os="android" storeUrl="#" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
