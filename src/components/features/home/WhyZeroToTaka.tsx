import { Code, DollarSign, Target } from 'lucide-react';

// Feature data for clarity and easy management
const features = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Practical, Real-World Roadmaps',
    description:
      "We don't just teach theory. We build real projects from zero to launch, documenting every business and technical decision along the way.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Built for Developers, by a Developer',
    description:
      "Our content is crafted from a developer's perspective, focusing on modern tech stacks like Next.js and MERN to solve real-world problems.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'Focus on Monetization',
    description:
      'Our core mission is to bridge the gap between coding skills and financial success. We provide actionable blueprints for turning your code into cash.',
  },
];

const WhyZeroToTaka = () => {
  return (
    <section className="bg-card max-w-7xl py-8 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-extrabold sm:text-4xl">
            Why <span className="text-gradient">Zero to Taka?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We are not just another tech blog. We are your partners in the
            journey from being a coder to becoming a successful tech
            entrepreneur.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-display font-bold text-foreground-strong">
                {feature.title}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZeroToTaka;
