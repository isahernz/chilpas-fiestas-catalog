import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium max-w-max whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        spotlight:
          "animate-shine rounded-full border-pink-200 bg-[linear-gradient(110deg,#fbbf24,20%,#ec4899,40%,#8b5cf6,60%,#06b6d4,80%,#fbbf24)] bg-[length:200%_100%] text-[10px] text-nowrap text-white font-semibold shadow-lg transition-colors dark:border-pink-300 dark:bg-[linear-gradient(110deg,#f59e0b,20%,#db2777,40%,#7c3aed,60%,#0891b2,80%,#f59e0b)]",
        landing:
          "text-center rounded-full border border-pink-200 bg-gradient-to-r from-pink-100 via-cyan-50 to-yellow-100 px-4 py-2 text-sm text-pink-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLElement, BadgeProps>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "span";

  return <Comp ref={ref} data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
});

Badge.displayName = "Badge";

export { Badge, badgeVariants };
