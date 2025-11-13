'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { ProfileCard } from '@/components/ProfileCard';

export default function ManagementPage() {
  return (
    <ThreeSectionPage
      title="Management"
      subtitle="Guided by experienced administrators and educational leaders"
      section1={{
        title: '',
        content: (
          <div className="space-y-32">
            
            {/* First Profile Card - Normal Layout */}
            <ProfileCard
              name="Shri. N. Satyanarayana Raju"
              title="Chairman, NSRIET"
              description='The well-known Chinese proverb states: "If you are planning for one year, sow rice; for ten years, plant trees; but if you are planning for a lifetime, educate people." In today&apos;s rapidly evolving technological landscape, the demand for skilled and adaptive professionals has never been greater. With this vision, the Oxford Educational Society, under the inspiring leadership of Sri N. Satyanarayana Raju, established the N S Raju Institute of Engineering and Technology (NSRIET) to provide high-quality education in Engineering and Management disciplines. Our objective is to empower young minds with knowledge, creativity, innovation, and professional competence to confidently meet the challenges of the 21st-century technology-driven world.'
              imageUrl="/images/Satyanarayana Raju.jpeg"
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
        title: '',
        content: (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
              Our Commitment
            </h2>
            <p className="text-corporate-navy dark:text-gray-200 text-lg">
              Our management structure ensures efficient operations while maintaining focus on academic quality, research advancement, and student welfare.
            </p>
          </div>
        ),
      }}
      section3={{
        title: '',
        content: <div className="hidden"></div>,
      }}
    />
  );
}
