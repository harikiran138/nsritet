'use client';

import HeroSection from '@/components/HeroSection';
import KeyHighlightsOld from '@/components/KeyHighlightsOld';
import LatestStories from '@/components/LatestStories';
import AdmissionsSection from '@/components/AdmissionsSection';
import OverviewSection from '@/components/OverviewSection';
import NSRIETLocation from '@/components/NSRIETLocation';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      {/* ========================================
          HERO SECTION
          - Full viewport height with background
          - Animates on page load
          ======================================== */}
      <HeroSection backgroundImage="/Learn by Doing.Lead by Becoming[1].png" />

      {/* ========================================
          KEY HIGHLIGHTS SECTION
          - Showcases AICTE, JNTU, Faculty, Training
          - Extra spacing from hero
          ======================================== */}
      <AnimatedSection className="py-24 md:py-28 lg:py-32">
        <KeyHighlightsOld />
      </AnimatedSection>

      {/* ========================================
          ADMISSIONS SECTION
          - Blue gradient background for emphasis
          - Flip counter animations
          - Seamless visual highlight
          ======================================== */}
      <AnimatedSection className="py-24 md:py-28 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-950">
        <AdmissionsSection />
      </AnimatedSection>

      {/* ========================================
          OVERVIEW SECTION
          - About NSRIET content
          - Balanced two-column layout
          ======================================== */}
      <AnimatedSection className="py-24 md:py-28 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <OverviewSection />
      </AnimatedSection>

      {/* ========================================
          LATEST STORIES & EVENTS SECTION
          - 4 equal-sized cards with auto-scroll
          - Smooth entrance animation
          ======================================== */}
      <AnimatedSection className="py-24 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <LatestStories />
      </AnimatedSection>

      {/* ========================================
          LOCATION & CONTACT SECTION
          - Google Maps integration
          - Contact form
          - Extra bottom spacing
          ======================================== */}
      <AnimatedSection className="py-24 md:py-28 lg:py-32">
        <NSRIETLocation />
      </AnimatedSection>
    </>
  );
}