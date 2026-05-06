import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, Phone } from "lucide-react";
import { serviceList, business } from "@/lib/site";

const checklist = [
  "Photographier le sol ou le mur de près et avec du recul, y compris les angles et seuils.",
  "Mesurer la surface approximative et noter les hauteurs disponibles sous portes et baies vitrées.",
  "Repérer fissures, carreaux creux, humidité, pente, évacuation ou ancien revêtement instable.",
  "Lister l'usage réel : enfants, piscine, chaussures, entretien, gel, exposition plein sud.",
  "Préparer les inspirations mais accepter un calepinage adapté au chantier, pas seulement à la photo.",
  "Donner une fourchette de budget pour cadrer tout de suite matériau, préparation et niveau de finition.",
  "Clarifier le délai souhaité et les contraintes d'accès, stationnement, voisinage ou copropriété.",
];

export const Route = createFileRoute("/guide-devis-carrelage")({
  head: () => ({
    meta: [
      { title: "Checklist devis carrelage — Damien Mugnier" },
      {
        name: "description",
        content:
          "Checklist gratuite avant devis : photos, mesures, support, accès, budget et questions à préparer pour un projet carrelage, terrasse ou piscine.",
      },
      { property: "og:title", content: "Checklist devis carrelage — Damien Mugnier" },
      {
        property: "og:description",
        content:
          "Checklist gratuite avant devis : photos, mesures, support, accès, budget et questions à préparer.",
      },
    ],
    links: [{ rel: "canonical", href: "https://damienmugnier.fr/guide-devis-carrelage" }],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="container-prose">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Guide gratuit</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
            Checklist avant devis carrelage, terrasse ou piscine.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/80">
            Cette checklist aide à préparer un premier échange utile avec Damien Mugnier. Elle évite
            les devis flous, les oublis de support et les mauvaises surprises au démarrage du chantier.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-display text-3xl md:text-4xl">Les 7 points à préparer</h2>
            <div className="mt-8 grid gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-secondary/50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="leading-7 text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-primary p-6 text-primary-foreground">
              <h3 className="font-display text-2xl">Phrase utile à envoyer avec vos photos</h3>
              <p className="mt-3 leading-7 text-primary-foreground/85 italic">
                « Bonjour Damien, voici les photos du support, la commune, la surface estimée et le
                type de finition souhaité. Pouvez-vous me dire si le projet mérite une visite
                technique ? »
              </p>
            </div>
          </article>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-xl">Passer à l'action</h2>
            <div className="mt-5 grid gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                <Download className="h-4 w-4" /> Demander un devis
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </div>
            <h3 className="mt-8 font-display text-lg">Pages utiles</h3>
            <div className="mt-4 grid gap-2 text-sm">
              {serviceList.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="font-medium text-foreground/75 hover:text-accent"
                >
                  {s.nav}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
