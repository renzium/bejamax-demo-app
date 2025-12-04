"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

const button = cva(
  "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary transform hover:scale-105",
        outline:
          "border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white focus:ring-brand-primary transform hover:scale-105",
        secondary:
          "bg-brand-secondary text-white hover:bg-brand-primary-light focus:ring-brand-secondary transform hover:scale-105",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={clsx(button({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

