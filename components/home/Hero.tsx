import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container pt-4 md:pt-6 pb-8 md:pb-12">

      {/* Main Editorial Header */}
      <div className="text-center mb-6 md:mb-10">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            SOLEVA EDITION 2026
          </span>
        </div>
        <h1 className="text-[44px] sm:text-[76px] md:text-[110px] lg:text-[140px] xl:text-[170px] font-black leading-[0.88] tracking-[-0.04em] uppercase">
          <span className="text-white">UNLEASH THE </span>
          <span className="text-gold-gradient">FUTURE</span>
        </h1>
      </div>

      {/* Hero Showcase Card */}
      <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0d0d14] group">

        {/* Ambient Gradient Mesh Inset */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#09090d] via-transparent to-gold/10 z-10 pointer-events-none" />

        {/* Hero Banner Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&q=85"
          alt="SOLEVA Masterpiece Sneaker"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
          priority
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/40 to-transparent z-10" />

        {/* Vertical Left Badge */}
        <div className="absolute left-0 top-[12%] z-20 bg-[#161622]/90 backdrop-blur-md border-r border-y border-white/10 px-3 py-6 rounded-r-2xl hidden sm:flex items-center">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-bright"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            SOLEVA LIMITED RELEASE
          </span>
        </div>

        {/* Floating Content Banner */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" /> Authenticated Luxury Release
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
              AURA PULSE V1
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">
              Engineered with responsive cloud cushion tech and obsidian knit fibers. Built for statement performance.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold via-gold-bright to-gold text-ink text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
            >
              Explore Drops <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Right Floating Thumbnails */}
        <div className="hidden lg:flex absolute bottom-12 right-12 gap-3 z-20">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/20 bg-[#14141e]/80 backdrop-blur-md p-1 hover:border-gold transition-colors">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80"
              alt="SOLEVA Variant 1"
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/20 bg-[#14141e]/80 backdrop-blur-md p-1 hover:border-gold transition-colors">
            <Image
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200&q=80"
              alt="SOLEVA Variant 2"
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
