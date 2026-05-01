import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/zones")({
  head: () => ({
    meta: [
      { title: "Zones d'intervention — Beauvallon, Givors, Brignais · Damien Mugnier" },
      {
        name: "description",
        content:
          "Carreleur, maçon et rénovation à Beauvallon, Givors, Brignais, Mornant, Vienne et Lyon Sud. Devis gratuit sur tout le Sud-Ouest lyonnais.",
      },
      { property: "og:title", content: "Zones d'intervention — Sud-Ouest Lyonnais" },
      {
        property: "og:description",
        content: "Beauvallon, Givors, Brignais, Mornant, Vienne, Lyon Sud.",
      },
    ],
  }),
  component: ZonesPage,
});

const zones = [
  {
    city: "Beauvallon",
    cp: "69700",
    desc: "Notre commune historique. Interventions prioritaires et rapides.",
  },
  { city: "Givors", cp: "69700", desc: "Rénovations complètes, salles de bains, terrasses." },
  { city: "Brignais", cp: "69530", desc: "Villas haut de gamme, marbre, pierre naturelle." },
  {
    city: "Mornant",
    cp: "69440",
    desc: "Maisons de caractère, plages de piscine, terrasses bois.",
  },
  { city: "Vienne", cp: "38200", desc: "Carrelage grand format, façades pierre, escaliers." },
  {
    city: "Lyon Sud",
    cp: "69",
    desc: "Appartements et hôtels particuliers, finitions exigeantes.",
  },
];

function ZonesPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Zones d'intervention
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-balance md:text-6xl">
            Présent dans tout le <em className="text-accent not-italic">Sud-Ouest Lyonnais</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Basé à Beauvallon (69700), nous intervenons dans un rayon de 40 km autour de Lyon Sud
            pour des projets résidentiels haut de gamme.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <article
              key={z.city}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/60 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="font-display text-xl text-foreground">{z.city}</h2>
                  <p className="text-xs text-muted-foreground">{z.cp}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{z.desc}</p>
            </article>
          ))}
        </div>
        <div className="container-prose mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:shadow-xl"
          >
            Vérifier ma zone & demander un devis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
