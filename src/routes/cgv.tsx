import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "./mentions-legales";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions generales de vente - Damien Mugnier" },
      {
        name: "description",
        content: "Conditions generales de vente applicables aux devis et travaux Damien Mugnier.",
      },
    ],
  }),
  component: TermsOfSalePage,
});

function TermsOfSalePage() {
  return (
    <LegalLayout title="Conditions generales de vente">
      <section>
        <h2>Champ d'application</h2>
        <p>
          Les presentes CGV s'appliquent aux prestations de carrelage, maconnerie, renovation,
          terrasse, plage de piscine et amenagement exterieur realisees par Damien Mugnier pour des
          clients particuliers ou professionnels, sauf conditions particulieres acceptees par ecrit.
        </p>
      </section>
      <section>
        <h2>Devis et commande</h2>
        <p>
          Toute intervention fait l'objet d'un devis detaille. La commande devient ferme apres
          signature du devis, acceptation des presentes CGV et, le cas echeant, encaissement de
          l'acompte prevu.
        </p>
      </section>
      <section>
        <h2>Prix et paiement</h2>
        <p>
          Les prix sont indiques en euros. Les modalites de paiement, acomptes, situations
          intermediaires et solde sont precisees au devis. Tout retard de paiement peut entrainer
          l'application de penalites et la suspension des travaux apres mise en demeure restee
          infructueuse.
        </p>
      </section>
      <section>
        <h2>Delais d'execution</h2>
        <p>
          Les delais sont donnes selon les informations connues au jour du devis. Ils peuvent etre
          ajustes en cas d'intemperies, indisponibilite de materiaux, modification demandee par le
          client, decouverte technique ou cas de force majeure.
        </p>
      </section>
      <section>
        <h2>Obligations du client</h2>
        <p>
          Le client garantit l'acces au chantier, la disponibilite des informations utiles, la
          conformite des autorisations eventuellement necessaires et la protection des biens qui ne
          relevent pas de la zone d'intervention.
        </p>
      </section>
      <section>
        <h2>Reception des travaux et garanties</h2>
        <p>
          La reception intervient a l'achevement des travaux, avec reserves eventuelles formulees
          par ecrit. Les garanties legales applicables, notamment la garantie de parfait achevement,
          la garantie biennale et la garantie decennale lorsque les conditions sont reunies,
          s'appliquent conformement au droit francais.
        </p>
      </section>
      <section>
        <h2>Droit de retractation</h2>
        <p>
          Pour les consommateurs, lorsque le contrat est conclu a distance ou hors etablissement, le
          droit de retractation s'applique dans les conditions du Code de la consommation, sauf
          exceptions legales ou demande expresse d'execution avant la fin du delai.
        </p>
      </section>
      <section>
        <h2>Mediation de la consommation</h2>
        <p>
          Apres reclamation ecrite prealable adressee a Damien Mugnier et en l'absence de solution
          amiable, le consommateur peut saisir gratuitement le mediateur de la consommation designe
          par le professionnel. Les coordonnees du mediateur doivent etre confirmees par le
          professionnel avant publication definitive si elles ne sont pas encore renseignees.
        </p>
      </section>
      <section>
        <h2>Droit applicable et litiges</h2>
        <p>
          Les presentes CGV sont soumises au droit francais. A defaut d'accord amiable, les
          juridictions competentes seront saisies selon les regles de droit commun.
        </p>
      </section>
    </LegalLayout>
  );
}
