'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Category } from '@/types';
import { sanitizeImageUrl } from '@/lib/utils';

interface CategoriesProps {
  categories: Category[];
}

function CategoryImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const url = sanitizeImageUrl(src);
  const isPlaceholder = url === '/placeholder.svg';

  if (isPlaceholder || error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-dark/10 text-6xl md:text-8xl font-black uppercase tracking-tighter select-none">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
      onError={() => setError(true)}
    />
  );
}

export default function Categories({ categories }: CategoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCategories = categories.slice(0, 6);
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, displayCategories.length - itemsPerPage);

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="bg-dark pt-12 md:pt-20">
      <div className="container">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[74px] font-black text-white uppercase font-semibold">
            Categories
          </h2>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-lg bg-[#3D3D3D] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#4a4a4a] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-lg bg-[#3D3D3D] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#4a4a4a] transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

        {/* Categories grid */}
        <div className="grid pb-[25px] grid-cols-1 md:grid-cols-2 gap-6 md:gap-8  bg-white md:ml-[130px] rounded-tl-[51px]">
          {displayCategories.slice(currentIndex, currentIndex + itemsPerPage).map((category, index) => (
            <Link
              key={category.id}
              href="/"
              className="group"
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'rounded-tl-[48px] bg-[#ECEEF0]' : 'bg-[#F6F6F6]'}`}>
                <div className="relative h-[280px] sm:h-[340px] md:h-[400px]">
                  <CategoryImage src={category.image} alt={category.name} />
                </div>
              </div>
              <div className="flex items-end justify-between mt-5 px-12">
                <h3 className="text-xl md:text-2xl font-bold text-[#232321] uppercase leading-tight">
                  {category.name}
                </h3>
                <span className="w-10 h-10 bg-[#3D3D3D] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-yellow transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-dark transition-colors" />
                </span>
              </div>
            </Link>
          ))}
        </div>
    </section>
  );
}
