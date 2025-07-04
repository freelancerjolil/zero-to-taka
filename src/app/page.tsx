import FeaturedBlueprints from '@/components/features/home/FeaturedBlueprints';
import Hero from '@/components/features/home/Hero';

import NewsletterSignup from '@/components/features/home/NewsletterSignup';
import WhyZeroToTaka from '@/components/features/home/WhyZeroToTaka';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      <Hero />
      <FeaturedBlueprints />
      <WhyZeroToTaka />
      <NewsletterSignup />
    </div>
  );
}
