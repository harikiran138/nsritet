import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const InnovationCouncilPage: FC = () => {
  return (
    <ThreeSectionPage
      title="Innovation Council"
      section1={{
        title: 'Our Mission',
        content: (
          <div className="space-y-6">
            <p>
              The Innovation Council at NSRIT is dedicated to fostering a culture of innovation and entrepreneurship among students and faculty. We provide a platform for creative ideas to flourish and transform into impactful projects.
            </p>
            <h2 className="text-2xl font-bold">Activities and Initiatives</h2>
            <p>
              The council organizes workshops, seminars, and competitions to promote innovative thinking. We also facilitate access to funding, resources, and industry connections to help bring ideas to life.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Council Members',
        content: (
          <div>
            <p>The Innovation Council is composed of experienced faculty, industry experts, and student representatives.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Get Involved',
        content: (
          <div>
            <p>Email: innovation@nsrit.edu.in</p>
            <p>Join our next meeting to share your ideas and be a part of the innovation journey.</p>
          </div>
        ),
      }}
    />
  );
};

export default InnovationCouncilPage;
