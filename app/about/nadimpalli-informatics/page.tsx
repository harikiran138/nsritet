'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import Image from 'next/image';

export default function NadimalliInformaticsPage() {
  return (
    <ThreeSectionPage
      title="Nadimpalli Informatics LLP"
      subtitle="The founding organization behind NSRIET"
      heroImage="/images/banner.jpeg"
      section1={{
        title: '',
        content: (
          <div className="flex justify-center items-center">
            <Image
              src="/images/Nadimpalli Informatics LLP.png"
              alt="Nadimpalli Informatics LLP"
              width={1200}
              height={800}
              className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
              priority
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
