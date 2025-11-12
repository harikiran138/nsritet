'use client';

import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import LatestStories from '@/components/LatestStories';
import AdmissionsSection from '@/components/AdmissionsSection';
import NSRIETLocation from '@/components/NSRIETLocation';

export default function Home() {
  return (
    <>
      {/* Hero Section - Background image with text overlay and CTA buttons */}
      <HeroSection
        backgroundImage="/hero-bg.png"
      />

      {/* Highlights Section */}
      <Highlights />

      {/* Latest Stories & Events Section */}
      <LatestStories />

      {/* Admissions Section */}
      <AdmissionsSection />

      {/* NSRIET Location Section */}
      <NSRIETLocation />
    </>
  );
}
