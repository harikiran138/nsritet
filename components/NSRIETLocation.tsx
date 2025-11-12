 'use client';

import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const NSRIETLocation = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Our Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            📍 NSRIT Campus Location
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Visit the NS Raju Institute of Engineering and Technology — located in Sontyam, Visakhapatnam. Explore our campus and connect with us easily.
          </p>
        </div>

        {/* Divider */}
        <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-12"></div>

        {/* Map + Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Google Map */}
          <div className="relative group h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <iframe
              title="NSRIET Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.5827857920026!2d83.30439231533584!3d17.72385960000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395e0e0e0e0e0d%3A0x0!2sN%20S%20Raju%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>

            {/* Floating Marker Icon */}
            <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
          </div>

          {/* Contact + Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Our Campus</h3>
              <p className="text-gray-600 mb-6">
                N S Raju Institute of Engineering and Technology, Sontyam, Visakhapatnam, Andhra Pradesh - 531173
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium">info@nsriet.edu.in</span>
                </div>
                <a
                  href="https://maps.google.com/?q=N+S+Raju+Institute+of+Engineering+and+Technology+Sontyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:underline"
                >
                  <Navigation className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} NSRIT College — All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default NSRIETLocation;
