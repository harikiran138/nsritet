'use client';

import Image from 'next/image';

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden w-full">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
      <div className="relative z-20 text-white p-4">
      </div>
    </section>
  );
}
