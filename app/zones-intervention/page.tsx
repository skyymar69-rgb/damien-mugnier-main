import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CTA } from "@/components/CTA";
import { services, zones } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zones d’intervention - Carreleur Beauvallon, Givors, Brignais",
  description:
    "Damien Mugnier intervient à Beauvallon, Givors, Brignais, Mornant, Chaponost et Saint-Genis-Laval pour carrelage, terrasse, piscine et rénovation.",
};

export default function ZonesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">SEO local</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
            Carreleur et maçon dans le Sud-Ouest lyonnais.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Basé à Beauvallon, Damien Mugnier intervient sur les communes proches pour éviter les
            chantiers impersonnels. La proximité permet de passer voir un support, contrôler un
            détail et tenir un suivi direct.
          </p>
        </div>
      </section>
      <section className="container-wide py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {zones.map((zone) => (
            <article
              key={zone}
              className="rounded-2xl border border-concrete/60 bg-white p-7 shadow-sm"
            >
              <MapPin className="h-6 w-6 text-gold" />
              <h2 className="mt-4 font-display text-3xl">Carreleur {zone}</h2>
              <p className="mt-3 leading-7 text-navy/70">
                Intervention pour carrelage intérieur, terrasse, plage piscine, maçonnerie et
                rénovation. Chaque demande est reliée au bon service selon le support, l’usage et le
                budget.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {Object.values(services)
                  .slice(0, 3)
                  .map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="rounded-full bg-ivory px-3 py-1.5 text-xs font-bold text-navy/70 hover:text-gold"
                    >
                      {service.nav}
                    </Link>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
