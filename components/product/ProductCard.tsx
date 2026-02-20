'use client';

import Image from 'next/image';
import Link from 'next/link';
import { sanitizeImageUrl } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
  discount?: string;
}

export default function ProductCard({ product, isNew = true, discount }: ProductCardProps) {
  const imageUrl = sanitizeImageUrl(product.images?.[0] || '');

  return (
    <div className="group">
      {/* Image container */}
      <div className="relative bg-bg-card rounded-2xl overflow-hidden aspect-square mb-3">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {isNew && (
            <span className="bg-blue text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
              New
            </span>
          )}
          {discount && (
            <span className="bg-yellow text-dark text-[10px] font-bold px-2.5 py-1 rounded-md">
              {discount}
            </span>
          )}
        </div>

        <Link href={`/products/${product.id}`}>
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Product info */}
      <h3 className="text-xs sm:text-sm font-bold text-dark uppercase leading-tight mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* View Product button */}
      <Link
        href={`/products/${product.id}`}
        className="inline-flex items-center justify-center w-full bg-dark text-white text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded-lg hover:bg-dark-secondary transition-colors"
      >
        View Product - ${product.price}
      </Link>
    </div>
  );
}
