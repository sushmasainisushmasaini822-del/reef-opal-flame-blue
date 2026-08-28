import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground shadow-[var(--shadow-border)] transition-[box-shadow,border-color] duration-[var(--motion-quick)] placeholder:text-muted focus-visible:border-primary/40 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
