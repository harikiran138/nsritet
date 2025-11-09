'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AccreditationLogo {
  name: string;
  alt: string;
  width: number;
  height: number;
}

const accreditations: AccreditationLogo[] = [
  { name: 'AICTE', alt: 'AICTE Approved', width: 60, height: 60 },
  { name: 'JNTU', alt: 'JNTU-GV Affiliated', width: 60, height: 60 },
  { name: 'NAAC', alt: 'NAAC Accredited', width: 60, height: 60 },
];

export default function InstitutionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 border-b border-corporate-border dark:border-gray-700 shadow-sm"
    >
      <div className="section-container px-8 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Left: Institution Logo & Name */}
          <div className="flex items-center gap-4 min-w-fit">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/main-logo1.png"
                alt="NSRIET College Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-corporate-navy dark:text-white leading-tight">
                NSRIT Engineering College
              </h1>
              <p className="text-xs md:text-sm text-corporate-textSecondary dark:text-gray-400 font-medium">
                Excellence in Technical Education
              </p>
            </div>
          </div>

          {/* Right: Accreditation Logos */}
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-2">
            {accreditations.map((accred, index) => (
              <motion.div
                key={accred.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div className="flex flex-col items-center gap-1 px-2">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gray-50 dark:bg-gray-800 rounded-lg p-2 flex items-center justify-center border border-corporate-border dark:border-gray-700 hover:shadow-md transition-shadow">
                    {/* Placeholder for accreditation badges */}
                    <div className="w-full h-full bg-gradient-to-br from-corporate-blue/10 to-corporate-blue/5 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-corporate-blue dark:text-blue-400">
                        {accred.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-corporate-textSecondary dark:text-gray-400 font-medium whitespace-nowrap hidden md:block">
                    {accred.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtitle Bar (Optional - uncomment to use) */}
        <div className="mt-4 pt-4 border-t border-corporate-border dark:border-gray-700">
          <p className="text-sm text-corporate-textSecondary dark:text-gray-400 font-medium">
            🏆 Approved by AICTE | Affiliated to JNTU-GV | NAAC Accredited | ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </motion.div>
  );
}
