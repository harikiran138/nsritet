'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';

interface ThreeSectionPageProps {
  title: string;
  subtitle?: string;
  section1: {
    title: string;
    content: React.ReactNode;
  };
  section2: {
    title: string;
    content: React.ReactNode;
  };
  section3: {
    title: string;
    content: React.ReactNode;
  };
  heroImage?: string;
}

export default function ThreeSectionPage({
  title,
  subtitle,
  section1,
  section2,
  section3,
  heroImage,
}: ThreeSectionPageProps) {
  return (
    <>
      {/* Hero Section */}
      {heroImage ? (
        <div
          className="relative h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              {subtitle && <p className="text-xl text-gray-200">{subtitle}</p>}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white py-16 md:py-20">
          <div className="section-container px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-blue-100 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </div>
      )}

      {/* Section 1: Overview / Introduction */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
                {section1.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {section1.content}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Key Features / Details */}
      <section className="py-16 md:py-24 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
                {section2.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {section2.content}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Resources / Contact / Downloads */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
                {section3.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {section3.content}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
