import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrustBand } from "@/components/trust-band";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { products, featuredBrands } from "@/lib/products";

const categories = [
  {
    name: "Handbags",
    count: 247,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
    href: "#handbags",
    featured: true,
  },
  {
    name: "Shoes",
    count: 184,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80&auto=format&fit=crop",
    href: "#shoes",
  },
  {
    name: "Apparel",
    count: 312,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80&auto=format&fit=crop",
    href: "#apparel",
  },
  {
    name: "Jewelry",
    count: 96,
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=900&q=80&auto=format&fit=crop",
    href: "#jewelry",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative bg-ivory overflow-hidden">
        <div className="container pt-12 lg:pt-20 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: editorial copy */}
            <div className="lg:col-span-5 space-y-8 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-brass" />
                <span className="eyebrow text-emerald">
                  New In · This Week
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] text-balance text-emerald">
                The thrill
                <br />
                of the <span className="italic">find</span>,
                <br />
                <span className="text-charcoal/80">curated.</span>
              </h1>

              <p className="text-lg text-charcoal/70 leading-relaxed max-w-md text-pretty">
                Designer consignment with the standards of a flagship. Every
                piece authenticated, every detail considered, every find
                genuinely one-of-one.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="#new" className="btn-primary">
                  Shop New Arrivals
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#consign" className="btn-ghost">
                  <span>Consign with us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 pt-6 border-t border-charcoal/10">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brass text-brass"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-charcoal">
                    96% recommend
                  </span>
                  <span className="text-charcoal/60 ml-2">
                    · Trusted since 2011
                  </span>
                </div>
              </div>
            </div>

            {/* Right: hero image montage */}
            <div className="lg:col-span-7 relative h-[500px] md:h-[600px] lg:h-[680px]">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-[72%] h-[85%] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1400&q=80&auto=format&fit=crop"
                  alt="Featured luxury handbag"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 50vw"
                />
                <div className="absolute inset-0 bg-emerald/5" />
              </div>

              {/* Secondary inset image */}
              <div className="absolute bottom-0 left-0 w-[45%] h-[55%] overflow-hidden border-[12px] border-ivory">
                <Image
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80&auto=format&fit=crop"
                  alt="Featured shoes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 25vw"
                />
              </div>

              {/* Editorial tag */}
              <div className="absolute top-8 left-4 lg:left-8 bg-ivory px-5 py-4 max-w-[200px]">
                <div className="eyebrow text-brass-dark mb-1.5">
                  Editor&apos;s Find
                </div>
                <div className="font-serif text-base text-emerald leading-tight">
                  Chanel Classic Flap in caviar — just walked in.
                </div>
              </div>

              {/* Authenticated pill */}
              <div className="absolute bottom-6 right-6 bg-emerald text-ivory px-5 py-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5 text-brass" />
                <span>Authenticated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom brand marquee */}
        <div className="border-y border-charcoal/10 bg-ivory-warm/40 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-5">
            {[...featuredBrands, ...featuredBrands].map((brand, i) => (
              <span
                key={i}
                className="font-serif text-xl md:text-2xl text-charcoal/50 mx-10"
              >
                {brand}
                <span className="ml-10 text-brass/60">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JUST ARRIVED ===== */}
      <section id="new" className="container py-20 lg:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="eyebrow text-brass-dark mb-3">
              Fresh to the Floor
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-emerald leading-[1.05]">
              Just arrived this week.
            </h2>
            <p className="text-charcoal/60 mt-4 max-w-lg">
              New pieces land daily. Once they&apos;re gone, they&apos;re gone —
              every item is one-of-one.
            </p>
          </div>
          <Link href="#" className="btn-ghost group">
            <span>View all new in</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* ===== TRUST BAND ===== */}
      <TrustBand />

      {/* ===== SHOP BY CATEGORY ===== */}
      <section className="container py-20 lg:py-28">
        <div className="text-center mb-14">
          <div className="eyebrow text-brass-dark mb-3">Shop the Boutique</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-emerald leading-[1.05] max-w-2xl mx-auto text-balance">
            Browse by category.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`group relative overflow-hidden ${
                cat.featured ? "lg:col-span-2 lg:row-span-2" : ""
              } ${
                cat.featured
                  ? "aspect-square lg:aspect-auto"
                  : "aspect-[3/4]"
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 via-emerald-deep/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-ivory">
                <div className="text-xs uppercase tracking-[0.25em] text-brass-light mb-1.5">
                  {cat.count} pieces
                </div>
                <h3
                  className={`font-serif font-light leading-none ${
                    cat.featured ? "text-4xl lg:text-6xl" : "text-2xl lg:text-3xl"
                  }`}
                >
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.25em]">
                  <span>Shop</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== EDITORIAL STORY ===== */}
      <section className="bg-ivory-warm py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop"
                alt="Inside the boutique"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brass text-charcoal px-6 py-5 hidden lg:block">
                <div className="font-serif text-3xl leading-none">
                  Est. 2011
                </div>
                <div className="text-xs uppercase tracking-[0.25em] mt-2">
                  Rockville Centre
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="eyebrow text-brass-dark mb-4">Our Story</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-emerald leading-[1.05] mb-6">
                  A treasure hunt with{" "}
                  <span className="italic">unbeatable</span> standards.
                </h2>
              </div>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Shannon McComb grew up scouring consignment shops with her
                fashionista mother. Every Saturday was a hunt — and she always
                felt &quot;lucky&quot; to &quot;find&quot; the pieces she did.
                When her long career at Steve Madden ended, she took a leap of
                faith and brought that thrill to Long Island.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Fifteen years later, Lucky Finds is the destination for
                authenticated luxury on the South Shore — where uncompromising
                intake standards meet the joy of discovering something genuinely
                rare.
              </p>
              <div className="pt-4">
                <Link href="#about" className="btn-outline">
                  Read Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORE PRODUCTS ===== */}
      <section className="container py-20 lg:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="eyebrow text-brass-dark mb-3">
              Curated by Shannon
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-emerald leading-[1.05]">
              This week&apos;s standouts.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.slice(4, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ===== CONSIGN CTA ===== */}
      <section
        id="consign"
        className="relative bg-emerald-deep text-ivory py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=70&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="eyebrow text-brass">Consign With Us</div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] text-balance">
                Your closet is sitting on{" "}
                <span className="italic text-brass">a fortune.</span>
              </h2>
              <p className="text-lg text-ivory/70 max-w-xl leading-relaxed">
                We offer 50% on luxury designer pieces — the highest split on
                Long Island. By-appointment intake, transparent process,
                payment by store credit or check.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brass text-charcoal text-sm uppercase tracking-[0.2em] font-medium hover:bg-brass-light transition-colors"
                >
                  Book an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="text-sm uppercase tracking-[0.2em] text-ivory hover:text-brass transition-colors flex items-center gap-2 px-2"
                >
                  How it works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-ivory/10">
              {[
                { value: "50%", label: "On luxury pieces" },
                { value: "60", label: "Day cycle" },
                { value: "8+", label: "Items to open" },
                { value: "15", label: "Years in business" },
              ].map((stat) => (
                <div key={stat.label} className="bg-emerald-deep p-8">
                  <div className="font-serif text-5xl lg:text-6xl font-light text-brass leading-none mb-3">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ivory/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISIT BLOCK ===== */}
      <section className="container py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow text-brass-dark mb-4">Visit the Boutique</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-emerald leading-[1.05] mb-6">
            Come hunt with us.
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-10">
            New pieces arrive daily — and the best ones never make it to the
            website. Stop in, browse the racks, find something nobody else
            will have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12 pt-10 border-t border-charcoal/10">
            <div>
              <div className="eyebrow text-brass-dark mb-3">Address</div>
              <p className="text-charcoal leading-relaxed">
                7A N. Park Ave
                <br />
                Rockville Centre, NY 11570
              </p>
            </div>
            <div>
              <div className="eyebrow text-brass-dark mb-3">Hours</div>
              <p className="text-charcoal leading-relaxed">
                Monday – Saturday
                <br />
                10:00 AM — 6:00 PM
                <br />
                <span className="text-charcoal/50">Sunday Closed</span>
              </p>
            </div>
            <div>
              <div className="eyebrow text-brass-dark mb-3">Contact</div>
              <p className="text-charcoal leading-relaxed">
                (516) 442-4600
                <br />
                luckyfindsboutique
                <br />
                @gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
