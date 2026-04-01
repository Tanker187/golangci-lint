import { Github } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to improve your Go code?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of developers using golangci-lint to ship better Go code.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://golangci-lint.run/welcome/install/"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </a>
            <a
              href="https://github.com/golangci/golangci-lint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-base font-medium transition-colors hover:bg-muted"
            >
              <Github className="h-5 w-5" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
