'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Heart, Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Product } from '@/types';
import { sanitizeImageUrl, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

function SafeImage({ src, alt, ...props }: React.ComponentProps<typeof Image>) {
  const [error, setError] = useState(false);
  return (
    <Image
      {...props}
      src={error ? '/placeholder.svg' : src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}

interface ProductDetailsProps {
  product: Product;
}

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const colors = [
  { name: 'Obsidian Navy', value: '#12121c' },
  { name: 'Gold Leaf', value: '#d4af37' },
  { name: 'Army Olive', value: '#3f4531' },
];

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const { addToCart } = useCart();
  const router = useRouter();

  const images = product.images?.map(sanitizeImageUrl).filter((url) => url !== '/placeholder.svg') || [];
  if (images.length === 0) images.push('/placeholder.svg');
  const gridImages = [...images];
  while (gridImages.length < 6) {
    gridImages.push(images[gridImages.length % images.length]);
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    const color = colors.find((c) => c.value === selectedColor)?.name || 'Default';
    addToCart(product, selectedSize, color);
  };

  const handleBuyNow = () => {
    if (!selectedSize) return;
    handleAddToCart();
    router.push('/cart');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
      {/* Image Gallery */}
      <div>
        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          <div className="relative bg-[#12121c] border border-white/10 rounded-3xl overflow-hidden aspect-square">
            <SafeImage
              src={gridImages[selectedImage] || '/placeholder.svg'}
              alt={product.title}
              fill
              sizes="100vw"
              className="object-contain p-4"
              priority
            />
            <span className="absolute top-4 left-4 bg-gold text-ink text-[10px] font-black uppercase px-3 py-1 rounded-full">
              SOLEVA RELEASE
            </span>
          </div>
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {gridImages.slice(0, 6).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all bg-[#161622] ${
                    selectedImage === index ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10'
                  }`}
                >
                  <SafeImage
                    src={img}
                    alt={`${product.title} view ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop View — 2x3 Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {gridImages.slice(0, 6).map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative bg-[#12121c] rounded-3xl overflow-hidden aspect-square border-2 transition-all group ${
                selectedImage === index ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.25)]' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <SafeImage
                src={img}
                alt={`${product.title} view ${index + 1}`}
                fill
                sizes="25vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                priority={index === 0}
              />
              {index === 0 && (
                <span className="absolute top-3 left-3 bg-gold text-ink text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                  SOLEVA RELEASE
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product Info Panel */}
      <div className="space-y-6 bg-[#12121c] border border-white/10 rounded-3xl p-6 sm:p-8">

        {/* Header */}
        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Studio Authentic Edition
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight">
            {product.title}
          </h1>
          <p className="text-2xl sm:text-3xl font-extrabold text-gold-bright mt-3">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Color Palette Selector */}
        <div>
          <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Color Way</h3>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                  selectedColor === color.value
                    ? 'border-gold bg-gold/10 text-gold-bright'
                    : 'border-white/10 text-muted hover:border-white/20'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: color.value }} />
                {color.name}
              </button>
            ))}
          </div>
        </div>

        {/* Size Chips */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-muted uppercase tracking-wider">Select Size (EU)</h3>
            <button className="text-xs font-semibold text-gold hover:underline">
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {sizes.map((size) => {
              const disabled = [39, 40].includes(size);
              const active = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  disabled={disabled}
                  className={`h-11 rounded-xl border text-xs font-bold transition-all ${
                    active
                      ? 'bg-gold text-ink border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'border-white/10 bg-[#181824] text-bone hover:border-gold/50'
                  } ${disabled ? 'opacity-30 cursor-not-allowed line-through' : 'cursor-pointer'}`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="flex-1 bg-gradient-to-r from-gold via-gold-bright to-gold text-ink text-xs font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Add to Bag
            </button>
            <button
              className="w-12 h-12 bg-[#181824] border border-white/10 rounded-xl flex items-center justify-center hover:border-gold text-bone transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="w-5 h-5 text-gold" />
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            disabled={!selectedSize}
            className="w-full bg-[#181824] border border-white/15 hover:border-gold text-bone text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Express Checkout
          </button>
        </div>

        {/* Studio Product Guarantees */}
        <div className="border-t border-white/10 pt-6 space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span>Guaranteed Authentic &amp; Serialized Studio Inspection</span>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            {product.description || 'Crafted with premium materials and signature SOLEVA cushioning.'}
          </p>
        </div>

      </div>
    </div>
  );
}
