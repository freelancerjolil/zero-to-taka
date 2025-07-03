import PortableTextComponent from '@/components/shared/PortableTextComponent';
import { calculateReadingTime } from '@/lib/reading-time';
import { client } from '@/lib/sanity';
import { Blueprint } from '@/types';
import { Calendar, Clock, UserCircle } from 'lucide-react';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';

// Updated query to fetch author details and publish date
const GET_SINGLE_BLUEPRINT = `*[_type == "blueprint" && slug.current == $slug][0] {
  _id,
  title,
  description,
  category,
  publishedAt,
  mainImage,
  body,
  "author": author->{ name, "image": image.asset->url }
}`;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<string[]>(
      `*[_type == "blueprint" && defined(slug.current)][].slug.current`
    );
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

interface PageProps {
  params: { slug: string };
}

// Define a more robust type for our fetched blueprint data
type BlueprintPageData = Blueprint & {
  mainImage?: any;
  body?: any[];
  publishedAt: string;
  author?: {
    // Author is now optional
    name: string;
    image?: string; // Author's image is also optional
  };
};

export default async function SingleBlueprintPage({ params }: PageProps) {
  const { slug } = params;
  const blueprint = await client.fetch<BlueprintPageData>(
    GET_SINGLE_BLUEPRINT,
    { slug }
  );

  if (!blueprint) {
    return <div className="text-center py-20">Blueprint not found.</div>;
  }

  const readingTime = calculateReadingTime(blueprint.body);

  return (
    <article className="container mx-auto w-full p-4 max-w-7xl py-8 sm:px-2 lg:px-8">
      {/* Header Section */}
      <div className="mb-12">
        <p className="text-primary font-semibold mb-2">{blueprint.category}</p>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground-strong">
          {blueprint.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {blueprint.description}
        </p>

        {/* Author and Meta Info */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {/* --- FIX: Added a check to see if author exists --- */}
          {blueprint.author && (
            <div className="flex items-center gap-2">
              {blueprint.author.image ? (
                <Image
                  src={blueprint.author.image}
                  alt={blueprint.author.name}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              ) : (
                <UserCircle className="h-6 w-6" />
              )}
              <span>{blueprint.author.name}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={blueprint.publishedAt}>
              {new Date(blueprint.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {blueprint.mainImage && (
        <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
          <Image
            src={urlForImage(blueprint.mainImage).url()}
            alt={blueprint.title}
            fill
            className="object-cover bg-card"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Body Content */}
      <div className="prose prose-invert prose-lg w-full container mx-auto">
        {blueprint.body && <PortableTextComponent value={blueprint.body} />}
      </div>
    </article>
  );
}
