'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Trash2, ChevronDown } from 'lucide-react';
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
    <div className="flex gap-4 py-6 border-b border-border last:border-b-0">
      {/* Product image */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-bg-card rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={imgError ? '/placeholder.svg' : imageUrl}
          alt={item.product.title}
          fill
          sizes="128px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>

      {/* Product details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-dark uppercase leading-tight line-clamp-2">
              {item.product.title}
            </h3>
            <p className="text-xs text-text-secondary mt-1">
              {item.product.category?.name || "Men's Road Running Shoes"}
            </p>
            <p className="text-xs text-text-secondary mt-0.5">{item.color}</p>
          </div>
          <p className="text-base font-bold text-yellow whitespace-nowrap">
            {formatPrice(item.product.price)}
          </p>
        </div>

        {/* Size & Quantity selectors */}
        <div className="flex items-center gap-4 mt-3">
          <div className="relative">
            <select
              value={item.size}
              onChange={(e) => updateSize(item.product.id, item.size, item.color, Number(e.target.value))}
              className="appearance-none bg-white border border-border rounded-lg px-3 py-1.5 pr-7 text-xs font-medium text-dark cursor-pointer"
            >
              {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((s) => (
                <option key={s} value={s}>
                  Size {s}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-text-secondary pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={item.quantity}
              onChange={(e) => updateQuantity(item.product.id, item.size, item.color, Number(e.target.value))}
              className="appearance-none bg-white border border-border rounded-lg px-3 py-1.5 pr-7 text-xs font-medium text-dark cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  Quantity {q}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-text-secondary pointer-events-none" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-3">
          <button
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4 text-dark" />
          </button>
          <button
            onClick={() => removeFromCart(item.product.id, item.size, item.color)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Remove from cart"
          >
            <Trash2 className="w-4 h-4 text-dark" />
          </button>
        </div>
      </div>
    </div>
  );
}
