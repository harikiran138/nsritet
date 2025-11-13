/**
 * Navigation Configuration
 * Centralized structure for all menu and submenu items
 */

export interface MenuItem {
  name: string;
  href: string;
  submenu?: MenuItem[];
}

export const navigationItems: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about',
    submenu: [
      { name: 'History', href: '/about/history' },
      { name: 'Management', href: '/about/management' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Nadimpalli Informatics LLP', href: '#' },
      { name: 'NSRIT (Autonomous)', href: 'https://www.nsrit.edu.in/' },
    ],
  },
  {
    name: 'Governance',
    href: '#',
    submenu: [
      { name: 'Organogram', href: '#' },
      { name: 'Governing Body', href: '#' },
      { name: 'Institutional Committees', href: '#' },
    ],
  },
  {
    name: 'Academics',
    href: '/academics',
    submenu: [
      {
        name: 'Programs',
        href: '/academics/programs',
        submenu: [
          { name: 'Computer Science & Engineering', href: '/academics/programs/cse' },
          { name: 'CSE (AI & ML)', href: '/academics/programs/cse-aiml' },
          { name: 'ECE', href: '/academics/programs/ece' },
          { name: 'EEE', href: '/academics/programs/eee' },
          { name: 'Mechanical Engineering', href: '/academics/programs/mechanical' },
          { name: 'Master of Business Administration', href: '/academics/programs/mba' },
        ],
      },
      { name: 'Competency Based Curriculum', href: '/academics/competency-based-curriculum' },
      { name: 'Best Practices', href: '/academics/best-practices' },
      { name: 'LMS', href: 'https://canvas.instructure.com/login/canvas' },
      { name: 'Academic Calendar', href: '/academics/calendar' },
      { name: 'Knowledge Resource Centre', href: '/academics/krc' },
    ],
  },
  {
    name: 'Admissions',
    href: '#',
    submenu: [
      { name: 'Why NSRIET?', href: '#' },
      { name: 'Undergraduate Programs', href: '#' },
      { name: 'Postgraduate Programs', href: '#' },
    ],
  },
  {
    name: 'CDC',
    href: '#',
    submenu: [
      { name: 'About CDC', href: '#' },
      { name: 'Career Guidance & Counseling', href: '#' },
      { name: 'Skill Development & Training', href: '#' },
      { name: 'Internship & Apprenticeships', href: '#' },
      { name: 'Placements', href: '#' },
      { name: 'Higher Education Support', href: '#' },
      { name: 'Resources & Support', href: '#' },
      { name: 'Announcements & Events', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    name: 'Industry Institute Linkage',
    href: '#',
    submenu: [
      { name: 'MoUs & Collaborations', href: '#' },
      { name: 'Industry Visits & Internships', href: '#' },
      { name: 'Startups & Innovation Support', href: '#' },
    ],
  },
  {
    name: 'Quick Links',
    href: '#',
    submenu: [
      { name: 'Campus Life', href: '#' },
      { name: 'Feedback', href: '#' },
      { name: 'Clubs & Societies', href: '#' },
      { name: 'Institution Policy Documents', href: '#' },
      { name: 'NSS', href: '#' },
      { name: 'Partner Institution', href: '#' },
      { name: 'Grievance', href: '#' },
      { name: 'Innovation Council', href: '#' },
      { name: 'Notifications', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
];
