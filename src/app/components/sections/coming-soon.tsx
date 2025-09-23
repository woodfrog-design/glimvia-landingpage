"use client";
import { motion } from 'framer-motion';
import { Settings, BarChart3, Bell, Tablet, Users, BotMessageSquare } from 'lucide-react';
import { AnimatedSection } from "../animated-section";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '../section-header';

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
        description: "Share and discuss insights with your team directly in the app.", 
        status: "In Progress", 
        icon: Users, 
        color: "hsl(var(--primary))" 
    },
];

const statusStyles: { [key: string]: string } = {
    "In Progress": "border-primary/50 text-primary",
    "Next Up": "border-teal-500/50 text-teal-500",
    "In Planning": "border-amber-500/50 text-amber-500",
};

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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSection id="coming-soon" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="What's Next for Glimvia?"
          description="We are constantly working on new features and improvements. Here's a sneak peek at what's on our roadmap, inspired by the tools you love."
        />
        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {upcomingFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
            >
              <div className="flex flex-col h-full rounded-2xl border bg-background p-6 transition-all duration-300 shadow-feature-card hover:shadow-feature-card-hover hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                    {/* The "group" class is now on the icon's container for precise hovering */}
                    <div className="group p-2 rounded-full bg-muted transition-all duration-300 group-hover:scale-110 group-hover:[box-shadow:0_0_20px_4px_hsl(var(--teal)/0.4)]" style={{ border: `1px solid ${feature.color}` }}>
                        <feature.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-125" style={{ color: feature.color }} />
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