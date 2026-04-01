"use client";

import { useState } from "react";
import { Copy, Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const installCommand = "go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_50%)] opacity-10" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">
              100+ linters, one command
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Fast linters runner
            <br />
            <span className="text-accent">for Go</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Run 100+ linters in parallel with shared caching. Highly configurable 
            with IDE integration, CI/CD support, and smart defaults.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="group relative w-full max-w-xl">
              <div className="flex items-center overflow-hidden rounded-lg border bg-muted/50 font-mono text-sm">
                <span className="select-none px-4 py-3 text-muted-foreground">$</span>
                <code className="flex-1 truncate py-3 pr-2 text-left">
                  {installCommand}
                </code>
                <button
                  onClick={copyToClipboard}
                  className={cn(
                    "flex items-center gap-1.5 border-l px-4 py-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    copied && "text-green-500"
                  )}
                  aria-label="Copy install command"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Or use{" "}
              <a
                href="https://golangci-lint.run/welcome/install/#other"
                className="text-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                other installation methods
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
