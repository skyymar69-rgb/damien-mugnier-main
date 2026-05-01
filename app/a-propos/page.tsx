import type { Metadata } from "next";
import { Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PremiumImage } from "@/components/PremiumImage";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos - Damien Mugnier, artisan carreleur et maçon",
  description:
    "Découvrez l’approche chantier de Damien Mugnier : carrelage grand format, maçonnerie, rénovation premium à Beauvallon.",
};

const values = [
  [
    "Exigence",
    "Les détails sont traités avant qu’ils deviennent visibles : niveau, coupe, support, joint.",
  ],
  [
    "Décennale",
    "Les travaux sont pensés pour durer et l’attestation peut être transmise avant devis.",
  ],
  ["Matériaux nobles", "Grès cérame, pierre, marbre, travertin : le matériau doit servir l’usage."],
  ["Interlocuteur direct", "Le client parle avec l’artisan qui suit réellement le chantier."],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">À propos</p>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Un artisan local pour les chantiers où la finition ne pardonne pas.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/76">
              Damien Mugnier travaille comme carreleur et maçon à Beauvallon. Son positionnement est
              simple : accepter moins de chantiers, mais les suivre avec précision. Les clients
              viennent pour un rendu premium ; ils restent rassurés par la méthode, la clarté du
              devis et la propreté des finitions.
            </p>
          </div>
          <div className="md:col-span-5">
            <PremiumImage
              src={images.mur as string}
              alt="Mur en pierre naturelle réalisé par Damien Mugnier"
              priority
              className="min-h-[28rem]"
            />
          </div>
        </div>
      </section>
      <section className="container-wide py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {values.map(([title, text], index) => {
            const Icon = [Award, ShieldCheck, Sparkles, Users][index];
            return (
              <article
                key={title}
                className="rounded-2xl border border-concrete/60 bg-white p-7 shadow-sm"
              >
                <Icon className="h-6 w-6 text-gold" />
                <h2 className="mt-5 font-display text-2xl">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-navy/68">{text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
