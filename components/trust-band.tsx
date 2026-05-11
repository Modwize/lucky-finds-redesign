import { ShieldCheck, Award, MapPin, CreditCard } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Authenticated",
    body: "Every luxury piece verified by AuthenticateFirst, an independent third-party house.",
  },
  {
    icon: Award,
    title: "100% Guarantee",
    body: "If a piece is ever found inauthentic, you receive a full refund. No exceptions.",
  },
  {
    icon: MapPin,
    title: "Visit in Person",
    body: "7A N. Park Ave, Rockville Centre. Walk in, try it on, take it home the same day.",
  },
  {
    icon: CreditCard,
    title: "Layaway Available",
    body: "Reserve a piece with a flexible payment plan. Ask in store or by phone.",
  },
];

export function TrustBand() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-emerald text-ivory py-14 lg:py-20"
    >
      <div className="container">
        {/* Tight header */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <div className="eyebrow text-brass mb-4">
            The Lucky Finds Promise
          </div>
          <h2
            id="trust-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] text-balance text-ivory"
          >
            Authenticated by an independent house.
            <br className="hidden sm:block" />
            <span className="italic text-brass"> Guaranteed by ours.</span>
          </h2>
        </div>

        {/* Compact pillars: icon inline with title, body wraps under */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
          {pillars.map((item) => (
            <li
              key={item.title}
              className="bg-emerald-elevated px-5 py-5 md:px-6 md:py-6 flex gap-4 items-start group hover:bg-emerald-muted transition-colors duration-500"
            >
              <item.icon
                className="h-5 w-5 text-brass flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <h3 className="font-serif text-lg md:text-xl font-light text-ivory leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-ivory/65 text-sm leading-snug">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Authentication partner strip, condensed */}
        <div className="mt-10 lg:mt-12 pt-6 border-t border-ivory/15 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
            Authentication Partner
          </span>
          <span className="font-serif text-xl tracking-[0.2em] text-ivory/80">
            AuthenticateFirst<span className="text-brass">.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
