import * as React from "react";
import { cn } from "@/lib/utils";

interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function Example({
  title,
  description,
  children,
  className,
  ...props
}: ExampleProps) {
  return (
    <section className={cn("space-y-4 ", className)} {...props}>
      <header className="space-y-1 radius-md bg-example-content">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </header>
      <div className="border-2 border-example-content2 p-4 ">{children}</div>
    </section>
  );
}
/* -----------------------------
   ExampleWrapper
------------------------------ */

interface ExampleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExampleWrapper({
  children,
  className,
  ...props
}: ExampleWrapperProps) {
  return (
    <main
      className={cn("mx-auto max-w-6xl space-y-12 px-6 py-10", className)}
      {...props}
    >
      {children}
    </main>
  );
}
