"use client";
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: React.ElementType;
  id?: string;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export function AnimatedSection({ children, className, variants = defaultVariants, as: Component = 'div', id }: AnimatedSectionProps) {
  return (
    <motion.section
      // @ts-ignore
      as={Component}
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
