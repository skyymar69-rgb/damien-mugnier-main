import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { business } from "@/lib/site";

export const Route = createFileRoute("/accessibilite")({
  head: () => ({
    meta: [
      { title: "Déclaration d'accessibilité — Damien Mugnier" },
      { name: "description", content: "Déclaration d'accessibilité conforme à l'European Accessibility Act, au RGAA et aux WCAG 2.2 niveau AA." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: () => (
    <LegalPage title="Déclaration d'accessibilité">
      <p>
        {business.legalName} s'engage à rendre son site internet accessible conformément à la directive (UE)
        2016/2102, à l'European Accessibility Act (directive (UE) 2019/882) transposé en droit français par
        l'ordonnance n° 2023-859 du 6 septembre 2023, à l'article 47 de la loi n° 2005-102 du 11 février 2005
        et au Référentiel Général d'Amélioration de l'Accessibilité (RGAA, version en vigueur), aligné sur le
        standard WCAG 2.2 niveau AA.
      </p>

      <h2>1. État de conformité</h2>
      <p>
        Le site <em>damien-mugnier.lovable.app</em> est en <strong>conformité partielle</strong> avec le RGAA
        et les WCAG 2.2 niveau AA, en l'absence d'un audit indépendant complet sur les 106 critères du RGAA.
        Un audit formel sera réalisé et son résultat publié sur cette page dès qu'il sera disponible.
      </p>

      <h2>2. Mesures mises en œuvre</h2>
      <ul>
        <li>Structure HTML5 sémantique (landmarks header, nav, main, footer, aria-labels).</li>
        <li>Navigation clavier complète, lien d'évitement « Aller au contenu principal ».</li>
        <li>Contrastes de couleurs vérifiés (ratio AA), respect du mode sombre système.</li>
        <li>Textes alternatifs descriptifs sur les images informatives, attribut alt vide sur les images décoratives.</li>
        <li>Hiérarchie de titres unique (un seul h1 par page) et logique.</li>
        <li>Formulaires avec libellés explicites associés, messages d'erreur compréhensibles, attributs autocomplete.</li>
        <li>Respect de la préférence <code>prefers-reduced-motion</code> pour les animations.</li>
        <li>Police lisible, tailles relatives, zoom jusqu'à 200 % sans perte de fonctionnalité.</li>
        <li>Site responsive jusqu'à 320 px de largeur, compatible lecteurs d'écran courants.</li>
      </ul>

      <h2>3. Contenus non accessibles</h2>
      <p>
        Certaines images de réalisations peuvent comporter des descriptions encore perfectibles. Aucun contenu
        média audio ou vidéo n'est diffusé à ce jour, ce qui dispense de sous-titres et de transcriptions.
      </p>

      <h2>4. Voie de recours</h2>
      <p>
        Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou à un service du
        site, contactez {business.legalName} à l'adresse {business.email} ou au {business.phone}. Une
        alternative accessible vous sera proposée dans les meilleurs délais.
      </p>
      <p>
        Si vous n'obtenez pas de réponse satisfaisante, vous pouvez saisir le Défenseur des droits :{" "}
        <a href="https://www.defenseurdesdroits.fr" target="_blank" rel="noopener">www.defenseurdesdroits.fr</a>.
      </p>

      <h2>5. Établissement de la déclaration</h2>
      <p>
        Cette déclaration a été établie le{" "}
        {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}. Elle est
        révisée chaque année et à chaque évolution majeure du site. Technologies utilisées : HTML5, CSS3,
        JavaScript (React 19, TanStack Start). Tests effectués sur navigateurs Chromium, Firefox, Safari et
        avec lecteurs d'écran VoiceOver et NVDA.
      </p>
    </LegalPage>
  ),
});
