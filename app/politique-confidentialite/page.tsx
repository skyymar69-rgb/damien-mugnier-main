import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p>Le responsable du traitement est Damien Mugnier. Contact : {business.email}.</p>
      <h2>Données collectées</h2>
      <p>
        Le formulaire collecte nom, téléphone, email, commune, type de projet, message et
        consentement RGPD.
      </p>
      <h2>Finalités</h2>
      <p>
        Les données servent à répondre aux demandes de devis, préparer la relation précontractuelle
        et sécuriser le site.
      </p>
      <h2>Durée</h2>
      <p>
        Les demandes sans contrat sont conservées au maximum trois ans après le dernier contact. Les
        documents contractuels suivent les durées légales.
      </p>
      <h2>Droits</h2>
      <p>
        Vous disposez de droits d’accès, rectification, effacement, opposition, limitation et
        retrait du consentement. Vous pouvez saisir la CNIL.
      </p>
      <h2>Cookies</h2>
      <p>
        Les cookies non essentiels sont soumis au consentement. Le refus est aussi simple que
        l’acceptation.
      </p>
    </LegalPage>
  );
}
