# Lucky Finds Boutique — Redesign

A prototype redesign of [luckyfindsboutique.com](https://luckyfindsboutique.com) — Long Island's premier authenticated luxury consignment boutique.

Built as a clickable prototype for owner review before production buildout.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom brand palette
- **shadcn/ui** primitives (Button, Badge)
- **lucide-react** for iconography
- Google Fonts: **Cormorant Garamond** (editorial serif, regular + italic) + **Inter** (body sans)

## Design system

### Brand palette — dark by default

The site commits to one mood: a velvet jewelry-box dark canvas with brass accents and warm ivory islands. No light/dark toggle. Most luxury brands (Hermès, Goyard, Net-a-Porter) pick one palette and stand behind it; a toggle is a SaaS instinct, not a boutique one.

| Token | Hex | Role |
|---|---|---|
| `emerald.deep` | `#15291F` | Canvas (page background) |
| `emerald` | `#1F3A2E` | Lifted surface (trust band, consign CTA, breadcrumb) |
| `emerald.elevated` | `#243F32` | Elevated surface (trust cells, condition report, auth steps) |
| `emerald.muted` | `#2D5240` | Hover states |
| `ivory` | `#F5F0E8` | Primary text, ivory product-card islands |
| `ivory.warm` | `#EDE5D5` | Secondary warm surface (product image backgrounds) |
| `ivory.dim` | `#C9C0B0` | Secondary text utility |
| `brass` | `#C9A961` | Primary CTAs, accents, price, eyebrows |
| `brass.dark` | `#A88841` | (Reserved for ivory-section variants) |
| `brass.light` | `#DCC084` | Hover on primary CTAs |
| `charcoal` | `#1A1A1A` | Text on brass CTAs |

Surface hierarchy is three-tier: **canvas → lifted → elevated**. Cards lift off lifted surfaces, lifted surfaces lift off the canvas. Photography sits on warm ivory islands inside the dark canvas like merchandise displayed on satin in a velvet tray.

### Typography

- **Display:** Cormorant Garamond, light weight (300), with italic for emphasis (Shannon signature, single-word accents)
- **Body:** Inter, with tracked uppercase for eyebrows and CTAs
- **Eyebrow style:** `text-xs uppercase tracking-[0.25em] font-medium`
- **Buttons / labels:** `tracking-[0.2em]`

### Buttons

- **`.btn-primary`** — Brass background, charcoal type. The champagne-hardware moment. Used for hero CTAs, Book an Appointment, Get Directions, Add to Bag
- **`.btn-outline`** — Ivory/40 border, ivory text, brass on hover. Used for secondary CTAs on the dark canvas (Read Our Story, Layaway alternative)
- **`.btn-ghost`** — Brass text, no fill, brass-light on hover. Used for tertiary inline actions (View all, Consign with us, How it works)
- **`.btn-on-ivory` / `.btn-outline-on-ivory`** — Inverse variants reserved for future light-canvas sections (currently unused)

### Conversion levers built in

These are not decorative. They are the strategic differentiators that distinguish Lucky Finds from generic luxury consignment:

- **AuthenticateFirst story** — promoted from a footer badge to the hero announcement bar, the trust-band section, and a full deep-dive band on every product page
- **Condition rating** — visual 10-bar scale on every product card and PDP
- **1 of 1** — scarcity messaging on every consigned piece
- **Layaway** — featured prominently on PDP as a real differentiator (manual intake for v1, see Production notes below)
- **Three-stage authentication** — Shannon → intake → AuthenticateFirst — laid out on every PDP

## Pages

- `/` — Homepage (hero, just arrived, trust band, categories, story, Shannon-curated picks, consign CTA, visit)
- `/product/[slug]` — Product detail (try `/product/chanel-classic-flap-medium`)

## Get it running

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Optimised for Vercel — push to GitHub, import in Vercel dashboard, done. No environment variables required for the prototype (mock data lives in `lib/products.ts`).

---

## Design Changes Log

Six-pass refinement from the initial junior build to the senior-designer-reviewed prototype. Each pass shipped as its own commit with reasoning.

### Pass 0 — Commit to dark-by-default, drop the toggle

The original prototype mixed an ivory canvas with dark trust-band, consign-CTA, and PDP-authentication sections. The dark sections were the most luxurious moments in the design. The ivory canvas was the compromise. We committed to the velvet jewelry-box concept the brand documents already stated, made the dark canvas the default everywhere, and dropped the light/dark toggle that would have been a SaaS-instinct compromise.

Added `emerald.elevated` and `ivory.dim` tokens to create a three-tier dark hierarchy. Repointed shadcn token aliases. Body, html, scrollbar, selection, focus rings, and all button utilities restated for the dark canvas. Buttons flipped: champagne brass on charcoal becomes primary; ivory-outlined ghost becomes secondary.

### Pass 1 — Calm the hero

The original hero stacked five competing elements: H1 + CTAs + social proof + two overlapping images + floating editorial tag + authenticated pill + a brand marquee directly underneath. The eye had nowhere to rest.

Single editorial image now carries the visual weight. The Editor's Find tag became an integrated museum-placard caption at the bottom of the image. The floating Authenticated pill was redundant with the announcement bar and got removed entirely. Mobile order flipped to image-first / copy-second so the hero reads like a poster with a caption rather than a wall of type. Aspect-ratio-driven heights replaced fixed 500/600/680px values. The infinite brand marquee under the hero was deleted — replaced with a static, restrained "Authenticated Houses" credentialing strip.

### Pass 2 — Give Shannon a voice

"Curated by Shannon" was an eyebrow with no Shannon underneath. Replaced with a real pull-quote in her voice ("My mother taught me the best find isn't on the wall — it's the one you almost missed. I built this for the women who learned it the same way."), Cormorant italic signature treatment, brass hairline, and a tracked-uppercase "Founder · Lucky Finds, Rockville Centre" attribution. The product rail below now reads as her column, not as anonymous "standouts."

### Pass 3 — Equal-weight category grid

The 2x2 featured-tile asymmetry told users "Handbags matter, the others are filler" — wrong for a consignment business where every category drives revenue. The asymmetry only kicked in at the lg breakpoint, so on mobile and tablet the layout was symmetric anyway. The desktop deviation was arbitrary.

Now all four categories are equal weight at every breakpoint. Each card gets an editorial subtitle (e.g. "Iconic flaps, totes, evening clutches") for personality and discoverability. Hover surfaces a thin brass border instead of just scaling the image. Section header restructured to include a live total piece-count summary on the right.

### Pass 4 — Quality bar

Header and Footer hoisted into the root layout (out of every page). `<main id="main-content" tabIndex={-1}>` landmark wraps the page content. Skip-to-content link added. Viewport config moved to the dedicated `next/viewport` export with `maximumScale: 5` (pinch-zoom preserved — never disable). Open Graph, Twitter, locale, and theme-color metadata filled in. Cormorant italic styles preloaded. PDP wishlist/share and product-card wishlist buttons bumped from 9x9 (36px) to 11x11 (44px) to meet WCAG and Apple HIG touch-target minimums. Footer column titles fixed from `<h4>` to `<h3>` for proper heading hierarchy.

### Pass 5 — Visit block + Consign clarity

Consign stat grid relabelled with units and two-line gloss (e.g. "8 items · Account minimum / To open with us") so the numbers no longer read like typos. "Years in business" reframed as "On the South Shore · Family-owned since 2011" to lean into the local-ownership signal. Stat grid converted to a semantic `<dl>`.

Visit block converted from a centered three-column contact card to a real two-column spatial invitation: boutique floor image on the left with an "Open Today · 10–6" plaque overlay, copy + address + hours + real CTAs ("Get Directions" → Google Maps, `tel:` link for the phone) on the right. The page now closes on the physical store rather than on contact-card metadata.

---

## Production handoff — Shopify metafield schema

This prototype's `lib/products.ts` is the design's data contract. When wiring to Shopify Storefront API, these custom metafields need to be created in Shopify admin (`Settings → Custom data → Products`) and populated per product. Once set up, Shannon adds each from the standard Shopify product editor.

| Namespace.Key | Type | Used by | Notes |
|---|---|---|---|
| `lf.condition_score` | Integer (1–10) | Product card, PDP condition bar | Required — drives the 10-bar visual rating |
| `lf.condition_label` | Single-line text | PDP | One of: "New with Tags", "Excellent", "Very Good", "Good" |
| `lf.condition_note` | Multi-line text | PDP condition report | "Minor signs of careful use. Interior pristine..." |
| `lf.retail_price` | Currency | Product card, PDP save badge | Original retail price for the strike-through and "Save X%" calc |
| `lf.is_one_of_one` | Boolean | Badges, quantity input | Default `true` for all consignment. Disables qty increment beyond 1 |
| `lf.authenticated` | Boolean | Card/PDP authentication marker | `true` for luxury pieces sent through AuthenticateFirst |
| `lf.cert_number` | Single-line text | PDP accordion | AuthenticateFirst certificate number |
| `lf.layaway_eligible` | Boolean | PDP layaway button | Controls visibility of the layaway CTA |
| `lf.consignor_id` | Single-line text (private) | Phase 2 consignor reporting | Internal only — never rendered to customer |

The product detail page's `gallery` array currently uses placeholder URLs. In production, this comes from `product.images.edges[].node.url` via the Storefront API; replace the mock array in `app/product/[slug]/page.tsx`.

### Layaway

Layaway is **manual for v1**. The CTA on the PDP currently routes nowhere (a `<button>` stub). Wire it to:

1. A simple form (Name / Email / Phone / Product ID) that triggers a Make.com scenario, or
2. A `mailto:` deep link with the product pre-filled, or
3. A Klaviyo-driven "Layaway interest" event

Shannon handles the rest in person or by phone, matching her current process. When volume justifies it, Partial.ly (~$25–$100/mo) can replace the form with a real payment-split flow without redesigning the button.

### Cart, checkout, account

Out of scope for this prototype. Cart icon in the header is a stub at `count = 0`. When wiring Shopify:

- Use `@shopify/storefront-api-client` or the GraphQL client of your choice
- Persist cart in `localStorage` keyed by Shopify cart ID
- Checkout redirects to `cart.checkoutUrl` from the Storefront API (Shopify handles the rest — payments, tax, shipping labels, order emails)
- Customer accounts via Shopify Customer Account API for the consignor portal

### Recommended Shopify apps

- **Search & Discovery** (free, Shopify-native) — search, faceted filters, recommendations
- **Klaviyo** — Lucky List newsletter, welcome flow, abandoned-cart, layaway-interest emails

---

## Mock data

All product imagery is sourced from Unsplash for prototype purposes only. Replace with photographed inventory before launch. The boutique-interior shots in the Story and Visit sections should be replaced with real photographs of the Rockville Centre store.

The Shannon signature is currently rendered in Cormorant italic typography. If Shannon wants a real handwritten signature on the page, it can be vectorised as an SVG and dropped in to replace the italic text.

---

**Designed by:** Modwize Automation LLC
**For:** Lucky Finds Boutique · Rockville Centre, NY
