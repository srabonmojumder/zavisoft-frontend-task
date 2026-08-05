'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import ProductCard from '@/components/product/ProductCard';

interface NewDropsProps {
  products: Product[];
}

export default function NewDrops({ products }: NewDropsProps) {
  const displayProducts = products.slice(0, 4);

  return (
    <section className="container py-12 md:py-20">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Curated Selections
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight">
            SOLEVA <span className="text-gold-gradient">EXCLUSIVES</span>
          </h2>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#161622] hover:bg-gold hover:text-ink border border-white/10 text-gold-bright text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all duration-300 w-fit shrink-0 shadow-lg"
        >
          Shop All Drops <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isNew
          />
        ))}
      </div>
    </section>
  );
}
