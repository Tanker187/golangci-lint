import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Linters", href: "#linters" },
    { name: "Changelog", href: "https://github.com/golangci/golangci-lint/releases" },
  ],
  resources: [
    { name: "Documentation", href: "https://golangci-lint.run" },
    { name: "Installation", href: "https://golangci-lint.run/welcome/install/" },
    { name: "Configuration", href: "https://golangci-lint.run/usage/configuration/" },
  ],
  community: [
    { name: "GitHub", href: "https://github.com/golangci/golangci-lint" },
    { name: "Issues", href: "https://github.com/golangci/golangci-lint/issues" },
    { name: "Discussions", href: "https://github.com/golangci/golangci-lint/discussions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">G</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">golangci-lint</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Fast Go linters aggregator. Run 100+ linters in parallel.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/golangci/golangci-lint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/golaboratories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Community</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            Open source under the GPL-3.0 license. Maintained by the golangci team.
          </p>
        </div>
      </div>
    </footer>
  );
}
