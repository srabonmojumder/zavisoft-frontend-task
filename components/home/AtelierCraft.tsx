import Image from 'next/image';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function AtelierCraft() {
  return (
    <section className="bg-[#0e0e16] py-16 md:py-24 border-t border-white/5 relative overflow-hidden">

      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Feature Details */}
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
              <Cpu className="w-4 h-4 text-gold" /> Atelier Craftsmanship
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight mb-6">
              ENGINEERED FOR <br />
              <span className="text-gold-gradient">PERFECTION</span>
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Every pair of SOLEVA sneakers is constructed inside our high-precision studio. Combining aerated obsidian knit mesh with custom gold-alloy heel stabilizers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Point 1 */}
              <div className="bg-[#12121c] border border-white/10 rounded-2xl p-5 hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-bone text-base mb-1">CloudCushion™ Midsole</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Dual-density foam returning 88% kinetic energy on every stride.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-[#12121c] border border-white/10 rounded-2xl p-5 hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-bone text-base mb-1">ObsidianKnit™ Fibers</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Ultra-light carbon weave providing 360-degree adaptive airflow.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-[#12121c] border border-white/10 rounded-2xl p-5 hover:border-gold/40 transition-colors sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bone text-base">Serialized Studio Authenticity</h4>
                    <p className="text-xs text-muted leading-relaxed">
                      Embedded micro-NFC chip inside the left tongue verifying studio batch series.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/15 bg-[#12121c] shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1000&q=80"
              alt="SOLEVA Engineering Detail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 bg-[#12121c]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold">STUDIO ATELIER #088</span>
                  <h4 className="text-lg font-bold text-white uppercase">Obsidian Core Sneaker</h4>
                </div>
                <span className="bg-gold text-ink text-xs font-black px-3 py-1.5 rounded-full uppercase">
                  LIMITED 500 PAIRS
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
