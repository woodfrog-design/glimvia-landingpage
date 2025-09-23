// // "use client";

// // import { useRef } from 'react';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import { Zap, Compass, Share2 } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import Link from 'next/link';
// // import { OSAwareButton } from '../os-badge';
// // import { AnimatedSection } from '../animated-section';


// // const experienceSteps = [
// //   {
// //     icon: Zap,
// //     title: 'Connect Instantly',
// //     description: 'Securely link your Apache Superset account and have your dashboards ready to view in seconds.',
// //   },
// //   {
// //     icon: Compass,
// //     title: 'Explore Beautifully',
// //     description: 'Navigate your data through a clean, optimized interface designed for clarity and speed on mobile.',
// //   },
// //   {
// //     icon: Share2,
// //     title: 'Share Effortlessly',
// //     description: 'Find an insight? Send it to your team instantly via your favorite communication apps.',
// //   },
// // ];

// // export default function Experience() {
// //   const targetRef = useRef<HTMLDivElement | null>(null);
// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //     offset: ['start center', 'end center'],
// //   });

// //   const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

// //   return (
// //     <AnimatedSection id="experience" ref={targetRef} className="py-24 sm:py-32 relative">
// //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //         <div className="mx-auto max-w-3xl text-center">
// //           <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
// //             See how effortless analytics access can be
// //           </h2>
// //           <p className="mt-6 text-lg leading-8 text-muted-foreground">
// //             From setup to sharing, Glimvia streamlines your data workflow.
// //           </p>
// //         </div>
        
// //         <div className="relative mt-20 max-w-3xl mx-auto">
// //           <div className="absolute left-9 top-9 h-full w-px bg-border -z-10" />
// //           <svg className="absolute left-0 top-0 h-full w-20 -z-10" aria-hidden="true">
// //             <motion.path
// //               d="M 36 36 V 1000"
// //               fill="none"
// //               stroke="hsl(var(--primary))"
// //               strokeWidth="2"
// //               style={{ pathLength }}
// //             />
// //           </svg>

// //           <div className="flex flex-col gap-16">
// //             {experienceSteps.map((step, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="flex items-start gap-6"
// //                 initial={{ opacity: 0, x: 20 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true, amount: 0.5 }}
// //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// //               >
// //                 <div className="flex-shrink-0">
// //                   <div className="flex h-18 w-18 items-center justify-center rounded-full bg-background border-4 border-primary/50 relative">
// //                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
// //                         <step.icon className="h-7 w-7 text-primary" />
// //                      </div>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
// //                   <p className="mt-2 text-muted-foreground">{step.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div className="mt-20 text-center">
// //              <OSAwareButton iosUrl="#" androidUrl="#"/>
// //             <p className='mt-4 text-sm text-muted-foreground'>Take your analytics anywhere.</p>
// //         </div>

// //       </div>
// //     </AnimatedSection>
// //   );
// // }

// // "use client";

// // import { useRef } from 'react';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import { Zap, Compass, Share2 } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import Link from 'next/link';
// // import { AnimatedSection } from '../animated-section';


// // const experienceSteps = [
// //   {
// //     icon: Zap,
// //     title: 'Connect Instantly',
// //     description: 'Securely link your Apache Superset account and have your dashboards ready to view in seconds.',
// //   },
// //   {
// //     icon: Compass,
// //     title: 'Explore Beautifully',
// //     description: 'Navigate your data through a clean, optimized interface designed for clarity and speed on mobile.',
// //   },
// //   {
// //     icon: Share2,
// //     title: 'Share Effortlessly',
// //     description: 'Find an insight? Send it to your team instantly via your favorite communication apps.',
// //   },
// // ];

// // export default function Experience() {
// //   const targetRef = useRef<HTMLDivElement | null>(null);
// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //     offset: ['start center', 'end center'],
// //   });

// //   const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

// //   return (
// //     <AnimatedSection id="experience" ref={targetRef} className="py-24 sm:py-32 relative">
// //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //         <div className="mx-auto max-w-3xl text-center">
// //           <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
// //             See how effortless analytics access can be
// //           </h2>
// //           <p className="mt-6 text-lg leading-8 text-muted-foreground">
// //             From setup to sharing, Glimvia streamlines your data workflow.
// //           </p>
// //         </div>

// //         <div className="relative mt-20 max-w-3xl mx-auto">
// //           <div className="absolute left-9 top-9 h-full w-px bg-border -z-10" />
// //           <svg className="absolute left-0 top-0 h-full w-20 -z-10" aria-hidden="true">
// //             <motion.path
// //               d="M 36 36 V 1000"
// //               fill="none"
// //               stroke="hsl(var(--primary))"
// //               strokeWidth="2"
// //               style={{ pathLength }}
// //             />
// //           </svg>

// //           <div className="flex flex-col gap-16">
// //             {experienceSteps.map((step, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="flex items-start gap-6"
// //                 initial={{ opacity: 0, x: 20 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true, amount: 0.5 }}
// //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// //               >
// //                 <div className="flex-shrink-0">
// //                   <div className="flex h-18 w-18 items-center justify-center rounded-full bg-background border-4 border-primary/50 relative">
// //                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
// //                         <step.icon className="h-7 w-7 text-primary" />
// //                      </div>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
// //                   <p className="mt-2 text-muted-foreground">{step.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mt-20 text-center">
// //             <Button asChild size="lg" variant="shiny">
// //                 <Link href="#download">
// //                     Get Started Today
// //                 </Link>
// //             </Button>
// //             <p className='mt-4 text-sm text-muted-foreground'>Take your analytics anywhere.</p>
// //         </div>

// //       </div>
// //     </AnimatedSection>
// //   );
// // }


// "use client";

// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Zap, Compass, Share2, Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { AnimatedSection } from '../animated-section';


// const experienceSteps = [
//   {
//     icon: Zap,
//     title: 'Connect Instantly',
//     description: 'Securely link your Apache Superset account and have your dashboards ready to view in seconds.',
//   },
//   {
//     icon: Compass,
//     title: 'Explore Beautifully',
//     description: 'Navigate your data through a clean, optimized interface designed for clarity and speed on mobile.',
//   },
//   {
//     icon: Share2,
//     title: 'Share Effortlessly',
//     description: 'Find an insight? Send it to your team instantly via your favorite communication apps.',
//   },
// ];

// export default function Experience() {
//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ['start center', 'end center'],
//   });

//   const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

//   return (
//     <AnimatedSection id="experience" ref={targetRef} className="py-24 sm:py-32 relative">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
//             See how effortless analytics access can be
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-muted-foreground">
//             From setup to sharing, Glimvia streamlines your data workflow.
//           </p>
//         </div>

//         <div className="relative mt-20 max-w-3xl mx-auto">
//           <div className="absolute left-9 top-9 h-full w-px bg-border -z-10" />
//           <svg className="absolute left-0 top-0 h-full w-20 -z-10" aria-hidden="true">
//             <motion.path
//               d="M 36 36 V 1000"
//               fill="none"
//               stroke="hsl(var(--primary))"
//               strokeWidth="2"
//               style={{ pathLength }}
//             />
//           </svg>

//           <div className="flex flex-col gap-16">
//             {experienceSteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start gap-6"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <div className="flex-shrink-0">
//                   <div className="flex h-18 w-18 items-center justify-center rounded-full bg-background border-4 border-primary/50 relative">
//                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
//                         <step.icon className="h-7 w-7 text-primary" />
//                      </div>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
//                   <p className="mt-2 text-muted-foreground">{step.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-20 text-center">
//             <Button asChild size="lg" variant="shiny">
//                 <Link href="#download">
//                     <Download />
//                     Get Started Today
//                 </Link>
//             </Button>
//             <p className='mt-4 text-sm text-muted-foreground'>Take your analytics anywhere.</p>
//         </div>

//       </div>
//     </AnimatedSection>
//   );
// }


"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Compass, Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '../animated-section';


const experienceSteps = [
  {
    icon: Zap,
    title: 'Connect Instantly',
    description: 'Securely link your Apache Superset account and have your dashboards ready to view in seconds.',
  },
  {
    icon: Compass,
    title: 'Explore Beautifully',
    description: 'Navigate your data through a clean, optimized interface designed for clarity and speed on mobile.',
  },
  {
    icon: Share2,
    title: 'Share Effortlessly',
    description: 'Find an insight? Send it to your team instantly via your favorite communication apps.',
  },
];

export default function Experience() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end center'],
  });

  // Animate the pathLength of the SVG line based on scroll progress
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <AnimatedSection id="experience" ref={targetRef} className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            See how effortless analytics access can be
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From setup to sharing, Glimvia streamlines your data workflow.
          </p>
        </div>

        <div className="relative mt-20 max-w-3xl mx-auto">
          {/* This is the animated line */}
          <div className="absolute left-9 top-9 h-full w-px bg-border -z-10" />
          <svg className="absolute left-0 top-0 h-full w-20 -z-10" aria-hidden="true">
            <motion.path
              d="M 36 36 V 1000"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              style={{ pathLength }}
            />
          </svg>

          <div className="flex flex-col gap-16">
            {experienceSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 group">
                  <div className="flex h-18 w-18 items-center justify-center rounded-full bg-background border-4 border-primary/50 relative">
                     {/* Added group hover effects to the icon container */}
                     <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:[box-shadow:0_0_20px_4px_hsl(var(--teal)/0.4)]">
                        <step.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-125" />
                     </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
            <Button asChild size="lg" variant="shiny">
                <Link href="#download">
                    <Download />
                    Get Started Today
                </Link>
            </Button>
            <p className='mt-4 text-sm text-muted-foreground'>Take your analytics anywhere.</p>
        </div>

      </div>
    </AnimatedSection>
  );
}