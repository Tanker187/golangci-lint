"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "run",
    label: "Run",
    code: `$ golangci-lint run

main.go:10:2: S1023: redundant return statement (gosimple)
main.go:15:9: ineffectual assignment to err (ineffassign)
api/handler.go:42:6: Error return value is not checked (errcheck)

Found 3 issues in 1.24s`,
  },
  {
    id: "config",
    label: ".golangci.yml",
    code: `linters:
  enable:
    - errcheck
    - gosimple
    - govet
    - ineffassign
    - staticcheck
    - unused

linters-settings:
  errcheck:
    check-type-assertions: true
    check-blank: true

run:
  timeout: 5m
  tests: false`,
  },
  {
    id: "ci",
    label: "GitHub Action",
    code: `name: golangci-lint
on: [push, pull_request]

jobs:
  golangci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: stable
      - name: golangci-lint
        uses: golangci/golangci-lint-action@v6
        with:
          version: latest`,
  },
];

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState("run");
  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple to use, easy to configure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started in seconds. Customize to your needs.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <div className="overflow-hidden rounded-xl border bg-background shadow-lg">
            <div className="flex border-b bg-muted/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "border-b-2 border-accent bg-background text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto p-4">
              <pre className="font-mono text-sm leading-relaxed">
                <code>{activeContent?.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
