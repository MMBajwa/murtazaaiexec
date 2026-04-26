import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/expertise", label: "Expertise" },
  { to: "/seo-map", label: "SEO Map" },
  { to: "/contact", label: "Contact" },
] as const;

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <div className="executive-shell text-foreground">
      <header className="sticky top-0 z-50 border-b glass-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="group flex items-center gap-3" aria-label="Murtaza AI Works home">
            <span className="flex h-10 w-10 items-center justify-center rounded-md ink-panel font-display text-sm font-bold transition-transform group-hover:-rotate-3">
              MB
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-base font-bold leading-none">Murtaza AI Works</span>
              <span className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">AI systems · Web delivery</span>
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-sm font-bold text-muted-foreground sm:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="premium-link transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t bg-background/70 px-5 py-8 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Murtaza AI Works. Built for search, proof, and client trust.</p>
          <div className="flex gap-4 font-semibold">
            <a className="transition-colors hover:text-foreground" href="mailto:murtazababer672@gmail.com">Email</a>
            <a className="transition-colors hover:text-foreground" href="https://github.com/Murtazas2d6q">GitHub</a>
            <a className="transition-colors hover:text-foreground" href="/Murtaza_CV_v2.docx">CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
