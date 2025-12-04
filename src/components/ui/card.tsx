"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { HTMLAttributes, forwardRef } from "react";

const card = cva(
  "rounded-xl border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-brand-border bg-brand-surface shadow-sm hover:shadow-md",
        primary: "border-brand-primary/20 bg-brand-surface shadow-md hover:shadow-lg hover:border-brand-primary/40",
        elevated: "border-brand-border bg-brand-surface shadow-lg hover:shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={clsx(card({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };

