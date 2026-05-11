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
  const discount = product.retailPrice
    ? Math.round(
        ((product.retailPrice - product.price) / product.retailPrice) * 100
      )
    : 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
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

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="absolute top-3 right-3 h-9 w-9 bg-ivory/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-ivory"
        >
          <Heart className="h-4 w-4 text-charcoal" strokeWidth={1.5} />
        </button>

        {/* Hover quick-view */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full py-3 bg-ivory/95 backdrop-blur-sm text-charcoal text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-emerald hover:text-ivory transition-colors"
          >
            Quick View
          </button>
        </div>

        {/* Authenticated marker */}
        {product.authenticated && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-ivory bg-emerald/90 px-2 py-1 group-hover:opacity-0 transition-opacity">
            <ShieldCheck className="h-3 w-3" strokeWidth={2} />
            <span>Authenticated</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-charcoal/60">
          <span>{product.brand}</span>
          <span>Cond. {product.conditionScore}/10</span>
        </div>
        <h3 className="text-sm text-charcoal leading-tight pr-4 group-hover:text-emerald transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2.5 pt-1">
          <span className="font-serif text-lg text-emerald">
            ${product.price.toLocaleString()}
          </span>
          {product.retailPrice && (
            <>
              <span className="text-xs text-charcoal/40 line-through">
                ${product.retailPrice.toLocaleString()}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-brass-dark font-medium">
                Save {discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
