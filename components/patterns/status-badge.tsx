import * as React from "react";
import { Badge } from "@/components/ui/badge";

export type Status = "active" | "draft" | "archived" | "error";

interface StatusBadgeProps {
  status: Status;
}

const STATUS_LABEL: Record<Status, string> = {
  active: "Active: 강한상태",
  draft: "Draft: 보조/약한상태",
  archived: "Archived: 아웃라인(비활성/보관느낌)",
  error: "Error:destructive(위험/에러느낌)",
};

const STATUS_VARIANT: Record<
  Status,
  React.ComponentProps<typeof Badge>["variant"]
> = {
  active: "default",
  draft: "secondary",
  archived: "outline",
  error: "destructive",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge variant={STATUS_VARIANT[status]}>{STATUS_LABEL[status]}</Badge>;
}
