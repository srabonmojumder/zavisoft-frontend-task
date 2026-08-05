'use client';

import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="container py-10">
      <div className="relative bg-gradient-to-r from-[#12121c] via-[#1a1a29] to-[#12121c] border border-white/10 rounded-[36px] p-8 md:p-14 overflow-hidden shadow-2xl">

        {/* Ambient Radial Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-3.5 py-1 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-bright">
                EXCLUSIVE MEMBERSHIP
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              JOIN THE <span className="text-gold-gradient">SOLEVA CLUB</span> &amp; RECEIVE 15% OFF
            </h2>
            <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
              Unlock early access to hyper-limited drops, VIP invitations, and private studio releases.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your VIP email address"
                className="flex-1 px-5 py-3.5 rounded-2xl bg-[#09090d]/80 border border-white/15 text-bone placeholder:text-muted text-sm focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold via-gold-bright to-gold text-ink text-xs font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 shrink-0"
              >
                Join Now <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          <div className="w-full lg:w-auto text-center lg:text-right shrink-0">
            <h3 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-[0.1em] text-white/90 leading-none select-none uppercase">
              SOLEVA<span className="text-gold align-top text-3xl md:text-5xl">+</span>
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
