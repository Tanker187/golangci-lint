import { Github, Star } from "lucide-react";

export function CTA() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to improve your Go code?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of developers using golangci-lint to ship better code.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://golangci-lint.run/welcome/install/"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
            <a
              href="https://github.com/golangci/golangci-lint"
              className="inline-flex items-center justify-center gap-2 rounded-lg border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
