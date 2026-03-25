"use client";

import * as React from "react";
import { Example } from "@/components/examples/example";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Example
      title="Checkbox"
      description="Checkboxes allow users to select one or more items from a set."
    >
      <div className="space-y-6">
        {/* 기본 사용 */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Default</h3>

          <label className="flex items-center gap-2">
            <Checkbox />
            <span className="text-sm">Unchecked</span>
          </label>
        </section>

        {/* 체크된 상태 */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Checked</h3>

          <label className="flex items-center gap-2">
            <Checkbox id="cb-checked" defaultChecked />
            <span className="text-sm">Checked</span>
          </label>
        </section>

        {/* 제어 컴포넌트 */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Controlled
          </h3>

          <label className="flex items-center gap-2">
            <Checkbox
              id="cb-controlled"
              checked={checked}
              onCheckedChange={(value) => setChecked(value === true)}
            />
            <span className="text-sm">{checked ? "Checked" : "Unchecked"}</span>
          </label>
        </section>

        {/* 비활성화 */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Disabled
          </h3>

          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 opacity-70">
              <Checkbox id="cb-disabled" disabled />
              <span className="text-sm">Disabled</span>
            </label>

            <label className="flex items-center gap-2 opacity-70">
              <Checkbox id="cb-disabled-checked" disabled defaultChecked />
              <span className="text-sm">Disabled (checked)</span>
            </label>
          </div>
        </section>
      </div>
    </Example>
  );
}
