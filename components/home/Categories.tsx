'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight, Layers } from 'lucide-react';
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
      <div className="absolute inset-0 flex items-center justify-center bg-[#181824]">
        <span className="text-white/10 text-5xl font-black uppercase tracking-widest select-none">
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
      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
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
    <section className="bg-[#09090d] py-16 md:py-24 border-t border-white/5">
      <div className="container">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Layers className="w-3.5 h-3.5" /> Curated Lines
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              STUDIO <span className="text-gold-gradient">CATEGORIES</span>
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-2xl bg-[#14141e] border border-white/10 text-white flex items-center justify-center disabled:opacity-30 hover:border-gold hover:text-gold transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="w-11 h-11 rounded-2xl bg-[#14141e] border border-white/10 text-white flex items-center justify-center disabled:opacity-30 hover:border-gold hover:text-gold transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {displayCategories.slice(currentIndex, currentIndex + itemsPerPage).map((category) => (
            <Link
              key={category.id}
              href="/"
              className="group relative bg-[#12121c] border border-white/10 hover:border-gold/50 rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-[320px] sm:h-[400px] transition-all duration-500 hover:-translate-y-1 shadow-2xl"
            >
              {/* Category Background Image */}
              <div className="absolute inset-0 z-0">
                <CategoryImage src={category.image} alt={category.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/60 to-transparent" />
              </div>

              {/* Top Tag */}
              <div className="relative z-10">
                <span className="bg-gold/10 backdrop-blur-md border border-gold/30 text-gold-bright text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  SOLEVA LINE
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm mt-1">Explore luxury craftsmanship</p>
                </div>
                <span className="w-12 h-12 bg-gold text-ink rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-gold/30">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
