'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
  submenu?: MenuItem[];
}

const navLinks: MenuItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Academics',
    href: '/academics',
    submenu: [
      { name: 'Programs', href: '/academics/programs' },
      { name: 'Computer Science & Engineering', href: '/academics/programs/cse' },
      { name: 'CSE (AI & ML)', href: '/academics/programs/cse-aiml' },
      { name: 'ECE', href: '/academics/programs/ece' },
      { name: 'EEE', href: '/academics/programs/eee' },
      { name: 'Mechanical Engineering', href: '/academics/programs/mechanical' },
      { name: 'MBA', href: '/academics/programs/mba' },
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
      { name: 'Feedback', href: '/feedback' },
      { name: 'Clubs & Societies', href: '/quick-links/clubs' },
      { name: 'Institution Policy Documents', href: '/quick-links/policies' },
      { name: 'NSS', href: '/quick-links/nss' },
      { name: 'Partner Institution', href: '/quick-links/partners' },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const isDark = mounted && typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  const toggleMobileSubmenu = (name: string) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === name ? null : name);
  };

  return (
    <motion.nav
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      className="relative z-40 bg-corporate-blue text-white"
    >
      <div className="section-container py-2 relative">
        <div className="flex items-center justify-between py-3">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-white hover:opacity-80 font-medium transition-opacity flex items-center gap-1 py-2 px-3 rounded-md hover:bg-white/10"
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeSubmenu === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {link.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      activeSubmenu === link.name
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden min-w-[280px] border border-gray-200 dark:border-gray-700 ${
                      activeSubmenu === link.name ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Theme toggle - positioned right */}
          <div className="absolute right-4 hidden lg:flex">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 absolute right-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-t border-base overflow-y-auto max-h-[70vh]"
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="block py-2 text-muted hover:text-corporate-lightBlue font-medium flex-1"
                      onClick={() => !link.submenu && setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className="px-2 py-2 text-muted hover:text-corporate-lightBlue"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileActiveSubmenu === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.submenu && (
                    <AnimatePresence>
                      {mobileActiveSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="block py-2 text-sm text-muted hover:text-corporate-lightBlue font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
