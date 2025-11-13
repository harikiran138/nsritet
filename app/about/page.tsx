'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ThreeSectionPage from '@/components/ThreeSectionPage';
import VisionMissionCoreValues from '@/components/VisionMissionCoreValues';

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

export default function AboutPage() {
  return (
    <>
      <ThreeSectionPage
        title="About Us"
        subtitle="A legacy of excellence in engineering education"
        heroImage="/about-us-hero.jpg"
        section1={{
          title: 'Overview',
          content: (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8" // Adjusted spacing for better balance
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div variants={itemVariants}>
                  <p
                    className="leading-relaxed text-justify"
                    style={{ lineHeight: '1.8' }} // Slightly increased line height for readability
                  >
                    N S Raju Institute of Engineering & Technology (NSRIET), established in 2008, stands as a premier institution for higher education in engineering, technology, and management. Affiliated to Jawaharlal Nehru Technological University (JNTU-GV) and approved by AICTE, New Delhi, NSRIET has consistently strived to bridge the gap between academic learning and real-world innovation.
                    <br /><br />
                    With a sprawling 10-acre campus equipped with state-of-the-art laboratories, digital classrooms, research centers, and innovation hubs, the institute provides an environment that encourages creativity, collaboration, and critical thinking.
                  </p>
                </motion.div>

                {/* Image Content */}
                <motion.div variants={itemVariants} className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/about-us-hero.jpg"
                    alt="NSRIET Campus Overview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="mt-8"> {/* Added margin-top for explicit gap */}
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8 text-center">
                  Vision, Mission, Core Values
                </h2>
                <VisionMissionCoreValues />
              </motion.div>
            </motion.div>
          ),
        }}
        section2={{
          title: '',
          content: null,
        }}
        section3={{
          title: 'Leadership',
          content: (
            <motion.div variants={itemVariants}>
              <p className="text-corporate-textSecondary dark:text-gray-400">
                Our leadership team is committed to guiding our institution towards a future of excellence and innovation. More details can be found on the dedicated Leadership page.
              </p>
            </motion.div>
          ),
        }}
      />
    </>
  );
}
