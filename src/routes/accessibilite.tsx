import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "./mentions-legales";

export const Route = createFileRoute("/accessibilite")({
  head: () => ({
    meta: [
      { title: "Accessibilite - Damien Mugnier" },
      {
        name: "description",
        content: "Declaration d'accessibilite RGAA et WCAG du site Damien Mugnier.",
      },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <LegalLayout title="Declaration d'accessibilite">
      <section>
        <h2>Engagement</h2>
        <p>
          Damien Mugnier s'engage a rendre son site internet accessible conformement au RGAA, aux
          principes WCAG et aux exigences applicables issues de l'European Accessibility Act.
        </p>
      </section>
      <section>
        <h2>Etat de conformite</h2>
        <p>
          En l'absence d'un audit RGAA complet et documente sur les 106 criteres au jour de
          publication, le site est declare partiellement conforme. Les travaux realises visent
          notamment le contraste, la navigation clavier, les libelles accessibles, la reduction des
          animations, la lisibilite et la structure semantique.
        </p>
      </section>
      <section>
        <h2>Aides disponibles</h2>
        <p>
          Un module d'accessibilite permet d'activer un contraste renforce, d'augmenter la taille du
          texte et de reduire les animations. Le site utilise des liens et boutons nommes, des
          alternatives textuelles sur les images importantes et des focus visibles.
        </p>
      </section>
      <section>
        <h2>Contenus a surveiller</h2>
        <p>
          Les contenus tiers, cartes externes, avis Google et documents transmis par des partenaires
          peuvent presenter des limites d'accessibilite independantes de l'editeur du site.
        </p>
      </section>
      <section>
        <h2>Contact et recours</h2>
        <p>
          Si vous rencontrez une difficulte d'acces a un contenu ou service, contactez Damien
          Mugnier a l'adresse damienmugnier@hotmail.fr afin d'obtenir une alternative accessible.
        </p>
        <p>
          Consultez aussi la{" "}
          <Link to="/politique-confidentialite">politique de confidentialite</Link> et les{" "}
          <Link to="/mentions-legales">mentions legales</Link>.
        </p>
      </section>
      <section>
        <h2>Date</h2>
        <p>
          Declaration etablie le 1 mai 2026. Une verification complete RGAA est recommandee avant
          toute mention de conformite totale.
        </p>
      </section>
    </LegalLayout>
  );
}
