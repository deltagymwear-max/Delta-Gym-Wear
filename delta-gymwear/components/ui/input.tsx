import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full border border-zinc-300 bg-white px-4 text-sm outline-none transition focus:border-brand-black focus:ring-2 focus:ring-brand-yellow/40",
        className,
      )}
      {...props}
    />
  );
}
