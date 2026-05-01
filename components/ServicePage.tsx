import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PremiumImage } from "@/components/PremiumImage";
import { localProjects, services, type ServiceSlug } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadMagnet } from "@/components/LeadMagnet";
import { faqSchema, serviceSchema } from "@/lib/seo";

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const service = services[slug];
  return {
    title: service.title,
    description: `${service.keyword} : ${service.intro.slice(0, 145)}`,
  };
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services[slug];
  const relatedProjects = localProjects.filter(
    (project) => project.service === slug || localProjects.indexOf(project) < 2,
  );

  return (
    <>
      <JsonLd data={[serviceSchema(slug), faqSchema(service.faq)]} />
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
              {service.keyword}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/78">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/realisations" className="btn-outline-light">
                Voir les réalisations
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <PremiumImage
              src={service.image}
              alt={`${service.nav} réalisé par Damien Mugnier`}
              priority
              className="min-h-[28rem]"
            />
          </div>
        </div>
      </section>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: service.nav, href: `/${service.slug}` },
        ]}
      />

      <article className="container-wide prose-premium py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="rounded-2xl border border-gold/35 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">
                Réponse directe
              </p>
              <p className="mt-3 text-lg leading-8 text-navy/78">{service.definition}</p>
            </div>
            <h2>{service.nav} dans le Sud-Ouest lyonnais : ce qui compte vraiment</h2>
            <p>
              Le mot-clé principal de cette page est <strong>{service.keyword}</strong>, mais le
              vrai sujet reste le chantier. Un projet premium ne se juge pas uniquement au prix du
              carrelage ou à la photo finale. Il se joue dans les arbitrages : faut-il déposer,
              ragréer, reprendre une pente, déplacer une coupe, cacher une trappe, protéger un
              seuil, vérifier une fissure ? Damien Mugnier construit son devis à partir de ces
              points concrets.
            </p>
            <p>
              La démarche est volontairement directe. Lors de la visite, les contraintes sont
              nommées tout de suite. Si un support n’est pas prêt, il le dit. Si un format XXL
              risque de créer des coupes mal placées, il propose un autre calepinage. Si une
              terrasse prend l’eau, le revêtement ne sera pas changé avant d’avoir parlé pente et
              évacuation. C’est ce niveau d’exigence qui attire les clients recherchant une
              rénovation durable plutôt qu’un chantier simplement décoratif.
            </p>

            <h2>Problèmes fréquents rencontrés sur chantier</h2>
            <ul>
              {service.problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Solutions concrètes apportées par Damien Mugnier</h2>
            <ul>
              {service.solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Anecdote chantier</h2>
            <p>{service.story}</p>

            <h2>Variantes sémantiques couvertes</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {service.variants.map((variant) => (
                <span
                  key={variant}
                  className="rounded-full border border-concrete/70 bg-white px-4 py-2 text-sm font-semibold text-navy/74"
                >
                  {variant}
                </span>
              ))}
            </div>

            <h2>Questions fréquentes</h2>
            <div className="mt-6 grid gap-4">
              {service.faq.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-concrete/60 bg-white p-6">
                  <h3 className="font-display text-2xl">{faq.q}</h3>
                  <p className="mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-concrete/60 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="font-display text-2xl">Liens utiles</h2>
            <div className="mt-5 grid gap-3">
              {Object.values(services).map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy/76 hover:text-gold"
                >
                  <CheckCircle2 className="h-4 w-4" /> {item.nav}
                </Link>
              ))}
              <Link
                href="/zones-intervention"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy/76 hover:text-gold"
              >
                <CheckCircle2 className="h-4 w-4" /> Zones d’intervention
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-white py-20">
        <div className="container-wide">
          <h2 className="font-display text-4xl">Réalisations et pages locales liées</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedProjects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/realisations/${project.slug}`}
                className="rounded-2xl border border-concrete/60 bg-ivory p-5 transition hover:-translate-y-1 hover:shadow-premium"
              >
                <PremiumImage src={project.image} alt={project.title} className="min-h-56" />
                <h3 className="mt-5 font-display text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/68">{project.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />
      <CTA
        title={`Vous cherchez ${service.keyword} ? Parlons du support avant de parler finition.`}
      />
    </>
  );
}
