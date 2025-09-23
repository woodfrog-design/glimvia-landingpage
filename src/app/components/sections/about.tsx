
// "use client";

// import { Smartphone, BarChart, Zap, ShieldCheck, Star, HandHeart } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { AnimatedSection } from '../animated-section';

// const benefits = [
//   {
//     icon: <Smartphone className="h-8 w-8 text-primary" />,
//     title: 'Mobile-First Design',
//     description: 'Sleek, responsive dashboards optimized for touch.',
//   },
//   {
//     icon: <BarChart className="h-8 w-8 text-primary" />,
//     title: 'Real-Time Insights',
//     description: 'Instant updates + push notifications for timely decisions.',
//   },
//   {
//     icon: <Zap className="h-8 w-8 text-primary" />,
//     title: 'Easy Setup',
//     description: 'Connect to your Apache Superset instance securely in minutes.',
//   },
//   {
//     icon: <ShieldCheck className="h-8 w-8 text-primary" />,
//     title: 'Secure Connection',
//     description: 'Your data is safe with secure authentication and data handling.',
//   },
//   {
//     icon: <Star className="h-8 w-8 text-primary" />,
//     title: 'Favorite Dashboards',
//     description: 'Quickly access your most important dashboards with a single tap.',
//   },
//   {
//     icon: <HandHeart className="h-8 w-8 text-primary" />,
//     title: 'Free & User-Focused',
//     description: 'Always free for core features, built around user feedback.',
//   },
// ];

// export default function About() {
//   return (
//     <AnimatedSection id="about" className="py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
//             What is Glimvia?
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-muted-foreground">
//             Glimvia is a mobile-first app that brings the power of Apache Superset to your fingertips. It lets you access, explore, and act on your business insights anytime, anywhere—fast, intuitive, and built for professionals on the move.
//           </p>
//         </div>
//         <div className="mt-20">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full text-center transition-all hover:shadow-lg hover:-translate-y-1">
//                   <CardHeader>
//                     <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
//                       {benefit.icon}
//                     </div>
//                     <CardTitle>{benefit.title}</CardTitle>
//                     <CardDescription className="pt-2">{benefit.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }


"use client";

import { Smartphone, BarChart, Zap, ShieldCheck, Star, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '../animated-section';
import { SectionHeader } from '../section-header';

const benefits = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Sleek, responsive dashboards optimized for touch.',
  },
  {
    icon: BarChart,
    title: 'Real-Time Insights',
    description: 'Instant updates + push notifications for timely decisions.',
  },
  {
    icon: Zap,
    title: 'Easy Setup',
    description: 'Connect to your Apache Superset instance securely in minutes.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Connection',
    description: 'Your data is safe with secure authentication and data handling.',
  },
  {
    icon: Star,
    title: 'Favorite Dashboards',
    description: 'Quickly access your most important dashboards with a single tap.',
  },
  {
    icon: HandHeart,
    title: 'Free & User-Focused',
    description: 'Always free for core features, built around user feedback.',
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="What is Glimvia?"
          description="Glimvia is a mobile-first app that brings the power of Apache Superset to your fingertips. It lets you access, explore, and act on your business insights anytime, anywhere—fast, intuitive, and built for professionals on the move."
        />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center transition-all duration-300 shadow-feature-card hover:shadow-feature-card-hover hover:-translate-y-1">
                  <CardHeader>
                    <div className="group mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                       <benefit.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:[filter:drop-shadow(0_0_8px_hsl(var(--teal)/0.8))]" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="pt-2">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}