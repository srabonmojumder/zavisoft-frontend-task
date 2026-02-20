import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const categories = ['Runners', 'Sneakers', 'Basketball', 'Outdoor', 'Golf', 'Hiking'];
const company = ['About', 'Contact', 'Blogs'];

export default function Footer() {
  return (
    <footer>
      {/* Footer links */}
      <div className="container bg-dark text-white rounded-t-[48px] rounded-b-[48px] mt-[-50px]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About us */}
            <div>
              <h3 className="text-yellow font-bold text-lg mb-4">About us</h3>
              <p className="text-[#E7E7E3] font-semibold text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all cover with our exclusive
                collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-yellow font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href="/"
                      className="text-[#E7E7E3] font-semibold text-sm hover:text-white transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-yellow font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-[#E7E7E3] font-semibold text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="text-yellow font-bold text-lg mb-4">Follow us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-yellow transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-yellow transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-yellow transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-yellow transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.27 8.27 0 004.76 1.5V6.8a4.83 4.83 0 01-1-.11z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Large KICKS logo */}
        <div className="overflow-hidden px-8 md:px-14 lg:px-20">
          <h2 className="text-[100px] sm:text-[140px] md:text-[200px] lg:text-[320px] font-black leading-[0.75] tracking-tighter text-white select-none translate-y-[35%]">
            KICKS
          </h2>
        </div>
      </div>

      {/* Copyright - outside dark bg */}
      <div className="py-4">
        <p className="text-gray-500 text-xs text-center">&copy; All rights reserved</p>
      </div>
    </footer>
  );
}
