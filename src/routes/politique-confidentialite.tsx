import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { business } from "@/lib/site";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité (RGPD) — Damien Mugnier" },
      { name: "description", content: "Traitement des données personnelles, finalités, base légale, durée, droits, cookies — conforme RGPD et loi Informatique et Libertés." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: () => (
    <LegalPage title="Politique de confidentialité">
      <p>
        La présente politique décrit les conditions dans lesquelles {business.legalName} traite les données à
        caractère personnel des visiteurs et prospects, conformément au Règlement (UE) 2016/679 (« RGPD ») et à
        la loi n° 78-17 du 6 janvier 1978 modifiée (« Informatique et Libertés »).
      </p>

      <h2>1. Responsable de traitement</h2>
      <p>
        {business.legalName} — {business.address}. Contact : {business.email} — {business.phone}.
        Aucun délégué à la protection des données (DPO) n'a été désigné, le traitement n'y étant pas soumis ;
        toute demande peut être adressée directement au responsable de traitement.
      </p>

      <h2>2. Données collectées et finalités</h2>
      <ul>
        <li>
          <strong>Formulaire de contact / devis</strong> : nom, prénom, téléphone, courriel, commune, type de
          projet, message. Finalité : répondre à votre demande de devis et préparer la relation
          précontractuelle. Base légale : exécution de mesures précontractuelles à votre demande
          (art. 6.1.b RGPD).
        </li>
        <li>
          <strong>Cookies de mesure d'audience anonymisée</strong> (si consentement). Base légale : consentement
          (art. 6.1.a RGPD et art. 82 LIL).
        </li>
        <li>
          <strong>Journaux techniques</strong> (logs serveur, adresse IP tronquée) à des fins de sécurité.
          Base légale : intérêt légitime à sécuriser le service (art. 6.1.f RGPD).
        </li>
      </ul>

      <h2>3. Destinataires</h2>
      <p>
        Les données sont destinées exclusivement à l'éditeur. Elles peuvent être traitées par les sous-traitants
        techniques (hébergement, messagerie) liés par un accord conforme à l'article 28 du RGPD. Aucune donnée
        n'est cédée ni vendue à des tiers à des fins commerciales.
      </p>

      <h2>4. Transferts hors Union européenne</h2>
      <p>
        Le site est hébergé sur une infrastructure située dans l'Union européenne. En cas de recours à un
        prestataire situé hors UE, les transferts sont encadrés par des garanties appropriées
        (clauses contractuelles types de la Commission européenne).
      </p>

      <h2>5. Durées de conservation</h2>
      <ul>
        <li>Demandes de devis sans suite : <strong>3 ans</strong> à compter du dernier contact.</li>
        <li>Documents contractuels et comptables : <strong>10 ans</strong> (obligation légale).</li>
        <li>Cookies de mesure d'audience : <strong>13 mois maximum</strong> ; consentement conservé 6 mois.</li>
        <li>Logs techniques : <strong>12 mois maximum</strong>.</li>
      </ul>

      <h2>6. Vos droits</h2>
      <p>
        Vous disposez à tout moment d'un droit d'accès, de rectification, d'effacement, d'opposition, de
        limitation et de portabilité, ainsi que du droit de retirer votre consentement et du droit de définir
        des directives relatives au sort de vos données après votre décès. Vous pouvez exercer ces droits par
        courriel à {business.email} ou par courrier à l'adresse de l'éditeur, accompagné d'un justificatif
        d'identité si nécessaire. Une réponse vous sera adressée dans un délai d'un mois.
      </p>
      <p>
        Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de
        l'Informatique et des Libertés (CNIL) — 3 place de Fontenoy, 75007 Paris —{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>.
      </p>

      <h2>7. Sécurité</h2>
      <p>
        L'éditeur met en œuvre des mesures techniques et organisationnelles appropriées (chiffrement TLS,
        contrôle d'accès, journalisation, sauvegardes régulières) pour assurer la confidentialité, l'intégrité
        et la disponibilité des données traitées.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Seuls les cookies strictement nécessaires au fonctionnement du site sont déposés sans consentement.
        Les cookies non essentiels (mesure d'audience) sont soumis à votre consentement préalable, recueilli
        via le bandeau cookies. Le refus est aussi simple que l'acceptation. Vous pouvez modifier vos choix
        à tout moment en supprimant l'entrée « dm-cookie-consent-v1 » de votre navigateur ou en revenant sur
        cette page.
      </p>

      <h2>9. Mineurs</h2>
      <p>
        Le site n'est pas destiné aux mineurs de moins de 15 ans et ne collecte pas sciemment leurs données.
      </p>

      <h2>10. Modifications</h2>
      <p>
        La présente politique peut être actualisée. La date de mise à jour figure ci-dessous.<br />
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}.
      </p>
    </LegalPage>
  ),
});
