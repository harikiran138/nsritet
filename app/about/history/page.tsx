'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function HistoryPage() {
  return (
    <ThreeSectionPage
      title="Our History"
      subtitle="A journey of excellence and growth"
      section1={{
        title: 'Establishment',
        content: (
          <div className="leading-relaxed">
            <p style={{ lineHeight: '1.6' }}>
              N S Raju Institute of Engineering & Technology (NSRIET), formerly known as Vizag Institute of Technology,
              was established in 2008 under the Oxford Educational Society. The institution is now managed by the
              Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT), Sontyam, Visakhapatnam—an institution
              accredited by the National Assessment and Accreditation Council (NAAC) with an &apos;A&apos; Grade, and
              with its eligible undergraduate programs in CSE, ECE, and EEE accredited by the National Board of
              Accreditation (NBA) under Tier-I.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Commitment to Quality Education',
        content: (
          // 👇 Added vertical space *before* this entire section
          <div className="mt-12 md:mt-16 lg:mt-20 leading-relaxed space-y-4">
            <p style={{ lineHeight: '1.6' }}>
              NSRIET is committed to providing quality education, holistic development, and industry-aligned technical
              competencies, built upon a strong foundation of ethics, values, and cultural heritage. The institute
              places significant emphasis on integrating classroom learning with hands-on practical exposure, live
              projects, and industry-supported learning environments, enabling students to apply theoretical concepts
              to real-time situations during their course of study itself.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              The primary objective of the institution is to nurture competent and socially responsible technology
              professionals who can contribute effectively to the economic, industrial, and societal development of
              the nation. NSRIET fosters a vibrant academic ecosystem that promotes innovation, research culture, and
              leadership qualities among students.
            </p>
          </div>
        ),
      }}
      section3={{
        title: 'Fostering Future-Ready Professionals',
        content: (
          // 👇 Added space before this section too, not between title & content
          <div className="mt-12 md:mt-16 lg:mt-20 leading-relaxed">
            <p style={{ lineHeight: '1.6' }}>
              We focus on imparting futuristic skillsets in emerging and cutting-edge technologies, supported by active
              research initiatives in science, engineering, and technology. A strong linkage with industry partners
              forms one of our core strengths, enabling seamless industry–academia collaboration, enhanced
              employability, and career progression for students. The institute encourages freedom of thought,
              creativity, personal growth, and instills human values, environmental consciousness, and a deep sense of
              social responsibility.
            </p>
          </div>
        ),
      }}
    />
  );
}
