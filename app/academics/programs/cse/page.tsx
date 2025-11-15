'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

import ProgramSidebar from '@/components/ProgramSidebar';

const sidebarLinks = [
  { id: 'cse-home', label: 'CSE Home' },
  { id: 'vision-mission', label: 'Vision & Mission' },
  { id: 'peos', label: 'PEOs' },
  { id: 'pos-psos', label: 'POs & PSOs' },
  { id: 'curriculum', label: 'Curriculum & Syllabi' },
  { id: 'academic-calendar', label: 'Academic Calendar' },
  { id: 'laboratories', label: 'Laboratories' },
  { id: 'industry-lab', label: 'Industry Sponsored Laboratory' },
  { id: 'mous', label: 'MoUs' },
  { id: 'innovative-teaching', label: 'Innovative Teaching Methodologies' },
];

const heroHighlights = [
  'AICTE Approved Programs',
  'Strategic partnerships with global tech leaders',
  'Experiential learning through hackathons & living labs',
];

const programStats = [
  { label: 'Program Duration', value: '4 years (8 semesters)' },
  { label: 'Intake', value: '120 students' },
  { label: 'Approvals & Affiliation', value: 'AICTE Approved · JNTU GV Affiliated' },
];

const coreSubjects = [
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Web Development',
  'Software Engineering',
  'Mobile Application Development',
  'Cloud Computing',
];

const learningOutcomes = [
  'Proficiency in multiple programming languages and frameworks',
  'Understanding of software development lifecycle and best practices',
  'Ability to design scalable and secure systems',
  'Problem-solving skills for complex computational challenges',
];

const labs = [
  'Advanced Programming Lab',
  'AI & ML Exploration Lab',
  'Full Stack Development Studio',
  'Cloud & DevOps Lab',
  'Embedded & IoT Lab',
  'AR/VR Innovation Lab',
];

const industryLabs = [
  { name: 'Microsoft Center of Excellence', focus: 'Azure cloud-native development' },
  { name: 'AWS DeepRacer Garage', focus: 'Autonomous driving & ML workflows' },
  { name: 'UiPath RPA Studio', focus: 'Automation and low-code platforms' },
];

const peos = [
  'PEO1: Demonstrate contemporary competencies that leverage critical thinking and problem-solving abilities, applying foundational and conceptual knowledge to fulfill client business needs in a rapidly evolving technological landscape.',
  'PEO2: Foster a successful professional trajectory by launching startups or contributing as effective team members or leaders within the IT sector and related industries.',
  'PEO3: Pursue self-directed learning and advanced academic endeavors aligned with industry demands to achieve professional excellence and sustained career advancement.',
];

const pos = [
  'PO1: Engineering knowledge',
  'PO2: Problem analysis',
  'PO3: Design & development of solutions',
  'PO4: Conduct investigations of complex problems',
  'PO5: Modern tool usage',
  'PO6: The engineer and society',
  'PO7: Environment & sustainability',
  'PO8: Ethics',
  'PO9: Individual & teamwork',
  'PO10: Communication',
  'PO11: Project management & finance',
  'PO12: Lifelong learning',
];

const psos = [
  'PSO1: Design intelligent software using AI/ML and data engineering practices.',
  'PSO2: Build secure, scalable full-stack solutions for cloud and mobile platforms.',
];

const mouPartners = [
  'Infosys Springboard',
  'AWS Academy',
  'Google for Education',
  'TCS iON',
  'Red Hat Academy',
];

const innovativePractices = [
  'Problem-based learning sprints every fortnight.',
  'Living labs with industry mentors on campus.',
  'Peer teaching pods for advanced electives.',
  'Micro-credential courses integrated with MOOCs.',
  'Capstone studios reviewed by alumni and industry advisors.',
];

export default function CSEPage() {
  return (
    <section className="bg-white dark:bg-[#040711] min-h-screen text-gray-900 dark:text-white">
  <div className="mx-auto w-full max-w-[95rem] px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12 md:pt-20">
        <header className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-corporate-navy via-corporate-blue to-sky-400 px-8 py-12 text-white shadow-[0_35px_80px_-40px_rgba(15,23,42,0.9)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" aria-hidden="true" />
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <div>
                <p className="uppercase tracking-[0.4em] text-[11px] text-white/70">Department of CSE</p>
                <h1 className="text-[2rem] md:text-[2.75rem] font-black mt-3 drop-shadow-lg">Computer Science &amp; Engineering</h1>
                <p className="text-lg text-white/90 mt-4">Building the future of software and computing technology</p>
              </div>
              <p className="text-white/85 max-w-2xl leading-relaxed">
                Future-ready curriculum, outcome-based learning, and partnerships with leading technology companies empower NSRIET CSE students to
                innovate confidently and lead the next wave of digital transformation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#curriculum"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-corporate-navy shadow-lg shadow-black/10"
                >
                  Explore Curriculum
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="#academic-calendar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 font-semibold text-white/90 hover:bg-white/10"
                >
                  Academic Calendar
                </Link>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid gap-4 sm:grid-cols-3">
                {programStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/15 p-4 text-center">
                    <p className="text-[11px] uppercase tracking-wide text-white/70">{stat.label}</p>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <ProgramSidebar links={sidebarLinks} />

          <div className="flex-1 w-full space-y-12">
            <CSESection id="cse-home" title="Program Overview">
              <div className="space-y-5 text-gray-600 dark:text-gray-300">
                <p>
                  The Computer Science &amp; Engineering program at NSRIET is designed to develop skilled software professionals who can solve
                  real-world computational problems. Students gain expertise in programming, software design, and computer systems while
                  working on industry-relevant projects and research initiatives.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {programStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <p className="text-lg font-semibold text-corporate-navy dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CSESection>

            <CSESection id="vision-mission" title="Vision &amp; Mission">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/30">
                  <h3 className="font-semibold text-corporate-navy dark:text-white mb-3">Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To develop students as skilled computer science and engineering professionals ready to excel in industry, research, and contribute meaningfully to society.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/30">
                  <h3 className="font-semibold text-corporate-navy dark:text-white mb-3">Mission</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>
                      <span className="font-semibold text-corporate-navy dark:text-white">M1: Academic Excellence — </span>
                      Provide comprehensive knowledge in computer science fundamentals and advanced concepts through effective teaching methods, with strong emphasis on practical software development skills.
                    </li>
                    <li>
                      <span className="font-semibold text-corporate-navy dark:text-white">M2: Industry-Ready Skills — </span>
                      Equip students with hands-on training in cutting-edge tools, technologies, and emerging industry trends, preparing them for successful careers or entrepreneurship.
                    </li>
                    <li>
                      <span className="font-semibold text-corporate-navy dark:text-white">M3: Holistic Learning — </span>
                      Foster interdisciplinary learning that combines technical expertise with broader perspectives, enabling students to solve real-world problems innovatively.
                    </li>
                    <li>
                      <span className="font-semibold text-corporate-navy dark:text-white">M4: Lifelong Learning & Ethics — </span>
                      Nurture ethical, adaptable professionals committed to continuous learning and growth throughout their careers.
                    </li>
                  </ul>
                </div>
              </div>
            </CSESection>

            <CSESection id="peos" title="Program Educational Objectives (PEO's)">
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                {peos.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </CSESection>

            <CSESection id="pos-psos" title="Program Outcomes (POs) &amp; PSOs">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-corporate-navy dark:text-white mb-4">Program Outcomes (POs)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {pos.map((po) => (
                      <div key={po} className="rounded-2xl border border-gray-100 dark:border-white/10 p-4 text-gray-600 dark:text-gray-300">
                        {po}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-corporate-navy dark:text-white mb-4">Program Specific Outcomes (PSOs)</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {psos.map((pso) => (
                      <li key={pso}>{pso}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CSESection>

            <CSESection id="curriculum" title="Curriculum Highlights &amp; Syllabi">
              <div className="grid gap-6 lg:grid-cols-2 mb-6">
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-corporate-navy dark:text-white mb-4">Core Subjects</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {coreSubjects.map((subject) => (
                      <li key={subject} className="flex items-start gap-3">
                        <span className="text-green-500">✓</span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-corporate-navy dark:text-white mb-4">Learning Outcomes</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {learningOutcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Outcome-based curriculum covering core computing, emerging tech electives, and interdisciplinary pathways. Download the detailed syllabus and course outcomes below.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="px-4 py-2 rounded-full border border-corporate-blue text-corporate-blue font-semibold hover:bg-corporate-blue hover:text-white transition">
                  📄 CSE UG Syllabus
                </Link>
                <Link href="#" className="px-4 py-2 rounded-full border border-corporate-blue text-corporate-blue font-semibold hover:bg-corporate-blue hover:text-white transition">
                  📄 Elective Booklet
                </Link>
              </div>
            </CSESection>

            <CSESection id="academic-calendar" title="Academic Calendar">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The department follows an activity-rich calendar with assessments, workshops, internships, and hackathons mapped semester-wise.
              </p>
              <Link href="/academics/calendar" className="inline-flex items-center gap-2 rounded-full bg-corporate-blue px-5 py-2.5 text-white font-semibold">
                View Calendar
              </Link>
            </CSESection>

            <CSESection id="laboratories" title="Laboratories">
              <div className="grid md:grid-cols-2 gap-4">
                {labs.map((lab) => (
                  <div key={lab} className="rounded-2xl border border-gray-100 dark:border-white/10 p-4 text-gray-600 dark:text-gray-300">
                    {lab}
                  </div>
                ))}
              </div>
            </CSESection>

            <CSESection id="industry-lab" title="Industry Sponsored Laboratory">
              <div className="space-y-4">
                {industryLabs.map((lab) => (
                  <div key={lab.name} className="rounded-2xl bg-blue-50 dark:bg-blue-900/30 p-5">
                    <h3 className="font-semibold text-corporate-navy dark:text-white">{lab.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Focus: {lab.focus}</p>
                  </div>
                ))}
              </div>
            </CSESection>

            <CSESection id="mous" title="Memoranda of Understanding (MoUs)">
              <div className="flex flex-wrap gap-3">
                {mouPartners.map((partner) => (
                  <span key={partner} className="rounded-full border border-corporate-blue/40 px-4 py-2 text-sm font-semibold text-corporate-blue">
                    {partner}
                  </span>
                ))}
              </div>
            </CSESection>

            <CSESection id="innovative-teaching" title="Innovative Teaching Methodologies">
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                {innovativePractices.map((practice) => (
                  <div key={practice} className="rounded-2xl border border-gray-100 dark:border-white/10 p-4">
                    {practice}
                  </div>
                ))}
              </div>
            </CSESection>
          </div>
        </div>
      </div>
    </section>
  );
}

type CSESectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function CSESection({ id, title, children }: CSESectionProps) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-gray-100 dark:border-white/5 bg-white dark:bg-slate-900 p-8 shadow-xl scroll-mt-32"
    >
      <h2 className="text-2xl font-bold text-corporate-navy dark:text-white mb-5">{title}</h2>
      {children}
    </section>
  );
}
