'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function MechanicalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ThreeSectionPage
        title="Mechanical Engineering"
        subtitle="Design and innovate the machines of the future"
        heroVideo="/images/unicorn-1763085417516.webm"
        section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              The Mechanical Engineering program develops engineers capable of designing, analyzing, manufacturing, and improving mechanical systems and devices.
            </p>
            <p>
              Students learn thermodynamics, fluid mechanics, machine design, and manufacturing processes through theory, simulations, and hands-on project work.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Program Duration', value: '4 years (8 semesters)' },
                { label: 'Intake', value: '120 students' },
                { label: 'Accreditation', value: 'AICTE approved, NBA accredited' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-corporate-navy dark:text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
        section2={{
        title: 'Curriculum Highlights',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Thermodynamics & Heat Transfer',
                'Fluid Mechanics',
                'Machine Design',
                'Manufacturing Technology',
                'CAD & Simulation',
                'Mechanics of Materials',
                'Mechanical Vibrations',
                'Renewable Energy Systems',
                'Industrial Engineering',
                'Robotics & Automation',
              ].map((subject) => (
                <div key={subject} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-corporate-blue font-bold">✓</span>
                  <span className="text-corporate-navy dark:text-gray-200 font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
        section3={{
        title: 'Career & Resources',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Career Opportunities</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• Mechanical Design Engineer</li>
                <li>• Manufacturing Engineer</li>
                <li>• Robotics Engineer</li>
                <li>• Automotive Engineer</li>
                <li>• Thermal Engineer</li>
                <li>• Process Engineer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Program Overview</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 CAD Labs</a>
                <a href="/cdc/placements" className="block text-corporate-blue hover:underline font-medium">👥 Placements</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📚 Project Gallery</a>
              </div>
            </div>
          </div>
        ),
      }}
      />
    </div>
  );
}
