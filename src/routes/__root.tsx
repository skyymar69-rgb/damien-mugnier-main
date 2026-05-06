import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { WhatsappButton } from "@/components/whatsapp-button";
import { ScrollToTop } from "@/components/scroll-to-top";

const CookieConsent = lazy(() =>
  import("@/components/cookie-consent").then((m) => ({ default: m.CookieConsent })),
);

const SITE_URL = "https://damienmugnier.fr";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00050eba-3860-4a6b-842e-aeb50fbb7922/id-preview-a485dd6e--879e6be5-b112-49d3-b982-a051f3767ee7.lovable.app-1777662042687.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Erreur 404</p>
        <h1 className="mt-3 font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page introuvable</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          La page que vous recherchez a peut-être été déplacée ou n'existe plus.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-elegant)]"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Damien Mugnier — Carreleur Maçon Rénovation",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.ico`,
  telephone: "+33628453288",
  email: "damienmugnier@hotmail.fr",
  url: SITE_URL,
  priceRange: "€€€",
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=387+route+de+Givors+69700+Beauvallon",
  address: {
    "@type": "PostalAddress",
    streetAddress: "387 route de Givors",
    addressLocality: "Beauvallon",
    postalCode: "69700",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.602, longitude: 4.715 },
  areaServed: [
    "Beauvallon",
    "Givors",
    "Brignais",
    "Lyon Sud",
    "Mornant",
    "Vienne",
    "Chaponost",
    "Saint-Genis-Laval",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+33628453288",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "27" },
  description:
    "Artisan carreleur, maçon et spécialiste rénovation haut de gamme. Carrelage grand format, marbre, pierre naturelle, terrasses premium.",
  founder: { "@type": "Person", name: "Damien Mugnier", jobTitle: "Artisan carreleur maçon" },
  knowsAbout: [
    "Carrelage grand format",
    "Marbre",
    "Pierre naturelle",
    "Terrasse extérieure",
    "Plage de piscine",
    "Maçonnerie",
    "Rénovation haut de gamme",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Damien Mugnier",
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#damien`,
  name: "Damien Mugnier",
  givenName: "Damien",
  familyName: "Mugnier",
  jobTitle: "Artisan carreleur, maçon, piscine & rénovation",
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: SITE_URL,
  email: "damienmugnier@hotmail.fr",
  telephone: "+33628453288",
  address: {
    "@type": "PostalAddress",
    streetAddress: "387 route de Givors",
    addressLocality: "Beauvallon",
    postalCode: "69700",
    addressCountry: "FR",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Damien Mugnier — Carreleur Maçon Rénovation premium · Sud-Ouest Lyonnais",
      },
      {
        name: "description",
        content:
          "Artisan carreleur, maçon et rénovation haut de gamme à Beauvallon (69700). Carrelage grand format, marbre, pierre naturelle, terrasses. Devis gratuit.",
      },
      { name: "author", content: "Damien Mugnier" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "theme-color", content: "#1a2755" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Damien Mugnier" },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:title",
        content:
          "Damien Mugnier — Carreleur Maçon Rénovation premium · Sud-Ouest Lyonnais",
      },
      {
        property: "og:description",
        content:
          "Artisan carreleur, maçon et rénovation haut de gamme à Beauvallon (69700). Carrelage grand format, marbre, pierre naturelle, terrasses. Devis gratuit.",
      },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Damien Mugnier — Carreleur Maçon Rénovation premium · Sud-Ouest Lyonnais",
      },
      {
        name: "twitter:description",
        content:
          "Artisan carreleur, maçon et rénovation haut de gamme à Beauvallon (69700).",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://wa.me" },
      { rel: "dns-prefetch", href: "https://www.google.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [localBusinessJsonLd, webSiteJsonLd, personJsonLd],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Aller au contenu principal
      </a>
      <SiteHeader />
      <main id="main" className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <StickyMobileCta />
      <WhatsappButton />
      <ScrollToTop />
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
}
