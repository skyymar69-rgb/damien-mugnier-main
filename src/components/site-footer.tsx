import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";
import { serviceList } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-12 w-auto rounded bg-background p-1.5"
            />
            <span className="font-display text-xl font-semibold">Damien Mugnier</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            Carreleur · Maçon · Rénovation haut de gamme. Spécialiste carrelage grand format,
            marbre, pierre naturelle et terrasses premium dans le Sud-Ouest Lyonnais.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-lg text-accent">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-accent">
                  {s.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-lg text-accent">Site</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/realisations" className="hover:text-accent">Réalisations</Link></li>
            <li><Link to="/zones" className="hover:text-accent">Zones</Link></li>
            <li><Link to="/a-propos" className="hover:text-accent">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Devis</Link></li>
            <li><Link to="/guide-devis-carrelage" className="hover:text-accent">Checklist</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-lg text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <a href="tel:+33628453288" className="hover:text-accent">06 28 45 32 88</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <a href="mailto:damienmugnier@hotmail.fr" className="hover:text-accent break-all">
                damienmugnier@hotmail.fr
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>387 route de Givors<br />69700 Beauvallon</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Damien Mugnier — Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1" aria-label="Liens légaux">
            <Link to="/mentions-legales" className="hover:text-accent">Mentions légales</Link>
            <Link to="/cgu" className="hover:text-accent">CGU</Link>
            <Link to="/cgv" className="hover:text-accent">CGV</Link>
            <Link to="/politique-confidentialite" className="hover:text-accent">Confidentialité</Link>
            <Link to="/accessibilite" className="hover:text-accent">Accessibilité</Link>
          </nav>
        </div>
        <div className="container-prose pb-6 text-center text-[11px] text-primary-foreground/50">
          Fièrement réalisé par{" "}
          <a
            href="https://internet.kayzen-lyon.fr"
            target="_blank"
            rel="noopener"
            className="font-semibold text-accent hover:underline"
          >
            Kayzen Web
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
