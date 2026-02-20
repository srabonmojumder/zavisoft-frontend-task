'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="container py-5">

        {/* Desktop Nav - Pill shaped */}
        <nav className="hidden lg:flex items-center justify-between bg-white border border-border/60 shadow-sm rounded-[24px] px-10 max-xl:px-6 py-6 relative">

          {/* Left nav items */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-semibold text-dark hover:text-yellow transition-colors"
            >
              New Drops 🔥
            </Link>
            <button className="flex items-center gap-1.5 text-sm font-medium text-dark hover:text-yellow transition-colors">
              Men <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1.5 text-sm font-medium text-dark hover:text-yellow transition-colors">
              Women <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Logo - Absolutely centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo/header-logo.png"
              alt="hero"
              fill
              className="object-cover"
              priority
            />
          </Link>

          {/* Right nav icons */}
          <div className="flex items-center gap-3">
            <button
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-dark" />
            </button>
            <Link
              href="/"
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-dark" />
            </Link>
            <Link
              href="/cart"
              className="relative w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-dark" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] bg-yellow text-dark text-[11px] font-bold rounded-full flex items-center justify-center px-0.5">
                {totalItems}
              </span>
            </Link>
          </div>
        </nav>

        {/* Mobile Nav */}
        <nav className="flex lg:hidden items-center justify-between h-12 relative">

          {/* Hamburger */}
          <button
            className="p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-dark" /> : <Menu className="w-6 h-6 text-dark" />}
          </button>

          {/* Logo - Center */}
          <Link href="/" onClick={closeMenu} className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl font-black tracking-tighter text-dark">KICKS</span>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <Link href="/" onClick={closeMenu} className="w-9 h-9 flex items-center justify-center" aria-label="Account">
              <User className="w-5 h-5 text-dark" />
            </Link>
            <Link
              href="/cart"
              onClick={closeMenu}
              className="relative w-9 h-9 flex items-center justify-center"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-dark" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-yellow text-dark text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
                {totalItems}
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container py-4 space-y-1">
            <Link href="/" className="block text-sm font-semibold text-dark py-2.5" onClick={closeMenu}>
              New Drops 🔥
            </Link>
            <button className="flex items-center gap-1 text-sm font-medium text-dark py-2.5 w-full">
              Men <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-dark py-2.5 w-full">
              Women <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
