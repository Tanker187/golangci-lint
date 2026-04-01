import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "golangci-lint - Fast Go Linters Runner",
  description:
    "Run 100+ Go linters in parallel with golangci-lint. Blazing fast, highly configurable, with IDE and CI/CD integration.",
  keywords: [
    "golang",
    "go",
    "linter",
    "static analysis",
    "code quality",
    "golangci-lint",
  ],
  openGraph: {
    title: "golangci-lint - Fast Go Linters Runner",
    description:
      "Run 100+ Go linters in parallel. Blazing fast, highly configurable.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
