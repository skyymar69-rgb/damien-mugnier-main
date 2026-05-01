import type { Metadata } from "next";
import Link from "next/link";
import { localProjects } from "@/lib/site";
import { PremiumImage } from "@/components/PremiumImage";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Réalisations carrelage, terrasse et piscine dans le Sud-Ouest lyonnais",
  description:
    "Pages réalisations SEO localisées : carreleur Beauvallon, terrasse Givors, plage piscine Brignais.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
            Réalisations SEO
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
            Chantiers localisés : carrelage, terrasse et piscine.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Chaque réalisation raconte un contexte différent : support ancien à Beauvallon, terrasse
            à reprendre à Givors, plage piscine premium à Brignais. Ces pages renforcent le
            référencement local tout en montrant la logique chantier.
          </p>
        </div>
      </section>
      <section className="container-wide grid gap-6 py-20 md:grid-cols-3">
        {localProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/realisations/${project.slug}`}
            className="rounded-2xl border border-concrete/60 bg-white p-5 transition hover:-translate-y-1 hover:shadow-premium"
          >
            <PremiumImage src={project.image} alt={project.title} className="min-h-72" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {project.keyword}
            </p>
            <h2 className="mt-2 font-display text-2xl">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-navy/68">{project.text}</p>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
