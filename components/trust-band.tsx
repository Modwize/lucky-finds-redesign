import { ShieldCheck, Award, Lock, RefreshCw } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Authenticated",
    body: "Every luxury piece verified by AuthenticateFirst, an independent third-party authentication house.",
  },
  {
    icon: Award,
    title: "100% Guarantee",
    body: "If a piece is ever found inauthentic, you receive a full refund. No questions, no exceptions.",
  },
  {
    icon: Lock,
    title: "Inspection",
    body: "Uncompromising intake standards. We curate ruthlessly so you find the rare, not the routine.",
  },
  {
    icon: RefreshCw,
    title: "Layaway Available",
    body: "Found something special that needs a little time? Reserve it with our flexible layaway plan.",
  },
];

export function TrustBand() {
  return (
    <section className="bg-emerald text-ivory py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow text-brass mb-5">
            The Lucky Finds Promise
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.05] text-balance mb-6">
            Buy with the confidence of a flagship.
            <br />
            <span className="italic text-brass">Hunt with the joy of a find.</span>
          </h2>
          <p className="text-ivory/70 text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
            Every luxury handbag, every pair of red soles, every piece of fine
            jewelry that crosses our threshold is independently authenticated
            before it ever reaches our floor — or yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="bg-emerald-elevated p-8 lg:p-10 group hover:bg-emerald-muted transition-colors duration-500"
            >
              <item.icon
                className="h-8 w-8 text-brass mb-6"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <h3 className="font-serif text-2xl font-light mb-3 text-ivory">
                {item.title}
              </h3>
              <p className="text-ivory/65 text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Authenticated by strip */}
        <div className="mt-16 pt-10 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="text-xs uppercase tracking-[0.3em] text-ivory/50">
            Authentication Partner
          </div>
          <div className="font-serif text-2xl tracking-[0.2em] text-ivory/80">
            AuthenticateFirst<span className="text-brass">.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
