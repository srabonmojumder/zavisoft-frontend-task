'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import { sanitizeImageUrl, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductDetailsProps {
  product: Product;
}

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const colors = [
  { name: 'Shadow Navy', value: '#232321' },
  { name: 'Army Green', value: '#4A5530' },
];

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const { addToCart } = useCart();

  const images = product.images?.map(sanitizeImageUrl).filter((url) => url !== '/placeholder.svg') || [];
  if (images.length === 0) images.push('/placeholder.svg');

  const handleAddToCart = () => {
    if (!selectedSize) return;
    const color = colors.find((c) => c.value === selectedColor)?.name || 'Default';
    addToCart(product, selectedSize, color);
  };

  const handleBuyNow = () => {
    if (!selectedSize) return;
    handleAddToCart();
    window.location.href = '/cart';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
      {/* Image gallery */}
      <div className="space-y-4">
        {/* Main image */}
        <div className="relative bg-bg-card rounded-2xl md:rounded-3xl overflow-hidden aspect-square">
          <Image
            src={images[selectedImage] || '/placeholder.svg'}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {/* New Release badge */}
          <span className="absolute top-4 left-4 bg-blue text-white text-xs font-bold uppercase px-3 py-1.5 rounded-md">
            New Release
          </span>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.slice(0, 4).map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-blue' : 'border-transparent'
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.title} view ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-6">
        {/* Title & price */}
        <div>
          <span className="inline-block bg-blue text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-3">
            New Release
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-dark uppercase leading-tight">
            {product.title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-yellow mt-2">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Color selector */}
        <div>
          <h3 className="text-sm font-bold text-dark uppercase mb-3">Color</h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor === color.value
                    ? 'border-blue ring-2 ring-blue/30'
                    : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={color.name}
              />
            ))}
          </div>
        </div>

        {/* Size selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-dark uppercase">Size</h3>
            <button className="text-xs font-semibold text-text-secondary uppercase hover:text-dark transition-colors">
              Size Chart
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'bg-dark text-white border-dark'
                    : 'border-border text-dark hover:border-dark'
                } ${[39, 40].includes(size) ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={[39, 40].includes(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="flex-1 bg-dark text-white text-sm font-bold uppercase tracking-wide py-4 rounded-lg hover:bg-dark-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
            <button
              className="w-14 h-14 border border-border rounded-lg flex items-center justify-center hover:border-dark transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="w-5 h-5 text-dark" />
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            disabled={!selectedSize}
            className="w-full bg-blue text-white text-sm font-bold uppercase tracking-wide py-4 rounded-lg hover:bg-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Buy it Now
          </button>
        </div>

        {/* About the product */}
        <div className="border-t border-border pt-6">
          <h3 className="text-sm font-bold text-dark uppercase mb-3">About the Product</h3>
          <p className="text-sm text-text-secondary mb-1">
            {product.category?.name || 'General'}
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mt-3">
            {product.description}
          </p>
          <ul className="mt-3 space-y-1.5">
            <li className="text-sm text-text-secondary flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 bg-text-secondary rounded-full flex-shrink-0" />
              Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
            </li>
            <li className="text-sm text-text-secondary flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 bg-text-secondary rounded-full flex-shrink-0" />
              Join adiClub to get unlimited free standard shipping, returns, &amp; exchanges.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
