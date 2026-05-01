import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { AccessibilityToolbar } from "@/components/AccessibilityToolbar";
import { business } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://damien-mugnier-main.vercel.app"),
  title: {
    default: "Damien Mugnier - Carreleur à Beauvallon, terrasse, piscine et rénovation",
    template: "%s | Damien Mugnier",
  },
  description:
    "Artisan carreleur et maçon à Beauvallon. Carrelage grand format, terrasse, piscine, spa et rénovation premium dans le Sud-Ouest lyonnais.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Damien Mugnier",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
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
  areaServed: ["Beauvallon", "Givors", "Brignais", "Mornant", "Chaponost", "Saint-Genis-Laval"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
