import FeaturedBlueprints from '@/components/features/home/FeaturedBlueprints';
import Hero from '@/components/features/home/Hero';
import NewsletterSignup from '@/components/features/home/NewsletterSignup';
import WhyZeroToTaka from '@/components/features/home/WhyZeroToTaka';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedBlueprints />
      <WhyZeroToTaka />
      <NewsletterSignup />
    </div>
  );
}
