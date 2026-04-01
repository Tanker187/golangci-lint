"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = "go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--accent)/0.15),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span className="text-muted-foreground">New:</span>
            <span className="font-medium">v1.64 released with Go 1.24 support</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Fast linters runner
            <br />
            <span className="text-muted-foreground">for Go</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Run 100+ linters in parallel. Catch bugs, enforce style, and improve
            your Go code quality in seconds.
          </p>

          {/* Install command */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="relative w-full max-w-xl">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 font-mono text-sm">
                <span className="text-muted-foreground select-none">$</span>
                <code className="flex-1 truncate text-left">{installCommand}</code>
                <button
                  onClick={copyToClipboard}
                  className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://golangci-lint.run/welcome/install/"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </a>
            <a
              href="https://golangci-lint.run"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-base font-medium transition-colors hover:bg-muted"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
