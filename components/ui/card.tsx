import * as React from "react";
import { cn } from "@/lib/utils";

type CardSize = "default" | "sm";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: CardSize }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        [
          // base surface
          "bg-card text-card-foreground",
          // structure
          "flex flex-col overflow-hidden",
          // border & radius (회사 토큰: border)
          "rounded-lg border border-border",
          // spacing
          "gap-4 py-4",
          // size variants
          "data-[size=sm]:gap-2 data-[size=sm]:py-3",
          // footer가 있으면 마지막 padding 규칙
          "has-data-[slot=card-footer]:pb-0 data-[size=sm]:has-data-[slot=card-footer]:pb-0",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        [
          "grid auto-rows-min items-start gap-1 px-4",
          // action/description 레이아웃
          "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
          "has-data-[slot=card-description]:grid-rows-[auto_auto]",
          // size variants
          "group-data-[size=sm]/card:px-3",
          // header 아래에 border-b가 붙을 경우 spacing 보정
          "[.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        [
          "flex items-center",
          "border-t border-border",
          "p-4 group-data-[size=sm]/card:p-3",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
