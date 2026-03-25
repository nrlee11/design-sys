"use client";

import { ExampleWrapper } from "@/components/examples/example";
import { useEffect, useState } from "react";
import { ButtonExample } from "@/components/examples/button.example";
import { BadgeExample } from "@/components/examples/badge.example";
import { AlertDialogExample } from "@/components/examples/alert-dialog.example";
import { CardExample } from "@/components/examples/card.example";
import { CheckboxExample } from "@/components/examples/checkbox.example";
import { DropdownExample } from "@/components/examples/dropdown-menu.example";
import { InputExample } from "@/components/examples/input.example";
import { LabelExample } from "@/components/examples/label.example";
import { ProgressExample } from "@/components/examples/progress.example";
import { TableExample } from "@/components/examples/table.example";
import Link from "next/link";

export default function Page() {
  const [dark, setDark] = useState(false);

  // 1️⃣ 처음 로드 시 localStorage → state 동기화
  useEffect(() => {
    try {
      const v = localStorage.getItem("theme");
      setDark(v === "dark");
    } catch {
      // ignore
    }
  }, []);

  // 2️⃣ state 변화 → html class + localStorage 반영
  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // ignore
    }
  }, [dark]);

  return (
    <ExampleWrapper>
      <div className="flex flex-col items-end gap-2 mb-6">

      </div>     
      <header className="flex items-start justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-3xl font-bold">Design System</h1>
          <p className="text-muted-foreground">
            회사 전용  
            <strong> 컴포넌트 시스템 예제 모음</strong>
            입니다.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
            aria-pressed={dark}
            aria-label="Toggle dark mode"
          >
          {dark ? "Switch to light" : "Switch to dark"}
        </button>
        <Link
          href="/design-tokens"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          Design Tokens 바로가기
        </Link>
        </div>
        
      </header>

      <ul>
        <li>
          1. 디자인토큰(자체제작)을 적용하여 shadcn/ui 스타일을 기반으로 한 회사
          전용 컴포넌트 시스템”을 구현한 상태
        </li>
        <li>
          2. shadcn 컴포넌트를 “그대로 쓰는 건 아님.” 회사 ui 기준에 맞게
          커스터마이징한 상태”
        </li>
        <li>3. shadcn/ui가 제공하는 구조·패턴·설계 방식을 사용 중</li>
        <li>--components/ui/* 중심의 파일 구조</li>
        <li>--class-variance-authority (cva) 기반의 variant / size API</li>
        <li>--일관된 컴포넌트 API 설계 패턴</li>
        <li>
          --접근성을 고려한 기본 구조 (focus-visible, disabled, aria- 대응)*
        </li>
        <li>--components/ui/* 중심의 파일 구조</li>
        <li>
          4. shadcn에서 생성한 컴포넌트 파일을 회사 디자인 토큰 기반으로
          수정·확장하여 사용 (AI 활용)
        </li>
      </ul>

      <section id="button">
        <ButtonExample />
      </section>
      <section id="badge">
        <BadgeExample />
      </section>
      <section id="alert-dialog">
        <AlertDialogExample />
      </section>
      <section id="card">
        <CardExample />
      </section>
      <section id="checkbox">
        <CheckboxExample />
      </section>
      <section id="dropdown-menu">
        <DropdownExample />
      </section>
      <section id="input">
        <InputExample />
      </section>
      <section id="label">
        <LabelExample />
      </section>
      <section id="progress">
        <ProgressExample />
      </section>
      <section id="table">
        <TableExample />
      </section>
    </ExampleWrapper>
  );
}
