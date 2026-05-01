import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { AccessibilityToolbar } from "@/components/AccessibilityToolbar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/seo";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
