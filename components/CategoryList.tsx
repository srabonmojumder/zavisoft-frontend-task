import Image from "next/image";
import { Category } from "@/types";

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex shrink-0 flex-col items-center gap-2"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100 sm:h-20 sm:w-20">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium text-gray-700 sm:text-sm">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
}
