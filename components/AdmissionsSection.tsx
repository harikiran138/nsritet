'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

// --- Data ---
const departmentData = [
  { icon: '🖥️', name: 'CSE', target: 420 },
  { icon: '💻', name: 'CSM', target: 310 },
  { icon: '📡', name: 'ECE', target: 280 },
  { icon: '⚡', name: 'EEE', target: 190 },
];

// --- Components ---

const AnimatedDigit = ({ finalDigit, startAnimation }) => {
  const digits = Array.from({ length: 10 }, (_, i) => i);
  const digitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startAnimation && digitRef.current) {
      digitRef.current.style.transform = `translateY(-${finalDigit * 10}%)`;
    } else if (digitRef.current) {
      digitRef.current.style.transform = `translateY(0)`;
    }
  }, [startAnimation, finalDigit]);

  return (
    <div className="h-full overflow-hidden">
      <div
        ref={digitRef}
        className="transition-transform duration-[1.5s] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
      >
        {digits.map(d => (
          <span key={d} className="flex h-full items-center justify-center">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

const FlipNumber = ({ target, startAnimation }) => {
  const paddedTarget = String(target).padStart(3, '0');

  return (
    <div className="flex h-24 text-6xl font-bold text-corporate-blue">
      {paddedTarget.split('').map((digit, index) => (
        <div key={index} className="h-full">
          <AnimatedDigit finalDigit={parseInt(digit, 10)} startAnimation={startAnimation} />
        </div>
      ))}
    </div>
  );
};

const DepartmentCard = ({ icon, name, target, startAnimation }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <h3 className="mb-4 text-2xl font-semibold text-gray-700">{icon} {name}</h3>
    <FlipNumber target={target} startAnimation={startAnimation} />
  </div>
);

export default function AdmissionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(isInView);
  }, [isInView]);

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Admissions 2025
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join a thriving community of innovators and leaders.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {departmentData.map((dept) => (
            <DepartmentCard
              key={dept.name}
              icon={dept.icon}
              name={dept.name}
              target={dept.target}
              startAnimation={startAnimation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
