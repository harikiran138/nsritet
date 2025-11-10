'use client';

import NotificationTicker from '@/components/NotificationTicker';
import HeroSection from '@/components/HeroSection';
import QuickAccessCards from '@/components/QuickAccessCards';

export default function Home() {
  return (
    <>
      {/* Notification Ticker */}
      <NotificationTicker />

      {/* Hero Section - Background image with text overlay and CTA buttons */}
      <HeroSection
        backgroundImage="/hero-bg.png"
      />

      {/* Quick Access Cards Section */}
      <QuickAccessCards />
    </>
  );
}
