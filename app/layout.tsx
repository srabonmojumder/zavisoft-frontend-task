import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProductProvider } from '@/context/ProductContext';
import { CartProvider } from '@/context/CartContext';
import './globals.css';

const inter = Inter({
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
      <body className={`${inter.className} antialiased`}>
        <ProductProvider>
          <CartProvider>{children}</CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
