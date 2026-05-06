import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { business } from "@/lib/site";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title: "Conditions Générales d'Utilisation — Damien Mugnier" },
      { name: "description", content: "CGU du site Damien Mugnier — règles d'accès, propriété intellectuelle, responsabilités, données personnelles." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: () => (
    <LegalPage title="Conditions Générales d'Utilisation">
      <p>
        Les présentes Conditions Générales d'Utilisation (« CGU ») régissent l'accès et l'utilisation du site
        édité par {business.legalName}. La consultation du site emporte acceptation pleine et entière des CGU.
      </p>

      <h2>Article 1 — Objet</h2>
      <p>
        Le site a pour objet de présenter les services de carrelage, maçonnerie, terrasse, piscine, spa et
        rénovation, et de permettre à tout visiteur de prendre contact avec l'éditeur pour une demande de devis.
      </p>

      <h2>Article 2 — Accès au site</h2>
      <p>
        L'accès est gratuit. Les frais de connexion et de matériel restent à la charge de l'utilisateur.
        L'éditeur s'efforce d'assurer un accès continu mais ne peut en garantir la disponibilité permanente.
        Il peut suspendre l'accès pour maintenance, sécurité, mise à jour ou en cas de force majeure, sans préavis
        ni indemnité.
      </p>

      <h2>Article 3 — Comportement de l'utilisateur</h2>
      <p>
        L'utilisateur s'engage à utiliser le site conformément à sa destination, à la réglementation française
        applicable, à l'ordre public et aux bonnes mœurs. Il s'interdit notamment toute tentative d'intrusion,
        d'altération ou de saturation du site, toute exploitation abusive du formulaire de contact, tout
        contenu illicite, diffamatoire, injurieux ou discriminatoire.
      </p>

      <h2>Article 4 — Propriété intellectuelle</h2>
      <p>
        Tous les éléments du site sont protégés. Toute reproduction ou réutilisation sans autorisation écrite
        constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
        intellectuelle.
      </p>

      <h2>Article 5 — Données personnelles</h2>
      <p>
        Les traitements de données mis en œuvre via les formulaires sont décrits dans la{" "}
        <a href="/politique-confidentialite">Politique de confidentialité</a>. Conformément au RGPD et à la loi
        Informatique et Libertés, vous disposez de droits d'accès, rectification, effacement, opposition,
        limitation et portabilité.
      </p>

      <h2>Article 6 — Cookies</h2>
      <p>
        Le site utilise un nombre limité de cookies. Le bandeau de consentement permet d'accepter, refuser ou
        personnaliser les cookies non essentiels conformément aux recommandations de la CNIL.
      </p>

      <h2>Article 7 — Responsabilité</h2>
      <p>
        L'éditeur ne saurait être tenu responsable des dommages indirects résultant de l'utilisation du site,
        notamment perte de données, perte d'exploitation ou préjudice commercial.
      </p>

      <h2>Article 8 — Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers d'autres sites pour lesquels l'éditeur décline toute responsabilité
        quant à leur contenu et à leur politique de confidentialité.
      </p>

      <h2>Article 9 — Modification des CGU</h2>
      <p>
        L'éditeur se réserve la faculté de modifier les CGU à tout moment. La version applicable est celle en
        vigueur au moment de la consultation.
      </p>

      <h2>Article 10 — Loi applicable et juridiction</h2>
      <p>
        Les CGU sont soumises au droit français. À défaut de résolution amiable, tout litige sera porté devant
        les tribunaux français compétents.
      </p>
    </LegalPage>
  ),
});
