import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  Sparkles,
  Hammer,
  Home as HomeIcon,
} from "lucide-react";
import spaNuit from "@/assets/spa-nuit.webp";
import wcMarbre from "@/assets/wc-marbre-lion.webp";
import murPierre from "@/assets/mur-pierre.webp";
import marbreMur from "@/assets/marbre-mur.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damien Mugnier — Carreleur Maçon premium · Beauvallon 69700" },
      {
        name: "description",
        content:
          "Artisan carreleur, maçon et rénovation haut de gamme dans le Sud-Ouest Lyonnais. Carrelage grand format, marbre, pierre naturelle, terrasses. Devis gratuit.",
      },
      { property: "og:title", content: "Damien Mugnier — Artisan premium Sud-Ouest Lyonnais" },
      {
        property: "og:description",
        content:
          "Carrelage grand format, marbre, pierre naturelle, terrasses haut de gamme. Beauvallon, Givors, Brignais.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Sparkles,
    title: "Carrelage grand format",
    description:
      "Pose maîtrisée de dalles 60×120, 120×120 et 120×240 cm. Marbre, grès cérame effet pierre, finitions invisibles.",
  },
  {
    icon: Hammer,
    title: "Maçonnerie & pierre naturelle",
    description:
      "Murs en pierre, murets, terrasses, escaliers. Travail traditionnel pour un résultat authentique et durable.",
  },
  {
    icon: HomeIcon,
    title: "Rénovation complète",
    description:
      "Salles de bains, cuisines, espaces de vie. De la dépose à la finition, un seul interlocuteur.",
  },
];

const proofPoints = [
  "Assurance decennale",
  "SIREN 791 178 197",
  "Adresse a Beauvallon",
  "Devis detaille sous 48h",
];

const serviceAreas = [
  "Beauvallon",
  "Givors",
  "Brignais",
  "Mornant",
  "Chaponost",
  "Saint-Genis-Laval",
];

const faqs = [
  {
    q: "Intervenez-vous pour les petits chantiers ?",
    a: "Le site cible surtout les projets structurants : salle de bains complete, terrasse, plage de piscine, renovation ou carrelage grand format.",
  },
  {
    q: "Quels types de carrelage posez-vous ?",
    a: "Gres cerame, effet pierre, marbre, travertin et grands formats, avec calepinage precis et supports prepares pour durer.",
  },
  {
    q: "Dans quelles communes travaillez-vous ?",
    a: "Damien Mugnier intervient autour de Beauvallon, Givors, Brignais, Mornant, Chaponost et Saint-Genis-Laval.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="clip-premium relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${spaNuit})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.18 0.05 260 / 0.92), oklch(0.22 0.06 260 / 0.6))",
          }}
          aria-hidden
        />
        <div className="container-prose relative grid gap-12 py-24 md:grid-cols-12 md:py-32 lg:py-40">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              <Star className="h-3.5 w-3.5 fill-accent" /> Artisan d'exception · Sud-Ouest Lyonnais
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-7xl">
              L'art du carrelage <span className="italic text-accent">grand format</span> & de la
              pierre.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              Damien Mugnier conçoit et réalise des intérieurs et extérieurs haut de gamme : marbre,
              dalles XXL, terrasses, piscines, maçonnerie en pierre naturelle. Travail soigné,
              garantie décennale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-xl"
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+33628453288"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> 06 28 45 32 88
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/75">
              {[
                "Garantie décennale",
                "Devis sous 48h",
                "Chantiers 10k€ – 50k€",
                "Beauvallon · Givors · Brignais",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Savoir-faire
            </p>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
              Trois métiers, une exigence : la{" "}
              <em className="text-accent not-italic">finition parfaite</em>.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/60 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <Link
                  to="/services"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 hover:text-accent"
                >
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Nos réalisations
              </p>
              <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
                Des chantiers pensés comme des{" "}
                <em className="text-accent not-italic">pièces uniques</em>.
              </h2>
            </div>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              Voir toutes les réalisations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-12">
            <figure className="image-premium group relative md:col-span-7 md:row-span-2">
              <img
                src={spaNuit}
                alt="Spa extérieur sur terrasse bois exotique illuminée"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-primary-foreground">
                <p className="font-display text-2xl">Spa & terrasse bois exotique</p>
                <p className="text-sm text-primary-foreground/80">Mornant — 2025</p>
              </figcaption>
            </figure>
            <figure className="image-premium group relative md:col-span-5">
              <img
                src={wcMarbre}
                alt="Salle d'eau habillée de marbre noir et miroir doré"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-primary-foreground">
                <p className="font-display text-xl">Marbre noir veiné</p>
                <p className="text-xs text-primary-foreground/80">Brignais</p>
              </figcaption>
            </figure>
            <figure className="image-premium group relative md:col-span-5">
              <img
                src={murPierre}
                alt="Mur en pierre naturelle posé en opus incertum"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-primary-foreground">
                <p className="font-display text-xl">Pierre naturelle</p>
                <p className="text-xs text-primary-foreground/80">Givors</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid gap-12 md:grid-cols-2 md:items-center">
          <div className="image-premium relative">
            <img
              src={marbreMur}
              alt="Pose en cours de carrelage marbré grand format"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">La méthode</p>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
              Un accompagnement <em className="text-accent not-italic">sur-mesure</em> de A à Z.
            </h2>
            <ol className="mt-10 space-y-7">
              {[
                {
                  n: "01",
                  t: "Visite & écoute",
                  d: "Rendez-vous sur site, prise de cotes, conseils techniques et esthétiques.",
                },
                {
                  n: "02",
                  t: "Devis détaillé",
                  d: "Proposition claire, transparente et chiffrée sous 48h.",
                },
                {
                  n: "03",
                  t: "Réalisation soignée",
                  d: "Un seul interlocuteur, chantier propre, respect des délais.",
                },
                {
                  n: "04",
                  t: "Livraison & garantie",
                  d: "Réception minutieuse, garantie décennale, suivi long terme.",
                },
              ].map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-3xl text-accent">{s.n}</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LOCAL PROOF */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              SEO local & confiance
            </p>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
              Un artisan local pour des chantiers{" "}
              <em className="text-accent not-italic">hautement qualifiés</em>.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Base a Beauvallon, Damien Mugnier accompagne les particuliers du Sud-Ouest lyonnais
              sur des projets exigeants de carrelage interieur, terrasse, piscine, maconnerie et
              renovation complete.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {proofPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden />
                <p className="mt-4 font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-prose mt-12">
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                to="/zones"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                Carreleur {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Questions fréquentes
            </p>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
              Les réponses utiles avant un premier rendez-vous.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-xl text-foreground">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="container-prose flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-4xl text-balance md:text-5xl">
            Un projet en tête ? <span className="italic text-accent">Parlons-en.</span>
          </h2>
          <p className="max-w-xl text-primary-foreground/80">
            Devis gratuit sous 48h. Visite sur site offerte dans le Sud-Ouest lyonnais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:shadow-xl"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+33628453288"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> 06 28 45 32 88
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
