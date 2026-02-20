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
      <div className="relative bg-[#D7D7EF] rounded-2xl overflow-hidden aspect-square mb-3 border-4 border-white">

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {isNew && (
            <span className="bg-blue text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md leading-none">
              New
            </span>
          )}
          {discount && (
            <span className="bg-yellow text-dark text-[10px] font-bold px-2.5 py-1 rounded-md leading-none">
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
      <h3 className="text-[11px] sm:text-xs font-bold text-dark uppercase leading-tight mb-2.5 line-clamp-2 tracking-wide">
        {product.title}
      </h3>

      {/* View Product button - dark bg with orange price */}
      <Link
        href={`/products/${product.id}`}
        className="mt-auto inline-flex items-center justify-center w-full bg-dark text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide px-3 py-2.5 rounded-lg hover:bg-dark-secondary transition-colors"
      >
        View Product - <span className="text-yellow ml-1">{formatPrice(product.price)}</span>
      </Link>
    </div>
  );
}
