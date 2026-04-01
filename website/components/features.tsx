import { Zap, Layers, Settings, GitBranch, Code, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "Runs linters in parallel with shared caching. Up to 6x faster than running linters sequentially.",
  },
  {
    icon: Layers,
    title: "100+ Linters",
    description:
      "Aggregates the best Go linters in one tool. From bug detection to code style enforcement.",
  },
  {
    icon: Settings,
    title: "Highly Configurable",
    description:
      "YAML-based configuration with sensible defaults. Enable, disable, and tune any linter.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Ready",
    description:
      "First-class support for GitHub Actions, GitLab CI, Jenkins, and all major CI platforms.",
  },
  {
    icon: Code,
    title: "IDE Integration",
    description:
      "Works with VS Code, GoLand, Vim, Emacs, and any editor supporting Go tools.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description:
      "Includes security linters like gosec to catch vulnerabilities before they ship.",
  },
];

export function Features() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for Go code quality
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One tool to run them all. Fast, configurable, and battle-tested.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border bg-background p-6 transition-colors hover:border-accent/50 hover:bg-muted/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
