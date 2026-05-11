import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerColumns = [
  {
    title: "Shop",
    links: [
      "New Arrivals",
      "Handbags",
      "Apparel",
      "Shoes",
      "Jewelry",
      "Accessories",
      "Sale",
    ],
  },
  {
    title: "Consign",
    links: [
      "How to Consign",
      "Brands We Love",
      "Authentication",
      "Consignor Login",
      "Schedule Appointment",
    ],
  },
  {
    title: "Help",
    links: [
      "Contact Us",
      "Shipping",
      "Returns",
      "Layaway",
      "FAQs",
      "Size Guide",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-emerald-deep text-ivory">
      {/* Newsletter */}
      <div className="border-b border-ivory/10">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow text-brass mb-4">The Lucky List</div>
            <h2 className="font-serif text-3xl lg:text-5xl font-light leading-tight mb-4">
              Be first to the find.
            </h2>
            <p className="text-ivory/70 text-pretty max-w-md">
              Insider access to new arrivals, private trunk shows, and the
              luxury pieces our regulars come hunting for.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3" action="#">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-ivory/30 px-2 py-4 text-ivory placeholder-ivory/40 focus:outline-none focus:border-brass transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-brass text-charcoal text-xs uppercase tracking-[0.25em] font-medium hover:bg-brass-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16 grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
        <div className="col-span-2">
          <div className="font-serif text-2xl tracking-[0.15em] mb-3">
            LUCKY FINDS
          </div>
          <p className="text-ivory/60 text-sm leading-relaxed mb-6 max-w-xs">
            A unique designer consignment boutique in the heart of Rockville
            Centre. Authenticated luxury for the woman who knows the value of a
            true find.
          </p>
          <div className="space-y-2.5 text-sm text-ivory/70">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-brass" />
              <span>7A N. Park Ave, Rockville Centre, NY 11570</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brass" />
              <span>(516) 442-4600</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brass" />
              <span>luckyfindsboutique@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="h-10 w-10 border border-ivory/20 flex items-center justify-center hover:border-brass hover:text-brass transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="h-10 w-10 border border-ivory/20 flex items-center justify-center hover:border-brass hover:text-brass transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="eyebrow text-brass mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-ivory/70 hover:text-ivory transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hours strip */}
      <div className="border-t border-ivory/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/60 tracking-wider">
          <div className="flex items-center gap-6">
            <span className="uppercase tracking-[0.2em]">Mon – Sat</span>
            <span>10:00 AM — 6:00 PM</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline uppercase tracking-[0.2em]">
              Sun Closed
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-ivory">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ivory">
              Terms
            </Link>
            <span>© 2026 Lucky Finds Boutique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
