'use client';

import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const blogPosts = [
  {
    id: 1,
    category: 'Faculty Development Programme',
    date: 'Nov 10 – 12, 2025',
    title: 'Three-Day FDP on 21st Century Pedagogy and Experiential Learning',
    desc: 'NSRIT (Autonomous) hosted a three-day FDP in collaboration with the Council for Skills and Competencies (CSC India) and Wadhwani Foundation. The program focused on innovative teaching methodologies, hands-on learning approaches, and skill-based education to enhance faculty engagement and classroom transformation.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    buttonText: 'Read More',
  },
  {
    id: 2,
    category: 'Hackathon',
    date: 'Sep 19 – 20, 2025',
    title: 'Inauguration of NSRIET Internal Smart India Hackathon 2025 (24-Hour Edition)',
    desc: 'NSRIET Dakamarri proudly inaugurated the Internal Smart India Hackathon 2025. Students from CSE and CSE (AI & ML) departments showcased innovation and teamwork, developing real-world solutions in a vibrant 24-hour coding marathon. Kudos to the entire organizing team for their dedication and success!',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
    buttonText: 'View Highlights',
  },
  {
    id: 3,
    category: 'Celebration',
    date: 'Sep 15, 2025',
    title: "Engineer's Day Celebrations 2025 at NSRIET Dakamarri",
    desc: "Engineer's Day 2025 was celebrated with enthusiasm at NSRIET Dakamarri, in collaboration with JNTU Gurajada Vizianagaram and NSRIT's Industry-Institute Linkage and Training & Placement Cell. The event honored engineering excellence with talks, project showcases, and student recognition.",
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    buttonText: 'Explore More',
  },
];

const LatestStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate featured card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const featuredPost = blogPosts[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest Stories & Events</h2>
            <p className="text-gray-600">Discover what's happening at NSRIET</p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6">
            Subscribe
          </Button>
        </div>

        {/* Featured Card with Auto-Rotation */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-300">
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Featured Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-3">{featuredPost.title}</h3>
              <p className="text-gray-200 mb-4 line-clamp-2">{featuredPost.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{featuredPost.date}</span>
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
                  {featuredPost.buttonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Rotation Indicators/Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-indigo-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`border-2 rounded-2xl overflow-hidden bg-white transition-all duration-300 flex flex-col transform hover:scale-105 cursor-pointer ${
                index === currentIndex
                  ? 'border-indigo-500 shadow-xl'
                  : 'border-gray-200 shadow-md hover:shadow-lg'
              }`}
              onClick={() => handleDotClick(index)}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {index === currentIndex && (
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category Badge */}
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>

                {/* Button */}
                <Button
                  variant="secondary"
                  className="w-full hover:bg-indigo-100 text-indigo-600 font-semibold transition-colors duration-300"
                >
                  {post.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestStories;
