import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const CareersPage: FC = () => {
  return (
    <ThreeSectionPage
      title="Careers"
      section1={{
        title: 'Join Our Team',
        content: (
          <div className="space-y-6">
            <p>
              Join our team of dedicated educators and professionals at NSRIT. We are always looking for passionate individuals who are committed to shaping the future of education.
            </p>
            <h2 className="text-2xl font-bold">Current Openings</h2>
            <ul className="list-disc pl-6">
              <li>Assistant Professor in Computer Science</li>
              <li>Lab Technician for the Mechanical Engineering Department</li>
              <li>Administrative Officer</li>
            </ul>
          </div>
        ),
      }}
      section2={{
        title: 'Why Work With Us?',
        content: (
          <div>
            <p>We offer a collaborative work environment, professional growth opportunities, and a chance to make a real impact.</p>
          </div>
        ),
      }}
      section3={{
        title: 'How to Apply',
        content: (
          <div>
            <p>Email your resume and a cover letter to careers@nsrit.edu.in.</p>
          </div>
        ),
      }}
    />
  );
};

export default CareersPage;
