'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from "next/image"; // Added Image import

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const highlights = [
  {
    title: 'AICTE Approved Programs',
    subtitle: 'Certified & Verified',
    description: 'All our technical programs are approved by AICTE.',
    iconColor1: '#8B5CF6',
    iconColor2: '#C4B5FD',
  },
  {
    title: 'JNTU GV Affiliation',
    subtitle: 'University',
    description: 'University Affiliated JNTU GV.',
    iconColor1: '#06B6D4',
    iconColor2: '#A5F3FC',
  },
  {
    title: 'Experienced Faculty',
    subtitle: 'Faculty',
    description: 'Learn from the best minds in the industry and academia.',
    iconColor1: '#EC4899',
    iconColor2: '#F9A8D4',
  },
  {
    title: 'Industry Integrated Training',
    subtitle: 'Training',
    description: 'Consistently high placement rates in top companies.',
    iconColor1: '#F97316',
    iconColor2: '#FDBA74',
  },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-base tracking-widest font-normal text-purple-500 uppercase"
        >
          KEY HIGHLIGHTS
        </motion.p>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-6xl md:text-7xl font-semibold mt-2 text-slate-900 dark:text-white"
        >
          Excellence in every aspect of education.
        </motion.h2>

        {/* CARDS CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20"
        >
          {highlights.map((itemData, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              {/* WIX-STYLE ICON SHAPES */}
              
              {index === 0 && ( // Conditionally render Image for the first item
                <Image
                  src="/images/about/AICTE.jpg" // Correct path for public assets
                  alt="AICTE Logo"
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
              )}
              {index === 1 && ( // Conditionally render Image for the second item
                <Image
                  src="/images/about/JNTUGV.JPG" // Correct path for public assets
                  alt="JNTU GV Logo"
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-100">
                {itemData.title}
              </h3>

              <p className="text-base text-purple-500 mt-1">{itemData.subtitle}</p>

              <p className="text-base text-slate-600 dark:text-gray-300 mt-3 leading-relaxed">
                {itemData.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
