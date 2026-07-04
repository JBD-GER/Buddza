import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-[#262C36]/12 bg-white px-3 py-2 text-base text-[#262C36] shadow-sm outline-none transition-colors placeholder:text-[#262C36]/35 focus:border-[#F0917B] focus:ring-2 focus:ring-[#F0917B]/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}
