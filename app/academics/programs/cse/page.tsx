'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

import ProgramSidebar from '@/components/ProgramSidebar';

const sidebarLinks = [
  { id: 'cse-home', label: 'CSE Home' },
  { id: 'vision-mission', label: 'Vision & Mission' },
  { id: 'peos', label: 'PEOs' },
  { id: 'pos-psos', label: 'POs & PSOs' },
  { id: 'knowledge-attitude', label: 'Knowledge and Attitude Profile (WA)' },
  { id: 'bos-members', label: 'BoS Members' },
  { id: 'curriculum', label: 'Curriculum & Syllabi' },
  { id: 'career-resources', label: 'Career & Resources' },
  { id: 'academic-calendar', label: 'Academic Calendar' },
  { id: 'laboratories', label: 'Laboratories' },
  { id: 'industry-lab', label: 'Industry Sponsored Laboratory' },
  { id: 'credentials', label: 'General Credentials' },
  { id: 'mous', label: 'MoUs' },
  { id: 'innovative-teaching', label: 'Innovative Teaching Methodologies' },
];

const heroHighlights = [
  'NBA accredited, outcome-based curriculum',
  'Strategic partnerships with global tech leaders',
  'Experiential learning through hackathons & living labs',
];

const programStats = [
  { label: 'Program Duration', value: '4 years (8 semesters)' },
  { label: 'Intake', value: '120 students' },
  { label: 'Accreditation', value: 'AICTE approved, NBA accredited' },
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

const bosMembers = [
  'Dr. V. S. Raju – Former Director, IIT Delhi (Chairperson)',
  'Dr. B. Rama – Professor, NIT Warangal (External Expert)',
  'Mr. S. Vijaya Kumar – VP Engineering, TechWave',
  'Dr. P. Lakshmi – HoD, CSE, NSRIET',
  'Mr. K. Sandeep – Alumni Representative, Google',
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
  'PEO1: Excel in professional careers or higher studies through strong fundamentals.',
  'PEO2: Contribute to society by designing sustainable and ethical computing solutions.',
  'PEO3: Demonstrate leadership, teamwork, and communication skills in multidisciplinary environments.',
  'PEO4: Embrace lifelong learning to keep pace with emerging technologies.',
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

const knowledgeAndAttitude = [
  'WA1: Ability to integrate math, science, and computing fundamentals.',
  'WA2: Professional ethics with strong communication and collaboration skills.',
  'WA3: Entrepreneurial mindset with societal and environmental consciousness.',
];

const credentials = [
  'NBA accredited (Tier-II) for CSE program.',
  '100+ research publications in the last three academic years.',
  '5+ patents filed with student-faculty collaboration.',
  'Consistent 80%+ placements with top tech firms.',
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

const careerOpportunities = [
  'Software Developer',
  'Full Stack Engineer',
  'Data Scientist',
  'Cloud Architect',
  'Systems Engineer',
  'DevOps Engineer',
];

const resourceLinks = [
  { label: 'Program Syllabus', icon: '📄', href: '#' },
  { label: 'Faculty Directory', icon: '📄', href: '#' },
  { label: 'CDC Placements', icon: '👥', href: '/cdc/placements' },
  { label: 'Learning Resources', icon: '📚', href: '#' },
];

export default function CSEPage() {
  return (
    <section className="bg-white dark:bg-[#040711] min-h-screen">
      <div className="section-container py-12 space-y-12">
        <header className="rounded-3xl bg-gradient-to-r from-corporate-navy via-corporate-blue to-blue-400 text-white p-10 shadow-2xl space-y-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs mb-3">Department of CSE</p>
            <h1 className="text-3xl md:text-4xl font-black mb-4">Computer Science &amp; Engineering</h1>
            <p className="text-lg text-white/90 mb-3">Building the future of software and computing technology</p>
            <p className="text-white/80 max-w-3xl">
              Future-ready curriculum, outcome-based learning, and partnerships with leading technology companies empower NSRIET CSE students
              to innovate confidently and lead the next wave of digital transformation.
            </p>
          </div>
          <ul className="grid gap-4 md:grid-cols-3 text-sm text-white/90">
            {heroHighlights.map((item) => (
              <li key={item} className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur border border-white/20">
                {item}
              </li>
            ))}
          </ul>
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
                    To be a center of excellence producing globally adaptable computing professionals with innovation, ethics, and sustainability at the core.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/30">
                  <h3 className="font-semibold text-corporate-navy dark:text-white mb-3">Mission</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>Deliver industry-aligned curriculum with experiential learning.</li>
                    <li>Promote research, entrepreneurship, and community impact.</li>
                    <li>Cultivate leadership with strong professional ethics.</li>
                  </ul>
                </div>
              </div>
            </CSESection>

            <CSESection id="peos" title="Program Educational Objectives (PEOs)">
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

            <CSESection id="knowledge-attitude" title="Knowledge &amp; Attitude Profile (WA)">
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                {knowledgeAndAttitude.map((item) => (
                  <p key={item} className="border-l-4 border-corporate-blue pl-4">{item}</p>
                ))}
              </div>
            </CSESection>

            <CSESection id="bos-members" title="Board of Studies (BoS) Members">
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {bosMembers.map((member) => (
                  <li key={member} className="flex items-start gap-3">
                    <span className="text-corporate-blue">•</span>
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
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

            <CSESection id="career-resources" title="Career &amp; Resources">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-corporate-navy dark:text-white mb-4">Career Opportunities</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {careerOpportunities.map((role) => (
                      <li key={role} className="flex items-start gap-3">
                        <span className="text-corporate-blue">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-corporate-navy dark:text-white mb-4">Downloads &amp; Links</h3>
                  <div className="space-y-3">
                    {resourceLinks.map((resource) => (
                      <Link
                        key={resource.label}
                        href={resource.href}
                        className="flex items-center justify-between rounded-2xl border border-corporate-blue/30 px-4 py-3 text-corporate-blue font-semibold hover:bg-corporate-blue hover:text-white transition"
                      >
                        <span>{`${resource.icon} ${resource.label}`}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
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

            <CSESection id="credentials" title="General Credentials">
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
                {credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
