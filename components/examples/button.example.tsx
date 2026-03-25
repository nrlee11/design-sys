"use client";

import { Example } from "@/components/examples/example";
import { Button } from "@/components/ui/button";

export function ButtonExample() {
  return (
    <Example
      title="Button"
      description="Primary actions in our system"
      className="gap-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2>Default size</h2>
          <div className="gap-2 flex">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>xs size</h2>
          <div className="gap-2 flex">
            <Button size="xs">Primary</Button>
            <Button size="xs" variant="secondary">
              Secondary
            </Button>
            <Button size="xs" variant="outline">
              Outline
            </Button>
            <Button size="xs" variant="ghost">
              Ghost
            </Button>
            <Button size="xs" variant="destructive">
              Destructive
            </Button>
            <Button size="xs" variant="link">
              Link
            </Button>
            <Button size="xs" disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>sm size</h2>
          <div className="gap-2 flex">
            <Button size="sm">Primary</Button>
            <Button size="sm" variant="secondary">
              Secondary
            </Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
            <Button size="sm" variant="ghost">
              Ghost
            </Button>
            <Button size="sm" variant="destructive">
              Destructive
            </Button>
            <Button size="sm" variant="link">
              Link
            </Button>
            <Button size="sm" disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>lg size</h2>
          <div className="gap-2 flex">
            <Button size="lg">Primary</Button>
            <Button size="lg" variant="secondary">
              Secondary
            </Button>
            <Button size="lg" variant="outline">
              Outline
            </Button>
            <Button size="lg" variant="ghost">
              Ghost
            </Button>
            <Button size="lg" variant="destructive">
              Destructive
            </Button>
            <Button size="lg" variant="link">
              Link
            </Button>
            <Button size="lg" disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>
            최소길이(버튼속 텍스트가 "닫기"처럼 짧을 때 최소 유지 버튼크기)
          </h2>
          <div className="gap-2 flex">
            <Button>디폴트 96px</Button>
            <Button size="xs">xs 72px</Button>
            <Button size="sm">sm 80px</Button>
            <Button size="lg">lg 112px</Button>
          </div>
        </div>
      </div>
    </Example>
  );
}
