'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Users, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const departments = [
  { name: 'Computer Science & Engineering', hod: 'Dr. Amit Kumar', labs: 5, faculty: 25, icon: Lightbulb },
  { name: 'Electronics & Communication', hod: 'Dr. Priya Singh', labs: 4, faculty: 18, icon: Award },
  { name: 'Mechanical Engineering', hod: 'Prof. Rajesh Sharma', labs: 6, faculty: 20, icon: GraduationCap },
  { name: 'Civil Engineering', hod: 'Dr. Suresh Patel', labs: 3, faculty: 15, icon: BookOpen },
  { name: 'Electrical Engineering', hod: 'Prof. Neha Verma', labs: 4, faculty: 12, icon: Users },
  { name: 'Information Technology', hod: 'Dr. Arun Mehta', labs: 4, faculty: 16, icon: Lightbulb },
];

export default function AcademicsPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-corporate-navy via-blue-900 to-corporate-dark text-white overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Academics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive academic programs designed for holistic development and industry-ready skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
  <section className="py-20 md:py-28 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-4">
                Academic Departments
              </h2>
              <p className="text-corporate-textSecondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Excellence across eight engineering disciplines with world-class faculty and facilities
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <AnimatedSection key={dept.name} delay={index * 0.1}>
                  <div className="card group hover:shadow-xl hover:-translate-y-2 transition-all bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent border-l-4 border-l-corporate-blue">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-bold bg-blue-100 dark:bg-blue-900 text-corporate-blue px-3 py-1 rounded-full">
                        {dept.labs + 1} Labs
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-4 leading-snug">
                      {dept.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></div>
                        <span className="text-sm text-corporate-textSecondary dark:text-gray-400">
                          <span className="font-semibold">HOD:</span> {dept.hod}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></div>
                        <span className="text-sm text-corporate-textSecondary dark:text-gray-400">
                          <span className="font-semibold">{dept.faculty}</span> Faculty Members
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
  <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-2xl p-8 md:p-12 border-2 border-corporate-blue/20">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-corporate-blue" />
                  <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white">
                    Academic Calendar 2024-25
                  </h2>
                </div>
                <p className="text-corporate-textSecondary dark:text-gray-400 mb-8">
                  Important academic dates and semester schedule
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-corporate-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-navy dark:text-white mb-2 text-lg">Semester 1</h4>
                      <p className="text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
                        August - December 2024<br/>
                        <span className="text-sm">Mid-term & End-term Examinations</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-corporate-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-navy dark:text-white mb-2 text-lg">Semester 2</h4>
                      <p className="text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
                        January - May 2025<br/>
                        <span className="text-sm">Mid-term & End-term Examinations</span>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </AnimatedSection>
                </div>
                </section>

                    {/* CTA Section */}
       <section className="py-16 md:py-24 bg-surface">
         <div className="section-container px-4 sm:px-6 lg:px-8">
           <AnimatedSection>
             <div className="text-center">
               <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-6">
                 Explore Our Programs
               </h2>
               <p className="text-corporate-textSecondary dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                 Discover detailed information about all our undergraduate and postgraduate programs
               </p>
               <Link
                 href="/academics/programs"
                 className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-blue text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
               >
                 View All Programs <ArrowRight className="w-5 h-5" />
               </Link>
             </div>
           </AnimatedSection>
         </div>
       </section>
     </>
   );
}
