'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Building2, Users, BookOpen, Award, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About NSRIT"
        subtitle="Our Institution"
        description="A legacy of excellence in engineering education, committed to producing skilled professionals and innovative leaders who shape the future of technology."
        backgroundImage="/hero-bg.png"
        overlayOpacity={0.5}
      />

      {/* Vision & Mission - Enterprise Grid */}
      <section id="vision" className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-12">
              Vision & Mission
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            <AnimatedSection delay={0.2}>
              <div className="bg-corporate-background dark:bg-gray-800 p-8 rounded border border-corporate-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded flex items-center justify-center border border-corporate-border">
                    <Eye className="w-7 h-7 text-corporate-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-corporate-textSecondary dark:text-gray-300 leading-relaxed">
                  To be a globally recognized institution of higher learning, fostering innovation, 
                  research, and entrepreneurship while producing ethical, socially responsible engineers 
                  who contribute to society&apos;s advancement and technological progress.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-corporate-background dark:bg-gray-800 p-8 rounded border border-corporate-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded flex items-center justify-center border border-corporate-border">
                    <Target className="w-7 h-7 text-corporate-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-corporate-textSecondary dark:text-gray-300 leading-relaxed">
                  To provide world-class technical education through innovative teaching methodologies, 
                  cutting-edge research facilities, and strong industry partnerships, enabling students 
                  to excel in their chosen fields and become future leaders in technology and engineering.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership - Professional Grid */}
      <section id="management" className="py-16 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
              Leadership & Governance
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-12 max-w-3xl">
              Experienced leadership committed to academic excellence and institutional development
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {[
              { 
                name: 'Dr. Rajesh Kumar', 
                role: 'Principal', 
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
                qualification: 'Ph.D., M.Tech'
              },
              { 
                name: 'Dr. Priya Sharma', 
                role: 'Vice Principal (Academics)', 
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
                qualification: 'Ph.D., M.E.'
              },
              { 
                name: 'Prof. Amit Patel', 
                role: 'Dean of Engineering', 
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
                qualification: 'M.Tech, B.E.'
              },
            ].map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-900 rounded border border-corporate-border overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-72 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-corporate-blue font-semibold mb-2">{member.role}</p>
                    <p className="text-corporate-textSecondary dark:text-gray-400 text-sm">{member.qualification}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
              Infrastructure & Facilities
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-12 max-w-3xl">
              Modern facilities designed to support academic excellence and research innovation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'Smart Classrooms', desc: '50+ technology-enabled learning spaces with modern amenities' },
              { icon: BookOpen, title: 'Central Library', desc: 'Extensive collection with 50,000+ books and digital resources' },
              { icon: Award, title: 'Research Labs', desc: 'Advanced laboratories equipped with cutting-edge technology' },
              { icon: Building2, title: 'Sports Complex', desc: 'Comprehensive indoor and outdoor sports facilities' },
              { icon: Users, title: 'Hostel Facilities', desc: 'Secure accommodation for 2000+ students' },
              { icon: Lightbulb, title: 'Innovation Center', desc: 'Dedicated incubation space for startups and research projects' },
            ].map((facility, index) => (
              <AnimatedSection key={facility.title} delay={index * 0.1}>
                <div className="bg-corporate-background dark:bg-gray-800 p-6 rounded border border-corporate-border hover:shadow-md transition-all">
                  <facility.icon className="w-10 h-10 text-corporate-blue mb-4" />
                  <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-corporate-textSecondary dark:text-gray-400 text-sm">{facility.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
