"use client";

import Image from "next/image";
import Link from "next/link";
import { Contact, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { business, images, services } from "@/lib/site";
import { DigitalContactCard } from "@/components/DigitalContactCard";

const nav = [
  { href: "/", label: "Accueil" },
  ...Object.values(services).map((service) => ({ href: `/${service.slug}`, label: service.nav })),
  { href: "/realisations", label: "Réalisations" },
  { href: "/zones-intervention", label: "Zones" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ivory/88 backdrop-blur-xl">
      <div className="container-wide flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Damien Mugnier - accueil">
          <Image
            src={images.logo as string}
            alt=""
            width={54}
            height={54}
            className="h-12 w-auto rounded bg-white p-1"
            priority
          />
          <span className="hidden font-display text-xl font-semibold text-navy sm:inline">
            Damien Mugnier
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/72 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setCardOpen((value) => !value)}
              className="icon-button"
              aria-label="Ouvrir la carte de contact numérique"
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
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-navy/92 md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden /> {business.phone}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="icon-button xl:hidden"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-concrete/40 bg-ivory xl:hidden">
          <nav className="container-wide grid gap-1 py-4" aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy/80 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <DigitalContactCard />
          </nav>
        </div>
      )}
    </header>
  );
}
