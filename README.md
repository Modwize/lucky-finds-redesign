# Lucky Finds Boutique — Redesign

A prototype redesign of [luckyfindsboutique.com](https://luckyfindsboutique.com) — Long Island's premier authenticated luxury consignment boutique.

Built as a clickable prototype for owner review before production buildout.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom brand palette
- **shadcn/ui** primitives (Button, Badge)
- **lucide-react** for iconography
- Google Fonts: **Cormorant Garamond** (editorial serif) + **Inter** (body sans)

## Design system

### Brand palette
- **Emerald** `#1F3A2E` — primary; velvet jewelry-box luxury
- **Emerald deep** `#15291F` — darker hero/footer surfaces
- **Ivory** `#F5F0E8` — warm canvas, replaces stark white
- **Ivory warm** `#EDE5D5` — secondary surfaces
- **Brass** `#C9A961` — accent, champagne hardware
- **Charcoal** `#1A1A1A` — type

### Type
- **Display:** Cormorant Garamond, light weight, editorial leading
- **Body:** Inter, with tracked uppercase for eyebrows and CTAs
- **Eyebrow style:** `text-xs uppercase tracking-[0.25em]`

### The design concept
> **"The thrill of the find, curated."**
>
> Most luxury consignment sites try to look like Net-a-Porter and end up sterile. Lucky Finds' magic is in the *hunt* — so we lean into editorial discovery while keeping flagship-grade polish.

### Conversion levers built in
- **AuthenticateFirst story** elevated from footer badge to hero band
- **Condition rating** (1–10 visual scale) on every product
- **1 of 1** scarcity messaging — every consigned piece is unique
- **Layaway CTA** featured prominently on product page (real differentiator)
- **Three-stage authentication** breakdown on PDP

## Pages

- `/` — Homepage (hero, just arrived, trust band, categories, story, consignor CTA, visit)
- `/product/[slug]` — Product detail (try `/product/chanel-classic-flap-medium`)

## Get it running

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Optimised for Vercel — push to GitHub, import in Vercel dashboard, done. No environment variables required for the prototype (mock data lives in `lib/products.ts`).

## Next steps for production

1. Wire up real product data (Shopify Storefront API likely — they're on Shopify today)
2. Build out remaining category pages, cart, checkout
3. Replace mock Unsplash imagery with photographed inventory
4. Wire AuthenticateFirst certificate display to real per-product data
5. Consignor portal at `/consign/login`
6. Klaviyo integration for "Lucky List" newsletter
7. Schema.org Product markup for SEO

## Mock data

All product imagery is sourced from Unsplash for prototype purposes only. Replace with photographed inventory before launch.

---

**Designed by:** Modwize Automation LLC
**For:** Lucky Finds Boutique · Rockville Centre, NY
