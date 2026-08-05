# SOLEVA — Luxe Footwear & Sneakers Studio (`soleva-ecommerce-nextjs`)

![SOLEVA Banner](https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=80)

**SOLEVA** is an ultra-modern, high-end luxury sneaker store frontend built with Next.js 16, TypeScript, and Tailwind CSS 4. Designed with a dark luxe glassmorphic visual system, metallic gold accents, editorial typography, and interactive ecommerce capabilities.

---

## 🚀 Key Highlights & Features

### 💎 Brand & Aesthetics
- **Dark Luxe Glassmorphism**: Obsidian surfaces (`#09090d`), ambient radial meshes, hairline borders, and backdrop blurs (`backdrop-blur-2xl`).
- **Metallic Gold Design Tokens**: Rich gold gradients (`text-gold-gradient`), shimmering badges, and glow effects.
- **Editorial Typography & Animations**: High-impact headlines, smooth hover scale cards, and responsive micro-animations.

### 🧭 Navigation & Header System
- **Top Privilege Bar**: Real-time announcement ticker with VIP offer codes (`SOLEVALUXE`) and worldwide shipping notices.
- **Floating Glassmorphic Pill Header**: Sticky navigation bar with active route indicators and animated gold cart counter badge.
- **Interactive Search Modal**: Instant full-screen floating search overlay with real-time sneaker filtering and quick product cards.
- **Mega Menu Dropdowns**: Hoverable menus for *Men* and *Women* collections featuring preview drop cards.
- **Mobile Navigation Drawer**: Responsive slide-down menu with quick shortcuts and currency selectors.

### 🎯 Landing Page Sections
1. **Hero Masterpiece (`Hero.tsx`)**: High-impact editorial headline (*UNLEASH THE FUTURE*), vertical badge, floating thumbnail previews, and call-to-action buttons.
2. **Exclusives Grid (`NewDrops.tsx`)**: Curated luxury product grid with glowing discount pills and quick view triggers.
3. **Trending Studio Tabs (`TrendingTabs.tsx`)**: Interactive tabbed category filter (*All Releases*, *Streetwear*, *Luxury Performance*, *Rare Archive*).
4. **Atelier Craftsmanship (`AtelierCraft.tsx`)**: Feature showcase for *CloudCushion™ Midsole*, *ObsidianKnit™ Fibers*, and *Serialized NFC Authenticity*.
5. **Studio Categories (`Categories.tsx`)**: Visual tile cards with smooth background image scaling and gold action icons.
6. **Interactive Fit Finder (`FitFinder.tsx`)**: Recommendation quiz matching user style choices with 99% match score sneakers.
7. **Community Reviews (`Reviews.tsx`)**: Verified buyer testimonial cards with star rating meters and photo reviews.
8. **#SOLEVASTUDIO Social Stream (`SocialStream.tsx`)**: Instagram lifestyle photo feed grid with hover tags and likes count.
9. **VIP Newsletter (`Newsletter.tsx`)**: Glassmorphic membership sign-up card for **SOLEVA CLUB**.
10. **Watermark Footer (`Footer.tsx`)**: Sleek multi-column links with giant **SOLEVA** watermark typography.

### 🛒 E-Commerce & Cart Engine
- **Product Details Page (`/products/[id]`)**: Interactive 6-view image gallery, color way selection, size chips, stock availability, wishlist button, and express checkout.
- **Cart Page (`/cart`)**: Dynamic bag state management, item quantity & size modifiers, promo code alerts, and Order Summary breakdown.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS custom tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (`ProductContext`, `CartContext`)
- **API Requests**: [Axios](https://axios-http.com/) (Fetching from Platzi Fake Store API)

---

## 📂 Project Architecture

```
soleva-ecommerce-nextjs/
├── app/
│   ├── layout.tsx                 # Root layout with SOLEVA metadata & providers
│   ├── page.tsx                   # Main Landing Page with 10 assembled sections
│   ├── globals.css                # SOLEVA Dark Luxe Design System & tokens
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx           # Product Detail view page
│   └── cart/
│       └── page.tsx               # Shopping Cart & Order Summary page
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Floating pill nav, search modal, mega dropdowns
│   │   ├── Footer.tsx             # Multi-column footer & SOLEVA watermark
│   │   └── Newsletter.tsx         # SOLEVA CLUB membership signup
│   ├── home/
│   │   ├── Hero.tsx               # Editorial hero showcase section
│   │   ├── NewDrops.tsx           # Exclusives product grid
│   │   ├── TrendingTabs.tsx       # Interactive tabbed collection filter
│   │   ├── AtelierCraft.tsx       # Craftsmanship & tech feature section
│   │   ├── Categories.tsx         # Category visual tiles
│   │   ├── FitFinder.tsx          # Interactive fit recommendation widget
│   │   ├── Reviews.tsx            # Client testimonial cards
│   │   └── SocialStream.tsx       # #SOLEVASTUDIO Instagram lifestyle feed
│   ├── product/
│   │   ├── ProductCard.tsx        # Obsidian card with gold price pill & hover zoom
│   │   ├── ProductDetails.tsx     # Gallery, size selector, and checkout actions
│   │   └── YouMayAlsoLike.tsx     # Related products carousel
│   ├── cart/
│   │   ├── CartItem.tsx           # Cart line item with size & quantity dropdowns
│   │   └── OrderSummary.tsx       # Order summary with shipping breakdown
│   └── ui/
│       ├── Loader.tsx             # Glassmorphic loading spinner
│       ├── ErrorState.tsx         # Clean error recovery state
│       └── EmptyState.tsx         # Empty bag placeholder
├── context/
│   ├── ProductContext.tsx          # Global product & category state
│   └── CartContext.tsx             # Shopping bag persistence state
├── lib/
│   ├── api.ts                     # Axios client configuration
│   └── utils.ts                   # Image sanitization & price formatters
├── types/
│   ├── index.ts                   # Type export barrel
│   ├── product.ts                 # Product & Category definitions
│   └── cart.ts                    # Cart item schema
├── package.json
└── README.md
```

---

## ⚡ Quick Start & Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/soleva-ecommerce-nextjs.git
cd soleva-ecommerce-nextjs
npm install
```

### 3. Run Development Server
Start the Next.js Turbopack development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view **SOLEVA**.

### 4. Build Production Bundle
To create an optimized production build:

```bash
npm run build
npm start
```

---

## 🎨 Design Tokens Summary

| Token | Hex / Value | Description |
|---|---|---|
| `--color-ink` | `#09090d` | Deep obsidian background surface |
| `--color-surface` | `#12121c` | Dark luxe glass card background |
| `--color-gold` | `#d4af37` | Rich metallic gold primary accent |
| `--color-gold-bright` | `#f4e082` | Bright gold highlight |
| `--color-bone` | `#f8f8fc` | Clean off-white primary text |
| `--color-muted` | `#a0a0b0` | Subdued secondary text |

---

## 📜 License & Copyright

© 2026 **SOLEVA Footwear Studio**. All rights reserved. Developed for high-performance luxury e-commerce.
