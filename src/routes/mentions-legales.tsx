import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { business, kayzen } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Damien Mugnier" },
      {
        name: "description",
        content:
          "Mentions légales du site damien-mugnier.lovable.app — éditeur, hébergeur, propriété intellectuelle, conformité loi pour la confiance dans l'économie numérique (LCEN).",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: () => (
    <LegalPage title="Mentions légales">
      <p>
        Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance
        dans l'économie numérique (LCEN), il est précisé aux utilisateurs du site les présentes mentions légales.
      </p>

      <h2>1. Éditeur du site</h2>
      <p>
        <strong>{business.legalName}</strong>, {business.legalForm}.<br />
        Siège social : {business.address}.<br />
        SIREN : {business.siren} — SIRET (siège) : {business.siret}.<br />
        N° TVA intracommunautaire : {business.vat}.<br />
        Code APE / NAF : {business.ape} — {business.apeLabel}.<br />
        Inscription au Répertoire National des Entreprises (RNE) : {business.rne}.<br />
        Statut : {business.status}.<br />
        Téléphone : {business.phone} — Courriel : {business.email}.<br />
        Directeur de la publication : Damien Mugnier.
      </p>

      <h2>2. Conception, développement et hébergement</h2>
      <p>
        Le site a été conçu, développé et est hébergé par la société <strong>{kayzen.name}</strong>, {kayzen.form}.<br />
        Siège social : {kayzen.address}.<br />
        SIREN : {kayzen.siren} — SIRET : {kayzen.siret}.<br />
        RCS : {kayzen.rcs}.<br />
        N° TVA intracommunautaire : {kayzen.vat}.<br />
        Code APE : {kayzen.ape}.<br />
        Téléphone : {kayzen.phone} — Courriel : {kayzen.email}.<br />
        Site : <a href={kayzen.website} target="_blank" rel="noopener">{kayzen.website}</a>.
      </p>

      <h2>3. Assurance professionnelle</h2>
      <p>
        L'éditeur est titulaire d'une assurance de responsabilité civile professionnelle et d'une garantie
        décennale couvrant son activité de carrelage, maçonnerie et rénovation sur le territoire français.
        L'attestation est communiquée sur simple demande écrite.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du site (textes, photographies, illustrations, logos, marques, code source,
        chartes graphiques, base de données, structure) est protégé par le Code de la propriété intellectuelle.
        Toute reproduction, représentation, modification, publication, transmission ou exploitation, totale ou
        partielle, est interdite sans autorisation écrite préalable de l'éditeur ou des ayants droit, sous peine
        des sanctions prévues aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        L'éditeur ne saurait être tenu responsable du contenu des sites tiers vers lesquels des liens hypertextes
        renvoient depuis le site. La création d'un lien vers le site ne nécessite pas d'autorisation préalable
        à condition qu'elle ne porte pas atteinte aux intérêts de l'éditeur et qu'elle indique clairement la source.
      </p>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        L'éditeur s'efforce de fournir des informations exactes et tenues à jour. Il ne peut toutefois garantir
        l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation du site se fait sous
        la seule responsabilité de l'utilisateur.
      </p>

      <h2>7. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L.611-1 et suivants du Code de la consommation, le consommateur a le droit de
        recourir gratuitement à un médiateur de la consommation : <strong>{business.mediator.name}</strong> —
        {" "}{business.mediator.address}. Site :{" "}
        <a href={business.mediator.url} target="_blank" rel="noopener">{business.mediator.url}</a>.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions sont régies par le droit français. Tout litige relatif au site relèvera, à défaut
        d'accord amiable, des tribunaux français compétents.
      </p>
    </LegalPage>
  ),
});
