'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const NSRIETLocation = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="pt-0 pb-20 md:pb-28 bg-gradient-to-b from-gray-50 to-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* --- Header --- */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Our Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore the N S Raju Institute of Engineering and Technology (NSRIET) in Visakhapatnam. Find us and connect with us easily.
          </p>
        </motion.div>

        {/* --- Map + Info Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              Have questions? Fill out the form below and we'll get back to you soon.
            </p>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span>info@nsriet.edu.in</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sontyam, Visakhapatnam, Andhra Pradesh - 531173</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            variants={itemVariants}
            className="relative group h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <iframe
              title="NSRIET Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.902549590485!2d83.4178549751776!3d18.00097358309609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be39390c34d0d%3A0x8a801b4088e3846f!2sNSRIET!5e1!3m2!1sen!2sin!4v1716886933388!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>
        </div>

        {/* --- Footer Note --- */}
        <motion.div variants={itemVariants} className="mt-20 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} NSRIET — All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NSRIETLocation;
