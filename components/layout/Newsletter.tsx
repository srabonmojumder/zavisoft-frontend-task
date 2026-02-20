'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-blue mx-4 md:mx-8 lg:mx-12 rounded-2xl md:rounded-3xl overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
              Join our KicksPlus<br />Club &amp; get 15% off
            </h2>
            <p className="text-white/80 mt-3 text-sm md:text-base">
              Sign up for free! Join the community.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-dark text-white text-sm font-semibold rounded-lg hover:bg-dark-secondary transition-colors uppercase"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <h3 className="text-5xl lg:text-7xl font-black text-white tracking-tight">
              KICKS<span className="text-yellow text-2xl align-top">+</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
