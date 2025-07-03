import BlueprintCard from '@/components/features/blueprints/BlueprintCard';
import { client } from '@/lib/sanity';
import { Blueprint } from '@/types';

// Updated query to fetch the main image URL for all blueprints
const GET_ALL_BLUEPRINTS = `*[_type == "blueprint"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  "mainImageUrl": mainImage.asset->url
}`;

export default async function BlueprintsPage() {
  const blueprints = await client.fetch<Blueprint[]>(GET_ALL_BLUEPRINTS);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-extrabold sm:text-5xl">
          All Blueprints
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore our complete collection of guides, case studies, and
          tutorials.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
