'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useProducts } from '@/context/ProductContext';
import { formatPrice, sanitizeImageUrl } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const { totalItems } = useCart();
  const { products } = useProducts();

  const filteredProducts = searchQuery.trim()
    ? products.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 4)
    : products.slice(0, 4);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#09090d] border-b border-white/10 text-white text-[11px] font-semibold py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-gold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="uppercase tracking-widest text-[10px]">SOLEVA STUDIO PRIVILEGE</span>
          </div>
          <div className="mx-auto sm:mx-0 text-center text-muted font-medium tracking-wide">
            COMPLIMENTARY EXPRESS WORLDWIDE SHIPPING ON ALL ORDERS &bull; CODE: <span className="text-gold-bright font-bold">SOLEVALUXE</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-muted text-[11px]">
            <span>USD ($)</span>
            <span>ENG</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 py-3 px-3 sm:px-6 transition-all duration-300">
        <div className="container mx-auto max-w-7xl relative">

          {/* Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center justify-between bg-[#0e0e16]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] rounded-full px-8 py-3.5 relative">

            {/* Left Nav Links with Mega Menu Triggers */}
            <div className="flex items-center gap-7">
              <Link
                href="/"
                className="text-xs font-bold uppercase tracking-widest text-bone hover:text-gold transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                New Drops
              </Link>

              {/* Men Mega Trigger */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveMegaMenu('men')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted hover:text-bone transition-colors cursor-pointer">
                  Men <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {activeMegaMenu === 'men' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-[#12121c] border border-white/10 rounded-3xl p-5 shadow-2xl backdrop-blur-xl animate-rise z-50">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-3">Men Studio Line</h4>
                    <div className="space-y-2 mb-4">
                      <Link href="/" className="block text-xs font-semibold text-bone hover:text-gold transition-colors">Performance Runners</Link>
                      <Link href="/" className="block text-xs font-semibold text-bone hover:text-gold transition-colors">Streetwear High-Tops</Link>
                      <Link href="/" className="block text-xs font-semibold text-bone hover:text-gold transition-colors">Minimalist Court Series</Link>
                    </div>
                    <div className="relative h-28 rounded-2xl overflow-hidden border border-white/10">
                      <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" alt="Men collection" fill className="object-cover opacity-70" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white uppercase">Featured Drop</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Women Mega Trigger */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveMegaMenu('women')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted hover:text-bone transition-colors cursor-pointer">
                  Women <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {activeMegaMenu === 'women' && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-[#12121c] border border-white/10 rounded-3xl p-5 shadow-2xl backdrop-blur-xl animate-rise z-50">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-3">Women Studio Line</h4>
                    <div className="space-y-2 mb-4">
                      <Link href="/" className="block text-xs font-semibold text-bone hover:text-gold transition-colors">Elevated Platform Runners</Link>
                      <Link href="/" className="block text-xs font-semibold text-bone hover:text-gold transition-colors">Luxe Street Aesthetics</Link>
                      <Link href="/" className="block text-xs font-semibold text-bone hover:text-gold transition-colors">Studio Atelier Exclusives</Link>
                    </div>
                    <div className="relative h-28 rounded-2xl overflow-hidden border border-white/10">
                      <Image src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80" alt="Women collection" fill className="object-cover opacity-70" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white uppercase">New Season</span>
                    </div>
                  </div>
                )}
              </div>

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

            {/* Right Nav Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors text-bone cursor-pointer"
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

          {/* Mobile Navigation Bar */}
          <nav className="flex lg:hidden items-center justify-between bg-[#0e0e16]/90 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-3 relative shadow-xl">
            <button
              className="p-1.5 text-bone hover:text-gold transition-colors cursor-pointer"
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
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-8 h-8 flex items-center justify-center text-bone hover:text-gold"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
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

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mx-3 container bg-[#12121c] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-rise">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-bold uppercase tracking-wider text-gold py-2.5 border-b border-white/5 flex items-center justify-between"
                onClick={closeMenu}
              >
                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> New Drops Exclusives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-wider text-bone py-2.5 border-b border-white/5"
                onClick={closeMenu}
              >
                Men Collection
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-wider text-bone py-2.5 border-b border-white/5"
                onClick={closeMenu}
              >
                Women Collection
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-wider text-bone py-2.5"
                onClick={closeMenu}
              >
                Studio Exclusives
              </Link>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-muted">
                <span>Currency: <strong className="text-gold">USD ($)</strong></span>
                <span className="flex items-center gap-1 text-gold"><ShieldCheck className="w-3.5 h-3.5" /> Authenticated</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Interactive Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-rise">
          <div className="bg-[#12121c] border border-white/15 rounded-3xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl relative">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-muted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Search className="w-4 h-4" /> Search SOLEVA Studio
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sneakers, runners, categories..."
                className="w-full bg-[#1a1a28] border border-white/15 rounded-2xl px-5 py-4 text-bone placeholder:text-muted focus:outline-none focus:border-gold text-sm sm:text-base font-medium"
                autoFocus
              />
            </div>

            {/* Quick Suggestions / Results */}
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-3">
                {searchQuery ? 'Search Results' : 'Trending Searches'}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    onClick={() => setSearchModalOpen(false)}
                    className="flex items-center gap-3 bg-[#181824] hover:bg-[#202030] border border-white/10 rounded-2xl p-3 transition-all"
                  >
                    <div className="relative w-12 h-12 bg-[#12121c] rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={sanitizeImageUrl(p.images?.[0] || '')}
                        alt={p.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0">
                      <h6 className="text-xs font-bold text-bone truncate">{p.title}</h6>
                      <p className="text-xs text-gold-bright font-extrabold">{formatPrice(p.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
