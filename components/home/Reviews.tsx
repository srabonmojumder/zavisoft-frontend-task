import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
  },
  {
    id: 2,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80',
  },
  {
    id: 3,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80',
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#E7E7E3] py-12 md:py-20">
      <div className="container">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl lg:text-[74px] font-semibold text-dark uppercase">
            Reviews
          </h2>
          <button className="bg-blue text-white text-sm font-semibold uppercase tracking-wide px-8 py-3 rounded-lg hover:bg-blue-dark transition-colors">
            See All
          </button>
        </div>

        {/* Reviews grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {reviews.map((review) => (
            <div key={review.id} className="min-w-[280px] bg-white rounded-2xl md:min-w-0 flex-shrink-0">
              {/* Review card */}
              <div className="bg-white rounded-2xl p-5 mb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-dark">{review.title}</h4>
                    <p className="text-text-secondary text-sm mt-1">{review.text}</p>
                    <div className="flex items-center gap-1 mt-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-star text-star"
                        />
                      ))}
                      <span className="text-sm font-bold text-dark ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt="Reviewer"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Review image */}
              <div className="relative h-[220px] md:h-[260px] rounded-tl-[0px] rounded-bl-[19px] rounded-br-[19px] overflow-hidden">
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
      </div>
    </section>
  );
}
