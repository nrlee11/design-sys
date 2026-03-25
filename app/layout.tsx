import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./design-tokens/tokens.css";

const notoSans = Noto_Sans({ variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Design System",
    template: "%s | Design System",
  },
  description: "Internal design system and component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="sticky top-0 h-screen px-4 py-6 overflow-y-auto bg-muted">
            <div className="mb-6">
              <h1 className="text-sm font-semibold">Design System</h1>
              <p className="text-xs text-muted-foreground">Internal</p>
            </div>

            <nav className="space-y-1">
              <NavItem href="#button">Button</NavItem>
              <NavItem href="#badge">Badge</NavItem>
              <NavItem href="#alert-dialog">Alert Dialog</NavItem>
              <NavItem href="#card">Card</NavItem>
              <NavItem href="#checkbox">Checkbox</NavItem>
              <NavItem href="#dropdown-menu">Dropdown Menu</NavItem>
              <NavItem href="#input">Input</NavItem>
              <NavItem href="#label">Label</NavItem>
              <NavItem href="#progress">Progress</NavItem>
              <NavItem href="#table">Table</NavItem>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
    >
      {children}
    </Link>
  );
}
