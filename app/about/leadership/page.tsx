'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { ProfileCard } from '@/components/ProfileCard';

export default function LeadershipPage() {
  return (
    <ThreeSectionPage
      title="Leadership"
      subtitle="Visionary leaders driving NSRIET's mission of educational excellence"
      heroImage="/images/banner.jpeg"
      section1={{
        title: '',
        content: (
          <div>
            <ProfileCard
              name="Dr. M. A. Khadar Baba"
              title="Principal, NSRIET"
              description="Dr. M. A. Khadar Baba is currently Principal of Nadimpalli Satyanarayana Raju Institute of Engineering and Technology, Visakhapatnam, Andhra Pradesh (India). He obtained Bachelor's Degree in ECE from Osmania University, Hyderabad, in 1988, Masters from University College Engineering, Osmania University, Hyderabad and PhD from GITAM, Deemed to be University, Visakhapatnam. He has published and presented about 40 research papers in various national, international journals and conferences related to Communication Engineering, GPS and GAGAN system, Embedded Systems, Signal Processing and 5G Communications. He has guided many students pursuing M.Tech in the above fields. He attended several training programs organized by NITs and other reputed organizations and professional societies. He has organized quite a good number of Conferences, Workshops, Symposia, Seminars related to communications Engineering VLSI Design, Microcontrollers, Embedded Systems and Signal Processing which includes AICTE, IETE and ISTE sponsored programs. He is a fellow of IETE and member of ISTE. Earlier he has worked in reputed organizations like GITAM, Visakhapatnam, Srinidhi Institute of Science and Technology, Hyderabad; CMR College of Engineering and Technology, Hyderabad; Guru Nanak Institutions, Hyderabad in various capacities such as Sr. Lecturer, Assistant professor, professor, Associate Professor, Professor and Head of the Department for about 30 years. He is the former principal of NS Raju Institute of Technology (Sontyam), served there for two years. Also served as a member and chairman Board of Studies in Faculty of ECE, of different institutions."
              imageUrl="/images/KhadarBaba.jpeg"
              imagePosition="center top"
              githubUrl="#"
              twitterUrl="#"
              youtubeUrl="#"
              linkedinUrl="#"
            />
          </div>
        ),
      }}
      section2={{
        title: '',
        content: <div className="hidden"></div>,
      }}
      section3={{
        title: '',
        content: <div className="hidden"></div>,
      }}
    />
  );
}
