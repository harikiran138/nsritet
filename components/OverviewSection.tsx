'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function OverviewSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Overview
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <p
                className="text-lg md:text-xl leading-relaxed text-justify text-gray-700 dark:text-gray-300"
                style={{ lineHeight: '1.8' }}
              >
                N S Raju Institute of Engineering & Technology (NSRIET), established in 2008, stands as a premier institution for higher education in engineering, technology, and management. Affiliated to Jawaharlal Nehru Technological University (JNTU-GV) and approved by AICTE, New Delhi, NSRIET has consistently strived to bridge the gap between academic learning and real-world innovation.
                <br /><br />
                With a sprawling 10-acre campus equipped with state-of-the-art laboratories, digital classrooms, research centers, and innovation hubs, the institute provides an environment that encourages creativity, collaboration, and critical thinking.
              </p>
            </motion.div>

            {/* Image Content */}
            <motion.div variants={itemVariants} className="relative rounded-lg overflow-hidden shadow-lg" style={{ height: '119%' }}>
              <Image
                src="/overviewhome.jpeg"
                alt="NSRIET Campus Overview"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
