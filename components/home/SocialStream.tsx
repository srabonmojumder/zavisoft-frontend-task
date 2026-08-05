import Image from 'next/image';
import { Instagram, Heart, ArrowUpRight } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    tag: '@solevastudio',
    likes: '2.4k',
    product: 'Aura Pulse V1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80',
    tag: '@solevastudio',
    likes: '4.1k',
    product: 'Obsidian Core High',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    tag: '@solevastudio',
    likes: '1.8k',
    product: 'Gold Leaf Runner',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    tag: '@solevastudio',
    likes: '3.6k',
    product: 'Court Luxe Edition',
  },
];

export default function SocialStream() {
  return (
    <section className="bg-[#09090d] py-16 md:py-24 border-t border-white/5">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Instagram className="w-4 h-4" /> Global Community
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              TAG <span className="text-gold-gradient">#SOLEVASTUDIO</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#14141e] hover:bg-gold hover:text-ink border border-white/10 text-gold-bright text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 w-fit shrink-0"
          >
            Follow On Instagram <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid Stream */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-[#12121c] border border-white/10 hover:border-gold/50 rounded-3xl overflow-hidden aspect-[4/5] shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={post.image}
                alt="SOLEVA Lifestyle"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Hover Overlay Details */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex items-center justify-between text-white text-xs mb-1">
                  <span className="font-bold text-gold-bright">{post.tag}</span>
                  <span className="flex items-center gap-1 text-[11px] text-muted">
                    <Heart className="w-3.5 h-3.5 text-danger fill-danger" /> {post.likes}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-bone uppercase truncate">{post.product}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
