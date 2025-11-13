'use client';

import Image from 'next/image';

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-20 text-white p-4">
      </div>
    </section>
  );
}
