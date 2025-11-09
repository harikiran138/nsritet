'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  height?: string;
  overlayOpacity?: number;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = '/hero-bg.png',
  height = 'min-h-[600px] md:min-h-[700px]',
  overlayOpacity = 0.4,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden bg-corporate-navy`}
      role="banner"
      aria-label="Page Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Campus background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Gradient Overlay (for better text contrast) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="section-container relative z-10 px-8 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Subtitle Badge */}
          {subtitle && (
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-4 px-4 py-2 bg-corporate-blue/20 text-blue-200 rounded-full text-sm font-semibold border border-blue-400/30 backdrop-blur-sm">
                {subtitle}
              </div>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 font-light leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-corporate-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-corporate-blue/5 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
