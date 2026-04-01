import { ArrowRight } from "lucide-react";

const popularLinters = [
  {
    name: "staticcheck",
    description: "Advanced Go static analysis",
    category: "bugs",
  },
  {
    name: "gosec",
    description: "Security-focused code scanner",
    category: "security",
  },
  {
    name: "errcheck",
    description: "Check for unhandled errors",
    category: "bugs",
  },
  {
    name: "govet",
    description: "Reports suspicious constructs",
    category: "bugs",
  },
  {
    name: "ineffassign",
    description: "Detects ineffectual assignments",
    category: "performance",
  },
  {
    name: "gosimple",
    description: "Simplify Go code suggestions",
    category: "style",
  },
  {
    name: "gocritic",
    description: "Opinionated Go source code linter",
    category: "style",
  },
  {
    name: "revive",
    description: "Fast, configurable linter for Go",
    category: "style",
  },
];

const categoryColors: Record<string, string> = {
  bugs: "bg-red-500/10 text-red-600 dark:text-red-400",
  security: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  performance: "bg-green-500/10 text-green-600 dark:text-green-400",
  style: "bg-accent/10 text-accent",
};

export function Linters() {
  return (
    <section id="linters" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Popular linters included
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            All the linters you know and love, pre-configured and ready to use.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {popularLinters.map((linter) => (
            <div
              key={linter.name}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-mono font-medium">{linter.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {linter.description}
                  </p>
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  categoryColors[linter.category]
                }`}
              >
                {linter.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://golangci-lint.run/usage/linters/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View all 100+ linters
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
