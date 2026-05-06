import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { business } from "@/lib/site";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions Générales de Vente — Damien Mugnier" },
      { name: "description", content: "CGV des prestations de carrelage, maçonnerie, terrasse, piscine et rénovation — droit français, garanties légales et décennale." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: () => (
    <LegalPage title="Conditions Générales de Vente">
      <p>
        Les présentes Conditions Générales de Vente (« CGV ») régissent les relations contractuelles entre
        {" "}<strong>{business.legalName}</strong>, {business.legalForm} (SIRET {business.siret}), ci-après « le
        Prestataire », et toute personne physique ou morale, ci-après « le Client », sollicitant ses prestations.
      </p>

      <h2>Article 1 — Champ d'application</h2>
      <p>
        Les CGV s'appliquent à toutes les prestations de carrelage, maçonnerie générale, gros œuvre, terrasse,
        piscine, spa et rénovation. Toute commande emporte adhésion sans réserve aux présentes, sauf conditions
        particulières acceptées par écrit par le Prestataire.
      </p>

      <h2>Article 2 — Devis et formation du contrat</h2>
      <p>
        Toute prestation fait l'objet d'un devis gratuit, daté et détaillé, valable 30 jours. Le contrat est
        formé à la signature du devis par le Client et au versement, le cas échéant, de l'acompte prévu.
        Le devis détaille la nature des travaux, les matériaux, les délais prévisionnels et le prix.
      </p>

      <h2>Article 3 — Prix et modalités de paiement</h2>
      <p>
        Les prix sont exprimés en euros, TVA en sus selon le taux en vigueur. Sauf stipulation contraire, un
        acompte de 30 % est versé à la commande, un acompte intermédiaire peut être demandé en cours de
        chantier, et le solde est exigible à la réception des travaux. Tout retard de paiement entraîne, de
        plein droit et sans mise en demeure préalable, des pénalités au taux d'intérêt légal majoré de
        10 points (article L.441-10 du Code de commerce) ainsi qu'une indemnité forfaitaire de 40 € pour frais
        de recouvrement entre professionnels (article D.441-5).
      </p>

      <h2>Article 4 — Délais d'exécution</h2>
      <p>
        Les délais sont communiqués à titre indicatif. Ils peuvent être prolongés en cas d'intempéries, de
        découverte technique sur site, d'indisponibilité de matériaux choisis par le Client, de modification
        de programme ou de force majeure. Aucun retard ne peut donner lieu à pénalités sans accord exprès et
        préalable des parties.
      </p>

      <h2>Article 5 — Obligations du Client</h2>
      <p>
        Le Client garantit la libre disposition des lieux, l'accès au chantier, l'alimentation en eau et en
        électricité, l'évacuation des gravats si non contractualisée, et fournit toutes les informations utiles
        sur les réseaux et l'état du support. Toute information inexacte ou tardive peut entraîner un avenant.
      </p>

      <h2>Article 6 — Réception des travaux</h2>
      <p>
        La réception est l'acte par lequel le Client déclare accepter l'ouvrage avec ou sans réserves
        (article 1792-6 du Code civil). Elle se constate par procès-verbal contradictoire signé des deux parties.
      </p>

      <h2>Article 7 — Garanties</h2>
      <p>
        Le Prestataire est tenu, selon la nature des travaux, à la garantie de parfait achèvement (1 an), à la
        garantie biennale de bon fonctionnement (2 ans) et à la garantie décennale (10 ans) au titre des
        articles 1792 et suivants du Code civil. Une attestation d'assurance décennale est communiquée sur
        demande.
      </p>

      <h2>Article 8 — Réserve de propriété</h2>
      <p>
        Les matériaux fournis restent la propriété du Prestataire jusqu'au paiement intégral du prix.
      </p>

      <h2>Article 9 — Droit de rétractation (clients consommateurs hors établissement)</h2>
      <p>
        Lorsque le contrat est conclu hors établissement, le Client consommateur dispose d'un délai de
        14 jours pour se rétracter, conformément aux articles L.221-18 et suivants du Code de la consommation.
        Le formulaire type de rétractation est joint au devis. Si l'exécution doit débuter avant la fin de ce
        délai, le Client peut le demander expressément par écrit.
      </p>

      <h2>Article 10 — Médiation et règlement des litiges</h2>
      <p>
        En cas de réclamation, le Client est invité à contacter le Prestataire au {business.phone} ou par
        courriel à {business.email}. À défaut de solution amiable, le Client consommateur peut saisir
        gratuitement le médiateur de la consommation : <strong>{business.mediator.name}</strong>,
        {" "}{business.mediator.address} —{" "}
        <a href={business.mediator.url} target="_blank" rel="noopener">{business.mediator.url}</a>.
        Conformément à l'article 14 du règlement (UE) 524/2013, la plateforme européenne de règlement en ligne
        des litiges est accessible à l'adresse{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>.
      </p>

      <h2>Article 11 — Loi applicable et juridiction</h2>
      <p>
        Les CGV sont soumises au droit français. À défaut d'accord amiable, les tribunaux français sont seuls
        compétents.
      </p>
    </LegalPage>
  ),
});
