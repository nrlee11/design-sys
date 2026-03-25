"use client";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Example } from "@/components/examples/example";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import * as Icons from "@hugeicons/core-free-icons";
export function DropdownExample() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [position, setPosition] = React.useState("top");
  return (
    <Example
      title="Dropdown Menu"
      description="A dropdown menu displays a list of choices on a temporary surface."
    >
      <div className="flex flex-col gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" className="w-full justify-between">
                Open Menu 너비 최대 w-full
                <HugeiconsIcon
                  icon={Icons.ArrowDown01Icon}
                  strokeWidth={2}
                  data-icon="inline-end"
                />
              </Button>
            }
          />
          {/* 데모라서 고정폭 유지(OK). 버튼 너비 맞추고 싶으면 w-full 대신 w-숫자 */}
          <DropdownMenuContent className="bg-background">
            <DropdownMenuGroup>
              <DropdownMenuLabel>라벨라벨</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" className="w-56 justify-between">
                Open Menu
                <HugeiconsIcon
                  icon={Icons.ArrowDown01Icon}
                  strokeWidth={2}
                  data-icon="inline-end"
                />    
              </Button>
            }
          />
          <DropdownMenuContent className="bg-background">
            <DropdownMenuGroup>
              <DropdownMenuLabel>라벨라벨</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Example>
  );
}
