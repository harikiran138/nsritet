'use client';

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
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import NotificationTicker from '@/components/NotificationTicker';
import ImageGallery from '@/components/ImageGallery';
import EventCarousel from '@/components/EventCarousel';
import HeroSection from '@/components/HeroSection';
// 'Image' is intentionally not imported here (images are handled in ImageGallery/EventCarousel components)

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
  // removed a broken upstream Unsplash image (returned 404 during dev server fetchs)
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

      {/* Hero Section - Background image with text overlay and CTA buttons */}
      <HeroSection
        title="NSRIT Engineering College"
        description="Empowering the Next Generation of Engineering Leaders Through Innovation, Research, and Industry Collaboration"
        backgroundImage="/hero-bg.png"
        primaryCTA={{
          text: 'Apply for Admission',
          href: '/admissions',
        }}
        // secondaryCTA={{
        //   text: 'Explore Programs',
        //   href: '/academics',
        // }}
      />

      {/* Stats Section - Clean Grid */}
      <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50 pointer-events-none dark:from-blue-950 dark:opacity-20"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
                NSRIET By Numbers
              </h2>
              <p className="text-corporate-textSecondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Proudly delivering excellence and innovation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="card flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-corporate-blue" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-2">
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
      <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800 relative">
        {/* Decorative gradient */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 pointer-events-none"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
                Why Choose NSRIET
              </h2>
              <p className="text-corporate-textSecondary dark:text-gray-300 text-lg leading-relaxed">
                A premier institution committed to academic excellence, research innovation, and industry collaboration.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="card group hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 md:py-28 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mb-16">
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
      <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mb-16">
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-blue-900 to-corporate-dark"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Begin Your Engineering Journey
              </h2>
              <p className="text-xl mb-8 text-blue-100 font-light leading-relaxed">
                Join a community of aspiring engineers and innovators. Applications open for 2024-25 academic year.
              </p>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-corporate-navy font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
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
