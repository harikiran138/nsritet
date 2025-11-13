'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Bookmark } from 'lucide-react';
import Image from 'next/image';
import { getImagePaths } from '@/data/storyImages';

const blogPosts = [
  {
    id: 1,
    category: 'Faculty Development',
    categoryShort: 'FDP',
    date: 'Nov 10 – 12, 2025',
    readTime: '5 min read',
    title: 'Three-Day FDP on 21st Century Pedagogy and Experiential Learning',
    desc: 'NSRIT (Autonomous) hosted a three-day FDP in collaboration with the Council for Skills and Competencies (CSC India) and Wadhwani Foundation. The program focused on innovative teaching methodologies, hands-on learning approaches, and skill-based education to enhance faculty engagement and classroom transformation.',
    images: getImagePaths('fdp'),
    buttonText: 'Read More',
  },
  {
    id: 2,
    category: 'Hackathon',
    categoryShort: 'Hackathon',
    date: 'Sep 19 – 20, 2025',
    readTime: '4 min read',
    title: 'Inauguration of NSRIET Internal Smart India Hackathon 2025 (24-Hour Edition)',
    desc: 'NSRIET Dakamarri proudly inaugurated the Internal Smart India Hackathon 2025. Students from CSE and CSE (AI & ML) departments showcased innovation and teamwork, developing real-world solutions in a vibrant 24-hour coding marathon.',
    images: getImagePaths('hackathon'),
    buttonText: 'View Highlights',
  },
  {
    id: 3,
    category: 'Celebration',
    categoryShort: 'Celebration',
    date: 'Sep 15, 2025',
    readTime: '3 min read',
    title: "Other Events",
    desc: "Highlights from various events and activities organized across the campus.",
    images: getImagePaths('engineersDay'),
    buttonText: 'Explore More',
  },
  {
    id: 4,
    category: 'Cultural Values',
    categoryShort: 'Cultural',
    date: 'Ongoing',
    readTime: '4 min read',
    title: 'Cultural Diversity and Valued System',
    desc: 'At NSRIET, we believe in nurturing not just technical excellence but also cultural values and spiritual growth. Our campus hosts various cultural events, traditional celebrations, and spiritual activities that help students develop a strong moral compass and appreciation for diverse cultures.',
    images: getImagePaths('cultural'),
    buttonText: 'Learn More',
  },
];

// Category Color Mapping
const getCategoryColor = (category: string) => {
  const colors: { [key: string]: { bg: string; text: string; badge: string } } = {
    'Faculty Development': { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', badge: 'bg-blue-100' },
    'Hackathon': { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', badge: 'bg-purple-100' },
    'Celebration': { bg: 'from-amber-500 to-amber-600', text: 'text-amber-600', badge: 'bg-amber-100' },
    'Cultural Values': { bg: 'from-rose-500 to-rose-600', text: 'text-rose-600', badge: 'bg-rose-100' },
  };
  return colors[category] || { bg: 'from-indigo-500 to-indigo-600', text: 'text-indigo-600', badge: 'bg-indigo-100' };
};

// Regular Story Card Component with Auto-Scrolling
const StoryCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const colors = getCategoryColor(post.category);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll through images every 3 seconds
  useEffect(() => {
    if (post.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % post.images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [post.images.length]);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
      {/* Image Container with Carousel */}
      <div className="relative overflow-hidden bg-gray-200 h-56 md:h-64 w-full">
        {/* Images */}
        {post.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`${post.title} - Image ${index + 1}`}
              width={400}
              height={256}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}

        {/* Image Indicators */}
        {post.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
            {post.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Category Badge Overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center gap-1.5 ${colors.badge} ${colors.text} px-3 py-1.5 rounded-full text-xs font-bold`}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.text.split('-')[1] }}></div>
            {post.categoryShort}
          </span>
        </div>

        {/* Save Icon - Top Right */}
        <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300">
          <Bookmark className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between flex-grow p-3 md:p-4">
        {/* Metadata */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4" />
          <span className="font-medium text-sm">{post.date}</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm">{post.readTime}</span>
        </div>

        {/* Title */}
        <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h4>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.desc}
        </p>

        {/* Action Button */}
        <button className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.bg} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 group-hover:gap-3 w-fit`}>
          {post.buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const LatestStories = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 max-w-7xl">
      {/* ========================================
          SECTION HEADER
          - Centered title and description
          - Decorative divider
          ======================================== */}
      <div className="mb-12 md:mb-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              Latest Stories & Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Stay updated with the latest happenings at NSRIET
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4 mx-auto"></div>
      </div>

      {/* ========================================
          STORIES GRID
          - Wider cards with reduced gap
          - 3 cards per row on desktop for larger size
          ======================================== */}
      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-4">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <StoryCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">No stories available at the moment.</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Check back soon for updates and latest happenings at NSRIET.</p>
        </div>
      )}
    </section>
  );
};

export default LatestStories;
