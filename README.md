# KICKS — Premium Sneakers Store

A production-quality sneaker store frontend built with Next.js, TypeScript, and Tailwind CSS. Features a landing page, product detail pages, and a shopping cart — all fully responsive and matching the Figma design.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **Axios** for API requests
- **React Context API** for state management (Products + Cart)
- **Lucide React** for icons
- **Framer Motion** for animations

## Features

- Landing page with hero section, new drops, categories, and reviews
- Dynamic product detail page with image gallery, size/color selection
- Shopping cart with add/remove/update functionality
- Order summary with pricing breakdown
- Newsletter signup section
- Fully responsive design (mobile, tablet, desktop)
- Loading, error, and empty states
- Clean, modular component architecture

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Landing page
│   ├── globals.css                # Global styles and design tokens
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx           # Product detail page
│   └── cart/
│       └── page.tsx               # Shopping cart page
├── components/
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Loader.tsx             # Loading spinner
│   │   ├── ErrorState.tsx         # Error display
│   │   └── EmptyState.tsx         # Empty state placeholder
│   ├── product/
│   │   ├── ProductCard.tsx        # Product card with image/price
│   │   ├── ProductList.tsx        # Product grid layout
│   │   ├── ProductDetails.tsx     # Full product detail view
│   │   └── YouMayAlsoLike.tsx     # Related products carousel
│   ├── layout/
│   │   ├── Header.tsx             # Site header with navigation
│   │   ├── Footer.tsx             # Site footer with links
│   │   └── Newsletter.tsx         # Newsletter signup section
│   ├── home/
│   │   ├── Hero.tsx               # Hero banner section
│   │   ├── NewDrops.tsx           # New products section
│   │   ├── Categories.tsx         # Category browsing section
│   │   └── Reviews.tsx            # Customer reviews section
│   └── cart/
│       ├── CartItem.tsx           # Individual cart item
│       └── OrderSummary.tsx       # Cart order summary
├── context/
│   ├── ProductContext.tsx          # Product & category state
│   └── CartContext.tsx             # Cart state management
├── services/
│   ├── productService.ts          # Product API calls
│   └── categoryService.ts         # Category API calls
├── lib/
│   ├── api.ts                     # Axios instance
│   └── utils.ts                   # Utility functions
├── types/
│   ├── index.ts                   # Type re-exports
│   ├── product.ts                 # Product & Category types
│   ├── category.ts                # Category type
│   └── cart.ts                    # Cart item type
└── public/
    └── placeholder.svg            # Fallback image
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, new drops, categories, reviews |
| `/products/[id]` | Product detail with gallery, sizes, add to cart |
| `/cart` | Shopping cart with order summary |

## API

Data is fetched from the [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/):

- `GET /products` — all products
- `GET /products/:id` — single product
- `GET /categories` — all categories

## Live URL

_Coming soon_

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Push to a Git repo and import it into Vercel — no extra configuration needed.
