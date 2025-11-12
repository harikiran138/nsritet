'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Bookmark } from 'lucide-react';
import Image from 'next/image';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const blogPosts = [
  {
    id: 1,
    category: 'Faculty Development',
    categoryShort: 'FDP',
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
    categoryShort: 'Hackathon',
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
    categoryShort: 'Celebration',
    date: 'Sep 15, 2025',
    readTime: '3 min read',
    title: "Engineer's Day Celebrations 2025 at NSRIET Dakamarri",
    desc: "Engineer's Day 2025 was celebrated with enthusiasm at NSRIET Dakamarri, in collaboration with JNTU Gurajada Vizianagaram and NSRIT's Industry-Institute Linkage and Training & Placement Cell.",
    image: '/images/about/1757935764672.jpeg',
    buttonText: 'Explore More',
  },
];

// --- Category Color Mapping ---
const getCategoryColor = (category: string) => {
  const colors: { [key: string]: { bg: string; text: string; badge: string } } = {
    'Faculty Development': { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', badge: 'bg-blue-100' },
    'Hackathon': { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', badge: 'bg-purple-100' },
    'Celebration': { bg: 'from-amber-500 to-amber-600', text: 'text-amber-600', badge: 'bg-amber-100' },
  };
  return colors[category] || { bg: 'from-indigo-500 to-indigo-600', text: 'text-indigo-600', badge: 'bg-indigo-100' };
};

// --- Story Card Components ---
const FeaturedStoryCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const colors = getCategoryColor(post.category);
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative overflow-hidden bg-gray-200 h-80 lg:h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-flex items-center gap-2 ${colors.badge} ${colors.text} px-4 py-2 rounded-full text-xs font-bold`}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.text.split('-')[1] }}></div>
            {post.categoryShort}
          </span>
        </div>
        <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-md">
          <Bookmark className="w-5 h-5 text-gray-700 hover:text-blue-600" />
        </button>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">{post.date}</span>
          <span className="text-gray-300">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {post.desc}
        </p>
        <button className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.bg} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:gap-3 w-fit text-base`}>
          {post.buttonText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const StoryCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const colors = getCategoryColor(post.category);
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative overflow-hidden bg-gray-200 h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center gap-1.5 ${colors.badge} ${colors.text} px-3 py-1.5 rounded-full text-xs font-bold`}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.text.split('-')[1] }}></div>
            {post.categoryShort}
          </span>
        </div>
        <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300">
          <Bookmark className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </button>
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span className="font-medium">{post.date}</span>
          <span className="text-gray-300">•</span>
          <span>{post.readTime}</span>
        </div>
        <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {post.desc}
        </p>
        <button className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${colors.bg} text-white px-4 py-2 rounded-lg font-semibold text-xs hover:shadow-lg transition-all duration-300 group-hover:gap-2 w-fit`}>
          {post.buttonText}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const LatestStories = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white px-6 md:px-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Latest Stories & Events
        </h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Stay updated with the latest happenings and achievements at NSRIET.
        </p>
      </motion.div>

      {blogPosts.length > 0 ? (
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          <div className="lg:col-span-2">
            <FeaturedStoryCard post={featuredPost} />
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherPosts.map((post) => (
              <StoryCard key={post.id} post={post} />
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg font-medium">No stories available at the moment.</p>
          <p className="text-gray-500 text-sm mt-2">Check back soon for updates.</p>
        </div>
      )}
    </motion.section>
  );
};

export default LatestStories;
