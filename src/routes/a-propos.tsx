import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import murPierre from "@/assets/mur-pierre.webp";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Damien Mugnier, artisan carreleur & maçon" },
      {
        name: "description",
        content:
          "Artisan passionné basé à Beauvallon, Damien Mugnier met son savoir-faire au service de chantiers haut de gamme : carrelage grand format, marbre, pierre.",
      },
      { property: "og:title", content: "À propos — Damien Mugnier" },
      {
        property: "og:description",
        content: "Artisan passionné, exigeant, garant d'un travail soigné et durable.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Award,
    title: "Exigence",
    text: "Chaque détail compte. La qualité prime sur la quantité.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie décennale",
    text: "Vous êtes protégés. Nos chantiers sont assurés.",
  },
  {
    icon: Sparkles,
    title: "Matériaux nobles",
    text: "Marbre, pierre, grès cérame haut de gamme uniquement.",
  },
  {
    icon: Users,
    title: "Un interlocuteur unique",
    text: "Damien suit personnellement chaque projet, du devis à la livraison.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Notre histoire
            </p>
            <h1 className="mt-4 font-display text-5xl text-balance md:text-6xl">
              L'artisanat <em className="text-accent not-italic">comme un art</em>.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85">
              Carreleur et maçon de formation, Damien Mugnier s'est spécialisé dans le carrelage
              grand format, le marbre et la pierre naturelle. Basé à Beauvallon (69700), il
              accompagne particuliers et architectes du Sud-Ouest lyonnais sur des projets
              exigeants.
            </p>
          </div>
          <div className="image-premium">
            <img
              src={murPierre}
              alt="Mur en pierre naturelle posé à la main"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose">
          <h2 className="max-w-2xl font-display text-4xl text-balance md:text-5xl">
            Quatre engagements <em className="text-accent not-italic">non négociables</em>.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
