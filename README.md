# ShopZone — Product Catalog

A responsive product catalog built with Next.js, TypeScript, and Tailwind CSS. Browse products by category and view detailed product information.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Axios** for API requests
- **React Context API** for state management

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
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Landing page — product list + categories
│   ├── globals.css             # Global styles and Tailwind imports
│   └── products/
│       └── [id]/
│           └── page.tsx        # Product detail page (dynamic route)
├── components/
│   ├── ProductCard.tsx         # Single product card
│   ├── ProductGrid.tsx         # Responsive grid of product cards
│   ├── CategoryList.tsx        # Horizontal scrollable category list
│   ├── Loader.tsx              # Loading spinner
│   ├── ErrorState.tsx          # Error message display
│   └── EmptyState.tsx          # Empty state placeholder
├── context/
│   └── ProductContext.tsx       # Global product & category state
├── lib/
│   └── api.ts                  # Axios API functions
├── types/
│   └── index.ts                # TypeScript interfaces
└── public/
    └── placeholder.svg         # Fallback image
```

## API

Data is fetched from the [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/):

- `GET /products` — all products
- `GET /products/:id` — single product
- `GET /categories` — all categories

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Push to a Git repo and import it into Vercel — no extra configuration needed.
