'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { BentoGridDemo } from '@/components/ui/bento-grid';

export default function AboutPage() {
  return (
    <>
      <ThreeSectionPage
        title="About Us"
        subtitle="A legacy of excellence in engineering education"
        heroImage="/about-us-hero.jpg"
        section1={{
          title: 'Overview',
          content: (
            <div className="space-y-4">
              <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
                N S Raju Institute of Engineering & Technology (NSRIET) is a premier institution dedicated to providing quality education in engineering and management. We are committed to nurturing a vibrant academic community that fosters innovation, research, and holistic development.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
                Vision, Mission, Core Values
              </h2>
              <BentoGridDemo />
            </div>
          ),
        }}
        section2={{
          title: '',
          content: null,
        }}
        section3={{
          title: 'Leadership',
          content: (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Leadership content can be added here */}
              <p className="text-corporate-textSecondary dark:text-gray-400">Our leadership team is committed to guiding our institution towards a future of excellence and innovation. More details can be found on the dedicated Leadership page.</p>
            </div>
          ),
        }}
      />
    </>
  );
}
