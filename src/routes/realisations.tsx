import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import spaNuit from "@/assets/spa-nuit.webp";
import wcMarbre from "@/assets/wc-marbre-lion.webp";
import murPierre from "@/assets/mur-pierre.webp";
import marbreSol from "@/assets/marbre-sol.webp";
import marbreMur from "@/assets/marbre-mur.webp";
import piscine from "@/assets/piscine.webp";
import terrasseBois from "@/assets/terrasse-bois.webp";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Carrelage marbre, pierre & terrasses · Damien Mugnier" },
      {
        name: "description",
        content:
          "Découvrez nos chantiers haut de gamme : marbre, carrelage grand format, terrasses bois, plages de piscine, murs en pierre naturelle.",
      },
      { property: "og:title", content: "Réalisations — Damien Mugnier" },
      {
        property: "og:description",
        content:
          "Galerie de chantiers premium : marbre, carrelage XXL, terrasses, pierre naturelle.",
      },
      { property: "og:image", content: spaNuit },
    ],
  }),
  component: RealisationsPage,
});

const projects = [
  { img: spaNuit, title: "Spa & terrasse bois exotique", place: "Mornant", tag: "Extérieur" },
  { img: wcMarbre, title: "Habillage marbre noir veiné", place: "Brignais", tag: "Marbre" },
  { img: murPierre, title: "Mur en pierre naturelle", place: "Givors", tag: "Maçonnerie" },
  { img: marbreSol, title: "Carrelage marbré XXL", place: "Beauvallon", tag: "Grand format" },
  { img: marbreMur, title: "Mur d'apparat marbre", place: "Lyon Sud", tag: "Marbre" },
  { img: piscine, title: "Plage de piscine pierre", place: "Vienne", tag: "Extérieur" },
  { img: terrasseBois, title: "Terrasse grand format", place: "Beauvallon", tag: "Extérieur" },
];

function RealisationsPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Portfolio</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-balance md:text-6xl">
            Quelques <em className="text-accent not-italic">réalisations récentes</em>.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose columns-1 gap-5 sm:columns-2 lg:columns-3">
          {projects.map((p, i) => (
            <figure key={i} className="image-premium group relative mb-5 break-inside-avoid">
              <img
                src={p.img}
                alt={p.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-primary-foreground">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {p.tag}
                </span>
                <p className="mt-1 font-display text-xl">{p.title}</p>
                <p className="text-xs text-primary-foreground/80">{p.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="container-prose mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:shadow-xl"
          >
            Démarrer mon projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
