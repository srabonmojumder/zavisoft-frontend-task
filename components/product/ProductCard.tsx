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

      {/* Image container */}
      <div className="relative bg-[#E7E7E7] rounded-[28px] overflow-hidden aspect-[3/4] mb-5 border-[8px] border-white">

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="bg-blue text-white text-sm font-bold uppercase px-6 py-3 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[0px] rounded-bl-[0px] leading-none">
              New
            </span>
          )}
          {discount && (
            <span className="bg-yellow text-dark text-sm font-bold px-5 py-2.5 rounded-xl leading-none">
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
            className="object-contain p-4 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        </Link>
      </div>

      {/* Product title */}
      <h3 className="text-base sm:text-lg md:text-xl font-black text-dark uppercase leading-tight mb-4 line-clamp-2 tracking-wide">
        {product.title}
      </h3>

      {/* View Product button - dark bg with orange price */}
      <Link
        href={`/products/${product.id}`}
        className="mt-auto inline-flex items-center justify-center w-full bg-dark text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-4 rounded-xl hover:bg-dark-secondary transition-colors"
      >
        View Product - <span className="text-yellow ml-1">{formatPrice(product.price)}</span>
      </Link>
    </div>
  );
}
