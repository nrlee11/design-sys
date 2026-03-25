"use client";

import { Example } from "@/components/examples/example";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function LabelExample() {
  return (
    <Example
      title="Label"
      description="Labels are used to describe form controls such as inputs and checkboxes."
    >
      <div className="space-y-6 max-w-sm">
        {/* Input label */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" />
        </div>

        {/* Checkbox label */}
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        {/* Disabled (group pattern) */}
        <div className="space-y-2" data-disabled>
          <Label htmlFor="disabled">Disabled</Label>
          <Input id="disabled" disabled placeholder="Disabled input" />
        </div>

        {/* Invalid (FormField hint) */}
        <div className="space-y-2" aria-invalid>
          <Label
            htmlFor="invalid"
            className="text-xs font-medium text-destructive"
          >
            Invalid
          </Label>
          <Input id="invalid" aria-invalid placeholder="Invalid value" />
          <p className="text-xs text-destructive">This field is required.</p>
        </div>
      </div>
    </Example>
  );
}
