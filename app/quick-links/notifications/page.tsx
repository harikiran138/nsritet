import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const NotificationsPage: FC = () => {
  return (
    <ThreeSectionPage
      title="Notifications"
      section1={{
        title: 'Recent Notifications',
        content: (
          <div className="space-y-6">
            <p>
              Stay updated with the latest announcements, news, and important information from NSRIT. This section provides real-time notifications to all students, faculty, and staff.
            </p>
            <ul className="list-disc pl-6">
              <li>Examination schedules for the upcoming semester have been released.</li>
              <li>A guest lecture on Artificial Intelligence is scheduled for next week.</li>
              <li>The deadline for fee payment has been extended.</li>
            </ul>
          </div>
        ),
      }}
      section2={{
        title: 'Archive',
        content: (
          <div>
            <p>Access past notifications and announcements in our archive section.</p>
          </div>
        ),
      }}
      section3={{
        title: 'Subscribe',
        content: (
          <div>
            <p>Subscribe to our newsletter to receive important updates directly in your inbox.</p>
          </div>
        ),
      }}
    />
  );
};

export default NotificationsPage;
