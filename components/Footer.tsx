'use client';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const aboutLinks = [
    'History',
    'Vision & Mission',
    'Management',
    'Leadership',
    'Nadimpalli Informatics',
    'NSRIT (Autonomous)',
  ];

  const quickLinks = [
    'Admissions',
    'Why NSRIET?',
    'Placements',
    'Internships',
    'Events',
    'Campus Life',
  ];


  return (
    <footer className="relative text-white pt-12 pb-4">
      <Image
        src="/images/about/About us page.jpeg"
        alt="Footer Background"
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Main Footer Content */}
      <div className="section-container px-4 sm:px-6 lg:px-8 pb-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start justify-between">

          {/* About Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h3 className="font-bold text-xl mb-4">NSRIET</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Empowering students with knowledge, skills, and innovation for a better tomorrow.
            </p>
          </motion.div>

          {/* About Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
              About Us
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((text) => (
                <li key={text}>
                  <span className="text-blue-100 text-sm cursor-default">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((text) => (
                <li key={text}>
                  <span className="text-blue-100 text-sm cursor-default">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">NSRIET Campus, Education District, City, State - 123456</span>
              </li>

              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">+91 6303855066</span>
              </li>

              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">info@nsriet.edu.in</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 bg-white/10 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10 relative z-20">
        <div className="section-container px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-blue-200"
            >
              © {new Date().getFullYear()} NSRIET. All rights reserved. |{' '}
              <span className="font-medium">Engineering Excellence</span>
            </motion.p>


          </div>
        </div>
      </div>
    </footer>
  );
}
