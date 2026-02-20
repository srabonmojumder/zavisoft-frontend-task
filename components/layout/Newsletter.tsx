'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="container bg-blue rounded-t-[48px] px-8 md:px-14 lg:px-20 py-10 md:py-14 md:pb-[90px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1200px] mx-auto">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight">
            Join our KicksPlus<br />Club &amp; get 15% off
          </h2>
          <p className="text-white/80 mt-4 text-sm md:text-base">
            Sign up for free! Join the community.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-5 py-3 rounded-l-full bg-white/10 border border-white/20 border-r-0 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-dark text-white text-sm font-semibold rounded-r-lg hover:bg-dark-secondary transition-colors uppercase"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-auto text-center md:text-right">
          <h3 className="text-5xl md:text-7xl lg:text-[120px] font-black text-white tracking-tight leading-none">
            KICKS<span className="text-yellow text-2xl md:text-4xl lg:text-5xl align-top">+</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
