'use client';

<<<<<<< Updated upstream
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faUniversity,
  faUsers,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React from 'react';

export default function Highlights() {
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
      imgSrc: '/images/about/Faculty.jpeg',
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

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Highlights
        </h2>

      </div>

      {/* Category Filter Tabs */}


      {/* Highlights Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 bg-white flex items-center justify-center">
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                className={item.category === 'Accreditation' || item.category === 'University' ? 'object-contain' : 'object-cover'}
              />
            </div>

            {/* Text Content */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-blue-700">
                <FontAwesomeIcon icon={item.icon} />
                <span className="text-sm font-semibold">{item.category}</span>
              </div>

              <h3 className="font-semibold text-gray-900 text-base mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2 text-justify">
                {item.description}
              </p>

              <p className="text-gray-500 text-xs font-medium">
                {item.meta}
              </p>
            </div>
          </div>
        ))}
=======
import { useState } from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const highlights = [
    {
    icon: ShieldCheck,
    title: 'AICTE Approved',
    description: 'All our technical programs are approved by AICTE.',
  },
  {
    icon: Award,
    title: 'Affiliated to JNTU GV',
    description: "University Affiliated JNTU GV",
  },
   {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Learn from the best minds in the industry and academia.',
  },
  {
    image: '/Indsutry Oriented Training.jpg',
    title: 'Industry Oriented Training',
    description: 'Consistently high placement rates in top companies.',
  },
];

export default function Highlights() {
  const [selectedHighlight, setSelectedHighlight] = useState<typeof highlights[0] | null>(null);

  return (
    <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
              Our Highlights
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A commitment to quality, excellence, and student success.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <AnimatedSection key={highlight.title} delay={index * 0.1}>
              <div
                className="card text-center group hover:shadow-lg hover:-translate-y-1 transition-all h-full cursor-pointer"
                onClick={() => setSelectedHighlight(highlight)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {highlight.icon ? (
                    <highlight.icon className="w-8 h-8 text-corporate-blue" />
                  ) : (
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-corporate-textSecondary dark:text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        {selectedHighlight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-corporate-navy dark:text-white">
                  {selectedHighlight.title}
                </h3>
                <button
                  onClick={() => setSelectedHighlight(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              {selectedHighlight.image && (
                <Image
                  src={selectedHighlight.image}
                  alt={selectedHighlight.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <p className="text-corporate-textSecondary dark:text-gray-400">
                {selectedHighlight.description}
              </p>
            </div>
          </div>
        )}
>>>>>>> Stashed changes
      </div>
    </section>
  );
}
