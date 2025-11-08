'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import CourseCard from '@/components/CourseCard';
import Image from 'next/image';

const courses = [
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    duration: '4 Years',
    seats: 180,
    eligibility: 'Minimum 60% in 10+2 with Physics, Chemistry, Mathematics',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    duration: '4 Years',
    seats: 120,
    eligibility: 'Minimum 60% in 10+2 with Physics, Chemistry, Mathematics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    name: 'Mechanical Engineering',
    code: 'ME',
    duration: '4 Years',
    seats: 120,
    eligibility: 'Minimum 60% in 10+2 with Physics, Chemistry, Mathematics',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
  },
  {
    name: 'Civil Engineering',
    code: 'CE',
    duration: '4 Years',
    seats: 90,
    eligibility: 'Minimum 60% in 10+2 with Physics, Chemistry, Mathematics',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
  },
  {
    name: 'Electrical & Electronics Engineering',
    code: 'EEE',
    duration: '4 Years',
    seats: 60,
    eligibility: 'Minimum 60% in 10+2 with Physics, Chemistry, Mathematics',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
  },
  {
    name: 'Information Technology',
    code: 'IT',
    duration: '4 Years',
    seats: 60,
    eligibility: 'Minimum 60% in 10+2 with Physics, Chemistry, Mathematics',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
];

const admissionProcess = [
  { step: '1', title: 'Online Application', desc: 'Complete the application form with required details' },
  { step: '2', title: 'Document Verification', desc: 'Submit educational certificates and identification' },
  { step: '3', title: 'Entrance Examination', desc: 'Appear for institutional entrance test or JEE Main' },
  { step: '4', title: 'Counseling Session', desc: 'Attend counseling for branch allocation' },
  { step: '5', title: 'Fee Payment & Admission', desc: 'Complete formalities and confirm admission' },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-corporate-navy">
        <div className="section-container px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Admissions 2024-25</h1>
            <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
              Applications are now open for undergraduate engineering programs. Secure your future with quality education.
            </p>
            <button className="px-8 py-4 bg-corporate-blue text-white font-semibold hover:bg-opacity-90 transition-colors">
              Apply Online
            </button>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
              Undergraduate Programs
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-12 max-w-3xl">
              AICTE-approved Bachelor of Engineering programs with industry-aligned curriculum
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.code} {...course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-4">
              Admission Process
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-12">
              Follow these steps to complete your admission
            </p>
          </AnimatedSection>

          <div className="max-w-4xl">
            {admissionProcess.map((process, index) => (
              <AnimatedSection key={process.step} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-corporate-blue text-white flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    {index < admissionProcess.length - 1 && (
                      <div className="w-0.5 h-full bg-corporate-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-2">
                      {process.title}
                    </h3>
                    <p className="text-corporate-textSecondary dark:text-gray-400">
                      {process.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-corporate-background dark:bg-gray-800">
        <div className="section-container px-8">
          <AnimatedSection>
            <div className="bg-white dark:bg-gray-900 border border-corporate-border p-8">
              <h2 className="text-2xl font-bold text-corporate-navy dark:text-white mb-6">
                Important Dates
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-corporate-blue pl-4">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-1">Application Start</h4>
                  <p className="text-corporate-textSecondary dark:text-gray-400">1st January 2025</p>
                </div>
                <div className="border-l-4 border-corporate-blue pl-4">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-1">Application Deadline</h4>
                  <p className="text-corporate-textSecondary dark:text-gray-400">31st March 2025</p>
                </div>
                <div className="border-l-4 border-corporate-blue pl-4">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-1">Entrance Examination</h4>
                  <p className="text-corporate-textSecondary dark:text-gray-400">15th April 2025</p>
                </div>
                <div className="border-l-4 border-corporate-blue pl-4">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-1">Counseling Dates</h4>
                  <p className="text-corporate-textSecondary dark:text-gray-400">1st - 15th May 2025</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
