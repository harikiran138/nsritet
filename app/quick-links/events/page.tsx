import ThreeSectionPage from '@/components/ThreeSectionPage';
import { FC } from 'react';

const EventsPage: FC = () => {
  return (
    <ThreeSectionPage
      mainTitle="Events"
      mainContent={
        <div className="space-y-6">
          <p>
            Explore the vibrant campus life at NSRIT through our diverse range of events. We host technical, cultural, and sports events throughout the year, providing students with opportunities to learn, grow, and connect.
          </p>
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <ul className="list-disc pl-6">
            <li>Annual Technical Fest - Tech-Fest 2025</li>
            <li>Inter-departmental Sports Meet</li>
            <li>Cultural Night - A celebration of art and talent</li>
          </ul>
        </div>
      }
      leftTitle="Event Calendar"
      leftContent={
        <div>
          <p>Check out our event calendar for a full schedule of upcoming activities.</p>
        </div>
      }
      rightTitle="Get Involved"
      rightContent={
        <div>
          <p>Contact our student council to participate or volunteer in our events.</p>
        </div>
      }
    />
  );
};

export default EventsPage;
