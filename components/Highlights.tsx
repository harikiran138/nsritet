'use client';

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
      imgSrc: '/images/about/AICTE.jpg',
    },
    {
      category: 'Faculty',
      icon: faUsers,
      title: 'Experienced Faculty',
      description: 'Learn from the best minds in the industry and academia.',
      meta: 'Expert Mentorship',
      imgSrc:
        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'Training',
      icon: faIndustry,
      title: 'Industry Integrated Training',
      description: 'Consistently high placement rates in top companies.',
      meta: 'High Placement Record',
      imgSrc:
        'https://images.unsplash.com/photo-1551836022-3b11f1f4b52f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Highlights
        </h2>

        <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          Explore More
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-10 text-gray-500 text-sm font-medium">
        <button className="text-black font-semibold border-b-2 border-black pb-1">
          Overview
        </button>
        <button className="hover:text-black">Accreditation</button>
        <button className="hover:text-black">Faculty</button>
        <button className="hover:text-black">Training</button>
        <button className="hover:text-black">University</button>
      </div>

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
                width={200}
                height={150}
                className="object-contain max-w-full max-h-full"
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
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                {item.description}
              </p>

              <p className="text-gray-500 text-xs font-medium">
                {item.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
