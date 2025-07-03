'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Hero component with fully responsive design
export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-card/60 backdrop-blur-md bg-center"
      style={{
        aspectRatio: '16/9',
        backgroundImage: 'url(/images/hero.png)',
      }}
      role="banner"
      aria-label="Welcome to Zero to Taka roadmap"
    >
      {/* Overlay for contrast with lazy-loaded background image */}
      <div className="absolute inset-0 bg-card/60 backdrop-blur-sm" />
      <Image
        src="/images/hero.png"
        alt="Hero background of a developer roadmap"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="relative z-10 flex items-center justify-center h-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
        <div className="text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display gradient-text mb-4 sm:mb-6 md:mb-8">
            The Complete Roadmap to Turn Your Code into Cash
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground mb-4 sm:mb-6 md:mb-8 max-w-prose mx-auto">
            Empowering Bangladeshi developers to become successful Dev-preneurs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="w-full sm:w-auto">Start Your Journey</Button>
            <Button variant="outline" className="w-full sm:w-auto mt-4 sm:mt-0">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
