import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-auto rounded bg-background p-1.5" />
            <span className="font-display text-xl font-semibold">Damien Mugnier</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            Carreleur, macon et renovation haut de gamme. Specialiste carrelage grand format,
            marbre, pierre naturelle, terrasses et piscines dans le Sud-Ouest lyonnais.
          </p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-primary-foreground/60">
            MUGNIER Damien, entrepreneur individuel. SIREN 791 178 197 · SIRET 791 178 197 00020 ·
            TVA FR87791178197 · Code APE 43.99C. Assurance decennale disponible sur demande.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/realisations" className="hover:text-accent">
                Realisations
              </Link>
            </li>
            <li>
              <Link to="/zones" className="hover:text-accent">
                Zones d'intervention
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-accent">
                A propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Devis gratuit
              </Link>
            </li>
            <li>
              <a href="/vcard.vcf" download className="hover:text-accent">
                Ajouter aux contacts
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
              <a href="tel:+33628453288" className="hover:text-accent">
                06 28 45 32 88
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
              <a href="mailto:damienmugnier@hotmail.fr" className="hover:text-accent">
                damienmugnier@hotmail.fr
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
              <span>387 route de Givors, 69700 Beauvallon</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-prose grid gap-4 py-6 text-xs text-primary-foreground/60 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/mentions-legales" className="hover:text-accent">
              Mentions legales
            </Link>
            <Link to="/cgu" className="hover:text-accent">
              CGU
            </Link>
            <Link to="/cgv" className="hover:text-accent">
              CGV
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-accent">
              Confidentialite
            </Link>
            <Link to="/accessibilite" className="hover:text-accent">
              Accessibilite : partiellement conforme
            </Link>
          </div>
          <a
            href="https://internet.kayzen-lyon.fr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            Fierement realise par Kayzen Web <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Damien Mugnier - Tous droits reserves.</p>
          <p>Mediation consommation · RGPD · Cookies essentiels uniquement par defaut</p>
        </div>
      </div>
    </footer>
  );
}
