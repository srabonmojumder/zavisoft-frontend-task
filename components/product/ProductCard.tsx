'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sanitizeImageUrl, formatPrice } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
  discount?: string;
}

export default function ProductCard({ product, isNew = true, discount }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = sanitizeImageUrl(product.images?.[0] || '');
  const displayUrl = imgError ? '/placeholder.svg' : imageUrl;

  return (
    <div className="group flex flex-col">

      {/* Image container with lavender background */}
      <div className="relative bg-[#D7D7EF] rounded-3xl overflow-hidden aspect-square mb-4 border-[5px] border-white shadow-sm">

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          {isNew && (
            <span className="bg-blue text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-md leading-none">
              New
            </span>
          )}
          {discount && (
            <span className="bg-yellow text-dark text-[11px] font-bold px-3 py-1.5 rounded-md leading-none">
              {discount}
            </span>
          )}
        </div>

        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={displayUrl}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        </Link>
      </div>

      {/* Product title */}
      <h3 className="text-xs sm:text-sm font-bold text-dark uppercase leading-tight mb-3 line-clamp-2 tracking-wide">
        {product.title}
      </h3>

      {/* View Product button - dark bg with orange price */}
      <Link
        href={`/products/${product.id}`}
        className="mt-auto inline-flex items-center justify-center w-full bg-dark text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-lg hover:bg-dark-secondary transition-colors"
      >
        View Product - <span className="text-yellow ml-1">{formatPrice(product.price)}</span>
      </Link>
    </div>
  );
}
