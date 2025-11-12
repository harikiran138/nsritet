'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { BentoGridDemo } from '@/components/ui/bento-grid';
import Image from 'next/image';

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
              <p className="leading-relaxed text-justify" style={{ lineHeight: '1.5' }}>
                N S Raju Institute of Engineering & Technology (NSRIET), established in 2008, stands as a premier institution for higher education in engineering, technology, and management. Affiliated to Jawaharlal Nehru Technological University (JNTU-Kakinada) and approved by AICTE, New Delhi, NSRIET has consistently strived to bridge the gap between academic learning and real-world innovation.

                With a sprawling 10-acre campus equipped with state-of-the-art laboratories, digital classrooms, research centers, and innovation hubs, the institute provides an environment that encourages creativity, collaboration, and critical thinking. NSRIET offers 8 undergraduate programs and 4 postgraduate programs, catering to over 2,500 students annually across disciplines like Computer Science, Electronics, Electrical, Mechanical, Civil, and Management Studies.

                The institution boasts a highly qualified faculty team of over 120 members, many of whom hold doctorates and actively contribute to research publications, patents, and consultancy projects. Through strategic partnerships with industry leaders and government organizations, NSRIET ensures students gain hands-on exposure via internships, industrial visits, and live projects.

                Beyond academics, NSRIET emphasizes holistic development through clubs, cultural events, entrepreneurship cells, and community outreach initiatives. The college’s placement cell maintains a strong network with over 60 reputed companies, achieving an impressive 85% placement rate in recent years.

                Guided by its core mission of “Educate, Innovate, and Elevate,” NSRIET continues to empower students to become technically competent, ethically responsible, and globally employable professionals — shaping the engineers and leaders of tomorrow.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8">
                Vision, Mission, Core Values
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                <div className="w-full md:w-1/2 h-full">
                  <BentoGridDemo />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4">
                    <Image
                      src="/images/about/About us page.jpeg"
                      alt="About NSRIET 1"
                      width={1000}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-lg object-cover w-full"
                    />
                    <Image
                      src="/images/about/About us page.jpeg"
                      alt="About NSRIET 2"
                      width={1000}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-lg object-cover w-full"
                    />
                    <Image
                      src="/images/about/About us page.jpeg"
                      alt="About NSRIET 3"
                      width={1000}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </div>
              </div>
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
