"use client";

import { Example } from "@/components/examples/example";
import { Input } from "@/components/ui/input";

export function InputExample() {
  return (
    <Example
      title="Input"
      description="Inputs allow users to enter and edit text."
    >
      <div className="space-y-6 max-w-sm">
        {/* Default */}
        <div className="space-y-2">
          <label htmlFor="input-default" className="text-xs font-medium">
            Default
          </label>
          <Input id="input-default" placeholder="Enter text…" />
        </div>

        {/* With value */}
        <div className="space-y-2">
          <label htmlFor="input-value" className="text-xs font-medium">
            With value
          </label>
          <Input id="input-value" defaultValue="hello@company.com" />
        </div>

        {/* Invalid */}
        <div className="space-y-2">
          <label
            htmlFor="input-invalid"
            className="text-xs font-medium text-destructive"
          >
            Invalid
          </label>
          <Input id="input-invalid" aria-invalid placeholder="Invalid input" />
          <p className="text-xs text-destructive">This field is required.</p>
        </div>

        {/* Disabled */}
        <div className="space-y-2">
          <label htmlFor="input-disabled" className="text-xs font-medium">
            Disabled
          </label>
          <Input id="input-disabled" disabled placeholder="Disabled input" />
        </div>
      </div>
    </Example>
  );
}
