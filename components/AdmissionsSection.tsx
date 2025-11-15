'use client';

import React, { useState, useEffect, useRef } from 'react';

// -------------------------------------------------
// Custom useInView Hook (Replaces framer-motion's inView)
// -------------------------------------------------
const useInView = (options: IntersectionObserverInit & { triggerOnce?: boolean } = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        
        if (options.triggerOnce) {
          observer.unobserve(node);
        }
      } else {
        if (!options.triggerOnce) {
          setInView(false);
        }
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};

// -------------------------------------------------
// Counter Component (Custom Implementation)
// -------------------------------------------------
const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, target, duration]);

  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{count.toLocaleString()}</span>;
};

// -------------------------------------------------
// New AdmissionsNumbers Section (Blue Background Theme)
// -------------------------------------------------
const AdmissionsNumbers = () => {
  const stats = [
    { number: 120, label: "CSE" },
    { number: 60, label: "CSE(AI & ML)" },
    { number: 120, label: "ECE" },
    { number: 30, label: "EEE" },
    { number: 30, label: "MECHANICAL" },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-base tracking-widest font-medium text-cyan-300 uppercase">
          ADMISSIONS 2025
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mt-2 text-white">
          Department-wise student intake capacity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-20 mt-16">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-white">
                <Counter target={item.number} />
              </div>
              <p className="text-base mt-2 text-blue-100 uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Section Component ---
export default function AdmissionsSection() {
  return <AdmissionsNumbers />;
}