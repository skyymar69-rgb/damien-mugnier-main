import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";
import { serviceList, zones } from "@/lib/site";
import { DigitalCard } from "@/components/digital-card";

const mainNav = [
  { to: "/", label: "Accueil" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

type MegaKey = "services" | "zones" | null;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mega, setMega] = useState<MegaKey>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close mega menu on outside click + ESC
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMega(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMega(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div className="hidden border-b border-primary/10 bg-primary text-primary-foreground md:block">
        <div className="container-prose flex h-9 items-center justify-between text-xs">
          <span className="text-primary-foreground/80">
            387 route de Givors, 69700 Beauvallon · Lun-Ven 8h-18h
          </span>
          <span className="inline-flex items-center gap-4">
            <a
              href="mailto:damienmugnier@hotmail.fr"
              className="text-primary-foreground/80 transition-colors hover:text-accent"
            >
              damienmugnier@hotmail.fr
            </a>
            <a
              href="/damien-mugnier.vcf"
              download
              className="text-primary-foreground/80 transition-colors hover:text-accent"
            >
              Carte vCard
            </a>
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
              Devis 48h
            </span>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div ref={navRef} className="container-prose flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Damien Mugnier — Accueil">
            <img
              src={logo}
              alt="Damien Mugnier"
              className="h-12 w-auto"
              width={48}
              height={48}
              decoding="async"
            />
            <span className="hidden font-display text-xl font-semibold tracking-tight text-foreground sm:inline">
              Damien Mugnier
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground", "aria-current": "page" }}
            >
              Accueil
            </Link>

            {/* MEGA MENU SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setMega("services")}
              onMouseLeave={() => setMega(null)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={mega === "services"}
                onClick={() => setMega(mega === "services" ? null : "services")}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              >
                Services{" "}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    mega === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-1/2 top-full z-50 w-[820px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  mega === "services"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl">
                  <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-8 grid grid-cols-2 gap-1 p-6">
                      {serviceList.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          onClick={() => setMega(null)}
                          className="group/item flex gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                        >
                          <img
                            src={s.image}
                            alt=""
                            width={56}
                            height={56}
                            loading="lazy"
                            decoding="async"
                            className="h-14 w-14 shrink-0 rounded-md object-cover"
                          />
                          <div className="min-w-0">
                            <p className="font-display text-base font-semibold text-foreground group-hover/item:text-accent">
                              {s.nav}
                            </p>
                            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                              {s.keyword}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="col-span-4 bg-primary p-6 text-primary-foreground">
                      <p className="text-xs font-medium uppercase tracking-widest text-accent">
                        Guide gratuit
                      </p>
                      <p className="mt-3 font-display text-xl leading-tight">
                        Préparez votre devis en 7 points
                      </p>
                      <p className="mt-2 text-xs text-primary-foreground/75">
                        Checklist offerte avant tout chantier carrelage, terrasse ou piscine.
                      </p>
                      <Link
                        to="/guide-devis-carrelage"
                        onClick={() => setMega(null)}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:gap-2.5"
                      >
                        Lire la checklist <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MEGA MENU ZONES */}
            <div
              className="relative"
              onMouseEnter={() => setMega("zones")}
              onMouseLeave={() => setMega(null)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={mega === "zones"}
                onClick={() => setMega(mega === "zones" ? null : "zones")}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              >
                Zones{" "}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    mega === "zones" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  mega === "zones" ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-popover p-5 shadow-2xl">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    Sud-Ouest lyonnais
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-1.5">
                    {zones.map((z) => (
                      <Link
                        key={z}
                        to="/zones"
                        onClick={() => setMega(null)}
                        className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-accent"
                      >
                        {z}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/zones"
                    onClick={() => setMega(null)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 hover:text-accent"
                  >
                    Voir toutes les zones <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {mainNav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground", "aria-current": "page" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <DigitalCard />
            <a
              href="tel:+33628453288"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md md:inline-flex"
            >
              <Phone className="h-4 w-4" /> 06 28 45 32 88
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-border/60 bg-background lg:hidden">
            <nav className="container-prose flex flex-col gap-1 py-4">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeOptions={{ exact: true }}
                activeProps={{ "aria-current": "page" }}
              >
                Accueil
              </Link>

              <button
                type="button"
                onClick={() => setMobileServices((v) => !v)}
                aria-expanded={mobileServices}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-left text-base font-medium text-foreground/80 hover:bg-secondary"
              >
                Services{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServices && (
                <div className="ml-3 grid gap-1 border-l-2 border-accent/40 pl-3">
                  {serviceList.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-secondary hover:text-accent"
                    >
                      {s.nav}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/realisations"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ "aria-current": "page" }}
              >
                Réalisations
              </Link>
              <Link
                to="/zones"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ "aria-current": "page" }}
              >
                Zones d'intervention
              </Link>
              <Link
                to="/a-propos"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ "aria-current": "page" }}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ "aria-current": "page" }}
              >
                Contact
              </Link>
              <Link
                to="/guide-devis-carrelage"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
              >
                Checklist devis
              </Link>

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
    </>
  );
}
