'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Laptop, Signal, Zap } from 'lucide-react';

interface DepartmentCard {
  icon: React.ReactNode;
  title: string;
  target: number;
}

const AdmissionsSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const departments: DepartmentCard[] = [
    { icon: <Cpu size={48} />, title: '🖥️ CSE', target: 420 },
    { icon: <Laptop size={48} />, title: '💻 CSM', target: 310 },
    { icon: <Signal size={48} />, title: '📡 ECE', target: 280 },
    { icon: <Zap size={48} />, title: '⚡ EEE', target: 190 },
  ];

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Smooth counter animation with ease-out cubic
  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Ease-out cubic: t = 1 - (1-t)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const newCounts = departments.map((dept) =>
        Math.floor(dept.target * easeProgress)
      );

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section className="w-full bg-gray-100 py-20 px-4 sm:px-8">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wide mb-3">
            Admissions 2025
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-cyan-500 rounded-full"></div>
          </div>
        </div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-8 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              {/* Icon */}
              <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {dept.icon}
              </div>

              {/* Animated Counter */}
              <div className="font-mono text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 h-16 flex items-center justify-center">
                {counts[index]}
              </div>

              {/* Department Label */}
              <p className="text-lg font-semibold text-gray-600">{dept.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
      </div>
    </section>
  );
}
