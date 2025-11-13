'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems, MenuItem } from '@/lib/navigation';

const NavLink = ({ item, onClick }: { item: MenuItem; onClick: () => void }) => {
  return (
    <div className="relative">
      <Link
        href={item.href}
        onClick={onClick}
        className="flex items-center justify-between px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
      >
        {item.name}
      </Link>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDesktopMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="relative z-40 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white shadow-lg font-['Arial_Narrow']"
    >
      {/* Top Bar */}
      <div className="bg-corporate-darkBlue">
        <div className="section-container py-1 flex justify-between items-center text-xs text-white">
          <div></div>

          <div className="hidden lg:flex items-center space-x-2 text-sm font-medium">
            <Link href="#" className="hover:text-corporate-lightBlue transition-colors">
              Circular Notification
            </Link>
            <span className="text-white/60">|</span>
            <Link href="#" className="hover:text-corporate-lightBlue transition-colors">
              Upcoming Events
            </Link>
            <span className="text-white/60">|</span>
            <Link href="/quick-links/feedback" className="hover:text-corporate-lightBlue transition-colors">
              Feedback
            </Link>
            <span className="text-white/60">|</span>
            <Link href="#" className="hover:text-corporate-lightBlue transition-colors">
              News Bulletin
            </Link>
            <span className="text-white/60">|</span>
            <Link href="/cdc/career-guidance" className="hover:text-corporate-lightBlue transition-colors">
              Career Opportunities
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Section — Exactly like the screenshot */}
<div className="w-full bg-white py-1 flex items-center justify-center">
          <div className="relative h-20 w-full">
            <Image src="/main-logo1.png" alt="NSRIET Logo" fill className="object-cover" />
          </div>
</div>




      {/* Desktop Menu */}
      <div className="section-container pt-[6px] pb-2 relative">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-0.5">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-white hover:opacity-90 font-medium transition-all flex items-center gap-1 py-[7px] px-4 rounded-md hover:bg-white/10"
                >
                  {item.name}
                </Link>


              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 sm:px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <NavLink key={item.name} item={item} onClick={() => setIsMenuOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
