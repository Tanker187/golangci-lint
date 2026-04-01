import { cn } from "@/lib/utils";

const linters = [
  {
    name: "errcheck",
    description: "Check for unchecked errors",
    category: "bugs",
  },
  {
    name: "gosec",
    description: "Security problems inspection",
    category: "security",
  },
  {
    name: "govet",
    description: "Reports suspicious constructs",
    category: "bugs",
  },
  {
    name: "staticcheck",
    description: "Advanced static analysis",
    category: "bugs",
  },
  {
    name: "ineffassign",
    description: "Detects ineffectual assignments",
    category: "performance",
  },
  {
    name: "unused",
    description: "Finds unused code",
    category: "performance",
  },
  {
    name: "gofmt",
    description: "Checks code formatting",
    category: "style",
  },
  {
    name: "revive",
    description: "Fast, configurable linter",
    category: "style",
  },
];

const categoryColors: Record<string, string> = {
  bugs: "bg-red-500/10 text-red-600 dark:text-red-400",
  security: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  performance: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  style: "bg-green-500/10 text-green-600 dark:text-green-400",
};

export function Linters() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Popular linters included
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From bug detection to code style, we have you covered.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {linters.map((linter) => (
            <div
              key={linter.name}
              className="rounded-lg border bg-background p-4 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-mono text-sm font-semibold">
                  {linter.name}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                    categoryColors[linter.category]
                  )}
                >
                  {linter.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {linter.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://golangci-lint.run/usage/linters/"
            className="text-sm text-accent underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all 100+ linters
          </a>
        </div>
      </div>
    </section>
  );
}
