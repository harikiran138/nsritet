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
      { name: 'Competency Based Curriculum', href: '/academics/curriculum' },
      { name: 'Best Practices', href: '/academics/best-practices' },
      { name: 'LMS', href: '/academics/lms' },
      { name: 'Academic Calendar', href: '/academics/calendar' },
      { name: 'Knowledge Resource Centre', href: '/academics/resources' },
    ],
  },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'History', href: '/about/history' },
      { name: 'Management', href: '/about/management' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Nadimpalli Informatics LLP', href: '/about/nadimpalli-informatics' },
    ],
  },
  {
    name: 'CDC',
    href: '/cdc',
    submenu: [
      { name: 'About CDC', href: '/cdc/about' },
      { name: 'Career Guidance & Counseling', href: '/cdc/career-guidance' },
      { name: 'Skill Development & Training', href: '/cdc/skills' },
      { name: 'Internship & Apprenticeships', href: '/cdc/internships' },
      { name: 'Placements', href: '/cdc/placements' },
      { name: 'Higher Education Support', href: '/cdc/higher-education' },
      { name: 'Resources & Support', href: '/cdc/resources' },
      { name: 'Announcements & Events', href: '/cdc/announcements' },
      { name: 'Contact', href: '/cdc/contact' },
    ],
  },
  {
    name: 'Admissions',
    href: '/admissions',
    submenu: [
      { name: 'Why NSRIET?', href: '/admissions/why-nsriet' },
      { name: 'Undergraduate Programs', href: '/admissions/undergraduate' },
      { name: 'Postgraduate Programs', href: '/admissions/postgraduate' },
    ],
  },
  {
    name: 'Governance',
    href: '/governance',
    submenu: [
      { name: 'Organogram', href: '/governance/organogram' },
      { name: 'Governing Body', href: '/governance/governing-body' },
      { name: 'Institutional Committees', href: '/governance/committees' },
    ],
  },
  {
    name: 'Quick Links',
    href: '/quick-links',
    submenu: [
      { name: 'Campus Life', href: '/quick-links/campus-life' },
      { name: 'Feedback', href: '/quick-links/feedback' },
      { name: 'Clubs & Societies', href: '/quick-links/clubs' },
      { name: 'Institution Policy Documents', href: '/quick-links/policies' },
      { name: 'NSS', href: '/quick-links/nss' },
      { name: 'Partner Institution', href: '/quick-links/partners' },
    ],
  },
];
