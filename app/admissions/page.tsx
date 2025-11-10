'use client';

import AnimatedSection from '@/components/AnimatedSection';
import CourseCard from '@/components/CourseCard';
import HeroSection from '@/components/HeroSection';

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
      {/* Hero Section */}
      <HeroSection
        title="Admissions 2024-25"
        subtitle="Begin Your Engineering Journey"
        description="Applications are now open for undergraduate engineering programs. Secure your future with world-class technical education and industry-aligned curriculum."
        backgroundImage="/hero-bg.png"
        primaryCTA={{
          text: 'Apply Online',
          href: '#',
        }}
      />

      {/* Programs */}
      <section className="py-20 md:py-28 bg-surface relative">
        {/* Decorative element */}
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 pointer-events-none"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-4">
              Undergraduate Programs
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-16 max-w-3xl">
              AICTE-approved Bachelor of Engineering programs with industry-aligned curriculum and cutting-edge facilities
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.code} {...course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
  <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800">
    <div className="section-container px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy dark:text-white mb-4">
          Admission Process
        </h2>
        <p className="text-corporate-textSecondary dark:text-gray-300 text-lg mb-16 max-w-3xl">
          Follow these 5 simple steps to complete your admission
        </p>
      </AnimatedSection>

      <div className="max-w-5xl">
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-14 left-6 h-[calc(100%-3.5rem)] w-0.5 bg-gradient-to-b from-corporate-blue to-blue-200"></div>
          
          <div className="space-y-8 md:space-y-10">
            {admissionProcess.map((process, index) => (
              <AnimatedSection key={process.step} delay={index * 0.1}>
                <div className="flex gap-6 md:gap-8 relative">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-corporate-blue to-blue-600 text-white flex items-center justify-center font-bold text-lg rounded-full shadow-lg hover:scale-110 transition-transform">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1 pb-4 pt-1">
                    <div className="card hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-2">
                        {process.title}
                      </h3>
                      <p className="text-corporate-textSecondary dark:text-gray-400">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Important Dates */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 border-2 border-corporate-blue/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
                Important Dates
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { label: 'Application Start', date: '1st January 2025' },
                  { label: 'Application Deadline', date: '31st March 2025' },
                  { label: 'Entrance Examination', date: '15th April 2025' },
                  { label: 'Counseling Dates', date: '1st - 15th May 2025' },
                ].map((item, index) => (
                  <AnimatedSection key={item.label} delay={index * 0.1}>
                    <div className="bg-white dark:bg-gray-800 border-l-4 border-l-corporate-blue rounded-lg p-6 hover:shadow-lg transition-all">
                      <h4 className="font-bold text-corporate-navy dark:text-white mb-2 text-lg">{item.label}</h4>
                      <p className="text-corporate-textSecondary dark:text-gray-400 text-base font-semibold">{item.date}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
