"use client";

import { AnimatedSection } from '../animated-section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const featureList = [
  "Mobile-Optimized Dashboards",
  "Interactive Filtering & Drilldowns",
  "Real-Time Data Refresh",
  "Push Notifications & Alerts",
  "Seamless Authentication",
  "Multiple Superset Instance Support",
  "Favorite Dashboards",
  "Low-Bandwidth Mode",
  "Regular Updates & Support",
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatedSection id="features" className="py-24 sm:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Comprehensive Feature Set
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to stay connected to your data, no matter where you are.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                {featureList.map((feature) => (
                    <motion.div 
                      key={feature} 
                      className="flex items-start gap-3 group"
                      variants={itemVariants}
                    >
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125 group-hover:text-primary group-hover:drop-shadow-[0_0_5px_hsl(var(--primary)/0.5)]" />
                        <span className="text-md text-foreground">{feature}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
