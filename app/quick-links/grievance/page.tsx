import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const GrievancePage: FC = () => {
  return (
    <ThreeSectionPage
      mainTitle="Grievance"
      mainContent={
        <div className="space-y-6">
          <p>
            NSRIT is committed to providing a safe, fair, and harmonious learning environment. We have a robust grievance redressal mechanism to address any concerns or complaints from students, staff, or other stakeholders.
          </p>
          <h2 className="text-2xl font-bold">Our Commitment</h2>
          <p>
            We ensure that all grievances are handled with the utmost confidentiality and sensitivity. Our goal is to resolve issues in a timely and effective manner, promoting a culture of trust and transparency.
          </p>
          <h2 className="text-2xl font-bold">How to File a Grievance</h2>
          <p>
            Grievances can be submitted through our online portal, in person at the administrative office, or via email. Please provide as much detail as possible to help us investigate and address your concerns thoroughly.
          </p>
        </div>
      }
      leftTitle="Grievance Committee"
      leftContent={
        <div>
          <p>Our Grievance Committee comprises senior faculty and administrative staff dedicated to ensuring fair resolutions.</p>
        </div>
      }
      rightTitle="Contact Information"
      rightContent={
        <div>
          <p>Email: grievance@nsrit.edu.in</p>
          <p>Phone: +91-123-456-7890</p>
        </div>
      }
    />
  );
};

export default GrievancePage;
