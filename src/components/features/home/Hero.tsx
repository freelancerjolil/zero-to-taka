'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      role="banner"
      aria-label="Welcome to Zero to Taka roadmap"
      // UPGRADE: Use min-h-screen for full viewport height and arbitrary property for the background image.
      // This is cleaner than inline styles.
      className="relative flex min-h-[30vh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-[url('/images/hero.png')]"
    >
      {/* Overlay for readability and dark tint */}
      <div className="absolute inset-0 z-0 bg-background/50 backdrop-blur-sm" />

      {/* SEO-friendly hidden image. This implementation is excellent. No changes needed. */}
      <Image
        src="/images/hero.png"
        alt="Hero background of a developer roadmap"
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-0"
        priority
      />

      {/* Content */}
      {/* UPGRADE: Simplified padding for cleaner code. */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-20 text-center md:px-8">
        <h1 className="font-display text-4xl font-extrabold leading-tight text-foreground-strong md:text-6xl lg:text-7xl">
          <span className="gradient-text block">The Complete Roadmap</span>
          to Turn Your Code into Cash
        </h1>

        <p className="mx-auto mt-6 max-w-prose text-lg text-muted-foreground md:text-xl">
          Empowering Bangladeshi developers to become successful Dev-preneurs.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            // UPGRADE: Corrected gradient classes to match your tailwind.config.ts
            // and simplified hover effect.
            className="bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-background transition hover:scale-105"
          >
            Start Your Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            // UPGRADE: Simplified classes. The 'outline' variant from shadcn/ui or similar
            // libraries handles most of this. We only need to specify our custom colors.
            className="border-border bg-background/50 text-foreground hover:bg-background/80"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
