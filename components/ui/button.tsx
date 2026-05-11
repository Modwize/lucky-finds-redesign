import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-emerald text-ivory uppercase tracking-[0.2em] hover:bg-emerald-deep",
        outline:
          "border border-emerald text-emerald uppercase tracking-[0.2em] hover:bg-emerald hover:text-ivory",
        ghost: "text-emerald hover:text-brass-dark uppercase tracking-[0.2em]",
        brass:
          "bg-brass text-charcoal uppercase tracking-[0.2em] hover:bg-brass-dark",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-10 py-5 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
