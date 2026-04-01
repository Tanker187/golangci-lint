import {
  Zap,
  Layers,
  Settings,
  GitBranch,
  Terminal,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazingly Fast",
    description:
      "Runs linters in parallel, reuses Go build cache, and caches analysis results for faster subsequent runs.",
  },
  {
    icon: Layers,
    title: "100+ Linters",
    description:
      "Includes all popular linters like staticcheck, gosec, errcheck, govet, and many more in a single tool.",
  },
  {
    icon: Settings,
    title: "Highly Configurable",
    description:
      "Fine-tune every linter with YAML configuration. Enable, disable, or customize rules to match your project.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Ready",
    description:
      "First-class support for GitHub Actions, GitLab CI, Jenkins, and other CI systems with optimized workflows.",
  },
  {
    icon: Terminal,
    title: "IDE Integration",
    description:
      "Works seamlessly with VS Code, GoLand, Vim, Emacs, and other editors through golangci-lint-langserver.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description:
      "Includes security linters like gosec to catch vulnerabilities before they reach production.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for Go code quality
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One tool to rule them all. Stop managing dozens of linters manually.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <feature.icon className="h-6 w-6" />
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
