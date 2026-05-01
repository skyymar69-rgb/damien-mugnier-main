import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "./mentions-legales";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title: "Conditions generales d'utilisation - Damien Mugnier" },
      {
        name: "description",
        content: "Conditions generales d'utilisation du site Damien Mugnier.",
      },
    ],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <LegalLayout title="Conditions generales d'utilisation">
      <section>
        <h2>Objet</h2>
        <p>
          Les presentes CGU encadrent l'acces et l'utilisation du site de Damien Mugnier. Le site
          presente les activites de carrelage, maconnerie, piscine, terrasse et renovation et permet
          de demander un devis.
        </p>
      </section>
      <section>
        <h2>Acces au site</h2>
        <p>
          Le site est accessible gratuitement. L'editeur peut interrompre l'acces pour maintenance,
          securite ou evolution technique, sans garantie de disponibilite permanente.
        </p>
      </section>
      <section>
        <h2>Utilisation loyale</h2>
        <p>
          L'utilisateur s'engage a ne pas perturber le fonctionnement du site, tenter d'acceder a
          des espaces non autorises, envoyer des contenus illicites ou utiliser les formulaires a
          des fins de prospection non sollicitee.
        </p>
      </section>
      <section>
        <h2>Informations publiees</h2>
        <p>
          Les informations presentes sur le site sont fournies a titre indicatif. Elles ne
          remplacent pas une visite technique ni un devis personnalise tenant compte de l'etat reel
          du chantier.
        </p>
      </section>
      <section>
        <h2>Donnees personnelles</h2>
        <p>
          Les traitements de donnees lies au site sont decrits dans la{" "}
          <Link to="/politique-confidentialite">politique de confidentialite</Link>.
        </p>
      </section>
      <section>
        <h2>Droit applicable</h2>
        <p>Les presentes CGU sont soumises au droit francais.</p>
      </section>
    </LegalLayout>
  );
}
