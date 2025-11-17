"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HeroOSAwareBadges } from "../hero-os-aware-badges";
import { Badge } from "@/components/ui/badge";
import { LaunchConfetti } from "../launch-confetti";

export default function Hero() {
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
      <LaunchConfetti />

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
          {/* === SHINY BADGE === */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge 
              variant="outline"
              className="relative inline-flex items-center justify-center rounded-full border-primary/30 bg-primary/10 px-6 py-2 text-base font-medium text-primary shadow-lg overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent bg-[length:200%_100%] animate-shine"
              />
              <span className="relative z-10">
                We are live on the Google Play Store and App Store! 🎉
              </span>
            </Badge>
          </motion.div>
          {/* ============================== */}

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
            className="mt-10"
            variants={itemVariants}
          >
            <HeroOSAwareBadges 
              iosHref="https://apps.apple.com/us/app/id6754613388"
              androidHref="https://play.google.com/store/apps/details?id=tech.woodfrog.glimvia&pcampaignid=web_share"
              techSpecsHref="https://glimvia.notion.site/"
            />
          </motion.div>
          
          <motion.div
            className="mt-12 text-base font-medium text-foreground"
            variants={itemVariants}
          >
            Monitor. Explore. Act. Wherever business takes you.
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}