import type { MetadataRoute } from "next";
import { localProjects, services } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "a-propos",
    "contact",
    "realisations",
    "zones-intervention",
    "guide-devis-carrelage",
    "mentions-legales",
    "cgu",
    "cgv",
    "politique-confidentialite",
    "accessibilite",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
    })),
    ...Object.values(services).map((service) => ({
      url: absoluteUrl(service.slug),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...localProjects.map((project) => ({
      url: absoluteUrl(`/realisations/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
