'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trash2, ChevronDown } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { sanitizeImageUrl, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity, updateSize } = useCart();
  const [imgError, setImgError] = useState(false);
  const imageUrl = sanitizeImageUrl(item.product.images?.[0] || '');

  return (
    <div className="flex gap-4 sm:gap-6 py-6 border-b border-white/10 last:border-b-0">
      {/* Product Image */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-[#181824] border border-white/10 rounded-2xl overflow-hidden flex-shrink-0 p-2">
        <Image
          src={imgError ? '/placeholder.svg' : imageUrl}
          alt={item.product.title}
          fill
          sizes="128px"
          className="object-contain p-2"
          onError={() => setImgError(true)}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-bone uppercase leading-snug line-clamp-2">
                {item.product.title}
              </h3>
              <p className="text-xs text-muted mt-1">
                {item.product.category?.name || "SOLEVA Studio Series"} &bull; <span className="text-gold-bright">{item.color}</span>
              </p>
            </div>
            <p className="text-base sm:text-lg font-black text-gold-bright whitespace-nowrap">
              {formatPrice(item.product.price)}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
          <div className="flex items-center gap-3">
            {/* Size Dropdown */}
            <div className="relative">
              <select
                value={item.size}
                onChange={(e) => updateSize(item.product.id, item.size, item.color, Number(e.target.value))}
                className="appearance-none bg-[#181824] border border-white/15 rounded-xl px-3 py-1.5 pr-7 text-xs font-bold text-bone cursor-pointer focus:outline-none focus:border-gold"
              >
                {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((s) => (
                  <option key={s} value={s} className="bg-[#12121c] text-bone">
                    EU Size {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
            </div>

            {/* Quantity Dropdown */}
            <div className="relative">
              <select
                value={item.quantity}
                onChange={(e) => updateQuantity(item.product.id, item.size, item.color, Number(e.target.value))}
                className="appearance-none bg-[#181824] border border-white/15 rounded-xl px-3 py-1.5 pr-7 text-xs font-bold text-bone cursor-pointer focus:outline-none focus:border-gold"
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q} value={q} className="bg-[#12121c] text-bone">
                    Qty: {q}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.product.id, item.size, item.color)}
            className="p-2 hover:bg-white/10 rounded-xl text-muted hover:text-danger transition-colors flex items-center gap-1 text-xs"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}
