import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import { CookieConsent } from "@/components/cookie-consent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a ete deplacee.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour a l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://damienmugnier.fr/#business",
  name: "Damien Mugnier - Carreleur, macon, piscine et renovation",
  image: "https://damienmugnier.fr/og-image.jpg",
  telephone: "+33628453288",
  email: "damienmugnier@hotmail.fr",
  priceRange: "EUR EUR EUR",
  vatID: "FR87791178197",
  taxID: "791178197",
  address: {
    "@type": "PostalAddress",
    streetAddress: "387 route de Givors",
    addressLocality: "Beauvallon",
    postalCode: "69700",
    addressRegion: "Auvergne-Rhone-Alpes",
    addressCountry: "FR",
  },
  areaServed: ["Beauvallon", "Givors", "Brignais", "Mornant", "Chaponost", "Saint-Genis-Laval"],
  makesOffer: [
    "Pose de carrelage grand format",
    "Terrasses carrelagees",
    "Plages de piscine et spa",
    "Maconnerie generale",
    "Renovation complete",
  ],
  description:
    "Artisan carreleur et macon specialise en renovation haut de gamme, carrelage grand format, terrasses, piscines et pierre naturelle dans le Sud-Ouest lyonnais.",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Damien Mugnier - Carreleur, macon, piscine et renovation a Beauvallon" },
      {
        name: "description",
        content:
          "Artisan carreleur et macon a Beauvallon. Carrelage grand format, terrasses, plages piscine, renovation complete et devis gratuit dans le Sud-Ouest lyonnais.",
      },
      { name: "author", content: "Damien Mugnier" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Damien Mugnier" },
      { property: "og:title", content: "Damien Mugnier - Artisan carreleur premium a Beauvallon" },
      {
        property: "og:description",
        content:
          "Carrelage grand format, terrasses, piscine, maconnerie et renovation haut de gamme dans le Sud-Ouest lyonnais.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Damien Mugnier - Carreleur premium a Beauvallon" },
      {
        name: "twitter:description",
        content:
          "Artisan local pour carrelage grand format, terrasse, piscine et renovation dans le Sud-Ouest lyonnais.",
      },
      { name: "theme-color", content: "#0f2a44" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
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
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <CookieConsent />
      <AccessibilityToolbar />
    </div>
  );
}
