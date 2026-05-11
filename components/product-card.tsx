"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShieldCheck } from "lucide-react";
import { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-4 rounded-[2px]"
      aria-label={`${product.brand} ${product.name}, $${product.price.toLocaleString()}`}
    >
      {/* Image island, warm ivory card on dark canvas */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-warm mb-4">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="default" className="text-[9px]">
              Just Arrived
            </Badge>
          )}
          {product.isOneOfOne && (
            <Badge variant="ivory" className="text-[9px]">
              1 of 1
            </Badge>
          )}
        </div>

        {/* Wishlist, always visible on mobile, hover reveal on desktop */}
        <button
          aria-label={`Add ${product.name} to wishlist`}
          onClick={(e) => {
            e.preventDefault();
          }}
          className="absolute top-3 right-3 h-11 w-11 bg-ivory/95 backdrop-blur-sm flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-ivory focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-emerald-deep"
        >
          <Heart className="h-4 w-4 text-charcoal" strokeWidth={1.5} aria-hidden="true" />
        </button>

        {/* Hover quick-view (desktop only, hover doesn't exist on touch) */}
        <div className="hidden md:block absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full py-3 bg-ivory/95 backdrop-blur-sm text-charcoal text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-emerald hover:text-ivory transition-colors"
          >
            Quick View
          </button>
        </div>

        {/* Authenticated marker, hidden during hover so quick-view can take its place */}
        {product.authenticated && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-ivory bg-emerald/95 px-2 py-1 md:group-hover:opacity-0 transition-opacity">
            <ShieldCheck className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            <span>Authenticated</span>
          </div>
        )}
      </div>

      {/* Details, on dark canvas */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ivory/50">
          <span>{product.brand}</span>
          <span>Cond. {product.conditionScore}/10</span>
        </div>
        <h3 className="text-sm text-ivory leading-tight pr-4 group-hover:text-brass transition-colors">
          {product.name}
        </h3>
        <div className="pt-1">
          <span className="font-serif text-lg text-brass">
            ${product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
