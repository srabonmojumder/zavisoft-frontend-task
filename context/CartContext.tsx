'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartItem, Product } from '@/types';

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, size: number, color: string) => void;
  removeFromCart: (productId: number, size: number, color: string) => void;
  updateQuantity: (productId: number, size: number, color: string, quantity: number) => void;
  updateSize: (productId: number, oldSize: number, color: string, newSize: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  delivery: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const DELIVERY_FEE = 6.99;

function matchItem(item: CartItem, productId: number, size: number, color: string) {
  return item.product.id === productId && item.size === size && item.color === color;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, size: number, color: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => matchItem(item, product.id, size, color));
      if (existing) {
        return prev.map((item) =>
          matchItem(item, product.id, size, color)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, size, color }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number, size: number, color: string) => {
    setItems((prev) => prev.filter((item) => !matchItem(item, productId, size, color)));
  }, []);

  const updateQuantity = useCallback((productId: number, size: number, color: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        matchItem(item, productId, size, color) ? { ...item, quantity } : item
      )
    );
  }, []);

  const updateSize = useCallback((productId: number, oldSize: number, color: string, newSize: number) => {
    setItems((prev) =>
      prev.map((item) =>
        matchItem(item, productId, oldSize, color) ? { ...item, size: newSize } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = items.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        clearCart,
        totalItems,
        subtotal,
        delivery,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
