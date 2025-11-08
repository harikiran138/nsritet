'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Building2, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About NSRIET</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A legacy of excellence in engineering education, innovation, and research since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="w-16 h-16 bg-corporate-lightBlue rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-corporate-blue dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To be a globally recognized institution of higher learning, fostering innovation, 
                  research, and entrepreneurship while producing ethical, socially responsible engineers 
                  who contribute to society&apos;s advancement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To provide world-class technical education through innovative teaching methodologies, 
                  cutting-edge research facilities, and strong industry partnerships, enabling students 
                  to excel in their chosen fields and become future leaders.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Leadership & Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Guided by visionary leaders committed to academic excellence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Rajesh Kumar', role: 'Principal', image: '/team-1.jpg' },
              { name: 'Dr. Priya Sharma', role: 'Vice Principal', image: '/team-2.jpg' },
              { name: 'Prof. Amit Patel', role: 'Dean Academics', image: '/team-3.jpg' },
            ].map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <Users className="w-24 h-24 text-gray-400" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                World-Class Infrastructure
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                State-of-the-art facilities designed for optimal learning
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Smart Classrooms', desc: '50+ technology-enabled learning spaces' },
              { icon: Building2, title: 'Advanced Labs', desc: 'Cutting-edge equipment and tools' },
              { icon: Building2, title: 'Central Library', desc: '50,000+ books and digital resources' },
              { icon: Building2, title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities' },
              { icon: Building2, title: 'Hostel Facilities', desc: 'Comfortable accommodation for 2000+ students' },
              { icon: Building2, title: 'Innovation Center', desc: 'Dedicated space for research and startups' },
            ].map((facility, index) => (
              <AnimatedSection key={facility.title} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                  <facility.icon className="w-12 h-12 text-corporate-lightBlue dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{facility.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
