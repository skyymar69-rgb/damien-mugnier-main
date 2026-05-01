import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Hammer, MapPin, Phone, Star } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PremiumImage } from "@/components/PremiumImage";
import { business, images, localProjects, services, zones } from "@/lib/site";
import { LeadMagnet } from "@/components/LeadMagnet";

export default function HomePage() {
  return (
    <>
      <section className="clip-premium relative overflow-hidden bg-navy text-white">
        <Image
          src={images.hero as string}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/86 to-navy/45" />
        <div className="container-wide relative grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Artisan haut de gamme à Beauvallon
            </p>
            <h1 className="mt-7 max-w-5xl font-display text-5xl font-semibold leading-[1.04] md:text-7xl">
              Carreleur à Beauvallon pour terrasses, piscines et rénovations exigeantes.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Damien Mugnier intervient dans le Sud-Ouest lyonnais pour les projets où le détail
              compte : carrelage grand format, maçonnerie de support, plage piscine, spa, terrasse
              et rénovation complète. L’objectif n’est pas de poser vite. L’objectif est de livrer
              un chantier propre, stable et beau dans dix ans.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={business.phoneHref} className="btn-outline-light">
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-white/72 sm:grid-cols-2 lg:grid-cols-4">
              {["Devis clair", "Décennale", "Projets 10k€ à 50k€", "Beauvallon + Lyon Sud"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" /> {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
              Funnel chantier
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Un site premium, mais surtout une promesse terrain : pas de finition sans support
              sain.
            </h2>
            <p className="mt-5 leading-8 text-navy/72">
              Les clients arrivent souvent avec une photo d’inspiration. Damien commence par
              regarder ce qu’on ne voit pas : pente, planéité, humidité, hauteur de seuil,
              évacuation, fissure, ancien carrelage. C’est cette méthode qui évite les reprises et
              qui transforme un beau matériau en vrai chantier haut de gamme.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {Object.values(services)
              .slice(0, 3)
              .map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group rounded-2xl border border-concrete/60 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-premium"
                >
                  <Hammer className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 font-display text-2xl">{service.nav}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/68">
                    {service.intro.slice(0, 210)}...
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold">
                    Lire la page service <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-wide grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
              Réalisations locales
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Des pages SEO qui parlent de vrais contextes locaux.
            </h2>
            <p className="mt-5 leading-8 text-navy/72">
              Beauvallon, Givors, Brignais : les maisons, les accès et les usages ne sont pas les
              mêmes. Le site relie chaque service aux zones et aux réalisations pour capter une
              intention locale, puis rassurer avec du concret.
            </p>
          </div>
          <div className="grid gap-5 md:col-span-7">
            {localProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/realisations/${project.slug}`}
                className="grid gap-5 rounded-2xl border border-concrete/60 bg-ivory p-4 transition hover:-translate-y-1 hover:shadow-premium sm:grid-cols-[180px_1fr]"
              >
                <PremiumImage src={project.image} alt={project.title} className="min-h-44" />
                <div className="p-2">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    <MapPin className="h-3.5 w-3.5" /> {project.city}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/68">{project.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
                Preuve sociale
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                La confiance se gagne avant le devis, puis se confirme sur chantier.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Ponctualité", "Chantier propre", "Finitions nettes"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                  <Star className="h-5 w-5 fill-gold text-gold" />
                  <p className="mt-4 font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {zones.map((zone) => (
              <Link
                key={zone}
                href="/zones-intervention"
                className="rounded-full border border-concrete/60 bg-white px-4 py-2 text-sm font-semibold text-navy/76 hover:border-gold hover:text-gold"
              >
                Carreleur {zone}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />
      <CTA />
    </>
  );
}
