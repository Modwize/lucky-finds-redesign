import { ShieldCheck, Award, MapPin, CreditCard } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Authenticated",
    body: "Every luxury piece verified by AuthenticateFirst, an independent third-party authentication service.",
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
              className="bg-emerald-elevated px-5 py-5 md:px-6 md:py-6 flex gap-4 items-start"
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

        {/* Verification stamp: explains what AuthenticateFirst is for unfamiliar visitors */}
        <div className="mt-12 lg:mt-16 pt-10 border-t border-ivory/15">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-brass/40 mb-5">
              <ShieldCheck
                className="h-5 w-5 text-brass"
                strokeWidth={1.25}
                aria-hidden="true"
              />
            </div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-ivory/55 mb-2">
              Verified Externally By
            </div>
            <div className="font-serif text-2xl md:text-[28px] tracking-[0.15em] text-ivory mb-3">
              AuthenticateFirst
            </div>
            <p className="text-xs md:text-sm text-ivory/55 leading-relaxed max-w-sm mx-auto">
              An independent third-party luxury authentication service.
              Every luxury piece on the floor is verified before it&apos;s ever
              listed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
