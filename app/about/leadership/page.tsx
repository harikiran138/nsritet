'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { ProfileCard } from '@/components/ProfileCard';

export default function LeadershipPage() {
  return (
    <ThreeSectionPage
      title="Leadership"
      subtitle="Visionary leaders driving NSRIET's mission of educational excellence"
      section1={{
        title: '',
        content: (
          <div>
            <ProfileCard
              name="Dr. M. A. Khadar Baba"
              title="Principal, NSRIET"
              description="Dr. M. A. Khadar Baba is currently Principal of Nadimpalli Satyanarayana Raju Institute of Engineering and Technology, Visakhapatnam, Andhra Pradesh (India). He obtained Bachelor's Degree in ECE from Osmania University, Hyderabad, in 1988, Masters from University College Engineering, Osmania University, Hyderabad and PhD from GITAM, Deemed to be University, Visakhapatnam. He has published and presented about 40 research papers in various national, international journals and conferences related to Communication Engineering, GPS and GAGAN system, Embedded Systems, Signal Processing and 5G Communications. He has guided many students pursuing M.Tech in the above fields. He attended several training programs organized by NITs and other reputed organizations and professional societies. He has organized quite a good number of Conferences, Workshops, Symposia, Seminars related to communications Engineering VLSI Design, Microcontrollers, Embedded Systems and Signal Processing which includes AICTE, IETE and ISTE sponsored programs. He is a fellow of IETE and member of ISTE. Earlier he has worked in reputed organizations like GITAM, Visakhapatnam, Srinidhi Institute of Science and Technology, Hyderabad; CMR College of Engineering and Technology, Hyderabad; Guru Nanak Institutions, Hyderabad in various capacities such as Sr. Lecturer, Assistant professor, professor, Associate Professor, Professor and Head of the Department for about 30 years. He is the former principal of NS Raju Institute of Technology (Sontyam), served there for two years. Also served as a member and chairman Board of Studies in Faculty of ECE, of different institutions."
              imageUrl="/images/KhadarBaba.jpeg"
              githubUrl="#"
              twitterUrl="#"
              youtubeUrl="#"
              linkedinUrl="#"
            />
          </div>
        ),
      }}
      section2={{
        title: 'Leadership Philosophy',
        content: (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Excellence', desc: 'Commitment to highest standards in academics, research, and administration' },
              { title: 'Inclusivity', desc: 'Creating an environment where every student and faculty member can thrive' },
              { title: 'Innovation', desc: 'Fostering creative thinking and continuous improvement across all areas' },
              { title: 'Integrity', desc: 'Operating with transparency and ethical conduct in all decisions' },
              { title: 'Collaboration', desc: 'Building strong partnerships with industry, academia, and society' },
              { title: 'Accountability', desc: 'Taking responsibility for institutional outcomes and student success' },
            ].map((value, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/30 rounded-lg border-l-4 border-l-corporate-blue">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-1 text-sm">{value.title}</h4>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        ),
      }}
      section3={{
        title: 'Contact & Engagement',
        content: (
          <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-corporate-navy dark:text-white mb-4">Office Hours & Contact</h4>
            <p className="text-corporate-textSecondary dark:text-gray-400 text-sm mb-4">
              Leadership is accessible to students, faculty, and parents. Schedule an appointment through the principal&apos;s office or write to us with your feedback and suggestions.
            </p>
            <div className="space-y-2 text-sm text-corporate-textSecondary dark:text-gray-400">
              <p><span className="font-semibold">Email:</span> principal@nsriet.edu.in</p>
              <p><span className="font-semibold">Phone:</span> +91-XXXXXXXXXX</p>
              <p><span className="font-semibold">Office Hours:</span> Mon-Fri, 10 AM - 5 PM</p>
            </div>
          </div>
        ),
      }}
    />
  );
}
