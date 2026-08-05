import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const categories = ['Luxe Runners', 'Limited Sneakers', 'Court Collection', 'Outdoor Lab', 'Golf Series', 'Studio Editions'];
const company = ['About SOLEVA', 'Studio Atelier', 'Press Releases', 'Care & Maintenance'];

export default function Footer() {
  return (
    <footer className="bg-[#09090d] text-white border-t border-white/10 pt-16 pb-6 overflow-hidden relative">
      <div className="container relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-16">
          {/* About us */}
          <div>
            <h3 className="text-gold font-bold text-base uppercase tracking-widest mb-4">About SOLEVA</h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              SOLEVA is an independent luxury footwear studio dedicated to precision engineering, high-concept aesthetics, and street culture releases.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gold font-bold text-base uppercase tracking-widest mb-4">Collections</h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/"
                    className="text-muted text-xs sm:text-sm hover:text-white hover:underline transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gold font-bold text-base uppercase tracking-widest mb-4">Atelier</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-muted text-xs sm:text-sm hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-gold font-bold text-base uppercase tracking-widest mb-4">Connect</h3>
            <p className="text-muted text-xs mb-4">Follow the studio across channels for private drops.</p>
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 rounded-xl bg-[#14141e] border border-white/10 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-[#14141e] border border-white/10 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-[#14141e] border border-white/10 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Large SOLEVA Watermark Logo */}
        <div className="text-center overflow-hidden pt-6 border-t border-white/5">
          <h2 className="text-[72px] sm:text-[120px] md:text-[180px] lg:text-[250px] font-black leading-[0.78] tracking-[0.08em] text-white/5 uppercase select-none pointer-events-none">
            SOLEVA
          </h2>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} SOLEVA Footwear Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
