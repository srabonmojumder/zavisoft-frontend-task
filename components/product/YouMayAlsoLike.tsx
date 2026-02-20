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
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dark uppercase">
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

      {/* Scrollable products */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[200px] sm:min-w-[220px] md:min-w-[260px] flex-shrink-0">
            <ProductCard product={product} isNew />
          </div>
        ))}
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: Math.min(4, Math.ceil(products.length / 4)) }).map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === 0 ? 'w-6 bg-blue' : 'w-6 bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
