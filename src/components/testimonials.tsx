import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie L.",
    city: "Brignais",
    text: "Damien a transformé notre salle d'eau en marbre noir. Travail d'orfèvre, lignes parfaites, conseils précieux sur le calepinage. On recommande sans hésiter.",
  },
  {
    name: "Julien M.",
    city: "Mornant",
    text: "Plage de spa et terrasse bois exotique. Pentes reprises, finitions impeccables, chantier propre du début à la fin. Devis tenu au centime.",
  },
  {
    name: "Camille R.",
    city: "Givors",
    text: "Carrelage 120x120 effet pierre dans tout le séjour. Aucune coupe gênante, joints quasi invisibles. Vrai professionnel haut de gamme.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Avis clients</p>
          <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
            Ce que disent les <em className="not-italic text-accent">propriétaires</em> du Sud-Ouest lyonnais.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="hover-lift flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/85">"{r.text}"</blockquote>
              <figcaption className="mt-auto text-sm font-medium text-muted-foreground">
                {r.name} <span className="text-accent">·</span> {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
