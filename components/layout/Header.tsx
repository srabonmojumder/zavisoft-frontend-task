'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          {/* Left nav - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-1 text-sm font-semibold text-dark hover:text-yellow transition-colors"
            >
              New Drops 🔥
            </Link>
            <button className="flex items-center gap-1 text-sm font-medium text-dark hover:text-yellow transition-colors">
              Men <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-dark hover:text-yellow transition-colors">
              Women <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - Center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-dark">
              KICKS
            </h1>
          </Link>

          {/* Right nav */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
              <Search className="w-5 h-5 text-dark" />
            </button>
            <Link href="/" className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Account">
              <User className="w-5 h-5 text-dark" />
            </Link>
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-dark" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-yellow text-dark text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-semibold text-dark py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              New Drops 🔥
            </Link>
            <button className="flex items-center gap-1 text-sm font-medium text-dark py-2 w-full">
              Men <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-dark py-2 w-full">
              Women <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
