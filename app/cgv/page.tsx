import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "CGV" };

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente">
      <h2>Champ d’application</h2>
      <p>
        Les CGV s’appliquent aux prestations de carrelage, maçonnerie, terrasse, piscine, spa et
        rénovation, sauf accord écrit contraire.
      </p>
      <h2>Devis</h2>
      <p>
        Chaque intervention fait l’objet d’un devis détaillé. La commande devient ferme après
        signature et paiement éventuel de l’acompte prévu.
      </p>
      <h2>Délais</h2>
      <p>
        Les délais tiennent compte des contraintes connues. Ils peuvent évoluer en cas
        d’intempéries, découvertes techniques ou indisponibilité de matériaux.
      </p>
      <h2>Garanties</h2>
      <p>
        Les garanties légales applicables, dont la garantie décennale lorsque les conditions sont
        réunies, s’appliquent conformément au droit français.
      </p>
      <h2>Médiation</h2>
      <p>
        Le consommateur peut saisir gratuitement le médiateur de la consommation désigné par le
        professionnel après réclamation écrite préalable. Les coordonnées exactes du médiateur
        doivent être confirmées avant publication définitive.
      </p>
    </LegalPage>
  );
}
