"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "run", label: "Run" },
  { id: "config", label: "Config" },
  { id: "output", label: "Output" },
];

const codeSnippets = {
  run: `# Run all linters
golangci-lint run

# Run specific linters
golangci-lint run --enable=gosec,errcheck

# Run on specific paths
golangci-lint run ./...`,
  config: `# .golangci.yml
linters:
  enable:
    - errcheck
    - gosimple
    - govet
    - ineffassign
    - staticcheck
    - gosec

linters-settings:
  errcheck:
    check-type-assertions: true
  gosec:
    severity: medium`,
  output: `main.go:15:2: Error return value is not checked (errcheck)
main.go:23:6: S1000: should use a simple channel send (gosimple)
pkg/api/handler.go:45:3: G104: Errors unhandled (gosec)
pkg/db/query.go:12:9: SA1019: deprecated method (staticcheck)

Found 4 issues in 2.3s`,
};

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState("run");

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Simple to use, powerful results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started with a single command. Customize with a simple YAML config.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            {/* Tab bar */}
            <div className="flex border-b border-border bg-muted/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "border-b-2 border-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code content */}
            <div className="p-4">
              <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                <code className="text-muted-foreground">
                  {codeSnippets[activeTab as keyof typeof codeSnippets]}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
