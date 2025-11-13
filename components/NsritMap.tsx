'use client';

import React from 'react';

// --- NSRIT Map Component ---
// Embeds Google Maps showing the campus location

export default function NsritMap() {
  // Google Maps embed URL for NSRIT campus
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.108668101487!2d83.22863837592473!3d17.82283848312011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39665555555555%3A0x6c37a707a04f2101!2sNadimpalli%20Satyanarayana%20Raju%20Institute%20of%20Technology%20(NSRIT)!5e0!3m2!1sen!2sin!4v1731481234567";

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-16 sm:py-20">
      {/* Title Section - Centered */}
      <div className="text-center mb-6 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          NSRIT Campus Map
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Sontyam, Visakhapatnam, Andhra Pradesh 531173
        </p>
      </div>
      
      {/* Map Container - Full Width, No Padding */}
      <div className="w-full">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NSRIT Location Map"
        ></iframe>
      </div>
    </section>
  );
}
