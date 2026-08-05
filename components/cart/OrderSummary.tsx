'use client';

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function OrderSummary() {
  const { totalItems, subtotal, delivery, total } = useCart();

  return (
    <div className="bg-[#12121c] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
      <h2 className="text-xl font-black text-white uppercase tracking-tight mb-6 border-b border-white/10 pb-4">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-muted">{totalItems} ITEM{totalItems !== 1 ? 'S' : ''}</span>
          <span className="font-semibold text-bone">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-muted">Studio Express Delivery</span>
          <span className="font-semibold text-gold-bright">{delivery === 0 ? 'COMPLIMENTARY' : formatPrice(delivery)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-muted">Estimated Tax</span>
          <span className="font-semibold text-bone">INCLUDED</span>
        </div>
        <div className="border-t border-white/10 pt-4 mt-2">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-white uppercase tracking-wider">Total Amount</span>
            <span className="font-black text-gold-bright text-xl sm:text-2xl">{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold via-gold-bright to-gold text-ink text-xs font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all mt-6 shadow-lg">
        Proceed to Checkout <ArrowRight className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-muted mt-4">
        <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
        <span>Encrypted 256-bit Checkout</span>
      </div>
    </div>
  );
}
