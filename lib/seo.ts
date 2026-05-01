import { business, localProjects, services, zones, type ServiceSlug } from "@/lib/site";

export const baseUrl = "https://damien-mugnier-main.vercel.app";

export function absoluteUrl(path = "/") {
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: business.name,
    description:
      "Damien Mugnier est un artisan carreleur et maçon à Beauvallon, spécialisé en carrelage grand format, terrasse, piscine, spa et rénovation premium dans le Sud-Ouest lyonnais.",
    url: baseUrl,
    telephone: "+33628453288",
    email: business.email,
    priceRange: "€€€",
    taxID: business.siren,
    vatID: business.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: "387 route de Givors",
      addressLocality: "Beauvallon",
      postalCode: "69700",
      addressCountry: "FR",
    },
    areaServed: zones,
    makesOffer: Object.values(services).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.nav,
        description: service.intro,
        areaServed: zones,
      },
    })),
  };
}

export function serviceSchema(slug: ServiceSlug) {
  const service = services[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/${service.slug}`)}#service`,
    name: service.title,
    description: service.intro,
    provider: { "@id": `${baseUrl}/#localbusiness` },
    areaServed: zones,
    serviceType: service.nav,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.nav} - Damien Mugnier`,
      itemListElement: service.solutions.map((solution) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: solution },
      })),
    },
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function projectSchema(slug: string) {
  const project = localProjects.find((item) => item.slug === slug);
  if (!project) return null;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.text,
    about: project.keyword,
    locationCreated: {
      "@type": "Place",
      name: project.city,
    },
    creator: { "@id": `${baseUrl}/#localbusiness` },
  };
}
