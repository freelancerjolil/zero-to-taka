import BlueprintCard from '@/components/features/blueprints/BlueprintCard';

// Mock data for now. Later, this will come from Sanity.io
const mockBlueprints = [
  {
    slug: 'zero-to-launch-case-study',
    title: 'Zero to Launch: Building a Micro-SaaS in 30 Days',
    description:
      'Follow my journey as I build, launch, and try to make the first $100 from a real SaaS product, documenting every step from idea to income.',
    category: 'Case Study',
  },
  {
    slug: 'monetization-with-nextjs-template',
    title: 'How to Monetize a Next.js Template and Earn Passive Income',
    description:
      'A step-by-step guide to creating a premium Next.js template, setting up payments with Paddle, and marketing it to developers.',
    category: 'Monetization',
  },
  {
    slug: 'ai-chatbot-tutorial',
    title: 'Build an AI Chatbot for Your Website using Next.js and OpenAI',
    description:
      'Learn how to integrate the powerful OpenAI API into your Next.js application to build an intelligent, helpful chatbot for your users.',
    category: 'Tech Tutorial',
  },
];

const FeaturedBlueprints = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-extrabold sm:text-4xl">
            Featured Blueprints
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start with our most popular guides and case studies, designed to
            give you actionable insights and a clear path forward.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockBlueprints.map((blueprint) => (
            <BlueprintCard
              key={blueprint.slug}
              slug={blueprint.slug}
              title={blueprint.title}
              description={blueprint.description}
              category={blueprint.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlueprints;
