'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faUniversity,
  faUsers,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React from 'react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

const services = [
  {
    category: 'Accreditation',
    icon: faCertificate,
    title: 'AICTE Approved Programs',
    description: 'All our technical programs are approved by AICTE.',
    meta: 'Certified & Verified',
    imgSrc: '/images/about/AICTE.jpg',
  },
  {
    category: 'University',
    icon: faUniversity,
    title: 'JNTU GV Affiliation',
    description: 'University Affiliated JNTU GV.',
    meta: 'Academic Excellence',
    imgSrc: '/images/about/JNTUGV.JPG',
  },
  {
    category: 'Faculty',
    icon: faUsers,
    title: 'Experienced Faculty',
    description: 'Learn from the best minds in industry and academia.',
    meta: 'Expert Mentorship',
    imgSrc: '/images/about/IMG_1400.jpg',
  },
  {
    category: 'Training',
    icon: faIndustry,
    title: 'Industry Integrated Training',
    description: 'Consistently high placement rates in top companies.',
    meta: 'High Placement Record',
    imgSrc: '/images/about/Training.jpeg',
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="container mx-auto px-6 md:px-12 max-w-7xl"
    >
      {/* ========================================
          SECTION HEADER
          - Centered title with subtitle
          - Consistent spacing
          ======================================== */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <p className="text-lg md:text-xl font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-3">
          Key Highlights
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          Excellence in every aspect of education.
        </h2>
      </motion.div>

      {/* ========================================
          HIGHLIGHTS GRID
          - 4 equal cards with images
          - Consistent gap spacing
          ======================================== */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-white dark:border-gray-700 transition-all duration-500 cursor-pointer hover:scale-105 active:scale-95 active:rotate-[1.7deg]"
          >
            {/* Image */}
            <div className="relative w-full h-48 bg-gray-100/50 dark:bg-gray-700/50 flex items-center justify-center">
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                className={
                  item.category === 'Accreditation' || item.category === 'University'
                    ? 'object-contain p-4'
                    : 'object-cover'
                }
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3 text-blue-700 dark:text-blue-400">
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                {item.meta}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
