'use client';

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function OrderSummary() {
  const { totalItems, subtotal, delivery, total } = useCart();

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-dark mb-6">Order Summary</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">{totalItems} ITEM{totalItems !== 1 ? 'S' : ''}</span>
          <span className="font-medium text-dark">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Delivery</span>
          <span className="font-medium text-dark">{formatPrice(delivery)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Sales Tax</span>
          <span className="font-medium text-dark">-</span>
        </div>
        <div className="border-t border-border pt-3 mt-3">
          <div className="flex justify-between">
            <span className="font-bold text-dark">Total</span>
            <span className="font-bold text-dark text-lg">{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-dark text-white text-sm font-bold uppercase tracking-wide py-4 rounded-lg hover:bg-dark-secondary transition-colors mt-6">
        Checkout
      </button>

      <button className="w-full text-center text-sm text-text-secondary mt-3 hover:text-dark transition-colors">
        Use a promo code
      </button>
    </div>
  );
}
