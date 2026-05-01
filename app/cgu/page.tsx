import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "CGU" };

export default function Page() {
  return (
    <LegalPage title="Conditions générales d’utilisation">
      <h2>Objet</h2>
      <p>
        Les CGU encadrent l’utilisation du site Damien Mugnier, destiné à présenter les services et
        à recevoir des demandes de devis.
      </p>
      <h2>Accès</h2>
      <p>
        Le site est accessible gratuitement. L’éditeur peut interrompre l’accès pour maintenance,
        sécurité ou évolution technique.
      </p>
      <h2>Utilisation loyale</h2>
      <p>
        L’utilisateur s’engage à ne pas perturber le site, exploiter les formulaires abusivement ou
        transmettre de contenus illicites.
      </p>
      <h2>Droit applicable</h2>
      <p>Les présentes CGU sont soumises au droit français.</p>
    </LegalPage>
  );
}
