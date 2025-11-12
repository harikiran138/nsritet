import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const NotificationsPage: FC = () => {
  return (
    <ThreeSectionPage
      mainTitle="Notifications"
      mainContent={
        <div className="space-y-6">
          <p>
            Stay updated with the latest announcements, news, and important information from NSRIT. This section provides real-time notifications to all students, faculty, and staff.
          </p>
          <h2 className="text-2xl font-bold">Recent Notifications</h2>
          <ul className="list-disc pl-6">
            <li>Examination schedules for the upcoming semester have been released.</li>
            <li>A guest lecture on Artificial Intelligence is scheduled for next week.</li>
            <li>The deadline for fee payment has been extended.</li>
          </ul>
        </div>
      }
      leftTitle="Archive"
      leftContent={
        <div>
          <p>Access past notifications and announcements in our archive section.</p>
        </div>
      }
      rightTitle="Subscribe"
      rightContent={
        <div>
          <p>Subscribe to our newsletter to receive important updates directly in your inbox.</p>
        </div>
      }
    />
  );
};

export default NotificationsPage;
