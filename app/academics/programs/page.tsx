'use client';

import Link from 'next/link';
import ThreeSectionPage from '@/components/ThreeSectionPage';
import { GraduationCap, Code, Zap, Cog, BookOpen } from 'lucide-react';

const programs = [
  {
    icon: Code,
    name: 'Computer Science & Engineering',
    href: '/academics/programs/cse',
    description: 'Modern computer science education with focus on software development and systems.',
  },
  {
    icon: Code,
    name: 'CSE (AI & Machine Learning)',
    href: '/academics/programs/cse-aiml',
    description: 'Specialized program in artificial intelligence and machine learning technologies.',
  },
  {
    icon: Zap,
    name: 'Electronics & Communication Engineering',
    href: '/academics/programs/ece',
    description: 'Learn cutting-edge communication systems and electronic circuit design.',
  },
  {
    icon: Zap,
    name: 'Electrical & Electronics Engineering',
    href: '/academics/programs/eee',
    description: 'Comprehensive education in power systems and electrical engineering.',
  },
  {
    icon: Cog,
    name: 'Mechanical Engineering',
    href: '/academics/programs/mechanical',
    description: 'Design, analysis, and manufacturing of mechanical systems.',
  },
  {
    icon: BookOpen,
    name: 'Master of Business Administration',
    href: '/academics/programs/mba',
    description: 'Postgraduate business education for future leaders.',
  },
];

export default function ProgramsPage() {
  return (
    <ThreeSectionPage
      title="Our Programs"
      subtitle="Comprehensive engineering and business education programs"
      section1={{
        title: 'Academic Programs Overview',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET offers a diverse range of undergraduate and postgraduate programs designed to meet industry standards and prepare students for successful careers.
            </p>
            <p>
              Our curriculum emphasizes theoretical knowledge combined with practical experience, ensuring students graduate with both technical expertise and soft skills required in today's competitive job market.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Featured Programs',
        content: (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link key={program.name} href={program.href}>
                <div className="card group hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <program.icon className="w-6 h-6 text-corporate-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-corporate-navy dark:text-white mb-2 group-hover:text-corporate-blue transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-corporate-textSecondary dark:text-gray-400 text-sm">
                    {program.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ),
      }}
      section3={{
        title: 'Program Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/academics/calendar" className="text-corporate-blue hover:underline font-medium">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/academics/resources" className="text-corporate-blue hover:underline font-medium">
                    Knowledge Resource Centre
                  </Link>
                </li>
                <li>
                  <Link href="/academics/lms" className="text-corporate-blue hover:underline font-medium">
                    Learning Management System
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                Downloads
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-corporate-blue hover:underline font-medium">
                    📄 Program Brochure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-corporate-blue hover:underline font-medium">
                    📄 Admission Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-corporate-blue hover:underline font-medium">
                    📄 Curriculum Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ),
      }}
    />
  );
}
