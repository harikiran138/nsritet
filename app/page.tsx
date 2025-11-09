'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Award, 
  BookOpen,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Bell
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import NotificationTicker from '@/components/NotificationTicker';
import ImageGallery from '@/components/ImageGallery';
import EventCarousel from '@/components/EventCarousel';
import Image from 'next/image';

const stats = [
  { icon: GraduationCap, value: 5000, suffix: '+', label: 'Students Enrolled' },
  { icon: Users, value: 8, suffix: '', label: 'Departments' },
  { icon: Award, value: 95, suffix: '%', label: 'Placement Rate' },
  { icon: Building2, value: 50, suffix: '+', label: 'Industry Partners' },
];

const features = [
  {
    icon: BookOpen,
    title: 'AICTE Approved Programs',
    description: 'Industry-aligned curriculum with hands-on training and research opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Research',
    description: 'State-of-the-art laboratories and dedicated research centers for breakthrough projects.',
  },
  {
    icon: TrendingUp,
    title: 'Industry Collaboration',
    description: 'Strategic partnerships with leading corporations for internships and placements.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified professors with extensive academic and industry experience.',
  },
];

const upcomingEvents = [
  {
    date: '15 DEC 2024',
    title: 'Campus Placement Drive',
    description: 'Leading technology companies and Fortune 500 firms recruiting across engineering disciplines. Meet HR representatives and participate in technical interviews.',
    category: 'Placements',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    date: '20 DEC 2024',
    title: 'Research Symposium 2024',
    description: 'Annual academic conference featuring research paper presentations, poster exhibitions, and keynote sessions by industry experts.',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
  },
  {
    date: '25 DEC 2024',
    title: 'National Technical Festival',
    description: 'Inter-collegiate technical competition including robotics, coding challenges, and engineering design contests.',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    alt: 'University Campus Architecture',
    title: 'Campus Infrastructure',
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
    alt: 'Executive Boardroom',
    title: 'Administrative Block',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    alt: 'Students in Lecture Hall',
    title: 'Academic Sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    alt: 'Modern Lecture Theatre',
    title: 'Smart Classrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    alt: 'Innovation and Technology',
    title: 'Innovation Center',
  },
  {
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    alt: 'Research Laboratory Facilities',
    title: 'Research Labs',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    alt: 'Faculty Members',
    title: 'Academic Faculty',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    alt: 'Modern Architecture',
    title: 'Engineering Block',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    alt: 'Technology Integration',
    title: 'Digital Infrastructure',
  },
];

export default function Home() {
  return (
    <>
      {/* Notification Ticker */}
      <NotificationTicker />

      {/* Hero Section - Corporate Minimal */}
      <section 
        className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-corporate-navy"
        role="banner"
        aria-label="NSRIET Campus Hero Section"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Panoramic view of the NSRIET campus, showcasing modern architecture under a clear blue sky."
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="section-container relative z-10 px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              NSRIET Engineering College
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Empowering Excellence in Technical Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-corporate-blue text-white font-semibold rounded hover:bg-opacity-90 transition-all shadow-lg"
              >
                Apply for Admission
              </Link>
              <Link
                href="/academics"
                className="px-8 py-4 bg-white text-corporate-navy font-semibold rounded hover:bg-gray-100 transition-all"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center border border-corporate-border rounded p-6 hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-corporate-background rounded mb-4">
                    <stat.icon className="w-7 h-7 text-corporate-blue" />
                  </div>
                  <div className="text-4xl font-bold text-corporate-navy dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-corporate-textSecondary dark:text-gray-400 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-8">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
                Why Choose NSRIET
              </h2>
              <p className="text-corporate-textSecondary dark:text-gray-300 text-lg leading-relaxed">
                A premier institution committed to academic excellence, research innovation, and industry collaboration.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded border border-corporate-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-corporate-background dark:bg-gray-800 rounded flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-corporate-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-corporate-textSecondary dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-corporate-textSecondary dark:text-gray-300 text-lg">
                Stay informed about academic activities and institutional programs
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <EventCarousel events={upcomingEvents} autoSlide={true} interval={7000} />
          </AnimatedSection>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-8">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
                Infrastructure & Facilities
              </h2>
              <p className="text-corporate-textSecondary dark:text-gray-300 text-lg">
                Explore our state-of-the-art campus and modern academic facilities
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ImageGallery images={galleryImages} columns={3} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-corporate-navy">
        <div className="section-container px-8">
          <AnimatedSection>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Begin Your Engineering Journey
              </h2>
              <p className="text-xl mb-8 text-gray-200 font-light">
                Join a community of aspiring engineers and innovators. Applications open for 2024-25 academic year.
              </p>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-blue text-white font-semibold rounded hover:bg-opacity-90 transition-all shadow-lg"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
