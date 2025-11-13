'use client';

import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import LatestStories from '@/components/LatestStories';
import AdmissionsSection from '@/components/AdmissionsSection';
import OverviewSection from '@/components/OverviewSection';
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
      <AnimatedSection className="py-12 sm:py-16">
        <Highlights />
      </AnimatedSection>

      {/* --- Admissions Section --- */}
      <AnimatedSection className="-mt-16 py-12 sm:py-16">
        <AdmissionsSection />
      </AnimatedSection>

      {/* --- Overview Section --- */}
      <AnimatedSection className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <OverviewSection />
      </AnimatedSection>

      {/* --- Latest Stories & Events Section --- */}
      <AnimatedSection className="-mt-16 py-12 sm:py-16">
        <LatestStories />
      </AnimatedSection>

      {/* --- NSRIET Location Section --- */}
      <AnimatedSection className="-mt-16 pb-12 sm:pb-16">
        <NSRIETLocation />
      </AnimatedSection>
    </>
  );
}