'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AccreditationLogo {
  name: string;
  alt: string;
  width: number;
  height: number;
  icon?: string;
}

const accreditations: AccreditationLogo[] = [
  { name: 'AICTE', alt: 'AICTE Approved', width: 60, height: 60, icon: '✓' },
  { name: 'JNTU-GV', alt: 'Affiliated to JNTU-GV', width: 60, height: 60, icon: '◆' },
  { name: 'NAAC', alt: 'NAAC Accredited', width: 60, height: 60, icon: '★' },
  { name: 'ISO 9001', alt: 'ISO 9001:2015 Certified', width: 60, height: 60, icon: '◊' },
];

export default function InstitutionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 border-b border-corporate-border dark:border-gray-700 shadow-md"
    >
      <div className="section-container px-8 py-5 md:py-6">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Left: Institution Logo & Name */}
          <Link href="/" className="flex items-center gap-4 min-w-fit hover:opacity-80 transition-opacity">
            <div className="relative w-16 h-16 md:w-18 md:h-18 flex-shrink-0">
              <Image
                src="/main-logo1.png"
                alt="NSRIET College Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-2xl font-black text-corporate-navy dark:text-white leading-tight">
                NSRIT
              </h1>
              <p className="text-xs md:text-sm text-corporate-textSecondary dark:text-gray-400 font-semibold tracking-wide">
                Engineering Excellence
              </p>
            </div>
          </Link>

          {/* Right: Accreditation Logos */}
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide py-2">
            {accreditations.map((accred, index) => (
              <motion.div
                key={accred.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="flex flex-col items-center gap-1.5 px-2">
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-2 flex items-center justify-center border-2 border-corporate-blue/20 dark:border-blue-500/30 hover:border-corporate-blue dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
                  >
                    {/* Icon */}
                    <div className="w-full h-full bg-gradient-to-br from-corporate-blue/15 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-600/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg md:text-2xl font-bold text-corporate-blue dark:text-blue-400">
                        {accred.icon}
                      </span>
                    </div>
                  </motion.div>
                  <span className="text-xs md:text-sm text-corporate-textSecondary dark:text-gray-400 font-semibold whitespace-nowrap">
                    {accred.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accreditation Info Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 pt-4 border-t border-corporate-border dark:border-gray-700 flex flex-wrap gap-2 items-center"
        >
          <span className="inline-block text-sm md:text-base text-corporate-textSecondary dark:text-gray-400 font-semibold">
            🏆 Approved by AICTE
          </span>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <span className="inline-block text-sm md:text-base text-corporate-textSecondary dark:text-gray-400 font-semibold">
            Affiliated to JNTU-GV
          </span>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <span className="inline-block text-sm md:text-base text-corporate-textSecondary dark:text-gray-400 font-semibold">
            NAAC Accredited
          </span>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <span className="inline-block text-sm md:text-base text-corporate-textSecondary dark:text-gray-400 font-semibold">
            ISO 9001:2015 Certified
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
