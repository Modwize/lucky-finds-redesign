"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "New In", href: "/#new" },
  { label: "Handbags", href: "/#handbags" },
  { label: "Apparel", href: "/#apparel" },
  { label: "Shoes", href: "/#shoes" },
  { label: "Jewelry", href: "/#jewelry" },
  { label: "Accessories", href: "/#accessories" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-emerald-deep/95 backdrop-blur-md border-b border-ivory/10"
          : "bg-emerald-deep"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-emerald text-ivory text-[10px] md:text-xs tracking-[0.25em] uppercase border-b border-ivory/5">
        <div className="container flex items-center justify-center py-2.5 gap-4 md:gap-8">
          <span className="hidden md:inline text-ivory/60">
            Visit us · 7A N. Park Ave, Rockville Centre
          </span>
          <span className="font-medium text-ivory">
            <span className="hidden sm:inline">Every piece authenticated by </span>
            AuthenticateFirst
          </span>
          <span className="hidden md:inline text-ivory/60">
            New arrivals daily
          </span>
        </div>
      </div>

      <div className="container">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Left: menu (mobile) + search (desktop) */}
          <div className="flex items-center gap-6 w-[80px] lg:w-1/4">
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-ivory hover:text-brass transition-colors"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Search"
              className="hidden lg:flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-ivory/70 hover:text-brass transition-colors"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
              <span>Search</span>
            </button>
          </div>

          {/* Center: logo */}
          <Link
            href="/"
            className="flex-1 text-center group"
            aria-label="Lucky Finds Boutique home"
          >
            <div className="font-serif text-xl md:text-3xl font-light tracking-[0.18em] text-ivory leading-none group-hover:text-brass transition-colors">
              LUCKY FINDS
            </div>
            <div className="text-[8px] md:text-[9px] tracking-[0.45em] uppercase text-brass/70 mt-1.5">
              Boutique · Est. 2011
            </div>
          </Link>

          {/* Right: account, wishlist, cart */}
          <div className="flex items-center justify-end gap-4 md:gap-5 w-[80px] lg:w-1/4">
            <button
              aria-label="Search"
              className="lg:hidden text-ivory hover:text-brass transition-colors"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Account"
              className="hidden lg:block text-ivory hover:text-brass transition-colors"
            >
              <User className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Wishlist"
              className="hidden md:block text-ivory hover:text-brass transition-colors"
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart, 0 items"
              className="relative flex items-center text-ivory hover:text-brass transition-colors"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-2 bg-brass text-charcoal text-[9px] font-medium h-4 min-w-[16px] px-1 flex items-center justify-center tracking-normal">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Category nav : desktop only */}
        <nav
          aria-label="Categories"
          className="hidden lg:flex items-center justify-center gap-10 pb-5 -mt-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.25em] uppercase text-ivory/75 hover:text-brass transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-brass transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu : full-screen panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 z-50 bg-emerald-deep flex flex-col animate-fade-in"
        >
          <div className="flex items-center justify-between py-4 px-6 border-b border-ivory/10">
            <div className="font-serif text-xl tracking-[0.18em] text-ivory">
              LUCKY FINDS
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-ivory hover:text-brass transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <nav
            aria-label="Categories"
            className="flex-1 flex flex-col px-6 py-10 gap-1 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl font-serif font-light tracking-wide text-ivory hover:text-brass transition-colors py-3 border-b border-ivory/8"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-10 pt-8 border-t border-ivory/10 flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-ivory/60">
              <Link
                href="#account"
                className="hover:text-brass transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Account
              </Link>
              <Link
                href="#wishlist"
                className="hover:text-brass transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link
                href="#consign"
                className="hover:text-brass transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Consign with us
              </Link>
            </div>
          </nav>
          <div className="px-6 py-5 border-t border-ivory/10 text-[10px] uppercase tracking-[0.25em] text-ivory/50 text-center">
            Rockville Centre · Since 2011
          </div>
        </div>
      )}
    </header>
  );
}
