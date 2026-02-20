'use client';

import { useProducts } from '@/context/ProductContext';
import { useCart } from '@/context/CartContext';
import CartItemComponent from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import YouMayAlsoLike from '@/components/product/YouMayAlsoLike';
import EmptyState from '@/components/ui/EmptyState';
import Link from 'next/link';

export default function CartPage() {
  const { items } = useCart();
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-bg-cart">
      <main>
        {/* Promo banner */}
        <div className="container pt-6 md:pt-10">
          <div className="mb-2">
            <h2 className="text-lg md:text-xl font-bold text-dark italic">Saving to celebrate</h2>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed max-w-2xl">
              Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
            </p>
            <p className="text-xs mt-1">
              <Link href="/" className="font-medium text-dark underline">Join us</Link>
              {' '}or{' '}
              <Link href="/" className="font-medium text-dark underline">Sign-in</Link>
            </p>
          </div>
        </div>

        {/* Cart content */}
        <div className="container py-6 md:py-10">
          {items.length === 0 ? (
            <EmptyState
              title="Your bag is empty"
              description="Add some products to your bag to get started."
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
              {/* Your Bag */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-dark mb-1">Your Bag</h2>
                  <p className="text-xs text-text-secondary mb-4">
                    Items in your bag not reserved- check out now to make them yours.
                  </p>
                  <div>
                    {items.map((item) => (
                      <CartItemComponent key={`${item.product.id}-${item.size}-${item.color}`} item={item} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>

        {/* You may also like */}
        <YouMayAlsoLike products={products.slice(0, 8)} />
      </main>
    </div>
  );
}
