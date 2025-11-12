'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// --- Animation Variants ---
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

interface HeroSectionProps {
  title?: string;
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
  backgroundVariant?: 'image' | 'gradient';
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = 'https://images.unsplash.com/photo-1557683316-973673baf926',
  height = 'min-h-[750px] md:min-h-[850px]',
  backgroundVariant = 'image',
}: HeroSectionProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`relative ${height} flex flex-col items-center justify-center overflow-hidden bg-white`}
      role="banner"
      aria-label="Page Hero Section"
    >
      {/* --- Background --- */}
      {backgroundVariant === 'image' && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Campus background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>
      )}

      {backgroundVariant === 'gradient' && (
        <div className="absolute bottom-0 left-0 right-0 h-2/5 overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Campus foreground"
            fill
            className="object-cover object-bottom"
            priority
            quality={90}
          />
        </div>
      )}

      {/* --- Content --- */}
      <div className="relative z-10 px-8 py-24 md:py-32 text-center">
        <motion.div
          variants={containerVariants}
          className={`max-w-4xl ${backgroundVariant === 'gradient' ? 'text-left' : 'text-center'}`}
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.div variants={itemVariants}>
              <div
                className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${
                  backgroundVariant === 'gradient'
                    ? 'bg-corporate-blue/10 text-corporate-blue border-corporate-blue/20'
                    : 'bg-white/20 text-white border-white/50'
                }`}
              >
                {subtitle}
              </div>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className={`font-bold mb-6 leading-tight tracking-tight ${
              backgroundVariant === 'gradient'
                ? 'text-5xl md:text-6xl lg:text-7xl text-gray-900'
                : 'text-4xl md:text-5xl lg:text-6xl text-white'
            }`}
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className={`mb-10 font-light leading-relaxed max-w-3xl text-lg md:text-xl mx-auto ${
                backgroundVariant === 'gradient' ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={itemVariants}
              className={`flex flex-col sm:flex-row gap-4 ${
                backgroundVariant === 'image' ? 'justify-center' : ''
              }`}
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border-2 border-white/50 hover:bg-white/30 transition-all backdrop-blur-sm"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* --- Decorative Floating Elements --- */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-corporate-blue/5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.section>
  );
}
