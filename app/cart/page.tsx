'use client';

import { useProducts } from '@/context/ProductContext';
import { useCart } from '@/context/CartContext';
import CartItemComponent from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import YouMayAlsoLike from '@/components/product/YouMayAlsoLike';
import EmptyState from '@/components/ui/EmptyState';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function CartPage() {
  const { items } = useCart();
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-[#09090d]">
      <main>
        {/* SOLEVA VIP Promo Banner */}
        <div className="container pt-6 md:pt-10">
          <div className="bg-[#12121c] border border-gold/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Studio Privilege Access
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                  SOLEVA <span className="text-gold-gradient">MEMBERSHIP SAVINGS</span>
                </h2>
                <p className="text-xs text-muted mt-1 max-w-xl">
                  Enjoy complimentary express worldwide delivery &amp; complimentary studio returns on all orders.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/" className="text-xs font-bold text-ink bg-gold hover:bg-gold-bright px-5 py-2.5 rounded-xl uppercase tracking-wider transition-all">
                  Join Privilege Club
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Content */}
        <div className="container py-8 md:py-12">
          {items.length === 0 ? (
            <EmptyState
              title="Your SOLEVA Bag is empty"
              description="Explore our limited edition drops and add your favorite footwear."
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
              {/* Items List */}
              <div className="lg:col-span-3">
                <div className="bg-[#12121c] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-1">
                    YOUR BAG <span className="text-gold">({items.length})</span>
                  </h2>
                  <p className="text-xs text-muted mb-6">
                    Items are reserved for a limited time during checkout.
                  </p>
                  <div className="divide-y divide-white/10">
                    {items.map((item) => (
                      <CartItemComponent key={`${item.product.id}-${item.size}-${item.color}`} item={item} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Panel */}
              <div className="lg:col-span-2">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <YouMayAlsoLike products={products.slice(0, 8)} />
      </main>
    </div>
  );
}
