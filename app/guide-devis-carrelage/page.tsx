import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { business, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checklist devis carrelage : préparer un chantier sans mauvaise surprise",
  description:
    "Checklist gratuite avant devis : photos, mesures, support, accès, budget et questions à préparer pour un projet carrelage, terrasse ou piscine.",
};

const checklist = [
  "Photographier le sol ou le mur de près et avec du recul, y compris les angles et seuils.",
  "Mesurer la surface approximative et noter les hauteurs disponibles sous portes et baies vitrées.",
  "Repérer fissures, carreaux creux, humidité, pente, évacuation ou ancien revêtement instable.",
  "Lister l’usage réel : enfants, piscine, chaussures, entretien, gel, exposition plein sud.",
  "Préparer les inspirations mais accepter un calepinage adapté au chantier, pas seulement à la photo.",
  "Donner une fourchette de budget pour cadrer tout de suite matériau, préparation et niveau de finition.",
  "Clarifier le délai souhaité et les contraintes d’accès, stationnement, voisinage ou copropriété.",
];

export default function GuidePage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Lead magnet</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
            Checklist avant devis carrelage, terrasse ou piscine.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Cette checklist aide à préparer un premier échange utile avec Damien Mugnier. Elle évite
            les devis flous, les oublis de support et les mauvaises surprises au démarrage du
            chantier.
          </p>
        </div>
      </section>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Checklist devis", href: "/guide-devis-carrelage" },
        ]}
      />
      <section className="container-wide grid gap-10 py-20 lg:grid-cols-[1fr_320px]">
        <article className="rounded-3xl border border-concrete/60 bg-white p-8 shadow-premium">
          <h2 className="font-display text-4xl">Les 7 points à préparer</h2>
          <div className="mt-8 grid gap-4">
            {checklist.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl bg-ivory p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <p className="leading-7 text-navy/72">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
            <h3 className="font-display text-2xl">Phrase utile à envoyer avec vos photos</h3>
            <p className="mt-3 leading-7 text-white/75">
              “Bonjour Damien, voici les photos du support, la commune, la surface estimée et le
              type de finition souhaité. Pouvez-vous me dire si le projet mérite une visite
              technique ?”
            </p>
          </div>
        </article>
        <aside className="h-fit rounded-2xl border border-concrete/60 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <h2 className="font-display text-2xl">Passer à l’action</h2>
          <div className="mt-5 grid gap-3">
            <Link href="/contact" className="btn-primary">
              <Download className="h-4 w-4" aria-hidden /> Demander un devis
            </Link>
            <a href={business.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden /> {business.phone}
            </a>
          </div>
          <h3 className="mt-8 font-display text-xl">Pages utiles</h3>
          <div className="mt-4 grid gap-2 text-sm font-bold">
            {Object.values(services).map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="text-navy/70 hover:text-gold"
              >
                {service.nav}
              </Link>
            ))}
          </div>
        </aside>
      </section>
      <CTA title="Vous avez les photos ? Envoyez-les avec la checklist, le devis sera plus précis." />
    </>
  );
}
