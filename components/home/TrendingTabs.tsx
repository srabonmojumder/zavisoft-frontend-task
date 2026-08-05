'use client';

import { useState } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/product/ProductCard';
import { Flame } from 'lucide-react';

interface TrendingTabsProps {
  products: Product[];
}

const tabs = [
  { id: 'all', label: 'All Releases' },
  { id: 'streetwear', label: 'Streetwear' },
  { id: 'performance', label: 'Luxury Performance' },
  { id: 'archive', label: 'Rare Archive' },
];

export default function TrendingTabs({ products }: TrendingTabsProps) {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredProducts = () => {
    if (activeTab === 'all') return products.slice(0, 4);
    if (activeTab === 'streetwear') return products.slice(2, 6);
    if (activeTab === 'performance') return products.slice(1, 5);
    return products.slice(3, 7);
  };

  const filtered = getFilteredProducts();

  return (
    <section className="bg-[#09090d] py-16 md:py-24 border-t border-white/5">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.25em] mb-2">
            <Flame className="w-4 h-4 text-gold animate-bounce" /> Trending Studio Highlights
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DISCOVER THE <span className="text-gold-gradient">COLLECTION</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gold text-ink shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[#14141e] border border-white/10 text-muted hover:border-gold/50 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-rise">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isNew={true}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
