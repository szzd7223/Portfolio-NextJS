import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--coral)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]";

    const variants = {
      default: "bg-[var(--ink)] text-[var(--background)] hover:bg-[var(--ink)]/90 shadow-[0_4px_12px_rgba(26,26,26,0.08)]",
      outline: "border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] shadow-[0_1px_2px_rgba(26,26,26,0.02)] hover:border-[var(--coral)] hover:text-[var(--coral)]",
      secondary: "bg-[var(--border)] text-[var(--ink)] hover:bg-[var(--border)]/80",
      ghost: "hover:bg-[var(--border)]/30 text-[var(--ink)] hover:text-[var(--coral)]",
    };

    const sizes = {
      default: "h-10 px-5 py-2",
      sm: "h-8 rounded-full px-3 text-xs",
      lg: "h-14 px-8 py-4 text-base",
      icon: "h-10 w-10 p-0 rounded-full",
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
