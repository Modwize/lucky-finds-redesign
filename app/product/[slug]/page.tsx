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
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-ivory/10 bg-emerald">
        <ol className="container py-4 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ivory/60 overflow-x-auto">
          <li>
            <Link href="/" className="hover:text-brass transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          <li>
            <Link href="#" className="hover:text-brass transition-colors">
              {product.category}
            </Link>
          </li>
          <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          <li>
            <Link href="#" className="hover:text-brass transition-colors">
              {product.brand}
            </Link>
          </li>
          <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          <li aria-current="page" className="text-ivory/40 truncate">{product.name}</li>
        </ol>
      </nav>

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
                  <Badge variant="brass">Just Arrived</Badge>
                )}
                {product.isOneOfOne && (
                  <Badge variant="ivory">1 of 1 — One available</Badge>
                )}
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory bg-emerald-deep/95 backdrop-blur-sm px-4 py-2.5">
                <ShieldCheck className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
                <span>Authenticated by AuthenticateFirst</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden bg-ivory-warm transition-all focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 ${
                    selectedImage === i
                      ? "ring-2 ring-brass ring-offset-2 ring-offset-emerald-deep"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                  aria-pressed={selectedImage === i}
                >
                  <Image
                    src={src}
                    alt=""
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
                    className="eyebrow text-brass hover:text-brass-light transition-colors"
                  >
                    {product.brand}
                  </Link>
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Add to wishlist"
                      className="h-11 w-11 border border-ivory/20 flex items-center justify-center text-ivory hover:border-brass hover:text-brass transition-colors"
                    >
                      <Heart className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                    <button
                      aria-label="Share this product"
                      className="h-11 w-11 border border-ivory/20 flex items-center justify-center text-ivory hover:border-brass hover:text-brass transition-colors"
                    >
                      <Share2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ivory leading-[1.1] text-balance">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-baseline gap-4 pt-2 pb-6 border-b border-ivory/10">
                <span className="font-serif text-4xl text-brass">
                  ${product.price.toLocaleString()}
                </span>
                {product.retailPrice && (
                  <>
                    <span className="text-ivory/45 line-through text-sm">
                      ${product.retailPrice.toLocaleString()} retail
                    </span>
                    <Badge variant="brass">Save {discount}%</Badge>
                  </>
                )}
              </div>

              {/* Condition story — the differentiator */}
              <div className="bg-emerald-elevated p-6 space-y-4 border border-ivory/8">
                <div className="flex items-center justify-between">
                  <div className="eyebrow text-brass">
                    Condition Report
                  </div>
                  <div className="flex items-center gap-2" aria-label={`Condition rating ${product.conditionScore} out of 10`}>
                    <div className="flex gap-0.5" aria-hidden="true">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 w-1.5 ${
                            i < product.conditionScore
                              ? "bg-brass"
                              : "bg-ivory/15"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-sm text-brass">
                      {product.conditionScore}/10
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-ivory font-medium text-sm mb-1">
                    {product.condition}
                  </div>
                  <p className="text-sm text-ivory/65 leading-relaxed">
                    Minor signs of careful use. Interior pristine. Original
                    hardware shows light surface marks consistent with gentle
                    wear. Comes with dust bag.
                  </p>
                </div>
              </div>

              {/* Quantity + CTA */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-ivory/20">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 flex items-center justify-center text-ivory hover:bg-emerald-elevated transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" aria-hidden="true" />
                    </button>
                    <span className="w-10 text-center text-sm text-ivory" aria-live="polite">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={product.isOneOfOne}
                      className="h-12 w-12 flex items-center justify-center text-ivory hover:bg-emerald-elevated disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </div>
                  {product.isOneOfOne && (
                    <div className="flex items-center gap-2 text-xs text-ivory/65">
                      <Sparkles className="h-3 w-3 text-brass" aria-hidden="true" />
                      <span>Only one available</span>
                    </div>
                  )}
                </div>

                <button className="w-full btn-primary py-5 text-base">
                  Add to Bag · ${product.price.toLocaleString()}
                </button>

                {/* Layaway — visibly secondary to Add to Bag */}
                <button className="w-full inline-flex items-center justify-center gap-2 py-4 text-sm uppercase tracking-[0.2em] font-medium text-ivory/85 hover:text-brass border border-ivory/20 hover:border-brass/60 transition-colors focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2">
                  <CreditCard className="h-4 w-4" aria-hidden="true" />
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
                    className="flex items-start gap-2.5 text-xs text-ivory/65"
                  >
                    <b.icon
                      className="h-4 w-4 text-brass flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="pt-6 border-t border-ivory/10">
                {accordionData.map((item, i) => {
                  const isOpen = openAccordion === i;
                  const panelId = `accordion-panel-${i}`;
                  const headerId = `accordion-header-${i}`;
                  return (
                    <div
                      key={item.title}
                      className="border-b border-ivory/10"
                    >
                      <button
                        id={headerId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenAccordion(isOpen ? null : i)}
                        className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-4 rounded-[2px]"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon
                            className="h-4 w-4 text-brass"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                          <span className="text-sm uppercase tracking-[0.15em] text-ivory group-hover:text-brass transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 text-ivory/60 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        hidden={!isOpen}
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-ivory/70 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

            <ol className="space-y-px bg-ivory/10">
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
                <li
                  key={step.step}
                  className="bg-emerald-elevated p-6 lg:p-8 flex gap-6"
                >
                  <div className="font-serif text-4xl text-brass leading-none" aria-hidden="true">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-ivory">{step.title}</h3>
                    <p className="text-ivory/65 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* You may also love */}
      <section className="container py-20 lg:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow text-brass mb-3">
              Curated For You
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory leading-[1.05]">
              You may also love.
            </h2>
          </div>
          <Link href="/" className="btn-ghost">
            <span>Continue shopping</span>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
