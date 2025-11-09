'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  tagline?: string;
  taglineHighlight?: string;
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
  showTagline?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  tagline,
  taglineHighlight,
  primaryCTA,
  secondaryCTA,
  backgroundImage = '/hero-bg.png',
  height = 'min-h-[650px] md:min-h-[750px] lg:min-h-[800px]',
  overlayOpacity = 0.35,
  showTagline = false,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden bg-gradient-to-br from-corporate-navy via-blue-900 to-blue-800`}
      role="banner"
      aria-label="Page Hero Section"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Campus background"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* Multi-layer Overlay for better contrast */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Gradient Overlay (for better text contrast) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/40" />

      {/* Content */}
      <div className="section-container relative z-10 px-8 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Subtitle Badge */}
          {subtitle && (
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-6 px-4 py-2 bg-blue-500/30 text-blue-100 rounded-full text-xs md:text-sm font-semibold border border-blue-400/50 backdrop-blur-md">
                {subtitle}
              </div>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-white leading-tight tracking-tighter"
          >
            {title}
          </motion.h1>

          {/* Tagline with Highlight (Learn by Doing, Lead by Becoming) */}
          {showTagline && tagline && (
            <motion.div
              variants={itemVariants}
              className="mb-8 max-w-3xl"
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed">
                {tagline.split(taglineHighlight || '').map((part, idx) => (
                  <span key={idx}>
                    {part}
                    {idx < tagline.split(taglineHighlight || '').length - 1 && (
                      <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                        {taglineHighlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>
          )}

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 font-light leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all shadow-lg hover:scale-110 duration-300 group"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-lg border-2 border-white/40 hover:bg-white/25 transition-all backdrop-blur-sm hover:border-white/60 duration-300"
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
        className="absolute top-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
