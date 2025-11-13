'use client';

import React from 'react';

// --- NSRIT Map Component (Redesigned) ---
// Greyscale map with content overlay

export default function NsritMap() {
  // Google Maps embed URL for NSRIT campus
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.108668101487!2d83.22863837592473!3d17.82283848312011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39665555555555%3A0x6c37a707a04f2101!2sNadimpalli%20Satyanarayana%20Raju%20Institute%20of%20Technology%20(NSRIT)!5e0!3m2!1sen!2sin!4v1731481234567";

  return (
    <section className="w-full bg-gray-800 dark:bg-gray-900">
      {/* Container holds both the map and the overlay - No padding, no borders */}
      <div className="w-full relative overflow-hidden">
        
        {/* The greyscale map */}
        <div className="overflow-hidden">
          <iframe
            src={mapEmbedUrl}
            className="w-full filter grayscale" // Greyscale filter
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NSRIT Location Map"
          ></iframe>
        </div>

        {/* --- Content Overlay --- */}
        {/* Positioned absolute to float on top of the map */}
        <div className="absolute top-0 left-0 w-full h-full p-8 sm:p-12 flex flex-col justify-between text-white pointer-events-none">
          
          {/* Top-left text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              We are everywhere
            </h2>
            <p className="text-xl sm:text-2xl font-light" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
              NSRIT, Visakhapatnam
            </p>
          </div>

          {/* Bottom content bar with contact info */}
          <div 
            className="text-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pointer-events-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Address</h4>
                <p className="text-sm font-medium leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  Sontyam, Visakhapatnam,<br />
                  Andhra Pradesh 531173
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Email</h4>
                <a 
                  href="mailto:office@nsrit.edu.in" 
                  className="text-sm font-medium hover:text-blue-400 transition-colors"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  office@nsrit.edu.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Phone</h4>
                <a 
                  href="tel:+918099464546" 
                  className="text-sm font-medium hover:text-blue-400 transition-colors"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  +91 80994 64546
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
