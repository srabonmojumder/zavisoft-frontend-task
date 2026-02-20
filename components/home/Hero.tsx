import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container pt-8 md:pt-10">

      {/* DO IT RIGHT heading */}
      <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-black leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8">
        <span className="text-dark">DO IT </span>
        <span className="text-blue">RIGHT</span>
      </h1>

      {/* Featured product card */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[300px] sm:h-[380px] md:h-[460px] lg:h-[540px] bg-dark border-2 border-blue">

        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=80"
          alt="Nike Air Max"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Vertical badge - left edge */}
        <div className="absolute left-0 top-0 bottom-0 z-20 w-9 bg-dark/80 flex items-center justify-center">
          <span
            className="text-white text-[9px] font-bold uppercase tracking-widest"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Nike product of the year
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-9 right-0 z-10 p-6 md:p-8 lg:p-10 max-w-md">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight">
            Nike Air Max
          </h2>
          <p className="text-white/80 text-sm mt-3 leading-relaxed">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 bg-blue text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-blue-dark transition-colors"
          >
            Shop Now
          </Link>
        </div>

        {/* Thumbnails - right side */}
        <div className="hidden md:flex flex-col absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 gap-3 z-20">
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden ring-2 ring-blue bg-white/10">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80"
              alt="Nike shoe variant 1"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden ring-2 ring-blue bg-white/10">
            <Image
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200&q=80"
              alt="Nike shoe variant 2"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
