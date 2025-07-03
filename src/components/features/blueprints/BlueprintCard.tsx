import type { Blueprint } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// The props now include the optional mainImageUrl
type BlueprintCardProps = Pick<
  Blueprint,
  'slug' | 'title' | 'description' | 'category' | 'mainImageUrl'
>;

const BlueprintCard = ({
  slug,
  title,
  description,
  category,
  mainImageUrl,
}: BlueprintCardProps) => {
  return (
    <Link
      href={`/blueprints/${slug}`}
      className="group relative block h-full overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      {/* Background Image Layer */}
      {mainImageUrl && (
        <Image
          src={mainImageUrl}
          alt={`Background for ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Overlay and Content Layer */}
      <div className="relative flex h-full flex-col bg-card/90 p-6 backdrop-blur-sm transition-colors duration-300 group-hover:bg-card/80">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-primary">{category}</p>
          <h3 className="text-xl font-display text-[#F8FAFC] font-bold text-card-foreground">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground text-[#CBD5E1] line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read More
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default BlueprintCard;
