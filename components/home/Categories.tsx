'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '@/types';
import { sanitizeImageUrl } from '@/lib/utils';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCategories = categories.slice(0, 6);
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, displayCategories.length - itemsPerPage);

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="bg-bg-card py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark uppercase">
          Categories
        </h2>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-lg bg-dark text-white flex items-center justify-center disabled:opacity-30 hover:bg-dark-secondary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 rounded-lg bg-dark text-white flex items-center justify-center disabled:opacity-30 hover:bg-dark-secondary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {displayCategories.slice(currentIndex, currentIndex + itemsPerPage).map((category) => (
          <Link
            key={category.id}
            href="/"
            className="group relative bg-bg-card rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px]">
              <Image
                src={sanitizeImageUrl(category.image)}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex items-end justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase">
                  {category.name}
                </h3>
                <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-yellow transition-colors">
                  <ChevronRight className="w-5 h-5 text-dark" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
