import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-6 md:pt-8">
      {/* DO IT RIGHT heading */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
        <span className="text-dark">DO IT </span>
        <span className="text-yellow">RIGHT</span>
      </h1>

      {/* Featured product card */}
      <div className="relative bg-dark rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=80')",
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />

          {/* New product of the year - Vertical badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-[#E74C3C] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-6 rounded-lg writing-vertical">
              <span className="block" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
                New product of the year
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-10 lg:p-12 pl-16 md:pl-20 max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
              Nike Air Max
            </h2>
            <p className="text-white/70 text-sm mt-2 leading-relaxed">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 bg-blue text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-blue-dark transition-colors w-fit"
            >
              Shop Now
            </Link>
          </div>

          {/* Thumbnail images - Desktop only */}
          <div className="hidden md:flex absolute right-6 lg:right-10 bottom-6 lg:bottom-10 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-14 h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  i === 1 ? 'border-white' : 'border-white/20'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80')`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
