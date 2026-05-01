import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "./mentions-legales";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialite et cookies - Damien Mugnier" },
      {
        name: "description",
        content:
          "Politique RGPD, gestion des donnees personnelles et cookies du site Damien Mugnier.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Politique de confidentialite">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          Le responsable du traitement est MUGNIER Damien, entrepreneur individuel, 387 route de
          Givors, 69700 Beauvallon. Contact : damienmugnier@hotmail.fr.
        </p>
      </section>
      <section>
        <h2>Donnees collectees</h2>
        <p>
          Le formulaire de contact peut collecter : nom, telephone, email, type de projet, commune,
          budget indicatif, message et consentement RGPD. Des donnees techniques strictement
          necessaires peuvent etre traitees pour la securite et le fonctionnement du site.
        </p>
      </section>
      <section>
        <h2>Finalites et bases legales</h2>
        <ul>
          <li>Repondre aux demandes de devis : mesures precontractuelles.</li>
          <li>
            Gerer la relation client et les devis : execution contractuelle ou precontractuelle.
          </li>
          <li>Assurer la securite du site : interet legitime.</li>
          <li>Gerer les cookies non essentiels : consentement.</li>
        </ul>
      </section>
      <section>
        <h2>Durees de conservation</h2>
        <p>
          Les demandes de contact sont conservees pendant une duree maximale de 3 ans a compter du
          dernier contact si elles ne donnent pas lieu a une relation contractuelle. Les documents
          contractuels et comptables sont conserves selon les obligations legales applicables.
        </p>
      </section>
      <section>
        <h2>Destinataires</h2>
        <p>
          Les donnees sont destinees a Damien Mugnier et, si necessaire, a ses prestataires
          techniques, comptables, assureurs, conseils ou sous-traitants, uniquement dans la limite
          de leurs missions.
        </p>
      </section>
      <section>
        <h2>Cookies et traceurs</h2>
        <p>
          Le site utilise des cookies techniques indispensables. Les cookies de mesure d'audience,
          personnalisation ou services tiers ne sont actives qu'apres consentement lorsque leur
          usage l'exige. Vous pouvez accepter ou refuser depuis le bandeau cookies ; le refus est
          aussi simple que l'acceptation.
        </p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Vous disposez de droits d'acces, rectification, effacement, limitation, opposition,
          portabilite lorsque applicable, et retrait du consentement. Pour exercer vos droits :
          damienmugnier@hotmail.fr. Vous pouvez egalement introduire une reclamation aupres de la
          CNIL.
        </p>
      </section>
      <section>
        <h2>Transferts hors Union europeenne</h2>
        <p>
          L'hebergement et certains outils techniques peuvent impliquer des prestataires situes hors
          Union europeenne. Dans ce cas, l'editeur veille a l'existence de garanties appropriees.
        </p>
      </section>
    </LegalLayout>
  );
}
