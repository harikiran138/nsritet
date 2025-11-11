'use client';

import NotificationTicker from '@/components/NotificationTicker';
import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import QuickAccessCards from '@/components/QuickAccessCards';

export default function Home() {
  return (
    <>
      {/* Notification Ticker */}
      <NotificationTicker />

      {/* Video Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/Video/Blue and White Photo Research Process Flow Chart.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
            Welcome to NSRIET
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Excellence in Education, Innovation in Technology
          </p>
        </div>
      </section>

      {/* Hero Section - Background image with text overlay and CTA buttons */}
      <HeroSection
        backgroundImage="/hero-bg.png"
      />

      {/* Highlights Section */}
      <Highlights />

      {/* Quick Access Cards Section */}
      <QuickAccessCards />
    </>
  );
}
