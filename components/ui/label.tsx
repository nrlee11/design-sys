"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        [
          // layout
          "flex items-center gap-2",
          "select-none",

          // typography
          "text-xs font-medium leading-none",
          "text-foreground",

          // interaction
          "cursor-pointer",

          // disabled (field or peer 기준)
          "group-data-[disabled=true]:opacity-50",
          "group-data-[disabled=true]:pointer-events-none",
          "peer-disabled:opacity-50",
          "peer-disabled:cursor-not-allowed",

          // invalid hook (FormField 확장용)
          "group-aria-invalid:text-destructive",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

export { Label };
