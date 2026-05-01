import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { business, images, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src={images.logo as string}
            alt=""
            width={64}
            height={64}
            className="h-14 w-auto rounded bg-white p-1.5"
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
            Damien Mugnier réalise des chantiers de carrelage grand format, maçonnerie, terrasses,
            piscines et rénovation complète dans le Sud-Ouest lyonnais. Un artisan local, un suivi
            direct, des finitions pensées pour durer.
          </p>
          <p className="mt-4 text-xs leading-6 text-white/55">
            SIREN {business.siren} · SIRET {business.siret} · TVA {business.vat} · Code APE{" "}
            {business.ape}. Assurance décennale disponible sur demande.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl text-gold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/74">
            {Object.values(services).map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="hover:text-gold">
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/74">
            <li>
              <a href={business.phoneHref} className="hover:text-gold">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-gold">
                {business.email}
              </a>
            </li>
            <li>{business.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col justify-between gap-4 py-6 text-xs text-white/55 lg:flex-row">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions légales
            </Link>
            <Link href="/cgu" className="hover:text-gold">
              CGU
            </Link>
            <Link href="/cgv" className="hover:text-gold">
              CGV
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-gold">
              Confidentialité
            </Link>
            <Link href="/accessibilite" className="hover:text-gold">
              Accessibilité
            </Link>
          </div>
          <a
            href="https://internet.kayzen-lyon.fr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold"
          >
            Fièrement réalisé par Kayzen Web <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
