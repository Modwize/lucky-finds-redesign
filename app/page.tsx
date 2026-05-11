import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { TrustBand } from "@/components/trust-band";
import { ProductCard } from "@/components/product-card";
import { products, featuredBrands } from "@/lib/products";

const categories = [
  {
    name: "Handbags",
    count: 247,
    subtitle: "Iconic flaps, totes, evening clutches",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
    href: "#handbags",
  },
  {
    name: "Shoes",
    count: 184,
    subtitle: "Heels, flats, red soles",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80&auto=format&fit=crop",
    href: "#shoes",
  },
  {
    name: "Apparel",
    count: 312,
    subtitle: "Outerwear, knits, dresses",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80&auto=format&fit=crop",
    href: "#apparel",
  },
  {
    name: "Jewelry",
    count: 96,
    subtitle: "Fine, costume, vintage",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=900&q=80&auto=format&fit=crop",
    href: "#jewelry",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-emerald-deep overflow-hidden">
        <div className="container pt-10 md:pt-14 lg:pt-20 pb-14 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Left: editorial copy */}
            <div className="lg:col-span-5 space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-brass" aria-hidden="true" />
                <span className="eyebrow text-brass">
                  New This Week
                </span>
              </div>

              <h1 className="font-serif text-[42px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-light leading-[0.95] text-balance text-ivory">
                The thrill
                <br />
                of the <span className="italic text-brass">find</span>,
                <br />
                <span className="text-ivory/65">curated.</span>
              </h1>

              <p className="text-base md:text-lg text-ivory/70 leading-relaxed max-w-md text-pretty">
                Designer consignment with the standards of a flagship. Every
                piece authenticated. Every find one-of-one.
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
                <Link href="#new" className="btn-primary">
                  Shop New Arrivals
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="#consign" className="btn-ghost">
                  <span>Consign with us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-5 pt-6 border-t border-ivory/10">
                <div
                  className="flex items-center gap-1"
                  aria-label="Customer rating: 5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brass text-brass"
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-ivory">96% recommend</span>
                  <span className="text-ivory/50 ml-2 hidden sm:inline">
                    · Trusted since 2011
                  </span>
                </div>
              </div>
            </div>

            {/* Right: single editorial image with integrated placard */}
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              <figure className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] xl:aspect-[5/6] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1400&q=80&auto=format&fit=crop"
                  alt="A pre-loved Chanel Classic Flap handbag in caviar leather"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                {/* Soft vignette so the placard caption always reads */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-deep/55 via-emerald-deep/0 to-emerald-deep/0 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Museum-placard caption — integrated, not floating */}
                <figcaption className="absolute left-0 right-0 bottom-0 px-5 py-5 md:px-7 md:py-6 flex items-end justify-between gap-4">
                  <div className="max-w-[80%]">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-px w-6 bg-brass" aria-hidden="true" />
                      <span className="eyebrow text-brass text-[10px]">
                        Editor&apos;s Find
                      </span>
                    </div>
                    <p className="font-serif text-lg md:text-xl text-ivory leading-snug text-balance">
                      Chanel Classic Flap in caviar — just walked in.
                    </p>
                  </div>
                  <Link
                    href="/product/chanel-classic-flap-medium"
                    className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-medium text-ivory hover:text-brass transition-colors flex-shrink-0 pb-0.5"
                  >
                    <span>View</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AUTHENTICATED HOUSES — static brand strip, no marquee ===== */}
      <section
        aria-label="Designer houses we authenticate"
        className="border-y border-ivory/10 bg-emerald-deep"
      >
        <div className="container py-7 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="eyebrow text-brass text-[10px] md:text-[11px] flex-shrink-0">
              Authenticated Houses
            </span>
            <div className="h-px w-8 bg-ivory/15 hidden md:block" aria-hidden="true" />
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-7">
              {featuredBrands.slice(0, 8).map((brand) => (
                <li
                  key={brand}
                  className="font-serif text-base md:text-lg text-ivory/60 tracking-wide"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== JUST ARRIVED ===== */}
      <section id="new" className="container py-20 lg:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="eyebrow text-brass mb-3">
              Fresh to the Floor
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.05]">
              Just arrived this week.
            </h2>
            <p className="text-ivory/65 mt-4 max-w-lg">
              New pieces land daily. Once they&apos;re gone, they&apos;re gone —
              every item is one-of-one.
            </p>
          </div>
          <Link href="#" className="btn-ghost group">
            <span>View all new in</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
      <section
        aria-labelledby="categories-heading"
        className="container py-20 lg:py-28"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <div className="eyebrow text-brass mb-3">Shop the Boutique</div>
            <h2
              id="categories-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.05] text-balance"
            >
              Browse by category.
            </h2>
          </div>
          <p className="text-ivory/60 text-sm md:text-base max-w-xs">
            Every piece authenticated, every category curated.{" "}
            <span className="text-ivory">{
              categories.reduce((sum, c) => sum + c.count, 0).toLocaleString()
            }</span>{" "}
            currently on the floor.
          </p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={cat.href}
                className="group relative block aspect-[4/5] overflow-hidden focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-4"
                aria-label={`${cat.name} category, ${cat.count} pieces`}
              >
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Two-stop gradient: dark anchor at bottom for legibility, subtle wash up top */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/15 to-emerald-deep/5"
                  aria-hidden="true"
                />
                {/* Hover lift: thin brass border emerges */}
                <div
                  className="absolute inset-0 border border-brass/0 group-hover:border-brass/60 transition-colors duration-500"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 lg:p-7 text-ivory">
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-brass mb-2">
                    {cat.count} pieces
                  </div>
                  <h3 className="font-serif font-light leading-[1.05] text-2xl md:text-3xl lg:text-[34px] mb-2">
                    {cat.name}
                  </h3>
                  <p className="hidden md:block text-xs text-ivory/65 leading-snug mb-4 max-w-[200px]">
                    {cat.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-ivory/80 group-hover:text-brass transition-colors">
                    <span>Shop {cat.name}</span>
                    <ArrowRight
                      className="h-3 w-3 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== EDITORIAL STORY ===== */}
      <section className="bg-emerald py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop"
                alt="Inside the Lucky Finds boutique in Rockville Centre"
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
                <div className="eyebrow text-brass mb-4">Our Story</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.05] mb-6">
                  A treasure hunt with{" "}
                  <span className="italic text-brass">unbeatable</span> standards.
                </h2>
              </div>
              <p className="text-lg text-ivory/75 leading-relaxed">
                Shannon McComb grew up scouring consignment shops with her
                fashionista mother. Every Saturday was a hunt — and she always
                felt &quot;lucky&quot; to &quot;find&quot; the pieces she did.
                When her long career at Steve Madden ended, she took a leap of
                faith and brought that thrill to Long Island.
              </p>
              <p className="text-ivory/65 leading-relaxed">
                Fifteen years later, Lucky Finds is the destination for
                authenticated luxury on the South Shore — where uncompromising
                intake standards meet the joy of discovering something genuinely
                rare.
              </p>
              <div className="pt-4">
                <Link href="#about" className="btn-outline">
                  Read Our Story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CURATED BY SHANNON ===== */}
      <section
        aria-labelledby="shannon-heading"
        className="container py-20 lg:py-28"
      >
        {/* Pull-quote — Shannon's voice as the section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="eyebrow text-brass mb-7">Curated by Shannon</div>
          <blockquote>
            <p className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-light italic text-ivory leading-[1.25] text-balance mb-9 text-pretty">
              &ldquo;My mother taught me the best find isn&apos;t on the wall —
              it&apos;s the one you almost missed. I built this for the women
              who learned it the same way.&rdquo;
            </p>
            <footer className="flex flex-col items-center gap-3">
              <span className="font-serif italic text-2xl md:text-3xl text-brass">
                Shannon McComb
              </span>
              <span
                className="h-px w-10 bg-brass/50"
                aria-hidden="true"
              />
              <cite className="not-italic eyebrow text-ivory/55 text-[10px]">
                Founder · Lucky Finds, Rockville Centre
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Grid header + link */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-10 lg:mb-14 pt-10 border-t border-ivory/8">
          <h2
            id="shannon-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ivory leading-[1.05]"
          >
            Her picks this week.
          </h2>
          <Link href="#" className="btn-ghost group">
            <span>View all standouts</span>
            <ArrowRight
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-12">
          {products.slice(4, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ===== CONSIGN CTA ===== */}
      <section
        id="consign"
        className="relative bg-emerald text-ivory py-20 lg:py-32 overflow-hidden"
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
          <div className="eyebrow text-brass mb-4">Visit the Boutique</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.05] mb-6">
            Come hunt with us.
          </h2>
          <p className="text-ivory/70 leading-relaxed mb-10">
            New pieces arrive daily — and the best ones never make it to the
            website. Stop in, browse the racks, find something nobody else
            will have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12 pt-10 border-t border-ivory/10">
            <div>
              <div className="eyebrow text-brass mb-3">Address</div>
              <p className="text-ivory leading-relaxed">
                7A N. Park Ave
                <br />
                Rockville Centre, NY 11570
              </p>
            </div>
            <div>
              <div className="eyebrow text-brass mb-3">Hours</div>
              <p className="text-ivory leading-relaxed">
                Monday – Saturday
                <br />
                10:00 AM — 6:00 PM
                <br />
                <span className="text-ivory/45">Sunday Closed</span>
              </p>
            </div>
            <div>
              <div className="eyebrow text-brass mb-3">Contact</div>
              <p className="text-ivory leading-relaxed">
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
    </>
  );
}
