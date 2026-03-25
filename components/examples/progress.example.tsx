"use client";

import { useState } from "react";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Example } from "@/components/examples/example";

export function ProgressExample() {
  const [value, setValue] = useState(45);

  return (
    <Example
      title="Progress"
      description="Progress bars visually indicate the status of an operation."
    >
      <div className="w-full max-w-sm space-y-4">
        {/* 데모용 슬라이더 */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full"
        />
        {/* Progress */}
        <Progress value={value}>
          <ProgressLabel>업로드 중</ProgressLabel>
          <ProgressValue />
        </Progress>
      </div>
    </Example>
  );
}
