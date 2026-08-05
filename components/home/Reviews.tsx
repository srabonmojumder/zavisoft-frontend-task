import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    title: 'Unmatched Quality & Style',
    text: 'SOLEVA delivers the highest standards in luxury sneaker craft. The cushioning is pure perfection.',
    rating: 5.0,
    author: 'Marcus Vance',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
  },
  {
    id: 2,
    title: 'Exceeded All Expectations',
    text: 'From unboxing to wearing on the street, SOLEVA elevates footwear to a whole new art form.',
    rating: 5.0,
    author: 'Elena Rostova',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80',
  },
  {
    id: 3,
    title: 'Statement Footwear',
    text: 'The limited drop details and gold accents make these sneakers my favorite addition to my collection.',
    rating: 5.0,
    author: 'Julian Thorne',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80',
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#0e0e16] py-16 md:py-24 border-t border-white/5">
      <div className="container">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <MessageSquareQuote className="w-3.5 h-3.5" /> Client Voices
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              COMMUNITY <span className="text-gold-gradient">REVIEWS</span>
            </h2>
          </div>

          <button className="hidden sm:inline-flex bg-[#161622] hover:bg-gold hover:text-ink border border-white/10 text-gold-bright text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg">
            See All Reviews
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#12121c] border border-white/10 hover:border-gold/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Header with Avatar & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border border-gold/30">
                      <Image
                        src={review.avatar}
                        alt={review.author}
                        width={44}
                        height={44}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-bone flex items-center gap-1.5">
                        {review.author}
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      </h4>
                      <p className="text-[11px] text-muted">{review.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <span className="text-xs font-bold text-gold-bright">{review.rating}</span>
                  </div>
                </div>

                {/* Review Text */}
                <h5 className="font-bold text-base text-white mb-2">{review.title}</h5>
                <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Review Image */}
              <div className="relative h-[200px] rounded-2xl overflow-hidden border border-white/5">
                <Image
                  src={review.image}
                  alt="SOLEVA Product"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
