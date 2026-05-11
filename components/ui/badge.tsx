import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium",
  {
    variants: {
      variant: {
        default: "bg-emerald-deep text-ivory",
        outline: "border border-ivory/40 text-ivory",
        brass: "bg-brass text-charcoal",
        ivory: "bg-ivory-warm text-emerald-deep",
        verified: "bg-brass/15 text-brass border border-brass/30",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
