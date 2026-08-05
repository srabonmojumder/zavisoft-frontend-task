'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, Check, ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice, sanitizeImageUrl } from '@/lib/utils';

interface FitFinderProps {
  products: Product[];
}

const styles = [
  { id: 'runner', title: 'High-Performance Runner', desc: 'Max cushioning for long distance & daily comfort' },
  { id: 'hightop', title: 'Streetwear High-Top', desc: 'Bold ankle support & statement street aesthetics' },
  { id: 'minimalist', title: 'Minimalist Court', desc: 'Clean leather upper for versatile everyday wear' },
  { id: 'luxe', title: 'Studio Atelier Luxe', desc: 'Hand-finished gold accents & rare limited drop' },
];

export default function FitFinder({ products }: FitFinderProps) {
  const [selectedStyle, setSelectedStyle] = useState(styles[0].id);

  const matchedProduct = products.length > 0
    ? (selectedStyle === 'runner' ? products[0] : selectedStyle === 'hightop' ? products[1] : selectedStyle === 'minimalist' ? products[2] : products[3])
    : null;

  return (
    <section className="bg-[#0e0e16] py-16 md:py-24 border-t border-white/5 relative">
      <div className="container">

        <div className="bg-gradient-to-r from-[#12121c] via-[#181827] to-[#12121c] border border-white/10 rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">

          {/* Ambient Glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Interactive Quiz Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-3.5 py-1 mb-3">
                <Compass className="w-3.5 h-3.5 text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-bright">
                  INTERACTIVE FINDER
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3">
                FIND YOUR PERFECT <span className="text-gold-gradient">SOLEVA STRIDE</span>
              </h2>

              <p className="text-muted text-xs sm:text-sm mb-6 leading-relaxed">
                Select your preferred footwear style below to get tailored recommendations from our studio atelier.
              </p>

              {/* Style Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {styles.map((style) => {
                  const isSelected = selectedStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gold/10 border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'bg-[#12121c] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-gold-bright' : 'text-white'}`}>
                          {style.title}
                        </h4>
                        {isSelected && <Check className="w-4 h-4 text-gold shrink-0" />}
                      </div>
                      <p className="text-[11px] text-muted leading-tight">{style.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Matched Product Recommendation */}
            <div className="lg:col-span-5">
              {matchedProduct && (
                <div className="bg-[#12121c] border border-gold/30 rounded-3xl p-6 shadow-2xl relative">
                  <span className="bg-gold text-ink text-[10px] font-black uppercase px-3 py-1 rounded-full absolute top-4 left-4 z-10 shadow-md">
                    99% MATCH
                  </span>

                  <div className="relative aspect-[4/3] bg-[#1a1a28] rounded-2xl overflow-hidden mb-4 border border-white/5">
                    <Image
                      src={sanitizeImageUrl(matchedProduct.images?.[0] || '')}
                      alt={matchedProduct.title}
                      fill
                      className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-base font-bold text-bone uppercase line-clamp-1 mb-1">
                    {matchedProduct.title}
                  </h3>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-black text-gold-bright">
                      {formatPrice(matchedProduct.price)}
                    </span>
                    <Link
                      href={`/products/${matchedProduct.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-gold via-gold-bright to-gold text-ink text-xs font-black uppercase px-5 py-2.5 rounded-xl hover:scale-105 transition-transform"
                    >
                      View Match <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
