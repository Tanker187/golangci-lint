"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, BookOpen, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "https://golangci-lint.run/welcome/install/", label: "Install" },
  { href: "https://golangci-lint.run/usage/quick-start/", label: "Quick Start" },
  { href: "https://golangci-lint.run/usage/linters/", label: "Linters" },
  { href: "https://golangci-lint.run/usage/configuration/", label: "Config" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-accent" />
          <span className="text-lg font-semibold">golangci-lint</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://golangci-lint.run/"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-4 w-4" />
            Docs
          </a>
          <a
            href="https://github.com/golangci/golangci-lint"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-3 py-2 text-sm text-background transition-opacity hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-b bg-background md:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t pt-4">
            <a
              href="https://golangci-lint.run/"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="h-4 w-4" />
              Documentation
            </a>
            <a
              href="https://github.com/golangci/golangci-lint"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-3 py-2 text-sm text-background transition-opacity hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
