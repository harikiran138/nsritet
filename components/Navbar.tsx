'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { navigationItems } from '@/lib/navigation';

interface DropdownMenuProps {
  items: typeof navigationItems;
  level?: number;
  isOpen?: boolean;
}

function DropdownMenu({ items, level = 0, isOpen = false }: DropdownMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  if (level > 1) return null;

  return (
    <>
      {items.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            href={item.href}
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm border-b border-gray-100 dark:border-gray-700 last:border-b-0 group-hover:bg-blue-50 dark:group-hover:bg-gray-700"
          >
            <span className="flex items-center justify-between">
              {item.name}
              {item.submenu && (
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              )}
            </span>
          </Link>

          {item.submenu && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute left-full top-0 ml-1 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden min-w-[240px] border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
            >
              <DropdownMenu items={item.submenu} level={level + 1} />
            </motion.div>
          )}
        </div>
      ))}
    </>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      className="relative z-40 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white shadow-lg"
    >
      <div className="section-container py-2 relative">
        <div className="flex items-center justify-between py-3">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigationItems.map((link) => (
              <div
                key={link.name}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className="text-white hover:opacity-90 font-medium transition-all flex items-center gap-1 py-2.5 px-4 rounded-md hover:bg-white/10"
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform group-hover:rotate-180`}
                    />
                  )}
                </Link>

                {link.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-0 bg-white dark:bg-gray-850 shadow-2xl rounded-b-lg overflow-hidden min-w-[320px] border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                  >
                    {link.submenu.map((sublink) => (
                      <div key={sublink.name} className="relative group/submenu">
                        <Link
                          href={sublink.href}
                          className="block px-5 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-750 transition-colors font-medium text-sm border-b border-gray-100 dark:border-gray-750 last:border-b-0 flex items-center justify-between"
                        >
                          {sublink.name}
                          {sublink.submenu && (
                            <ChevronDown className="w-3 h-3 opacity-50 ml-2" />
                          )}
                        </Link>

                        {sublink.submenu && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-full top-0 ml-2 bg-white dark:bg-gray-850 shadow-2xl rounded-lg overflow-hidden min-w-[280px] border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all"
                          >
                            {sublink.submenu.map((subsublink) => (
                              <Link
                                key={subsublink.name}
                                href={subsublink.href}
                                className="block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-750 transition-colors font-medium text-sm border-b border-gray-100 dark:border-gray-750 last:border-b-0"
                              >
                                {subsublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Theme toggle - positioned right */}
          {/* <div className="absolute right-4 hidden lg:flex">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 absolute right-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button> */}
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
            className="lg:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-y-auto max-h-[70vh]"
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navigationItems.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="block py-2.5 text-gray-800 dark:text-gray-200 hover:text-corporate-blue dark:hover:text-blue-400 font-medium flex-1"
                      onClick={() => !link.submenu && setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className="px-2 py-2 text-gray-800 dark:text-gray-200 hover:text-corporate-blue dark:hover:text-blue-400"
                        aria-label={`Toggle ${link.name} submenu`}
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
                            <div key={sublink.name}>
                              <Link
                                href={sublink.href}
                                className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sublink.name}
                              </Link>
                              {sublink.submenu && (
                                <div className="pl-3 space-y-1 border-l border-gray-300 dark:border-gray-700">
                                  {sublink.submenu.map((subsublink) => (
                                    <Link
                                      key={subsublink.name}
                                      href={subsublink.href}
                                      className="block py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-corporate-blue dark:hover:text-blue-400"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subsublink.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
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
