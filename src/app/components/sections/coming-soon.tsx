"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Settings, BarChart3, Bell, Tablet, Users, BotMessageSquare } from 'lucide-react';
import { AnimatedSection } from "../animated-section";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const upcomingFeatures = [
    { 
        title: "Custom Alerts", 
        description: "Get notified about what matters most, when it matters.", 
        status: "In Progress", 
        icon: Bell, 
        color: "hsl(var(--primary))" 
    },
    { 
        title: "Expanded Chart Library", 
        description: "More ways to visualize your data with new chart types.", 
        status: "In Planning", 
        icon: BarChart3, 
        color: "hsl(var(--accent))" 
    },
    { 
        title: "Smart Navigation", 
        description: "Find dashboards faster with AI-powered suggestions.", 
        status: "Next Up", 
        icon: BotMessageSquare, 
        color: "hsl(184, 100%, 34%)" 
    },
    { 
        title: "Advanced Annotation", 
        description: "Add context to your insights directly on the charts.", 
        status: "In Planning", 
        icon: Settings,
        color: "hsl(var(--accent))"
    },
    { 
        title: "Tablet-Optimized UI", 
        description: "A beautiful, native experience on larger screens.", 
        status: "Next Up", 
        icon: Tablet, 
        color: "hsl(184, 100%, 34%)" 
    },
    { 
        title: "Team Collaboration", 
        description: "Share and discuss insights with your team seamlessly.", 
        status: "In Progress", 
        icon: Users,
        color: "hsl(var(--primary))"
    },
];

const statusStyles: {[key: string]: string} = {
    "In Progress": "border-primary/50 bg-primary/10 text-primary",
    "In Planning": "border-accent/50 bg-accent/10 text-accent",
    "Next Up": "border-green-500/50 bg-green-500/10 text-green-400",
}

export default function ComingSoon() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatedSection id="coming-soon" className="py-24 sm:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Always Evolving
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're constantly working to make Glimvia more powerful. Here's a sneak peek at what's on our roadmap, inspired by the tools you love.
          </p>
        </div>
        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {upcomingFeatures.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative flex flex-col h-full rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-full bg-muted" style={{ border: `1px solid ${feature.color}` }}>
                        <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                    </div>
                    <Badge variant="outline" className={cn("text-xs", statusStyles[feature.status])}>
                        {feature.status}
                    </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
