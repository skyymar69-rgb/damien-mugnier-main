import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur</h2>
      <p>
        Le site est édité par MUGNIER Damien, entrepreneur individuel. SIREN {business.siren}, SIRET{" "}
        {business.siret}, TVA {business.vat}, code APE {business.ape}. Adresse : {business.address}.
        Contact : {business.phone}, {business.email}.
      </p>
      <h2>Directeur de publication</h2>
      <p>Le directeur de publication est Damien Mugnier.</p>
      <h2>Conception</h2>
      <p>
        Site réalisé par KAYZEN LYON, SASU, SIREN 999 418 346 000 14, RCS Lyon 999 418 346, TVA FR85
        999 418 346, code APE 4791B, 6 rue Pierre Termier, 69009 Lyon. Agence web :
        https://internet.kayzen-lyon.fr.
      </p>
      <h2>Hébergement</h2>
      <p>
        Site hébergé par Vercel Inc. Les traitements techniques sont encadrés par les garanties
        applicables.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, images, compositions et codes sont protégés. Toute reproduction non autorisée
        est interdite.
      </p>
    </LegalPage>
  );
}
