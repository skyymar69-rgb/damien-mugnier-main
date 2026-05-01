import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions legales - Damien Mugnier" },
      {
        name: "description",
        content:
          "Mentions legales du site Damien Mugnier, artisan carreleur et macon a Beauvallon.",
      },
    ],
  }),
  component: LegalNoticePage,
});

function LegalNoticePage() {
  return (
    <LegalLayout title="Mentions legales">
      <section>
        <h2>Editeur du site</h2>
        <p>
          Le present site est edite par MUGNIER Damien, entrepreneur individuel, immatricule sous le
          SIREN 791 178 197 et le SIRET 791 178 197 00020.
        </p>
        <ul>
          <li>Adresse : 387 route de Givors, 69700 Beauvallon, France</li>
          <li>Telephone : 06 28 45 32 88</li>
          <li>Email : damienmugnier@hotmail.fr</li>
          <li>TVA intracommunautaire : FR87791178197</li>
          <li>Code APE : 43.99C - Travaux de maconnerie generale</li>
          <li>Statut : entrepreneur individuel</li>
        </ul>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>Le directeur de la publication est Damien Mugnier, en qualite d'editeur du site.</p>
      </section>

      <section>
        <h2>Conception et realisation</h2>
        <p>
          Site realise par KAYZEN LYON, SASU, SIREN 999 418 346 000 14, RCS Lyon 999 418 346, TVA
          intracommunautaire FR85 999 418 346, code APE 4791B.
        </p>
        <ul>
          <li>Siege social : 6, rue Pierre Termier, 69009 Lyon</li>
          <li>Telephone : +33 (0)4 87 77 68 61</li>
          <li>Email : contact@kayzen-lyon.fr</li>
          <li>
            Agence web :{" "}
            <a href="https://internet.kayzen-lyon.fr" target="_blank" rel="noreferrer">
              internet.kayzen-lyon.fr
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Hebergement</h2>
        <p>
          Le site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
          Etats-Unis. Les donnees techniques peuvent etre traitees dans l'Union europeenne ou dans
          des pays tiers encadres par des garanties appropriees.
        </p>
      </section>

      <section>
        <h2>Assurance professionnelle</h2>
        <p>
          Damien Mugnier declare exercer son activite avec une assurance responsabilite civile
          professionnelle et decennale adaptee a ses travaux. L'attestation peut etre communiquee
          sur demande avant conclusion du devis.
        </p>
      </section>

      <section>
        <h2>Propriete intellectuelle</h2>
        <p>
          Les textes, images, logos, compositions graphiques, codes et elements du site sont
          proteges par le droit d'auteur et le droit des marques. Toute reproduction, extraction ou
          reutilisation non autorisee est interdite.
        </p>
      </section>

      <section>
        <h2>Liens utiles</h2>
        <p>
          Consultez egalement les <Link to="/cgu">CGU</Link>, les <Link to="/cgv">CGV</Link>, la{" "}
          <Link to="/politique-confidentialite">politique de confidentialite</Link> et la page{" "}
          <Link to="/accessibilite">accessibilite</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}

export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Cadre legal</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-balance md:text-6xl">{title}</h1>
        </div>
      </section>
      <article className="container-prose legal-content py-16 md:py-24">{children}</article>
    </>
  );
}
