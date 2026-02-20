'use client';

import Link from 'next/link';
import { Product } from '@/types';
import ProductCard from '@/components/product/ProductCard';

interface NewDropsProps {
  products: Product[];
}

export default function NewDrops({ products }: NewDropsProps) {
  const displayProducts = products.slice(0, 4);

  return (
    <section className="container py-10 md:py-16">

      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
        <h2 className="text-[40px] md:text-[56px] lg:text-[74px] font-black text-dark uppercase leading-[0.95] tracking-tight">
          Don&apos;t miss out<br />new drops
        </h2>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-blue text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-lg hover:bg-blue-dark transition-colors w-fit shrink-0"
        >
          Shop New Drops
        </Link>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
