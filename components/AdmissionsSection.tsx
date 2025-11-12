'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Laptop, Signal, Zap } from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- Data ---
const departments = [
  { icon: Cpu, title: "CSE", target: 420 },
  { icon: Laptop, title: "CSM", target: 310 },
  { icon: Signal, title: "ECE", target: 280 },
  { icon: Zap, title: "EEE", target: 190 },
];

// --- Easing Function ---
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

// --- Custom Hook for Count-Up Animation ---
const useCountUp = (target: number, isVisible: boolean, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const animationFrameId = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const progress = timestamp - startTime.current;
      const elapsedTime = Math.min(progress, duration);
      const percentage = elapsedTime / duration;
      const easedPercentage = easeOutCubic(percentage);
      const currentCount = Math.round(easedPercentage * target);

      setCount(currentCount);

      if (elapsedTime < duration) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      startTime.current = null;
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [target, isVisible, duration]);

  return count;
};

// --- Card Component ---
const AdmissionCard = ({ icon: Icon, title, target, isVisible }: { icon: React.ElementType, title: string, target: number, isVisible: boolean }) => {
  const count = useCountUp(target, isVisible);

  return (
    <motion.div
      variants={itemVariants}
      className="transform rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <Icon className="mx-auto mb-4 text-cyan-500" size={48} />
      <div className="font-mono text-6xl font-extrabold text-gray-900">
        {count}
      </div>
      <p className="mt-2 text-lg font-semibold text-gray-600">{title}</p>
    </motion.div>
  );
};

// --- Main Section Component ---
export default function AdmissionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-gray-50 py-20 md:py-24"
      aria-label="Admissions 2025 Statistics"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Admissions 2025
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-cyan-500" />
          <p className="mt-4 text-lg text-gray-600">
            Department-wise student intake capacity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {departments.map((dept) => (
            <AdmissionCard
              key={dept.title}
              icon={dept.icon}
              title={dept.title}
              target={dept.target}
              isVisible={isVisible}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}