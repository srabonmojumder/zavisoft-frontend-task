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
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark uppercase leading-tight">
          Don&apos;t miss out<br />new drops
        </h2>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-blue text-white text-xs font-bold uppercase tracking-wide px-5 py-3 rounded-lg hover:bg-blue-dark transition-colors w-fit"
        >
          Shop New Drops
        </Link>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isNew
            discount={index === 1 ? '50% off' : undefined}
          />
        ))}
      </div>
    </section>
  );
}
