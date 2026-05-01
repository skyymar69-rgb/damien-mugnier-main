import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import marbreSol from "@/assets/marbre-sol.webp";
import murPierre from "@/assets/mur-pierre.webp";
import piscine from "@/assets/piscine.webp";
import terrasseBois from "@/assets/terrasse-bois.webp";
import wcMarbre from "@/assets/wc-marbre-lion.webp";
import marbreMur from "@/assets/marbre-mur.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Carrelage, Maçonnerie & Rénovation premium · Damien Mugnier" },
      {
        name: "description",
        content:
          "Carrelage grand format, marbre, pierre naturelle, terrasses, salles de bains, rénovation complète. Artisan haut de gamme dans le Sud-Ouest Lyonnais.",
      },
      { property: "og:title", content: "Services premium — Damien Mugnier" },
      {
        property: "og:description",
        content: "Carrelage grand format, marbre, pierre naturelle, terrasses & rénovation.",
      },
    ],
  }),
  component: ServicesPage,
});

const offers = [
  {
    title: "Carrelage grand format",
    image: marbreSol,
    desc: "Pose technique de dalles 60×120 à 120×240 cm. Marbre, grès cérame, effet pierre. Joints minimaux et planéité parfaite.",
    points: ["Dalles XXL jusqu'à 240 cm", "Pose collée double encollage", "Joints 1 à 2 mm"],
  },
  {
    title: "Marbre & pierres précieuses",
    image: wcMarbre,
    desc: "Mise en œuvre de marbre, travertin, onyx pour pièces d'eau et habillages muraux d'exception.",
    points: ["Calepinage sur-mesure", "Raccords veines maîtrisés", "Finitions polies, brossées"],
  },
  {
    title: "Maçonnerie pierre naturelle",
    image: murPierre,
    desc: "Murs, murets, façades en pierre naturelle posée en opus incertum. Savoir-faire traditionnel.",
    points: ["Pierre locale et nobles", "Parement intérieur/extérieur", "Joints à la chaux"],
  },
  {
    title: "Terrasses & extérieurs",
    image: terrasseBois,
    desc: "Carrelage extérieur grand format, terrasses bois exotique, dallages sur plots, escaliers.",
    points: ["Antidérapant R11", "Pose sur plots ou collée", "Évacuation eau optimisée"],
  },
  {
    title: "Plages de piscine",
    image: piscine,
    desc: "Margelles, plages et abords de piscine en pierre reconstituée, travertin ou grès cérame.",
    points: ["Pierre antidérapante", "Pose niveau zéro", "Étanchéité périphérique"],
  },
  {
    title: "Salles de bains & rénovation",
    image: marbreMur,
    desc: "Rénovation complète : dépose, plomberie, électricité, carrelage, finitions. Un seul interlocuteur.",
    points: ["Coordination tous corps d'état", "Délais respectés", "Garantie décennale"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Nos services</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-balance md:text-6xl">
            Six expertises au service de vos projets{" "}
            <em className="text-accent not-italic">d'exception</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            De la salle de bains en marbre au mur en pierre naturelle, chaque chantier est mené avec
            la même exigence.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose grid gap-10 md:grid-cols-2">
          {offers.map((o) => (
            <article
              key={o.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
            >
              <div className="image-premium aspect-[4/3]">
                <img
                  src={o.image}
                  alt={o.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl text-foreground">{o.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{o.desc}</p>
                <ul className="mt-5 space-y-2">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="container-prose mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:shadow-xl"
          >
            Décrire mon projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
