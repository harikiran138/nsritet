'use client';

import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import LatestStories from '@/components/LatestStories';
import QuickAccessCards from '@/components/QuickAccessCards';

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

      {/* Quick Access Cards Section */}
      <QuickAccessCards />
    </>
  );
}
