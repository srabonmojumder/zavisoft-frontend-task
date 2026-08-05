'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 py-4 px-3 sm:px-6 transition-all duration-300">
      <div className="container mx-auto max-w-7xl">

        {/* Desktop Navigation — Glassmorphic Pill */}
        <nav className="hidden lg:flex items-center justify-between bg-[#0e0e16]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full px-8 py-3.5 relative">

          {/* Left Nav Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-bone hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              New Drops
            </Link>
            <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted hover:text-bone transition-colors cursor-pointer">
              Men <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted hover:text-bone transition-colors cursor-pointer">
              Women <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-bone transition-colors"
            >
              Collections
            </Link>
          </div>

          {/* Logo — Center Brand */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 group">
            <span className="text-2xl font-black tracking-[0.2em] text-white group-hover:text-gold transition-colors uppercase">
              SOLEVA
            </span>
            <span className="w-2 h-2 rounded-full bg-gold animate-ping opacity-75" />
          </Link>

          {/* Right Nav Icons */}
          <div className="flex items-center gap-2">
            <button
              className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors text-bone"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/"
              className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors text-bone"
              aria-label="Account"
            >
              <User className="w-4 h-4" />
            </Link>

            <Link
              href="/cart"
              className="relative w-10 h-10 flex items-center justify-center bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded-full transition-all text-gold hover:scale-105 ml-2"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 text-gold" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-gold text-ink text-[10px] font-black rounded-full flex items-center justify-center px-1 shadow-lg shadow-gold/30">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Bar */}
        <nav className="flex lg:hidden items-center justify-between bg-[#0e0e16]/90 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-3 relative">
          <button
            className="p-1.5 text-bone hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/" onClick={closeMenu} className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            <span className="text-xl font-black tracking-[0.18em] text-white">SOLEVA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              onClick={closeMenu}
              className="relative w-9 h-9 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-full text-gold"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] bg-gold text-ink text-[9px] font-black rounded-full flex items-center justify-center px-0.5">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </nav>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-3 container bg-[#12121c] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-rise">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-wider text-gold py-2 border-b border-white/5 flex items-center gap-2"
              onClick={closeMenu}
            >
              <Sparkles className="w-4 h-4" />
              New Drops Exclusives
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-wider text-bone py-2 border-b border-white/5"
              onClick={closeMenu}
            >
              Men Collection
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-wider text-bone py-2 border-b border-white/5"
              onClick={closeMenu}
            >
              Women Collection
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-wider text-bone py-2"
              onClick={closeMenu}
            >
              All Releases
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
