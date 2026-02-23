"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../../lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
      "transition-all duration-200 ease-in-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200",
      "hover:data-[state=checked]:bg-green-600 hover:data-[state=unchecked]:bg-gray-300",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full bg-white",
        "shadow-lg ring-0 transition-transform duration-200",
        "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        "data-[state=checked]:shadow-green-400/50 data-[state=unchecked]:shadow-gray-400/50",
        "data-[state=checked]:border-green-500 data-[state=unchecked]:border-gray-200",
        "border-2"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch }; 