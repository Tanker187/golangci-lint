import { Terminal } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "https://golangci-lint.run/welcome/install/", label: "Install" },
    { href: "https://golangci-lint.run/usage/quick-start/", label: "Quick Start" },
    { href: "https://golangci-lint.run/usage/configuration/", label: "Configuration" },
    { href: "https://golangci-lint.run/usage/linters/", label: "Linters" },
  ],
  Resources: [
    { href: "https://golangci-lint.run/", label: "Documentation" },
    { href: "https://golangci-lint.run/welcome/faq/", label: "FAQ" },
    { href: "https://golangci-lint.run/contributing/workflow/", label: "Contributing" },
    { href: "https://github.com/golangci/golangci-lint/releases", label: "Changelog" },
  ],
  Community: [
    { href: "https://github.com/golangci/golangci-lint", label: "GitHub" },
    { href: "https://github.com/golangci/golangci-lint/discussions", label: "Discussions" },
    { href: "https://github.com/golangci/golangci-lint/issues", label: "Issues" },
    { href: "https://github.com/sponsors/golangci", label: "Sponsor" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-accent" />
              <span className="font-semibold">golangci-lint</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Fast linters runner for Go. Run 100+ linters in parallel with shared caching.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            Made with care by the{" "}
            <a
              href="https://github.com/golangci"
              className="text-foreground underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              golangci
            </a>{" "}
            team. Licensed under GPL-3.0.
          </p>
        </div>
      </div>
    </footer>
  );
}
