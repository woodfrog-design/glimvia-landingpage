"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OsAwareBadges } from "../os-aware-badges"; // Import the new component
import { useIsMobile } from "@/hooks/use-mobile";

const MotionButton = motion(Button);

export default function Hero() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500, 700], [1, 0.5, 0]);
  const scale = useTransform(scrollY, [0, 700], [1, 0.85]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      className="relative h-screen min-h-[700px] flex items-start justify-center overflow-hidden text-center pt-32"
      style={{ y, opacity, scale }}
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
         <div
            className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-70 dark:opacity-50"
         />
         <motion.div
            className="absolute inset-0"
            style={{
               backgroundImage: `
                   radial-gradient(at 30% 40%, hsl(var(--teal) / 0.15), transparent 50%),
                   radial-gradient(at 70% 30%, hsl(var(--primary) / 0.1), transparent 50%),
                   radial-gradient(at 50% 80%, hsl(var(--teal) / 0.1), transparent 50%)
               `
            }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
         />
      </motion.div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl font-headline"
            variants={itemVariants}
          >
            Apache Superset on Mobile. <br />
            <span className="text-primary text-3xl sm:text-5xl lg:text-6xl font-semibold">Business Insights Anywhere.</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
            variants={itemVariants}
          >
            Your dashboards, KPIs and alerts now live in your pocket so decisions never have to wait.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <OsAwareBadges />
            <MotionButton asChild variant="outline" size="lg" className="h-12 border-primary/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9" target="_blank" rel="noopener noreferrer">Technical Specifications</Link>
            </MotionButton>
          </motion.div>
          <motion.div
            className="mt-12 text-sm text-muted-foreground"
            variants={itemVariants}
          >
            Monitor. Explore. Act. Wherever business takes you.
          </motion.div>
        </motion.div>
      </div>

    </motion.section>
  );
}
