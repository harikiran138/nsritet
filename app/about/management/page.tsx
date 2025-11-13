'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { ProfileCard } from '@/components/ProfileCard';

export default function ManagementPage() {
  return (
    <ThreeSectionPage
      title="Management"
      subtitle="Guided by experienced administrators and educational leaders"
      section1={{
        title: 'Administrative Leadership',
        content: (
          <div className="space-y-16">
            <p className="text-center mb-8">
              NSRIET is led by a team of experienced administrators and educational professionals committed to institutional excellence and student success.
            </p>
            
            {/* First Profile Card - Normal Layout */}
            <ProfileCard
              name="Shri. N. Satyanarayana Raju"
              title="Chairman, NSRIET"
              description='The well-known Chinese proverb states: "If you are planning for one year, sow rice; for ten years, plant trees; but if you are planning for a lifetime, educate people." In today&apos;s rapidly evolving technological landscape, the demand for skilled and adaptive professionals has never been greater. With this vision, the Oxford Educational Society, under the inspiring leadership of Sri N. Satyanarayana Raju, established the N S Raju Institute of Engineering and Technology (NSRIET) to provide high-quality education in Engineering and Management disciplines. Our objective is to empower young minds with knowledge, creativity, innovation, and professional competence to confidently meet the challenges of the 21st-century technology-driven world.'
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
              githubUrl="#"
              twitterUrl="#"
              youtubeUrl="#"
              linkedinUrl="#"
            />

            {/* Second Profile Card - Flipped Layout */}
            <ProfileCard
              name="Dr. N. Prasada Raju"
              title="Secretary, NSRIET"
              description="I am pleased to extend my warm greetings to all students, parents, faculty members, and well-wishers of Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT) and N S Raju Institute of Engineering and Technology (NSRIET). Our institutions are committed to nurturing young minds with knowledge, discipline, and values that prepare them to excel in an ever-evolving global environment. At NSRIT and NSRIET, we believe that education must inspire curiosity, creativity, and a sense of purpose. Our efforts are focused on providing a holistic learning experience where students gain strong theoretical foundations, practical exposure, and the confidence to innovate and lead. I welcome all new members to our academic community and wish them a rewarding and transformative journey ahead."
              imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
              githubUrl="#"
              twitterUrl="#"
              youtubeUrl="#"
              linkedinUrl="#"
              flipped={true}
            />
          </div>
        ),
      }}
      section2={{
        title: 'Governance Structure',
        content: (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { role: 'Principal', name: 'Dr. [Name]', qualification: 'PhD, 25+ years of experience' },
                { role: 'Vice Principal (Academic)', name: 'Dr. [Name]', qualification: 'PhD in Engineering' },
                { role: 'Registrar', name: '[Name]', qualification: 'M.Tech, 15+ years of experience' },
                { role: 'Finance Officer', name: '[Name]', qualification: 'CA, MBA' },
              ].map((member) => (
                <div key={member.role} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white">{member.role}</h3>
                  <p className="text-sm text-corporate-navy dark:text-gray-300 mt-2">{member.name}</p>
                  <p className="text-xs text-corporate-textSecondary dark:text-gray-400 mt-1">{member.qualification}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Contact & Policies',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Administrative Offices</h3>
              <ul className="space-y-4 text-corporate-navy dark:text-gray-200">
                <li>• Principal&apos;s Office</li>
                <li>• Academic Office</li>
                <li>• Admissions Office</li>
                <li>• Finance & Accounts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Important Documents</h3>
              <div className="space-y-4">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Organizational Chart</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Management Policies</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Contact Directory</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}
