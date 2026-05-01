import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-gradient-warm grid place-items-center text-primary-foreground font-display text-lg shadow-soft">
            L
          </span>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-tight">Lundik</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Catering Limited
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm hover:bg-primary transition-colors"
          >
            Request a quote
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm"
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
