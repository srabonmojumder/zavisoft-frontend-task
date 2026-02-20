import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ProductProvider } from '@/context/ProductContext';
import { CartProvider } from '@/context/CartContext';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KICKS — Premium Sneakers & Shoes',
  description: 'Discover the latest drops in sneakers and shoes. Shop our exclusive collections.',
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
          <CartProvider>{children}</CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
