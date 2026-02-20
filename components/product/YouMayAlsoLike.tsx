'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface YouMayAlsoLikeProps {
  products: Product[];
}

export default function YouMayAlsoLike({ products }: YouMayAlsoLikeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (products.length === 0) return null;

  return (
    <section className="container py-10 md:py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <h2 className="text-[40px] md:text-[56px] lg:text-[74px] font-semibold text-dark uppercase leading-[0.95] tracking-tight">
          You may also like
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-lg bg-dark text-white flex items-center justify-center hover:bg-dark-secondary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-lg bg-dark text-white flex items-center justify-center hover:bg-dark-secondary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable product carousel - consistent on all screens */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[200px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[280px] flex-shrink-0 w-[45vw] sm:w-auto">
            <ProductCard product={product} isNew />
          </div>
        ))}
      </div>
    </section>
  );
}
