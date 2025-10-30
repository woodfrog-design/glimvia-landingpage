"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import PageLayout from '@/app/components/page-layout';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <PageLayout showAnimatedSection={false}>
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-4 font-headline">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to your data insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="shiny">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link href="/support-ticket">
                <Search className="w-5 h-5 mr-2" />
                Get Help
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            <p>Looking for something specific?</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/support-ticket" className="hover:text-primary transition-colors">Support</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}