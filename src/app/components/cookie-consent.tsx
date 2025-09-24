"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('glimvia-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        // Initialize analytics/marketing based on preferences
        initializeTracking(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const initializeTracking = (prefs: CookiePreferences) => {
    // Initialize Google Analytics if enabled
    if (prefs.analytics && typeof window !== 'undefined') {
      // Enable GA4 tracking
      (window as any).gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    localStorage.setItem('glimvia-cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('glimvia-cookie-consent-date', new Date().toISOString());
    
    setPreferences(allAccepted);
    initializeTracking(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('glimvia-cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('glimvia-cookie-consent-date', new Date().toISOString());
    
    initializeTracking(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true, // Always required
      analytics: false,
      marketing: false,
    };
    
    localStorage.setItem('glimvia-cookie-consent', JSON.stringify(rejected));
    localStorage.setItem('glimvia-cookie-consent-date', new Date().toISOString());
    
    setPreferences(rejected);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="mx-auto max-w-7xl">
          <div className="bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-4">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more about our privacy practices.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleAcceptAll}
                    className="sm:order-2"
                    variant="default"
                  >
                    Accept All Cookies
                  </Button>
                  
                  <Button 
                    onClick={handleRejectAll}
                    variant="outline"
                    className="sm:order-3"
                  >
                    Reject All
                  </Button>
                  
                  <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="sm:order-1">
                        <Settings className="h-4 w-4 mr-2" />
                        Customize
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Cookie Preferences</DialogTitle>
                        <DialogDescription>
                          Choose which cookies you want to accept. You can change these settings at any time.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-4">
                        <div className="space-y-4">
                          {/* Necessary Cookies */}
                          <div className="flex items-start space-x-3">
                            <Checkbox 
                              checked={true} 
                              disabled={true}
                              className="mt-1"
                            />
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium">Necessary Cookies</h4>
                              <p className="text-sm text-muted-foreground">
                                Essential for the website to function properly. These cannot be disabled.
                              </p>
                            </div>
                          </div>
                          
                          {/* Analytics Cookies */}
                          <div className="flex items-start space-x-3">
                            <Checkbox 
                              checked={preferences.analytics}
                              onCheckedChange={(checked) => 
                                setPreferences(prev => ({ ...prev, analytics: !!checked }))
                              }
                              className="mt-1"
                            />
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium">Analytics Cookies</h4>
                              <p className="text-sm text-muted-foreground">
                                Help us understand how visitors interact with our website by collecting anonymous information.
                              </p>
                            </div>
                          </div>
                          
                          {/* Marketing Cookies */}
                          <div className="flex items-start space-x-3">
                            <Checkbox 
                              checked={preferences.marketing}
                              onCheckedChange={(checked) => 
                                setPreferences(prev => ({ ...prev, marketing: !!checked }))
                              }
                              className="mt-1"
                            />
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium">Marketing Cookies</h4>
                              <p className="text-sm text-muted-foreground">
                                Used to track visitors across websites to display relevant advertisements.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="outline" 
                            onClick={() => setShowPreferences(false)}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleAcceptSelected}>
                            Save Preferences
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Read our{' '}
                  <a href="/privacy" className="underline hover:text-foreground">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="underline hover:text-foreground">
                    Terms & Conditions
                  </a>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}