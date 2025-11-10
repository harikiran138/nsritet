"use client";
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
      />

      {/* Vision & Mission - Enterprise Grid */}
  <section id="vision" className="py-20 md:py-28 bg-surface relative">
    {/* Decorative elements */}
    <div className="absolute -left-40 top-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 pointer-events-none"></div>
    
    <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-16">
          Vision & Mission
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <AnimatedSection delay={0.2}>
          <div className="card bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent border-l-4 border-l-corporate-blue hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-corporate-navy dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-corporate-textSecondary dark:text-gray-300 leading-relaxed text-lg">
              To be a globally recognized institution of higher learning, fostering innovation, 
              research, and entrepreneurship while producing ethical, socially responsible engineers 
              who contribute to society&apos;s advancement and technological progress.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="card bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent border-l-4 border-l-corporate-blue hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-corporate-navy dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-corporate-textSecondary dark:text-gray-300 leading-relaxed text-lg">
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
      <section id="management" className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800 relative">
        {/* Decorative gradient */}
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 pointer-events-none"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-4">
              Leadership & Governance
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-16 max-w-3xl">
              Experienced leadership committed to academic excellence and institutional development
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-surface">
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6 bg-surface dark:bg-gray-900">
                    <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-corporate-blue font-semibold text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></span>
                      {member.role}
                    </p>
                    <p className="text-corporate-textSecondary dark:text-gray-400 text-sm">{member.qualification}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
  <section id="infrastructure" className="py-20 md:py-28 bg-surface">
    <div className="section-container px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-6">
          Infrastructure & Facilities
        </h2>
        <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-16 max-w-3xl">
          Modern facilities designed to support academic excellence and research innovation
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Building2, title: 'Smart Classrooms', desc: '50+ technology-enabled learning spaces with modern amenities' },
          { icon: BookOpen, title: 'Central Library', desc: 'Extensive collection with 50,000+ books and digital resources' },
          { icon: Award, title: 'Research Labs', desc: 'Advanced laboratories equipped with cutting-edge technology' },
          { icon: Building2, title: 'Sports Complex', desc: 'Comprehensive indoor and outdoor sports facilities' },
          { icon: Users, title: 'Hostel Facilities', desc: 'Secure accommodation for 2000+ students' },
          { icon: Lightbulb, title: 'Innovation Center', desc: 'Dedicated incubation space for startups and research projects' },
        ].map((facility, index) => (
          <AnimatedSection key={facility.title} delay={index * 0.1}>
            <div className="card group hover:shadow-xl hover:-translate-y-1 transition-all bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent">
              <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <facility.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-3">
                {facility.title}
              </h3>
              <p className="text-corporate-textSecondary dark:text-gray-400 text-sm leading-relaxed">{facility.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
    </>
  );
}
