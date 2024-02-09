"use client";

import { Loader2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

const Spinner = React.forwardRef<
  React.ElementRef<LucideIcon>,
  React.ComponentPropsWithoutRef<LucideIcon>
>(({ className, ...rest }, ref) => (
  <Loader2
    ref={ref}
    className={cn("h-4 w-4 animate-spin", className)}
    {...rest}
  />
));
Spinner.displayName = "Spinner";

export { Spinner };
