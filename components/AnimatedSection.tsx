'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up'
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants based on animation type
  const variants = {
    'fade-up': {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    'fade-down': {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 }
    },
    'fade-left': {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    },
    'fade-right': {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    'scale': {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    },
    'none': {
      initial: { opacity: 1 },
      animate: { opacity: 1 }
    }
  };

  const selectedVariant = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial={selectedVariant.initial}
      animate={inView ? selectedVariant.animate : selectedVariant.initial}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
