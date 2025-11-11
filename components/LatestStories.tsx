'use client';

import React from 'react';
import Button from './ui/Button';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Faculty Development Programme',
    date: 'Nov 10 – 12, 2025',
    readTime: '5 min read',
    title: 'Three-Day FDP on 21st Century Pedagogy and Experiential Learning',
    desc: 'NSRIT (Autonomous) hosted a three-day FDP in collaboration with the Council for Skills and Competencies (CSC India) and Wadhwani Foundation. The program focused on innovative teaching methodologies, hands-on learning approaches, and skill-based education to enhance faculty engagement and classroom transformation.',
    image: '/images/about/1762843017460.gif',
    buttonText: 'Read More',
  },
  {
    id: 2,
    category: 'Hackathon',
    date: 'Sep 19 – 20, 2025',
    readTime: '4 min read',
    title: 'Inauguration of NSRIET Internal Smart India Hackathon 2025 (24-Hour Edition)',
    desc: 'NSRIET Dakamarri proudly inaugurated the Internal Smart India Hackathon 2025. Students from CSE and CSE (AI & ML) departments showcased innovation and teamwork, developing real-world solutions in a vibrant 24-hour coding marathon.',
    image: '/images/about/sihimage.jpeg',
    buttonText: 'View Highlights',
  },
  {
    id: 3,
    category: 'Celebration',
    date: 'Sep 15, 2025',
    readTime: '3 min read',
    title: "Engineer's Day Celebrations 2025 at NSRIET Dakamarri",
    desc: "Engineer's Day 2025 was celebrated with enthusiasm at NSRIET Dakamarri, in collaboration with JNTU Gurajada Vizianagaram and NSRIT's Industry-Institute Linkage and Training & Placement Cell.",
    image: '/images/about/1757935764672.jpeg',
    buttonText: 'Explore More',
  },
];

// Featured Story Card Component
const FeaturedStoryCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Faculty Development Programme': 'from-blue-500 to-cyan-500',
      'Hackathon': 'from-purple-500 to-pink-500',
      'Celebration': 'from-amber-500 to-orange-500',
    };
    return colors[category] || 'from-indigo-500 to-purple-500';
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
      {/* Featured Image */}
      <div className="relative h-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Content Positioned on Image */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Category Badge - Floating */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`inline-flex items-center gap-2 bg-gradient-to-r ${getCategoryColor(
                post.category
              )} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-blue-100 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-gray-100 text-sm mb-4 line-clamp-2">
            {post.desc}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-200">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
              <span className="text-gray-300">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 group-hover:gap-3">
              {post.buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Regular Story Card Component
const StoryCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Faculty Development Programme': 'from-blue-500 to-cyan-500',
      'Hackathon': 'from-purple-500 to-pink-500',
      'Celebration': 'from-amber-500 to-orange-500',
    };
    return colors[category] || 'from-indigo-500 to-purple-500';
  };

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-200 h-48 md:h-40">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Category Badge Overlay */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${getCategoryColor(
              post.category
            )} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md`}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            {post.category.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between flex-grow p-5 md:p-4">
        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{post.date}</span>
          <span className="text-gray-300">•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h4 className="text-base md:text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h4>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {post.desc}
        </p>

        {/* Action Button */}
        <button className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group-hover:gap-2">
          {post.buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const LatestStories = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Latest Stories & Events
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Stay updated with the latest happenings at NSRIET
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* Main Grid Layout */}
        {blogPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Featured Story - Left Side, Full Height */}
            <div className="lg:col-span-1 lg:row-span-2 min-h-96 lg:min-h-full">
              <FeaturedStoryCard post={featuredPost} />
            </div>

            {/* Smaller Stories - Right Side */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {otherPosts.map((post) => (
                <div key={post.id}>
                  <StoryCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No stories available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestStories;
