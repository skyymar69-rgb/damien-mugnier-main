import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Menu, X, Contact } from "lucide-react";
import logo from "@/assets/logo.webp";
import { DigitalContactCard } from "@/components/digital-contact-card";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/zones", label: "Zones d'intervention" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Damien Mugnier — Accueil">
          <img src={logo} alt="Damien Mugnier" className="h-12 w-auto" width={48} height={48} />
          <span className="hidden font-display text-xl font-semibold tracking-tight text-foreground sm:inline">
            Damien Mugnier
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setCardOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:border-accent hover:text-accent"
              aria-label="Ouvrir la carte de contact numerique"
              aria-expanded={cardOpen}
            >
              <Contact className="h-4 w-4" aria-hidden />
            </button>
            {cardOpen && (
              <div className="absolute right-0 top-14 w-80">
                <DigitalContactCard />
              </div>
            )}
          </div>
          <a
            href="tel:+33628453288"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md md:inline-flex"
          >
            <Phone className="h-4 w-4" /> 06 28 45 32 88
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="container-prose flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3">
              <DigitalContactCard />
            </div>
            <a
              href="tel:+33628453288"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> 06 28 45 32 88
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
