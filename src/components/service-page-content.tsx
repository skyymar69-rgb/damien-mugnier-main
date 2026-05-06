import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services, serviceList, type ServiceSlug } from "@/lib/site";

const SITE_URL = "https://damienmugnier.fr";

function ServiceJsonLd({ slug }: { slug: ServiceSlug }) {
  const s = services[slug];
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/${slug}#service`,
      serviceType: s.nav,
      name: s.title,
      description: s.intro,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: ["Beauvallon", "Givors", "Brignais", "Mornant", "Lyon Sud", "Vienne"],
      url: `${SITE_URL}/${slug}`,
      image: s.image,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: s.nav, item: `${SITE_URL}/${slug}` },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServicePageContent({ slug }: { slug: ServiceSlug }) {
  const service = services[slug];

  return (
    <>
      <ServiceJsonLd slug={slug} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              {service.keyword}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-xl"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/10"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={service.image}
                alt={`${service.nav} réalisé par Damien Mugnier`}
                className="aspect-[4/5] w-full object-cover"
                width={800}
                height={1000}
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-[1fr_300px]">
          <article>
            <div className="rounded-2xl border border-accent/30 bg-card p-7 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Réponse directe
              </p>
              <p className="mt-3 text-lg leading-8 text-foreground/85">{service.definition}</p>
            </div>

            <h2 className="mt-12 font-display text-3xl md:text-4xl">
              {service.nav} dans le Sud-Ouest lyonnais : ce qui compte vraiment
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Le mot-clé principal de cette page est <strong className="text-foreground">{service.keyword}</strong>, mais le vrai sujet reste le chantier. Un projet premium ne se juge pas uniquement au prix du carrelage ou à la photo finale. Il se joue dans les arbitrages : faut-il déposer, ragréer, reprendre une pente, déplacer une coupe, cacher une trappe, protéger un seuil, vérifier une fissure ? Damien Mugnier construit son devis à partir de ces points concrets.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              La démarche est volontairement directe. Lors de la visite, les contraintes sont nommées tout de suite. Si un support n’est pas prêt, il le dit. Si un format XXL risque de créer des coupes mal placées, il propose un autre calepinage.
            </p>

            <h2 className="mt-12 font-display text-3xl md:text-4xl">Problèmes fréquents sur chantier</h2>
            <ul className="mt-5 space-y-3">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-3 leading-7 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl md:text-4xl">Solutions concrètes</h2>
            <ul className="mt-5 space-y-3">
              {service.solutions.map((s) => (
                <li key={s} className="flex gap-3 leading-7 text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl md:text-4xl">Anecdote chantier</h2>
            <p className="mt-5 leading-8 text-muted-foreground italic">{service.story}</p>

            <h2 className="mt-12 font-display text-3xl md:text-4xl">Variantes couvertes</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {service.variants.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/75"
                >
                  {v}
                </span>
              ))}
            </div>

            <h2 className="mt-14 font-display text-3xl md:text-4xl">Questions fréquentes</h2>
            <div className="mt-6 grid gap-4">
              {service.faq.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl text-foreground">{f.q}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-xl">Autres services</h2>
            <div className="mt-4 grid gap-3">
              {serviceList
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/75 hover:text-accent"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {s.nav}
                  </Link>
                ))}
              <Link
                to="/zones"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/75 hover:text-accent"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" /> Zones d'intervention
              </Link>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <a
                href="tel:+33628453288"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> 06 28 45 32 88
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-prose flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-3xl text-balance md:text-4xl">
            Vous cherchez {service.keyword} ?{" "}
            <span className="italic text-accent">Parlons du support avant de parler finition.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:shadow-xl"
          >
            Demander un devis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
