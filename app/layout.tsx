import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ProductProvider } from '@/context/ProductContext';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Newsletter from '@/components/layout/Newsletter';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SOLEVA — Luxe Footwear & Sneakers Studio',
  description: 'Discover exclusive luxury sneakers, high-performance footwear, and street culture releases at SOLEVA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`} suppressHydrationWarning>
        <ProductProvider>
          <CartProvider>
            <Header />
            {children}
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-10 md:pb-0">
              <Newsletter />
              <Footer />
            </div>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
