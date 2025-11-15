'use client';

import Link from 'next/link';
import { navigationItems } from '@/lib/navigation';
import ThreeSectionPage from '@/components/ThreeSectionPage';
import { GraduationCap, Code, Zap, Cog, BookOpen } from 'lucide-react';

const programDetails: { [key: string]: { icon: React.ElementType; description: string } } = {
  '/academics/programs/cse': {
    icon: Code,
    description: 'Modern computer science education with focus on software development and systems.',
  },
  '/academics/programs/cse-aiml': {
    icon: Code,
    description: 'Specialized program in artificial intelligence and machine learning technologies.',
  },
  '/academics/programs/ece': {
    icon: Zap,
    description: 'Learn cutting-edge communication systems and electronic circuit design.',
  },
  '/academics/programs/eee': {
    icon: Zap,
    description: 'Comprehensive education in power systems and electrical engineering.',
  },
  '/academics/programs/mechanical': {
    icon: Cog,
    description: 'Design, analysis, and manufacturing of mechanical systems.',
  },
  '/academics/programs/mba': {
    icon: BookOpen,
    description: 'Postgraduate business education for future leaders.',
  },
};
const DEFAULT_PROGRAM_IMAGE = '/images/programs/mba.jpeg';
const programImages: Record<string, string> = {
  '/academics/programs/cse': '/images/programs/cse.jpeg',
  '/academics/programs/cse-aiml': '/images/programs/aiml.png',
  '/academics/programs/mba': '/images/programs/mba.jpeg',
  '/academics/programs/mechanical': '/images/programs/MechanicalEngineering.jpeg',
  '/academics/programs/ece': '/images/programs/ElectronicsandCommunication.jpeg',
  '/academics/programs/eee': '/images/programs/ElectricalandElectronicsEngineering.jpeg',
};

const programDisplayNames: Record<string, string> = {
  '/academics/programs/ece': 'Electronics and Communication Engineering',
  '/academics/programs/eee': 'Electrical and Electronics Engineering',
  '/academics/programs/mba': 'Master of Business Administration',
  '/academics/programs/cse-aiml': 'CSE (Artificial Intelligence & Machine Learning)',
};

const multilineProgramHrefs = new Set([
  '/academics/programs/cse-aiml',
  '/academics/programs/ece',
  '/academics/programs/eee',
]);

const academicsMenu = navigationItems.find(item => item.href === '/academics');
const programsMenu = academicsMenu?.submenu?.find(item => item.href === '/academics/programs');

const programs = programsMenu?.submenu?.map(item => {
  const details = programDetails[item.href] || { icon: GraduationCap, description: 'A leading program in its field.' };
  return {
    ...item,
    ...details,
    displayName: programDisplayNames[item.href] || item.name,
  };
}) || [];

export default function ProgramsPage() {
  return (
    <ThreeSectionPage
      title="Our Programs"
      subtitle="Comprehensive engineering and business education programs"
      heroVideo="/images/unicorn-1763085417516.webm"
      section1={{
        title: 'Academic Programs Overview',
        content: (
          <div className="space-y-4">
            <p className="text-justify">
              NSRIET offers a future-ready academic ecosystem through Computer Science and Engineering (CSE – 180 intake), Computer Science and Engineering (Artificial Intelligence & Machine Learning) [CSE (AI & ML) – 120], Computer Science and Engineering (CSM specialization – 60), Electronics and Communication Engineering (ECE – 120), Electrical and Electronics Engineering (EEE – 30), Mechanical Engineering (ME – 30), and the Master of Business Administration (MBA – 60). Each program blends rigorous theory with immersive labs, industry-focused assignments, and real-world project exposure, ensuring students build deep technical expertise, sharpen problem-solving skills, and graduate ready to thrive in today&apos;s dynamic professional landscape.
            </p>

          </div>
        ),
      }}
      section2={{
        title: 'Featured Programs',
        content: (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const backgroundImage = programImages[program.href] || DEFAULT_PROGRAM_IMAGE;
              const allowMultilineTitle = multilineProgramHrefs.has(program.href);
              const titleClassName = `text-base sm:text-lg md:text-xl font-semibold text-white leading-tight tracking-tight ${allowMultilineTitle ? 'whitespace-normal' : 'whitespace-nowrap'}`;

              return (
                <Link key={program.name} href={program.href} className="block group/card" aria-label={program.displayName || program.name}>
                  <div
                    className="relative h-72 md:h-80 rounded-md overflow-hidden shadow-xl card transition-all duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-blue"
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="absolute inset-0 transition duration-300 opacity-60 group-hover/card:bg-black" />
                    <div className="relative z-10 flex flex-col justify-end h-full px-4 py-6 sm:px-5 md:px-6">
                      <h3 className={titleClassName}>
                        {program.displayName}
                      </h3>
                      <p className="text-gray-200 text-sm mt-4 max-w-sm">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
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
