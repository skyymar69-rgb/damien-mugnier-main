import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PremiumImage } from "@/components/PremiumImage";
import { localProjects, services } from "@/lib/site";

export function generateStaticParams() {
  return localProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = localProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.keyword} : ${project.text}`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = localProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const service = services[project.service];

  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
              {project.keyword}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/76">{project.text}</p>
          </div>
          <div className="md:col-span-5">
            <PremiumImage
              src={project.image}
              alt={project.title}
              priority
              className="min-h-[28rem]"
            />
          </div>
        </div>
      </section>
      <article className="container-wide prose-premium py-20">
        <h2>Contexte local à {project.city}</h2>
        <p>
          Cette page cible une intention précise : <strong>{project.keyword}</strong>. Elle ne se
          contente pas d’aligner des mots-clés. Elle explique pourquoi un chantier à {project.city}{" "}
          doit être pensé avec ses accès, ses supports, son exposition et son usage quotidien. Le
          travail de Damien Mugnier consiste à relier ces contraintes au bon choix de matériau et à
          une mise en œuvre durable.
        </p>
        <h2>Service associé : {service.nav}</h2>
        <p>{service.intro}</p>
        <p>
          Les variantes importantes pour ce type de demande sont : {service.variants.join(", ")}.
          Elles permettent de couvrir les recherches réelles des clients sans dupliquer les pages.
          Le contenu reste localisé, concret et relié aux pages services.
        </p>
        <Link href={`/${service.slug}`} className="btn-primary mt-6">
          Voir le service {service.nav}
        </Link>
      </article>
      <CTA
        title={`Un projet à ${project.city} ? Faites valider le support avant de choisir le revêtement.`}
      />
    </>
  );
}
