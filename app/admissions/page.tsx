'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

const courses = [
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    duration: '4 Years',
    seats: 180,
    eligibility: '60% in 10+2 with PCM',
  },
  {
    name: 'Electronics & Communication',
    code: 'ECE',
    duration: '4 Years',
    seats: 120,
    eligibility: '60% in 10+2 with PCM',
  },
  {
    name: 'Mechanical Engineering',
    code: 'ME',
    duration: '4 Years',
    seats: 120,
    eligibility: '60% in 10+2 with PCM',
  },
  {
    name: 'Civil Engineering',
    code: 'CE',
    duration: '4 Years',
    seats: 90,
    eligibility: '60% in 10+2 with PCM',
  },
  {
    name: 'Electrical Engineering',
    code: 'EE',
    duration: '4 Years',
    seats: 60,
    eligibility: '60% in 10+2 with PCM',
  },
  {
    name: 'Information Technology',
    code: 'IT',
    duration: '4 Years',
    seats: 60,
    eligibility: '60% in 10+2 with PCM',
  },
];

const admissionProcess = [
  { step: '1', title: 'Online Application', desc: 'Fill the application form' },
  { step: '2', title: 'Document Verification', desc: 'Submit required documents' },
  { step: '3', title: 'Entrance Exam', desc: 'Appear for entrance test' },
  { step: '4', title: 'Counseling', desc: 'Attend counseling session' },
  { step: '5', title: 'Admission', desc: 'Complete admission formalities' },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-corporate-blue to-corporate-lightBlue dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Admissions 2024-25</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Begin your journey towards excellence. Applications are now open!
            </p>
            <button className="px-8 py-4 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Programs Offered
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Choose from our diverse range of engineering programs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <AnimatedSection key={course.code} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4 border-corporate-lightBlue dark:border-blue-400">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center font-bold text-corporate-lightBlue dark:text-blue-400">
                      {course.code}
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                      {course.seats} Seats
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-corporate-blue dark:text-white mb-3">
                    {course.name}
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Duration: {course.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {course.eligibility}
                    </p>
                  </div>
                  <button className="w-full py-2 bg-corporate-lightBlue text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue dark:text-white mb-4">
                Admission Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Simple steps to secure your seat at NSRIET
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {admissionProcess.map((process, index) => (
                <AnimatedSection key={process.step} delay={index * 0.15}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-corporate-lightBlue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {process.step}
                      </div>
                      {index < admissionProcess.length - 1 && (
                        <div className="w-1 h-full bg-blue-200 dark:bg-blue-900 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-bold text-corporate-blue dark:text-white mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 border-l-8 border-orange-500">
              <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-300 mb-6">
                Important Dates
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Application Start Date</h4>
                  <p className="text-gray-700 dark:text-gray-300">1st January 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Application Deadline</h4>
                  <p className="text-gray-700 dark:text-gray-300">31st March 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Entrance Exam Date</h4>
                  <p className="text-gray-700 dark:text-gray-300">15th April 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Counseling Dates</h4>
                  <p className="text-gray-700 dark:text-gray-300">1st - 15th May 2025</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
