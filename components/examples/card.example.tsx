"use client";

import { Example } from "@/components/examples/example";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

export function CardExample() {
  return (
    <Example
      title="Card"
      description="Cards are used to group related content and actions."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* 기본 Card */}
        <Card>
          <CardHeader className="border-b border-border">
            <CardTitle>Default Card</CardTitle>
            <CardDescription>
              This is a basic card with header, content, and footer.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p>
              Cards provide a flexible and extensible content container with
              multiple variants and options.
            </p>
          </CardContent>

          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>

        {/* Action 포함 Card */}
        <Card>
          <CardHeader>
            <CardTitle>Card with Action</CardTitle>
            <CardDescription>
              You can place actions in the card header.
            </CardDescription>

            <CardAction>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <p>
              CardAction is useful for contextual actions like edit, menu, or
              settings.
            </p>
          </CardContent>

          <CardFooter className="justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </Example>
  );
}
