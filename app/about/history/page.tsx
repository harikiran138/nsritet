'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function HistoryPage() {
  return (
    <ThreeSectionPage
      title="Our History"
      subtitle="A journey of excellence and growth"
      section1={{
        title: 'Institutional Journey',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET was established with a vision to provide quality engineering education and contribute to national development.
            </p>
            <p>
              Since its inception, the institution has grown into a premier engineering college with state-of-the-art facilities, dedicated faculty, and a strong commitment to academic excellence.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Milestones & Achievements',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { year: '2012', event: 'Founded as an AICTE-approved engineering college' },
                { year: '2015', event: 'Achieved NBA accreditation for engineering programs' },
                { year: '2018', event: 'Established Research and Innovation Centre' },
                { year: '2020', event: 'Expanded into postgraduate programs (MBA)' },
                { year: '2023', event: 'Launched AI & ML specialization program' },
                { year: '2024', event: 'Achieved NAAC accreditation' },
              ].map((milestone) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900">
                      <span className="text-corporate-blue font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-corporate-navy dark:text-white font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Heritage & Recognition',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Accreditations</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• AICTE Approval</li>
                <li>• NBA Accreditation</li>
                <li>• NAAC Accreditation</li>
                <li>• ISO 9001:2015 Certified</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Key Documents</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Institution History</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 NAAC Report</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Recognitions</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
