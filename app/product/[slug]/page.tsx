"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ChevronRight,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  RefreshCw,
  CreditCard,
  Award,
  ChevronDown,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { getProduct, products } from "@/lib/products";

const accordionData = [
  {
    title: "Authentication Certificate",
    icon: ShieldCheck,
    content:
      "This piece has been independently authenticated by AuthenticateFirst, a third-party luxury authentication house. Certificate of authenticity ships with your order. Backed by our 100% money-back authenticity guarantee.",
  },
  {
    title: "Condition Report",
    icon: Award,
    content:
      "Excellent pre-loved condition (9/10). Minor signs of careful use — interior pristine, hardware shows light surface marks consistent with gentle wear. Exterior leather supple with no creasing, scratches, or staining. Original dust bag included. No box.",
  },
  {
    title: "Measurements & Materials",
    icon: ChevronDown,
    content:
      "Quilted lambskin leather exterior. Gold-tone hardware. Length 10\" × Height 6\" × Depth 2.75\". Strap drop: 22\" shoulder, 11\" doubled. Interior: one zip pocket, two slip pockets, signature CC turn-lock closure.",
  },
  {
    title: "Shipping & Returns",
    icon: Truck,
    content:
      "Complimentary insured shipping on orders over $250. Same-day handling on orders placed before 2 PM EST. 7-day returns on full-price items (authentication issues excluded — those are always refundable). Local Long Island pickup available at the boutique.",
  },
];

export default function ProductPage() {
  const params = useParams();
  const product = getProduct(params.slug as string);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  if (!product) return notFound();

  const discount = product.retailPrice
    ? Math.round(
        ((product.retailPrice - product.price) / product.retailPrice) * 100
      )
    : 0;

  // Mock gallery with the main image used multiple times for demo
  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1200&q=80&auto=format&fit=crop",
  ];

  const layawayMonthly = Math.round(product.price / 4);

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-charcoal/10 bg-ivory">
        <div className="container py-4 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-charcoal/60">
          <Link href="/" className="hover:text-emerald">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="#" className="hover:text-emerald">
            {product.category}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="#" className="hover:text-emerald">
            {product.brand}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-charcoal/40 truncate">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <section className="container py-10 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-warm">
              <Image
                src={gallery[selectedImage]}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              {/* Floating authenticated badge */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.isNew && (
                  <Badge variant="default">Just Arrived</Badge>
                )}
                {product.isOneOfOne && (
                  <Badge variant="ivory">1 of 1 — One available</Badge>
                )}
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory bg-emerald/95 backdrop-blur-sm px-4 py-2.5">
                <ShieldCheck className="h-3.5 w-3.5 text-brass" />
                <span>Authenticated by AuthenticateFirst</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden bg-ivory-warm transition-all ${
                    selectedImage === i
                      ? "ring-2 ring-emerald ring-offset-2 ring-offset-ivory"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`View ${i + 1}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Brand + title */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Link
                    href="#"
                    className="eyebrow text-emerald hover:text-brass-dark transition-colors"
                  >
                    {product.brand}
                  </Link>
                  <div className="flex items-center gap-3">
                    <button
                      aria-label="Add to wishlist"
                      className="h-9 w-9 border border-charcoal/15 flex items-center justify-center hover:border-emerald hover:text-emerald transition-colors"
                    >
                      <Heart className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button
                      aria-label="Share"
                      className="h-9 w-9 border border-charcoal/15 flex items-center justify-center hover:border-emerald hover:text-emerald transition-colors"
                    >
                      <Share2 className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-[1.1] text-balance">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 pt-2 pb-6 border-b border-charcoal/10">
                <span className="font-serif text-4xl text-emerald">
                  ${product.price.toLocaleString()}
                </span>
                {product.retailPrice && (
                  <>
                    <span className="text-charcoal/40 line-through">
                      ${product.retailPrice.toLocaleString()} retail
                    </span>
                    <Badge variant="brass">Save {discount}%</Badge>
                  </>
                )}
              </div>

              {/* Condition story — the differentiator */}
              <div className="bg-ivory-warm p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="eyebrow text-emerald">
                    Condition Report
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-1.5 ${
                            i < product.conditionScore
                              ? "bg-emerald"
                              : "bg-charcoal/15"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-sm text-emerald">
                      {product.conditionScore}/10
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-charcoal font-medium text-sm mb-1">
                    {product.condition}
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Minor signs of careful use. Interior pristine. Original
                    hardware shows light surface marks consistent with gentle
                    wear. Comes with dust bag.
                  </p>
                </div>
              </div>

              {/* Quantity + CTA */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-charcoal/20">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 flex items-center justify-center hover:bg-ivory-warm"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-10 text-center text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={product.isOneOfOne}
                      className="h-12 w-12 flex items-center justify-center hover:bg-ivory-warm disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  {product.isOneOfOne && (
                    <div className="flex items-center gap-2 text-xs text-charcoal/60">
                      <Sparkles className="h-3 w-3 text-brass" />
                      <span>Only one available</span>
                    </div>
                  )}
                </div>

                <button className="w-full btn-primary py-5 text-base">
                  Add to Bag — ${product.price.toLocaleString()}
                </button>

                {/* Layaway */}
                <button className="w-full btn-outline py-5">
                  <CreditCard className="h-4 w-4" />
                  Layaway · 4 payments of ${layawayMonthly.toLocaleString()}
                </button>
              </div>

              {/* Quick benefits */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-4">
                {[
                  { icon: ShieldCheck, text: "100% authenticity guarantee" },
                  { icon: Truck, text: "Free insured shipping over $250" },
                  { icon: RefreshCw, text: "7-day returns" },
                  { icon: Award, text: "Certificate included" },
                ].map((b) => (
                  <div
                    key={b.text}
                    className="flex items-start gap-2.5 text-xs text-charcoal/70"
                  >
                    <b.icon
                      className="h-4 w-4 text-emerald flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="leading-snug">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="pt-6 border-t border-charcoal/10">
                {accordionData.map((item, i) => (
                  <div
                    key={item.title}
                    className="border-b border-charcoal/10"
                  >
                    <button
                      onClick={() =>
                        setOpenAccordion(openAccordion === i ? null : i)
                      }
                      className="w-full flex items-center justify-between py-5 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className="h-4 w-4 text-emerald"
                          strokeWidth={1.5}
                        />
                        <span className="text-sm uppercase tracking-[0.15em] text-charcoal group-hover:text-emerald transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 text-charcoal/60 ${
                          openAccordion === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === i ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication deep-dive band */}
      <section className="bg-emerald text-ivory py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow text-brass mb-4">
                The Authentication Process
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light leading-[1.05] mb-6 text-balance">
                Every piece passes through{" "}
                <span className="italic text-brass">three sets of eyes</span>
                {" "}before it reaches you.
              </h2>
              <p className="text-ivory/70 leading-relaxed mb-8">
                Shannon&apos;s 15 years of designer expertise. Our intake
                inspection. Then AuthenticateFirst&apos;s independent third-party
                verification. If anything is ever found inauthentic, you receive
                a full refund — no questions, no exceptions.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-brass hover:text-brass-light transition-colors text-sm uppercase tracking-[0.2em]"
              >
                Learn about our standards
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-px bg-ivory/10">
              {[
                {
                  step: "01",
                  title: "Intake Inspection",
                  body: "Shannon personally evaluates every luxury piece. Brand, condition, era, materials, hardware.",
                },
                {
                  step: "02",
                  title: "Third-Party Verification",
                  body: "All luxury items sent to AuthenticateFirst for independent expert authentication.",
                },
                {
                  step: "03",
                  title: "Certificate Issued",
                  body: "Authenticated pieces ship with a numbered certificate. Backed by 100% money-back guarantee.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="bg-emerald p-6 lg:p-8 flex gap-6"
                >
                  <div className="font-serif text-4xl text-brass leading-none">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                    <p className="text-ivory/65 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* You may also love */}
      <section className="container py-20 lg:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow text-brass-dark mb-3">
              Curated For You
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-emerald leading-[1.05]">
              You may also love.
            </h2>
          </div>
          <Link href="/" className="btn-ghost">
            <span>Continue shopping</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
