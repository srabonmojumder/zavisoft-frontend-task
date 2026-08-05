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
    <div className="group flex flex-col h-full bg-[#12121c] border border-white/10 hover:border-gold/50 rounded-3xl p-3.5 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)]">

      {/* Image Container */}
      <div className="relative bg-[#1a1a26] rounded-2xl overflow-hidden aspect-[3/4] mb-4 border border-white/5 group-hover:border-gold/20 transition-colors">

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {isNew && (
            <span className="bg-gold text-ink text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-md">
              NEW RELEASE
            </span>
          )}
          {discount && (
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-gold-bright text-[10px] font-bold px-3 py-1 rounded-full">
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
            className="object-contain p-4 group-hover:scale-108 transition-transform duration-700 ease-out"
            onError={() => setImgError(true)}
          />
        </Link>
      </div>

      {/* Product Title */}
      <h3 className="text-sm sm:text-base font-bold text-bone uppercase leading-snug mb-3 min-h-[2.6em] line-clamp-2 tracking-wide group-hover:text-gold transition-colors">
        {product.title}
      </h3>

      {/* View Product Action Button */}
      <Link
        href={`/products/${product.id}`}
        className="mt-auto inline-flex items-center justify-between w-full bg-[#1c1c2b] hover:bg-gold hover:text-ink border border-white/10 text-bone text-xs font-bold uppercase tracking-wider px-4 py-3.5 rounded-xl transition-all duration-300 group/btn"
      >
        <span>View Details</span>
        <span className="text-gold-bright group-hover/btn:text-ink font-extrabold transition-colors">
          {formatPrice(product.price)}
        </span>
      </Link>
    </div>
  );
}
