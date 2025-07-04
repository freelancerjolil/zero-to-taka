import { Code, DollarSign, Target, type LucideIcon } from 'lucide-react';

// --- PRO-TIP UPGRADE: More flexible data structure ---
// We store the icon component itself, not the JSX element.
const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Target,
    title: 'Practical, Real-World Roadmaps',
    description:
      "We don't just teach theory. We build real projects from zero to launch, documenting every business and technical decision along the way.",
  },
  {
    icon: Code,
    title: 'Built for Developers, by a Developer',
    description:
      "Our content is crafted from a developer's perspective, focusing on modern tech stacks like Next.js and MERN to solve real-world problems.",
  },
  {
    icon: DollarSign,
    title: 'Focus on Monetization',
    description:
      'Our core mission is to bridge the gap between coding skills and financial success. We provide actionable blueprints for turning your code into cash.',
  },
];

// --- BEST APPROACH UPGRADE: Extracted a FeatureCard component ---
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background">
        {/* The component now controls the icon's rendering and classes */}
        <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
      </div>
      <h3 className="mt-6 font-display text-xl font-bold text-foreground-strong">
        {title}
      </h3>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </div>
  );
}

const WhyZeroToTaka = () => {
  return (
    // --- LAYOUT UPGRADE: Full-width section with a constrained inner container ---
    <section className="w-full bg-card rounded-2xl py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground-strong sm:text-4xl lg:text-5xl">
            Why <span className="gradient-text">Zero to Taka?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We are not just another tech blog. We are your partners in the
            journey from being a coder to becoming a successful tech
            entrepreneur.
          </p>
        </div>

        {/* --- CLEANUP UPGRADE: Removed redundant sm:grid-cols-1 --- */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 lg:gap-16">
          {features.map((feature) => (
            // --- BEST PRACTICE UPGRADE: Using a unique title for the key ---
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZeroToTaka;
