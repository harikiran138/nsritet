'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Award, 
  TrendingUp,
  Calendar,
  BookOpen,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import NotificationTicker from '@/components/NotificationTicker';

const stats = [
  { icon: GraduationCap, value: 5000, suffix: '+', label: 'Students Enrolled' },
  { icon: Users, value: 300, suffix: '+', label: 'Experienced Faculty' },
  { icon: Building2, value: 8, suffix: '', label: 'Departments' },
  { icon: Award, value: 95, suffix: '%', label: 'Placement Rate' },
];

const features = [
  {
    icon: BookOpen,
    title: 'World-Class Education',
    description: 'Comprehensive curriculum aligned with industry standards and global best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'State-of-the-art labs and research facilities fostering innovation and creativity.',
  },
  {
    icon: TrendingUp,
    title: 'Career Excellence',
    description: 'Strong industry partnerships ensuring excellent placement opportunities.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from experienced professors and industry professionals.',
  },
];

const upcomingEvents = [
  {
    date: '15 DEC',
    title: 'Campus Placement Drive',
    description: 'Leading tech companies recruiting on campus',
    category: 'Placements',
  },
  {
    date: '20 DEC',
    title: 'Research Symposium',
    description: 'Annual research paper presentations',
    category: 'Research',
  },
  {
    date: '25 DEC',
    title: 'Tech Fest 2024',
    description: 'Inter-college technical festival',
    category: 'Event',
  },
];

export default function Home() {
  return (
    <>
      {/* Notification Ticker */}
      <NotificationTicker />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-corporate-blue via-blue-800 to-corporate-lightBlue dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="section-container relative z-10 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Excellence in<br />
              <span className="text-blue-200">Engineering Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Empowering minds, shaping futures, and building tomorrow&apos;s innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-corporate-blue transition-all transform hover:scale-105"
              >
                Explore Campus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-corporate-lightBlue dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-corporate-blue dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Why Choose NSRIET?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Join a community dedicated to academic excellence, innovation, and holistic development
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-corporate-lightBlue dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-2">
                  Upcoming Events
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Stay updated with our latest activities and programs
                </p>
              </div>
              <Link
                href="/events"
                className="hidden md:flex items-center gap-2 text-corporate-lightBlue dark:text-blue-400 hover:gap-3 transition-all font-semibold"
              >
                View All <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 group">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-corporate-lightBlue text-white px-4 py-3 rounded-lg text-center min-w-[70px]">
                        <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                        <div className="text-sm">{event.date.split(' ')[1]}</div>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-corporate-lightBlue dark:text-blue-400 text-xs font-semibold rounded-full mb-2">
                          {event.category}
                        </span>
                        <h3 className="text-xl font-bold text-corporate-blue dark:text-white group-hover:text-corporate-lightBlue dark:group-hover:text-blue-400 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                    <button className="mt-4 text-corporate-lightBlue dark:text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join thousands of students who chose excellence. Apply now and be part of the NSRIET family.
              </p>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Apply for Admission <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
