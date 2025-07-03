import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-bg.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 py-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-display gradient-text mb-6">
            The Complete Roadmap to Turn Your Code into Cash
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Empowering Bangladeshi developers to become successful Dev-preneurs.
          </p>
          <div className="space-x-4">
            <Button>Start Your Journey</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
