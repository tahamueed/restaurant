# Restaurant Demo System

A dynamic restaurant demo platform serving unlimited restaurants from a single codebase.

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

**Home Page:** [http://localhost:3000](http://localhost:3000)
**Demo Pages:**
- [http://localhost:3000/demo/golden-gate-grill](http://localhost:3000/demo/golden-gate-grill)
- [http://localhost:3000/demo/spice-route-dubai](http://localhost:3000/demo/spice-route-dubai)
- [http://localhost:3000/demo/harbor-bites-london](http://localhost:3000/demo/harbor-bites-london)

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
restaurant-demo/
├── app/
│   ├── page.tsx              # Neutral home page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── cart/
│   │   └── page.tsx          # Shopping cart page
│   └── demo/
│       ├── layout.tsx        # Demo layout
│       └── [slug]/
│           ├── page.tsx      # Dynamic restaurant page
│           └── not-found.tsx # 404 page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── HeroSection.tsx       # Hero banner
│   ├── MenuSection.tsx       # Menu display
│   ├── BookingSection.tsx    # Table booking form
│   ├── DealsSection.tsx      # Promo codes
│   ├── FAQSection.tsx        # FAQ accordion
│   ├── LeadCaptureModal.tsx  # Lead capture form
│   └── Footer.tsx            # Footer
├── context/
│   └── CartContext.tsx       # Cart state management
├── data/
│   └── restaurants.json      # All restaurant data
├── lib/
│   └── utils.ts              # Helper functions
├── types/
│   └── index.ts              # TypeScript interfaces
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind config
└── postcss.config.js         # PostCSS config
```

## Features

- ✅ **7 Full Screens:** Home, Menu & Cart, Table Booking, Deals, FAQs, Lead Capture, Confirmation
- ✅ **Dynamic Theming:** CSS variables for primary/accent colors
- ✅ **Shopping Cart:** Add items, adjust quantities, persist to localStorage
- ✅ **Table Booking:** Form with confirmation and reference numbers
- ✅ **Promo Codes:** Copy-to-clipboard functionality
- ✅ **Lead Capture:** Modal form with offer tracking
- ✅ **Mobile Responsive:** Works on all device sizes
- ✅ **TypeScript:** Full type safety

## Adding New Restaurants

Simply add a new entry to `data/restaurants.json`:

```json
{
  "id": "4",
  "slug": "your-restaurant-slug",
  "name": "Your Restaurant Name",
  "tagline": "Your tagline",
  "primaryColor": "#FF0000",
  "accentColor": "#FFFF00",
  "cuisine": "Your cuisine",
  "location": "Your location",
  "phone": "+1 555-0123",
  "rating": 4.8,
  "openingHours": "11:00 AM - 10:00 PM",
  "heroImage": "https://images.unsplash.com/...",
  "menu": [...]
  "specials": [...],
  "deals": [...],
  "faqs": [...]
}
```

Then visit: `http://localhost:3000/demo/your-restaurant-slug`

## Testing

Test all these scenarios:

- [ ] Slug switching - visit different restaurant URLs
- [ ] All 7 screens - verify each page works
- [ ] Colors update - check CSS variables load correctly
- [ ] Cart persists - add items, navigate, cart remains
- [ ] Booking confirmation - submit form, get reference number
- [ ] Lead capture - claim offer, get reference number
- [ ] Unknown slug - visit `/demo/unknown-restaurant`
- [ ] Mobile view - test at 375px width

## Deployment

Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## License

Internal use only. Confidential.
