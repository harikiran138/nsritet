'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Laptop, Signal, Zap } from 'lucide-react';

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
    <div className="transform rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <Icon className="mx-auto mb-4 text-cyan-500" size={48} />
      <div className="font-mono text-6xl font-extrabold text-gray-900">
        {count}
      </div>
      <p className="mt-2 text-lg font-semibold text-gray-600">{title}</p>
    </div>
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
        setIsVisible(entry.isIntersecting);
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
    <section className="bg-gray-50" aria-label="Admissions 2025 Statistics">
      <div className="mx-auto max-w-6xl py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Admissions 2025
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-cyan-500" />
          <p className="mt-2 text-gray-500">Department-wise student intake</p>
        </div>

        <div
          ref={sectionRef}
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
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
        </div>
      </div>
    </section>
  );
}