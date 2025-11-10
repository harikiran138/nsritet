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
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Nadimpalli Informatics LLP', href: '/about/nadimpalli-informatics' },
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
    name: 'Admissions',
    href: '/admissions',
    submenu: [
      { name: 'Why NSRIET?', href: '/admissions/why-nsriet' },
      { name: 'Undergraduate Programs', href: '/admissions/undergraduate' },
      { name: 'Postgraduate Programs', href: '/admissions/postgraduate' },
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
    name: 'Industry Institute Linkage',
    href: '/industry-institute-linkage',
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
