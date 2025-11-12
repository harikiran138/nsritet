import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const GrievancePage: FC = () => {
  return (
    <ThreeSectionPage
      title="Grievance"
      section1={{
        title: 'Our Commitment',
        content: (
          <div className="space-y-6">
            <p>
              NSRIT is committed to providing a safe, fair, and harmonious learning environment. We have a robust grievance redressal mechanism to address any concerns or complaints from students, staff, or other stakeholders.
            </p>
            <h2 className="text-2xl font-bold">How to File a Grievance</h2>
            <p>
              Grievances can be submitted through our online portal, in person at the administrative office, or via email. Please provide as much detail as possible to help us investigate and address your concerns thoroughly.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Grievance Committee',
        content: (
          <div>
            <p>Our Grievance Committee comprises senior faculty and administrative staff dedicated to ensuring fair resolutions.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Contact Information',
        content: (
          <div>
            <p>Email: grievance@nsrit.edu.in</p>
            <p>Phone: +91-123-456-7890</p>
          </div>
        ),
      }}
    />
  );
};

export default GrievancePage;
