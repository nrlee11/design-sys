"use client";

import { Example } from "@/components/examples/example";
import { Badge } from "@/components/ui/badge";
export function BadgeExample() {
  return (
    <Example
      title="Badge"
      description="Badges are used to display status, labels, or short pieces of metadata. They should not be used as primary actions."
    >
      <div className="space-y-6">
        {/* Variants */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Variants
          </h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* 상태 패턴 */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </section>

        {/* 링크 스타일 */}
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">As Link</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="link">View details</Badge>
            <Badge variant="link">Learn more</Badge>
          </div>
        </section>
      </div>
    </Example>
  );
}
