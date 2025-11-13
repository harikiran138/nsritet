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
    transition: {
      staggerChildren: 0.2,
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

const highlights = [
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
    description: 'University Affiliated JNTU GV',
    meta: 'Academic Excellence',
    imgSrc: '/images/about/JNTUGV.JPG',
  },
  {
    category: 'Faculty',
    icon: faUsers,
    title: 'Experienced Faculty',
    description: 'Learn from the best minds in the industry and academia.',
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

export default function KeyHighlightsOld() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12"
    >
      {/* --- Section Header --- */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Key Highlights
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Excellence in every aspect of education.
        </p>
      </motion.div>

      {/* --- Highlights Grid --- */}
      <motion.div
        variants={containerVariants}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
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

            {/* Text Content */}
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

              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{item.meta}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
