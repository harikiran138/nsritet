'use client';

import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import LatestStories from '@/components/LatestStories';
import AdmissionsSection from '@/components/AdmissionsSection';
import NSRIETLocation from '@/components/NSRIETLocation';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      {/* --- Hero Section --- */}
      {/* This section animates on page load, so it's not wrapped in AnimatedSection */}
            <HeroSection
              backgroundImage="/hero-bg.png"

            />

      {/* --- Highlights Section --- */}
      <AnimatedSection className="py-16 sm:py-20">
        <Highlights />
      </AnimatedSection>

      {/* --- Latest Stories & Events Section --- */}
      <AnimatedSection className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <LatestStories />
      </AnimatedSection>

      {/* --- Admissions Section --- */}
      <AnimatedSection className="py-16 sm:py-20">
        <AdmissionsSection />
      </AnimatedSection>

      {/* --- NSRIET Location Section --- */}
      <AnimatedSection className="pb-16 sm:pb-20">
        <NSRIETLocation />
      </AnimatedSection>
    </>
  );
}