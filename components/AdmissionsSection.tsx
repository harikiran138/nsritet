'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Cpu, Laptop, Signal, Zap } from 'lucide-react';

/**
 * Department card configuration with icon, title, and enrollment target
 */
interface DepartmentCard {
  icon: React.ReactNode;
  title: string;
  fullName: string;
  target: number;
  color: string;
}

/**
 * AdmissionsSection Component
 * Displays animated enrollment counters for each department with smooth scroll-triggered animations
 * 
 * Features:
 * - IntersectionObserver-based scroll detection
 * - Smooth counter animations with easing
 * - Responsive grid layout
 * - Accessible and semantic HTML
 * - Production-ready styling
 */
const AdmissionsSection: React.FC = () => {
  // ============ State Management ============
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // ============ Department Data ============
  const departments: DepartmentCard[] = [
    {
      icon: <Cpu size={48} strokeWidth={1.5} />,
      title: 'CSE',
      fullName: 'Computer Science & Engineering',
      target: 420,
      color: '#0066cc',
    },
    {
      icon: <Laptop size={48} strokeWidth={1.5} />,
      title: 'AI/ML',
      fullName: 'Computer Science & Artificial Intelligence',
      target: 310,
      color: '#0099ff',
    },
    {
      icon: <Signal size={48} strokeWidth={1.5} />,
      title: 'ECE',
      fullName: 'Electronics & Communication Engineering',
      target: 280,
      color: '#0088dd',
    },
    {
      icon: <Zap size={48} strokeWidth={1.5} />,
      title: 'EEE',
      fullName: 'Electrical & Electronics Engineering',
      target: 190,
      color: '#0077bb',
    },
  ];

  // ============ Intersection Observer Hook ============
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
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

  // ============ Counter Animation Hook ============
  useEffect(() => {
    if (!isVisible) return;

    const ANIMATION_DURATION = 2000; // 2 seconds
    const startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

      // Ease-out cubic: t = 1 - (1-t)^3 for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const newCounts = departments.map((dept) =>
        Math.floor(dept.target * easeProgress)
      );

      setCounts(newCounts);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="admissions-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ============ Header Section ============ */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            id="admissions-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Admissions 2025
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our diverse academic departments and start your journey towards excellence
          </p>
          {/* Decorative accent line */}
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full mx-auto"></div>
        </div>

        {/* ============ Counter Cards Grid ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {departments.map((dept, index) => (
            <article
              key={`${dept.title}-${index}`}
              className="group relative bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center justify-center text-center overflow-hidden"
            >
              {/* ============ Decorative Background ============ */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl"></div>

              {/* ============ Icon Container ============ */}
              <div className="mb-8 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                <div
                  className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {dept.icon}
                </div>
              </div>

              {/* ============ Animated Counter ============ */}
              <div
                className="font-mono text-5xl sm:text-6xl font-bold text-gray-900 mb-4 h-20 flex items-center justify-center tracking-tight"
                aria-live="polite"
                aria-atomic="true"
              >
                {counts[index]}
              </div>

              {/* ============ Department Label ============ */}
              <p className="text-lg font-semibold text-gray-900 mb-2">{dept.title}</p>

              {/* ============ Full Department Name ============ */}
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                {dept.fullName}
              </p>

              {/* ============ Enrollment Label ============ */}
              <p className="text-xs text-gray-400 mt-3 uppercase tracking-widest font-semibold">
                Seats Available
              </p>
            </article>
          ))}
        </div>

        {/* ============ CTA Section ============ */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Start your application today and become part of NSRIET's academic excellence
          </p>
          <button
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Apply now for admissions"
          >
            Apply Now
            <span className="ml-2" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
