import { ArrowUpRight } from 'lucide-react'; // A nice icon library
import Link from 'next/link';

interface BlueprintCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
}

const BlueprintCard = ({
  slug,
  title,
  description,
  category,
}: BlueprintCardProps) => {
  return (
    <Link href={`/blueprints/${slug}`} className="group block">
      <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-primary">{category}</p>
          <h3 className="text-xl font-display font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center font-semibold text-primary">
          Read More
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
};

export default BlueprintCard;
