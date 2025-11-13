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
      <HeroSection backgroundImage="/hero-bg.png" />

      {/* ========================================
          KEY HIGHLIGHTS SECTION
          - Showcases AICTE, JNTU, Faculty, Training
          - Equal spacing from hero
          ======================================== */}
      <AnimatedSection className="py-20 md:py-24 lg:py-28">
        <KeyHighlightsOld />
      </AnimatedSection>

      {/* ========================================
          ADMISSIONS SECTION
          - Flip counter animations
          - Consistent vertical rhythm
          ======================================== */}
      <AnimatedSection className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <AdmissionsSection />
      </AnimatedSection>

      {/* ========================================
          OVERVIEW SECTION
          - About NSRIET content
          - Balanced two-column layout
          ======================================== */}
      <AnimatedSection className="py-20 md:py-24 lg:py-28 bg-gray-50 dark:bg-gray-800">
        <OverviewSection />
      </AnimatedSection>

      {/* ========================================
          LATEST STORIES & EVENTS SECTION
          - 4 equal-sized cards with auto-scroll
          - Smooth entrance animation
          ======================================== */}
      <AnimatedSection className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <LatestStories />
      </AnimatedSection>

      {/* ========================================
          LOCATION & CONTACT SECTION
          - Google Maps integration
          - Contact form
          - Maintains bottom spacing
          ======================================== */}
      <AnimatedSection className="py-20 md:py-24 lg:py-28">
        <NSRIETLocation />
      </AnimatedSection>
    </>
  );
}