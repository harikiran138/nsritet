'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';


const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Management', href: '/about#management' },
      { name: 'Infrastructure', href: '/about#infrastructure' },
    ],
  },
  { name: 'Governance', href: '/governance' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academics', href: '/academics' },
  { name: 'IIC', href: '/iic' },
  { name: 'Industry Connect', href: '/industry' },
  { name: 'CDC', href: '/cdc' },
  { name: 'Quick Links', href: '/quick-links' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  // no scroll behaviour needed for the blue navbar — it remains static under the InstitutionHeader

  return (
    <motion.nav
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      className={`relative z-40 bg-corporate-blue text-white`}
    >
      <div className="section-container py-2 relative">
        <div className="flex items-center justify-between py-3">
          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.submenu && setActiveSubmenu(link.name)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-white hover:opacity-80 font-medium transition-opacity flex items-center gap-1 py-2"
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
                    className={`absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden min-w-[220px] border border-gray-200 dark:border-gray-700 ${
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

          {/* Theme toggle - positioned right within the container */}
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
            className="lg:hidden bg-surface border-t border-base"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-muted hover:text-corporate-lightBlue font-medium"
                    onClick={() => !link.submenu && setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block py-1 text-sm text-muted hover:text-corporate-lightBlue"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
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
