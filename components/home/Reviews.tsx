import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
  },
  {
    id: 2,
    name: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80',
  },
  {
    id: 3,
    name: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80',
  },
];

export default function Reviews() {
  return (
    <section className="container py-10 md:py-16">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark uppercase">
          Reviews
        </h2>
        <button className="bg-dark text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-lg hover:bg-dark-secondary transition-colors">
          See All
        </button>
      </div>

      {/* Reviews - scrollable on mobile, grid on desktop */}
      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-5 shadow-sm min-w-[280px] md:min-w-0 flex-shrink-0">
            {/* Review header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue/30" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-dark">{review.name}</h4>
                <p className="text-text-secondary text-xs mt-0.5">{review.text}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-star text-star"
                    />
                  ))}
                  <span className="text-xs font-semibold text-dark ml-1">{review.rating}</span>
                </div>
              </div>
            </div>
            {/* Review image */}
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src={review.image}
                alt="Review product"
                fill
                sizes="(max-width: 768px) 280px, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
