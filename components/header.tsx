"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";

const navLinks = [
  { label: "New In", href: "#new" },
  { label: "Handbags", href: "#handbags" },
  { label: "Apparel", href: "#apparel" },
  { label: "Shoes", href: "#shoes" },
  { label: "Jewelry", href: "#jewelry" },
  { label: "Accessories", href: "#accessories" },
  { label: "Sale", href: "#sale" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ivory">
      {/* Announcement bar */}
      <div className="bg-emerald text-ivory text-xs tracking-[0.25em] uppercase">
        <div className="container flex items-center justify-center py-2.5 gap-8">
          <span className="hidden md:inline opacity-80">
            Complimentary shipping over $250
          </span>
          <span className="font-medium">
            Every piece authenticated by AuthenticateFirst
          </span>
          <span className="hidden md:inline opacity-80">
            New arrivals daily
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "border-b border-charcoal/10" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-5">
            {/* Left: menu (mobile) + utility */}
            <div className="flex items-center gap-6 w-1/4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <button
                aria-label="Search"
                className="hidden lg:flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-charcoal/70 hover:text-emerald transition-colors"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </div>

            {/* Center: logo */}
            <Link href="/" className="flex-1 text-center">
              <div className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-emerald leading-none">
                LUCKY FINDS
              </div>
              <div className="text-[9px] tracking-[0.45em] uppercase text-charcoal/60 mt-1">
                Boutique · Est. 2011
              </div>
            </Link>

            {/* Right: account, wishlist, cart */}
            <div className="flex items-center justify-end gap-5 w-1/4">
              <button aria-label="Account" className="hidden lg:block">
                <User className="h-5 w-5 hover:text-emerald transition-colors" />
              </button>
              <button aria-label="Wishlist" className="hidden md:block">
                <Heart className="h-5 w-5 hover:text-emerald transition-colors" />
              </button>
              <button
                aria-label="Cart"
                className="relative flex items-center gap-1.5"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-emerald text-ivory text-[10px] h-4 w-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Category nav */}
          <nav className="hidden lg:flex items-center justify-center gap-10 pb-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.25em] uppercase text-charcoal/80 hover:text-emerald transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-emerald transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-ivory border-t border-charcoal/10">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-charcoal/80 hover:text-emerald py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
