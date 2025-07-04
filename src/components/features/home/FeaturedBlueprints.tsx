import BlueprintCard from '@/components/features/blueprints/BlueprintCard';
import { client } from '@/lib/sanity';
import { Blueprint } from '@/types';

// Updated GROQ query to fetch the main image URL
const GET_FEATURED_BLUEPRINTS = `*[_type == "blueprint"] | order(_createdAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  "mainImageUrl": mainImage.asset->url
}`;

const FeaturedBlueprints = async () => {
  const blueprints = await client.fetch<Blueprint[]>(GET_FEATURED_BLUEPRINTS);

  return (
    <section className=" sm:py-24">
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
          {blueprints?.map((blueprint) => (
            <BlueprintCard
              key={blueprint._id}
              slug={blueprint.slug}
              title={blueprint.title}
              description={blueprint.description}
              category={blueprint.category}
              mainImageUrl={blueprint.mainImageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlueprints;
