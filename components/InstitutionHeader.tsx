'use client';

import Image from 'next/image';

export default function InstitutionHeader() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-90">
        <Image
          src="/accreditations/aicte.png"
          alt="NSRIT Engineering College Header"
          width={1800}
          height={180}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
