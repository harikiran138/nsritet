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
  }, [options.triggerOnce, options.threshold]);

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
// New AdmissionsNumbers Section (White Theme)
// -------------------------------------------------
const AdmissionsNumbers = () => {
  const stats = [
    { number: 420, label: "CSE" },
    { number: 310, label: "CSM" },
    { number: 280, label: "ECE" },
    { number: 190, label: "EEE" },
  ];

  return (
    <section className="bg-white text-gray-900 pt-0 pb-24 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm tracking-widest font-medium text-cyan-600 uppercase">
          ADMISSIONS 2025
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-gray-900">
          Department-wise student intake capacity
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mt-16">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-10">
              <div className="text-center w-24">
                <div className="text-5xl font-bold text-gray-900">
                  <Counter target={item.number} />
                </div>
                <p className="text-sm mt-2 text-gray-600 uppercase">{item.label}</p>
              </div>

              {index !== stats.length - 1 && (
                <div className="hidden md:block text-4xl font-thin text-gray-400 opacity-50">
                  •
                </div>
              )}
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