import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Accessibilité" };

export default function Page() {
  return (
    <LegalPage title="Déclaration d’accessibilité">
      <h2>Engagement</h2>
      <p>
        Le site vise une accessibilité conforme aux principes RGAA et WCAG 2.2 : contraste,
        navigation clavier, textes alternatifs, structure claire et focus visibles.
      </p>
      <h2>État de conformité</h2>
      <p>
        En l’absence d’un audit complet sur les 106 critères RGAA, le site est déclaré partiellement
        conforme. Un audit formel reste recommandé avant toute mention de conformité totale.
      </p>
      <h2>Fonctions disponibles</h2>
      <p>
        Un module permet d’activer le contraste renforcé, d’augmenter la taille du texte et de
        réduire les animations.
      </p>
      <h2>Contact</h2>
      <p>En cas de difficulté, contactez Damien Mugnier pour obtenir une alternative accessible.</p>
    </LegalPage>
  );
}
