"use client";

import "./tokens.css";
import { useEffect, useState } from "react";
import Link from "next/link";

type ColorToken = {
  name: string;
  usage: string;
  className: string;
  cssVar: string;
};

type RadiusToken = {
  name: string;
  usage: string;
  className: string;
  cssVar: string;
};

type TypographyToken = {
  name: string;
  usage: string;
  cssVar: string;
  category: "font-family" | "font-size" | "line-height" | "font-weight";
};

type SpacingToken = {
  name: string;
  usage: string;
  cssVar: string;
  value?: string;
};

type ShadowToken = {
  name: string;
  usage: string;
  cssVar: string;
};

const COLOR_TOKENS: ColorToken[] = [
  // Surface
  {
    name: "background",
    usage: "페이지 기본 배경",
    className: "bg-background border",
    cssVar: "--background",
  },
  {
    name: "card",
    usage: "카드 배경",
    className: "bg-card border",
    cssVar: "--card",
  },
  {
    name: "popover",
    usage: "팝오버 배경",
    className: "bg-popover border",
    cssVar: "--popover",
  },
  {
    name: "example-content",
    usage: "예제 컨텐츠 배경",
    className: "bg-example-content",
    cssVar: "--example-content",
  },
  {
    name: "example-content2",
    usage: "예제 컨텐츠 배경(더 진함)",
    className: "bg-example-content2",
    cssVar: "--example-content2",
  },

  // Text
  {
    name: "foreground",
    usage: "기본 텍스트",
    className: "bg-foreground",
    cssVar: "--foreground",
  },
  {
    name: "muted",
    usage: "약한 배경",
    className: "bg-muted",
    cssVar: "--muted",
  },
  {
    name: "muted-foreground",
    usage: "약한 텍스트",
    className: "bg-muted-foreground",
    cssVar: "--muted-foreground",
  },

  // State (Action)
  {
    name: "primary",
    usage: "주요 액션 / 강조 / 확인,저장,완료",
    className: "bg-primary",
    cssVar: "--primary",
  },
  {
    name: "secondary",
    usage: "보조 / 서브 액션 / 취소,닫기,뒤로가기",
    className: "bg-secondary",
    cssVar: "--secondary",
  },
  {
    name: "accent",
    usage:
      "리스트/메뉴/테이블hover, 선택됨(selected)상태, 누를수 있음(clickable), secondary버튼의 hover",
    className: "bg-accent",
    cssVar: "--accent",
  },
  {
    name: "success",
    usage: "성공 / 완료",
    className: "bg-success",
    cssVar: "--success",
  },
  {
    name: "warning",
    usage: "경고 / 주의",
    className: "bg-warning",
    cssVar: "--warning",
  },
  {
    name: "destructive",
    usage: "위험 / 삭제",
    className: "bg-destructive",
    cssVar: "--destructive",
  },

  // State Variants
  {
    name: "primary-hover",
    usage: "주요 액션 호버",
    className: "bg-primary-hover",
    cssVar: "--primary-hover",
  },
  {
    name: "disabled",
    usage: "주요 액션 비활성",
    className: "bg-disabled",
    cssVar: "--disabled",
  },

  // Chrome
  {
    name: "border",
    usage: "구분선",
    className: "bg-border",
    cssVar: "--border",
  },
  {
    name: "ring",
    usage: "포커스 링",
    className: "bg-ring",
    cssVar: "--ring",
  },
  {
    name: "input",
    usage: "입력 필드",
    className: "bg-input",
    cssVar: "--input",
  },

  // Brand Colors
  {
    name: "brand-blue1",
    usage: "브랜드 주요 색상",
    className: "bg-brand-blue1",
    cssVar: "--brand-blue1",
  },
  {
    name: "brand-blue2",
    usage: "브랜드 주요 색상",
    className: "bg-brand-blue2",
    cssVar: "--brand-blue2",
  },
  {
    name: "brand-blue3",
    usage: "브랜드 주요 색상",
    className: "bg-brand-blue3",
    cssVar: "--brand-blue3",
  },
  {
    name: "brand-blue4",
    usage: "브랜드 주요 색상",
    className: "bg-brand-blue4",
    cssVar: "--brand-blue4",
  },
  {
    name: "brand-blue5",
    usage: "브랜드 주요 색상",
    className: "bg-brand-blue5",
    cssVar: "--brand-blue5",
  },
];

const RADIUS_TOKENS: RadiusToken[] = [
  {
    name: "sm",
    usage: "작은 UI (Tag, Badge)",
    className: "rounded-sm",
    cssVar: "--radius-sm",
  },
  {
    name: "md",
    usage: "기본 UI (Input, Button)",
    className: "rounded-md",
    cssVar: "--radius-md",
  },
  {
    name: "lg",
    usage: "카드 / 섹션",
    className: "rounded-lg",
    cssVar: "--radius-lg",
  },
  {
    name: "xl",
    usage: "강조 카드 / 컨테이너",
    className: "rounded-xl",
    cssVar: "--radius-xl",
  },
  {
    name: "2xl",
    usage: "강조 카드 / 컨테이너",
    className: "rounded-2xl",
    cssVar: "--radius-2xl",
  },
  {
    name: "3xl",
    usage: "강조 카드 / 컨테이너",
    className: "rounded-3xl",
    cssVar: "--radius-3xl",
  },
  {
    name: "4xl",
    usage: "강조 카드 / 컨테이너",
    className: "rounded-4xl",
    cssVar: "--radius-4xl",
  },
];

const SHADOW_TOKENS: ShadowToken[] = [
  {
    name: "shadow-sm",
    usage: "작은 그림자 (카드 경계)",
    cssVar: "--shadow-sm",
  },
  {
    name: "shadow-md",
    usage: "중간 그림자 (모달, 팝오버)",
    cssVar: "--shadow-md",
  },
  {
    name: "shadow-lg",
    usage: "큰 그림자 (오버레이)",
    cssVar: "--shadow-lg",
  },
];

const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  // Font Family
  {
    name: "Sans",
    usage: "기본 글꼴 (본문, UI)",
    cssVar: "--font-sans-base",
    category: "font-family",
  },
  {
    name: "Mono",
    usage: "코드 글꼴",
    cssVar: "--font-mono-base",
    category: "font-family",
  },
  // Font Size
  {
    name: "XS",
    usage: "작은 텍스트 (12px)",
    cssVar: "--font-size-xs",
    category: "font-size",
  },
  {
    name: "SM",
    usage: "작은 텍스트 (14px)",
    cssVar: "--font-size-sm",
    category: "font-size",
  },
  {
    name: "MD",
    usage: "기본 텍스트 (16px)",
    cssVar: "--font-size-md",
    category: "font-size",
  },
  {
    name: "LG",
    usage: "큰 텍스트 (18px)",
    cssVar: "--font-size-lg",
    category: "font-size",
  },
  {
    name: "XL",
    usage: "매우 큰 텍스트 (20px)",
    cssVar: "--font-size-xl",
    category: "font-size",
  },
  {
    name: "2XL",
    usage: "매우 매우 큰 텍스트 (24px)",
    cssVar: "--font-size-2xl",
    category: "font-size",
  },
  {
    name: "3XL",
    usage: "매우 매우 큰 텍스트 (30px)",
    cssVar: "--font-size-3xl",
    category: "font-size",
  },
  // Line Height
  {
    name: "Tight",
    usage: "촘촘한 줄간격 (1.2)",
    cssVar: "--line-height-tight",
    category: "line-height",
  },
  {
    name: "Normal",
    usage: "기본 줄간격 (1.5)",
    cssVar: "--line-height-normal",
    category: "line-height",
  },
  {
    name: "Loose",
    usage: "느슨한 줄간격 (1.8)",
    cssVar: "--line-height-loose",
    category: "line-height",
  },
  // Font Weight
  {
    name: "Light",
    usage: "가볍게 (300)",
    cssVar: "--font-weight-light",
    category: "font-weight",
  },
  {
    name: "Regular",
    usage: "기본 굵기 (400)",
    cssVar: "--font-weight-regular",
    category: "font-weight",
  },
  {
    name: "Medium",
    usage: "중간 굵기 (500)",
    cssVar: "--font-weight-medium",
    category: "font-weight",
  },
  {
    name: "Semibold",
    usage: "반굵게 (600)",
    cssVar: "--font-weight-semibold",
    category: "font-weight",
  },
  {
    name: "Bold",
    usage: "굵은 텍스트 (700)",
    cssVar: "--font-weight-bold",
    category: "font-weight",
  },
];

const SPACING_TOKENS: SpacingToken[] = [
  {
    name: "space1 (4px)",
    usage: "아주 작은 간격",
    cssVar: "--space-1",
  },
  {
    name: "space2 (8px)",
    usage: "작은 간격",
    cssVar: "--space-2",
  },
  {
    name: "space3 (12px)",
    usage: "기본 간격",
    cssVar: "--space-3",
  },
  {
    name: "space4 (16px)",
    usage: "중간 간격",
    cssVar: "--space-4",
  },
  {
    name: "space5 (20px)",
    usage: "큰 간격",
    cssVar: "--space-5",
  },
  {
    name: "space6 (24px)",
    usage: "큰 간격",
    cssVar: "--space-6",
  },
  {
    name: "space7 (28px)",
    usage: "매우 큰 간격",
    cssVar: "--space-7",
  },
  {
    name: "space8 (32px)",
    usage: "매우 큰 간격",
    cssVar: "--space-8",
  },
];

export default function DesignTokensPage() {
  const [colorValues, setColorValues] = useState<Record<string, string>>({});
  const [radiusValues, setRadiusValues] = useState<Record<string, string>>({});
  const [typographyValues, setTypographyValues] = useState<
    Record<string, string>
  >({});
  const [spacingValues, setSpacingValues] = useState<Record<string, string>>(
    {},
  );
  const [shadowValues, setShadowValues] = useState<Record<string, string>>({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    const styles = getComputedStyle(document.documentElement);

    const colors: Record<string, string> = {};
    COLOR_TOKENS.forEach((t) => {
      colors[t.cssVar] = styles.getPropertyValue(t.cssVar).trim();
    });

    const radius: Record<string, string> = {};
    RADIUS_TOKENS.forEach((t) => {
      radius[t.cssVar] = styles.getPropertyValue(t.cssVar).trim();
    });

    const typography: Record<string, string> = {};
    TYPOGRAPHY_TOKENS.forEach((t) => {
      typography[t.cssVar] = styles.getPropertyValue(t.cssVar).trim();
    });

    const spacing: Record<string, string> = {};
    SPACING_TOKENS.forEach((t) => {
      spacing[t.cssVar] = styles.getPropertyValue(t.cssVar).trim();
    });

    const shadows: Record<string, string> = {};
    SHADOW_TOKENS.forEach((t) => {
      shadows[t.cssVar] = styles.getPropertyValue(t.cssVar).trim();
    });

    setColorValues(colors);
    setRadiusValues(radius);
    setTypographyValues(typography);
    setSpacingValues(spacing);
    setShadowValues(shadows);
  }, [dark]);

  return (
    <div className="mx-auto max-w-6xl px-8 py-10 space-y-16">
      {/* Header */}
      <header className="flex items-start justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-3xl font-bold">Design Tokens</h1>
          <p className="text-muted-foreground">
            이 페이지는 우리 서비스에서 사용하는{" "}
            <strong>공통 디자인 토큰</strong>과 각 토큰의{" "}
            <strong>실제 CSS 값</strong>을 함께 보여줍니다.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
          >
            {dark ? "Light mode" : "Dark mode"}
          </button>
          <Link
            href="/"
            className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
          >
            컴포넌트 바로가기
          </Link>
        </div>
      </header>

      {/* Guidelines */}
      <Section title="Usage Guidelines">
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground max-w-3xl">
          <li>색상과 radius는 반드시 디자인 토큰을 사용합니다.</li>
          <li>임의의 값(px, rem)을 직접 사용하지 않습니다.</li>
          <li>다크 모드는 토큰 값 변경으로만 대응합니다.</li>
        </ul>
      </Section>

      {/* Color Tokens */}
      <Section title="Color Tokens">
        {/* Surface */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Surface (배경/레이어)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {COLOR_TOKENS.filter((t) =>
                [
                  "background",
                  "card",
                  "popover",
                  "example-content",
                  "example-content2",
                ].includes(t.name),
              ).map((token) => (
                <ColorTokenCard
                  key={token.name}
                  name={token.name}
                  usage={token.usage}
                  className={token.className}
                  value={colorValues[token.cssVar]}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Text (텍스트 의미 계층)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {COLOR_TOKENS.filter((t) =>
                ["foreground", "muted", "muted-foreground"].includes(t.name),
              ).map((token) => (
                <ColorTokenCard
                  key={token.name}
                  name={token.name}
                  usage={token.usage}
                  className={token.className}
                  value={colorValues[token.cssVar]}
                />
              ))}
            </div>
          </div>

          {/* State (Action) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              State / Action (상태 / 의미 색)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {COLOR_TOKENS.filter((t) =>
                [
                  "primary",
                  "secondary",
                  "accent",
                  "success",
                  "warning",
                  "destructive",
                ].includes(t.name),
              ).map((token) => (
                <ColorTokenCard
                  key={token.name}
                  name={token.name}
                  usage={token.usage}
                  className={token.className}
                  value={colorValues[token.cssVar]}
                />
              ))}
            </div>
          </div>

          {/* State Variants */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              State Variants (상태별 파생 토큰)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {COLOR_TOKENS.filter((t) =>
                ["primary-hover", "disabled"].includes(t.name),
              ).map((token) => (
                <ColorTokenCard
                  key={token.name}
                  name={token.name}
                  usage={token.usage}
                  className={token.className}
                  value={colorValues[token.cssVar]}
                />
              ))}
            </div>
          </div>

          {/* Chrome */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Chrome (구조/ 인터랙션 보조)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {COLOR_TOKENS.filter((t) =>
                ["border", "ring", "input"].includes(t.name),
              ).map((token) => (
                <ColorTokenCard
                  key={token.name}
                  name={token.name}
                  usage={token.usage}
                  className={token.className}
                  value={colorValues[token.cssVar]}
                />
              ))}
            </div>
          </div>

          {/* Brand Colors */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Brand Colors (브랜드 색상)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {COLOR_TOKENS.filter((t) =>
                [
                  "brand-blue1",
                  "brand-blue2",
                  "brand-blue3",
                  "brand-blue4",
                  "brand-blue5",
                ].includes(t.name),
              ).map((token) => (
                <ColorTokenCard
                  key={token.name}
                  name={token.name}
                  usage={token.usage}
                  className={token.className}
                  value={colorValues[token.cssVar]}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Radius Tokens */}
      <Section title="Border Radius Tokens">
        <p className="text-sm text-muted-foreground max-w-3xl">
          Border radius는 단일 기준 토큰에서 파생되며, 컴포넌트 종류와 중요도에
          따라 사용됩니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {RADIUS_TOKENS.map((token) => (
            <RadiusTokenCard
              key={token.name}
              name={token.name}
              usage={token.usage}
              className={token.className}
              value={radiusValues[token.cssVar]}
            />
          ))}
        </div>
      </Section>

      {/* Shadow Tokens */}
      <Section title="Shadow Tokens">
        <p className="text-sm text-muted-foreground max-w-3xl">
          박스 그림자 토큰 샘플입니다. 카드, 모달, 팝오버 등에 사용합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SHADOW_TOKENS.map((token) => (
            <ShadowTokenCard
              key={token.name}
              name={token.name}
              usage={token.usage}
              value={shadowValues[token.cssVar]}
            />
          ))}
        </div>
      </Section>

      {/* Typography Tokens */}
      <Section title="Typography Tokens">
        <p className="text-sm text-muted-foreground max-w-3xl">
          글꼴, 크기, 줄간격 등의 타이포그래피 토큰입니다.
        </p>

        <div className="space-y-6">
          {/* Font Family */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Font Family</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {TYPOGRAPHY_TOKENS.filter(
                (t) => t.category === "font-family",
              ).map((token) => (
                <TypographyTokenCard
                  key={token.cssVar}
                  name={token.name}
                  usage={token.usage}
                  value={typographyValues[token.cssVar]}
                  category={token.category}
                />
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Font Size</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {TYPOGRAPHY_TOKENS.filter((t) => t.category === "font-size").map(
                (token) => (
                  <TypographyTokenCard
                    key={token.cssVar}
                    name={token.name}
                    usage={token.usage}
                    value={typographyValues[token.cssVar]}
                    category={token.category}
                  />
                ),
              )}
            </div>
          </div>

          {/* Line Height */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Line Height</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {TYPOGRAPHY_TOKENS.filter(
                (t) => t.category === "line-height",
              ).map((token) => (
                <TypographyTokenCard
                  key={token.cssVar}
                  name={token.name}
                  usage={token.usage}
                  value={typographyValues[token.cssVar]}
                  category={token.category}
                />
              ))}
            </div>
          </div>

          {/* Font Weight */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Font Weight</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {TYPOGRAPHY_TOKENS.filter(
                (t) => t.category === "font-weight",
              ).map((token) => (
                <TypographyTokenCard
                  key={token.cssVar}
                  name={token.name}
                  usage={token.usage}
                  value={typographyValues[token.cssVar]}
                  category={token.category}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Spacing Tokens */}
      <Section title="Spacing Tokens">
        <p className="text-sm text-muted-foreground max-w-3xl">
          마진, 패딩, 갭 등에 사용하는 간격 토큰입니다.
        </p>

        <div className="space-y-3">
          {SPACING_TOKENS.map((token) => (
            <SpacingTokenCard
              key={token.cssVar}
              name={token.name}
              usage={token.usage}
              value={spacingValues[token.cssVar]}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ---------- helpers ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold bg-example-content">{title}</h2>
      {children}
    </section>
  );
}

function ColorTokenCard({
  name,
  usage,
  className,
  value,
}: {
  name: string;
  usage: string;
  className: string;
  value?: string;
}) {
  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <div className={`h-14 rounded-md ${className}`} />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{usage}</div>
      </div>
      <code className="block text-xs font-sans bg-muted px-2 py-1 rounded">
        {value || "—"}
      </code>
    </div>
  );
}

function TokenTable({
  tokens,
}: {
  tokens: { name: string; usage: string; cssVar: string }[];
}) {
  const [lightValues, setLightValues] = useState<Record<string, string>>({});
  const [darkValues, setDarkValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.documentElement;
    const origDark = root.classList.contains("dark");

    // Read light values
    root.classList.remove("dark");
    const lightStyles = getComputedStyle(root);
    const light: Record<string, string> = {};
    tokens.forEach((t) => {
      light[t.cssVar] = lightStyles.getPropertyValue(t.cssVar).trim();
    });

    // Read dark / high-contrast values
    root.classList.add("dark");
    const darkStyles = getComputedStyle(root);
    const dark: Record<string, string> = {};
    tokens.forEach((t) => {
      dark[t.cssVar] = darkStyles.getPropertyValue(t.cssVar).trim();
    });

    // restore original
    root.classList.toggle("dark", origDark);

    setLightValues(light);
    setDarkValues(dark);
  }, [tokens]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="text-left">
            <th className="py-3 pr-6">Token name</th>
            <th className="py-3 pr-6">CSS token</th>
            <th className="py-3 pr-6">Light value</th>
            <th className="py-3">High-contrast / Dark value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.name} className="border-t">
              <td className="py-3 pr-6 align-top">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.usage}</div>
              </td>
              <td className="py-3 pr-6 align-top">
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  {t.cssVar}
                </code>
              </td>
              <td className="py-3 pr-6 align-top">
                <div className="flex items-center gap-3">
                  <div
                    className="h-8 w-28 rounded border"
                    style={{
                      backgroundColor: lightValues[t.cssVar] || "transparent",
                    }}
                  />
                  <div className="text-xs text-muted-foreground break-words">
                    {lightValues[t.cssVar] || "—"}
                  </div>
                </div>
              </td>
              <td className="py-3 align-top">
                <div className="flex items-center gap-3">
                  <div
                    className="h-8 w-28 rounded border"
                    style={{
                      backgroundColor: darkValues[t.cssVar] || "transparent",
                    }}
                  />
                  <div className="text-xs text-muted-foreground break-words">
                    {darkValues[t.cssVar] || "—"}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function RadiusTokenCard({
  name,
  usage,
  className,
  value,
}: {
  name: string;
  usage: string;
  className: string;
  value?: string;
}) {
  return (
    <div className="rounded-lg border border-border p-4 space-y-3 text-center">
      <div className={`mx-auto h-16 w-16 border ${className}`} />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{usage}</div>
      </div>
      <code className="block text-xs font-sans bg-muted px-2 py-1 rounded">
        {value || "—"}
      </code>
    </div>
  );
}

function ShadowTokenCard({
  name,
  usage,
  value,
}: {
  name: string;
  usage: string;
  value?: string;
}) {
  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-muted-foreground">{usage}</div>

      <div className="flex items-center justify-center py-4">
        <div
          className="h-24 w-48 bg-card rounded"
          style={{ boxShadow: value || "none" }}
        />
      </div>

      <code className="block text-xs font-sans bg-muted px-2 py-1 rounded overflow-x-auto">
        {value || "—"}
      </code>
    </div>
  );
}

function TypographyTokenCard({
  name,
  usage,
  value,
  category,
}: {
  name: string;
  usage: string;
  value?: string;
  category?: string;
}) {
  const getSampleText = () => {
    switch (category) {
      case "font-family":
        return "Sample Text";
      case "font-size":
        return "Sample Text";
      case "line-height":
        return "Sample line\nwith multiple\nlines";
      case "font-weight":
        return "Sample Text";
      default:
        return "Sample";
    }
  };

  const getSampleStyle = (
    value?: string,
    category?: string,
  ): React.CSSProperties => {
    const style: React.CSSProperties = {};
    if (category === "font-family" && value) {
      style.fontFamily = value;
    } else if (category === "font-size" && value) {
      style.fontSize = value;
    } else if (category === "line-height" && value) {
      style.lineHeight = value;
    } else if (category === "font-weight" && value) {
      style.fontWeight = parseInt(value) as any;
    }
    return style;
  };

  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{usage}</div>
      </div>

      {/* Sample Preview */}
      <div
        className="bg-muted p-3 rounded text-foreground whitespace-pre-wrap"
        style={getSampleStyle(value, category)}
      >
        {getSampleText()}
      </div>

      <code className="block text-xs font-sans bg-muted px-2 py-1 rounded overflow-x-auto">
        {value || "—"}
      </code>
    </div>
  );
}

function SpacingTokenCard({
  name,
  usage,
  value,
}: {
  name: string;
  usage: string;
  value?: string;
}) {
  const getValue = () => {
    const val = value || "0";
    return val;
  };

  return (
    <div className="rounded-lg border border-border p-4 space-y-4">
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-xs text-muted-foreground">{usage}</div>
      </div>

      {/* Horizontal Sample */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Horizontal</p>
        <div className="flex items-center bg-muted p-3 rounded">
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-xs font-bold text-primary-foreground">
            A
          </div>
          <div
            className="bg-accent rounded"
            style={{ width: getValue(), height: "2px" }}
          />
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-xs font-bold text-primary-foreground">
            B
          </div>
        </div>
      </div>

      {/* Vertical Sample */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Vertical</p>
        <div className="flex flex-col items-center gap-0 bg-muted p-3 rounded justify-center">
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-xs font-bold text-primary-foreground">
            A
          </div>
          <div
            className="bg-accent rounded"
            style={{ height: getValue(), width: "2px" }}
          />
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-xs font-bold text-primary-foreground">
            B
          </div>
        </div>
      </div>

      <code className="block text-xs font-sans bg-muted px-2 py-1 rounded">
        {getValue()}
      </code>
    </div>
  );
}
