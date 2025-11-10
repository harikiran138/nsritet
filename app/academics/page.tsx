'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { BookOpen, Users, Download } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <ThreeSectionPage
      title="Academics"
      subtitle="Fostering a culture of learning and innovation"
      section1={{
        title: 'Introduction / Curriculum Overview',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              Our academic programs are designed to provide a comprehensive education that combines theoretical knowledge with practical skills. We are committed to providing a curriculum that is relevant to the industry and prepares our students for successful careers.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Details / Departments / Faculty',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              We have a diverse range of departments, each with a dedicated team of experienced faculty members. Our faculty is committed to providing a supportive learning environment and mentoring students to achieve their full potential.
            </p>
          </div>
        ),
      }}
      section3={{
        title: 'Downloads / Gallery / Enquiry',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Program Brochures
                </a>
              </li>
            </ul>
          </div>
        ),
      }}
    />
  );
}
