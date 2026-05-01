import type { StaticImageData } from "next/image";

export const business = {
  name: "Damien Mugnier",
  baseline: "Carreleur, maçon, piscine et rénovation",
  phone: "06 28 45 32 88",
  phoneHref: "tel:+33628453288",
  email: "damienmugnier@hotmail.fr",
  address: "387 route de Givors, 69700 Beauvallon",
  siren: "791 178 197",
  siret: "791 178 197 00020",
  vat: "FR87791178197",
  ape: "43.99C",
  area: "Beauvallon, Givors, Brignais, Mornant, Chaponost, Saint-Genis-Laval",
};

export const images = {
  logo: "/images/logo.webp",
  hero: "/images/spa-nuit.webp",
  carrelage: "/images/marbre-sol.webp",
  mur: "/images/mur-pierre.webp",
  piscine: "/images/piscine.webp",
  terrasse: "/images/terrasse-bois.webp",
  bain: "/images/wc-marbre-lion.webp",
  marbre: "/images/marbre-mur.webp",
} satisfies Record<string, string | StaticImageData>;

export type ServiceSlug =
  | "carrelage-interieur"
  | "terrasse-exterieur"
  | "piscine-spa"
  | "maconnerie-generale"
  | "renovation-complete";

export const services: Record<
  ServiceSlug,
  {
    slug: ServiceSlug;
    title: string;
    nav: string;
    keyword: string;
    image: string;
    intro: string;
    variants: string[];
    problems: string[];
    solutions: string[];
    story: string;
    faq: { q: string; a: string }[];
  }
> = {
  "carrelage-interieur": {
    slug: "carrelage-interieur",
    nav: "Carrelage intérieur",
    title: "Pose de carrelage intérieur à Beauvallon",
    keyword: "carreleur Beauvallon",
    image: images.carrelage as string,
    intro:
      "Vous cherchez un carreleur à Beauvallon capable de poser un carrelage intérieur net, durable et aligné au millimètre ? Damien Mugnier intervient dans le Sud-Ouest lyonnais pour les salons, cuisines, salles de bain et pièces de vie exigeantes. Le travail commence toujours par le support : planéité, humidité, ancien revêtement, seuils, plinthes, réservation des portes. C’est cette préparation invisible qui donne ensuite un sol silencieux, régulier et élégant.",
    variants: [
      "pose carrelage grand format",
      "carrelage salon cuisine",
      "douche italienne carrelée",
      "grès cérame effet pierre",
      "calepinage haut de gamme",
      "joints fins",
      "rénovation carrelage intérieur",
    ],
    problems: [
      "Ancien carrelage creux ou fissuré qui ne peut pas recevoir directement une nouvelle pose.",
      "Dalles grand format qui exigent un double encollage et une préparation très régulière.",
      "Pièces ouvertes où les lignes de joints doivent tomber juste entre cuisine, séjour et couloir.",
    ],
    solutions: [
      "Diagnostic du support avant devis pour éviter les mauvaises surprises.",
      "Calepinage sur plan et sur chantier pour placer les coupes aux bons endroits.",
      "Pose soignée avec joints réguliers, seuils propres et finitions discrètes.",
    ],
    story:
      "Sur une maison à Beauvallon, le client voulait un 120x120 effet pierre dans toute la pièce de vie. Le vrai sujet n’était pas le carreau : c’était une différence de niveau entre l’ancienne cuisine et le séjour. Le support a été repris avant la pose, puis le calepinage a été centré sur la baie vitrée. Résultat : aucune coupe gênante en entrée et une lecture très calme de l’espace.",
    faq: [
      {
        q: "Le grand format est-il adapté à une rénovation ?",
        a: "Oui, si le support est assez stable et préparé. Une visite permet de vérifier planéité, fissures et hauteurs disponibles.",
      },
      {
        q: "Peut-on carreler sur un ancien carrelage ?",
        a: "Parfois, après contrôle de l’adhérence et primaire adapté. Si l’ancien sol sonne creux, une dépose reste préférable.",
      },
      {
        q: "Travaillez-vous avec les carreaux fournis par le client ?",
        a: "Oui, si les carreaux sont compatibles avec l’usage et la pose prévue. Damien peut aussi conseiller sur le choix technique.",
      },
    ],
  },
  "terrasse-exterieur": {
    slug: "terrasse-exterieur",
    nav: "Terrasse & extérieur",
    title: "Terrasse carrelée à Beauvallon, Givors et Lyon Sud",
    keyword: "terrasse carrelage Lyon sud",
    image: images.terrasse as string,
    intro:
      "Une terrasse carrelée dans le Lyon sud doit résister à la pluie, au gel, au soleil et aux passages répétés. Damien Mugnier réalise des extérieurs premium à Beauvallon, Givors, Mornant et Brignais avec une approche de maçon carreleur : pentes, évacuation, seuils, escaliers, rives et supports sont traités avant le choix esthétique.",
    variants: [
      "terrasse carrelée",
      "dallage extérieur",
      "carrelage antidérapant R11",
      "pose sur plots",
      "margelles piscine",
      "escaliers extérieurs",
      "carrelage grès cérame extérieur",
    ],
    problems: [
      "Eau stagnante près de la baie vitrée à cause d’une pente mal pensée.",
      "Carrelage extérieur glissant ou inadapté au gel.",
      "Raccord compliqué entre terrasse, escalier, jardin et plage de piscine.",
    ],
    solutions: [
      "Création ou reprise des pentes avant pose.",
      "Choix de matériaux extérieurs antidérapants et faciles à entretenir.",
      "Finitions de rives et nez de marche pensées pour durer.",
    ],
    story:
      "À Givors, une terrasse existante prenait l’eau côté maison. La demande semblait simple : remplacer le carrelage. Le chantier a surtout consisté à reprendre les pentes et les évacuations. Le nouveau dallage a ensuite été posé avec des coupes alignées sur les ouvertures. C’est le genre de détail qui ne se voit pas en photo, mais qui change tout après le premier orage.",
    faq: [
      {
        q: "Quel carrelage choisir pour une terrasse ?",
        a: "Un grès cérame extérieur, antidérapant et résistant au gel. Le choix dépend aussi de l’exposition et de l’entretien souhaité.",
      },
      {
        q: "Pose collée ou pose sur plots ?",
        a: "Les deux sont possibles. La pose dépend du support, des hauteurs disponibles et de la gestion de l’eau.",
      },
      {
        q: "Intervenez-vous sur escaliers extérieurs ?",
        a: "Oui, avec une attention particulière aux nez de marche, aux pentes et à la sécurité au quotidien.",
      },
    ],
  },
  "piscine-spa": {
    slug: "piscine-spa",
    nav: "Piscine & spa",
    title: "Plage piscine et spa sur mesure dans le Rhône",
    keyword: "plage piscine Rhône",
    image: images.piscine as string,
    intro:
      "Une plage piscine dans le Rhône doit être belle pieds nus, stable dans le temps et cohérente avec la maison. Damien Mugnier conçoit les abords de piscine, margelles, spas et terrasses associées avec une vision complète : support, évacuation, glissance, dilatation, découpes techniques et rendu final.",
    variants: [
      "plage piscine carrelage",
      "margelles piscine",
      "spa extérieur",
      "habillage technique",
      "terrasse piscine",
      "travertin piscine",
      "grès cérame piscine",
    ],
    problems: [
      "Margelles mal alignées qui cassent la ligne d’eau.",
      "Plage trop glissante ou brûlante en été.",
      "Trappes techniques et skimmers mal intégrés visuellement.",
    ],
    solutions: [
      "Calepinage autour du bassin avant découpe.",
      "Matériaux adaptés aux pieds nus, à l’eau et aux UV.",
      "Habillages propres des zones techniques pour garder un rendu premium.",
    ],
    story:
      "Sur un spa extérieur à Mornant, l’enjeu était d’intégrer la partie technique sans créer une verrue dans la terrasse. Damien a travaillé les habillages comme un meuble extérieur : accès conservé, lignes alignées, matériaux résistants. Le client voulait un espace détente ; il a obtenu un coin qui semble avoir toujours été prévu dans la maison.",
    faq: [
      {
        q: "Peut-on rénover une plage piscine existante ?",
        a: "Oui, après contrôle du support, des niveaux et de l’étanchéité périphérique.",
      },
      {
        q: "Quel matériau autour d’une piscine ?",
        a: "Le grès cérame extérieur et certaines pierres sont adaptés, à condition de choisir une surface antidérapante.",
      },
      {
        q: "Faites-vous aussi les spas ?",
        a: "Oui, notamment l’intégration, l’habillage et les abords pour garder une finition cohérente.",
      },
    ],
  },
  "maconnerie-generale": {
    slug: "maconnerie-generale",
    nav: "Maçonnerie générale",
    title: "Travaux de maçonnerie générale à Beauvallon",
    keyword: "maçon Beauvallon",
    image: images.mur as string,
    intro:
      "Un beau carrelage ne tient pas sur un mauvais support. C’est pourquoi Damien Mugnier intervient aussi en maçonnerie générale à Beauvallon : dalles béton, murs, reprises, seuils, escaliers, supports de terrasse ou préparation avant carrelage. L’approche est concrète : comprendre ce qui porte, ce qui bouge, ce qui prend l’eau et ce qui doit rester stable.",
    variants: [
      "dalle béton",
      "mur en pierre",
      "support carrelage",
      "reprise structure",
      "muret extérieur",
      "maçonnerie rénovation",
      "préparation terrasse",
    ],
    problems: [
      "Support trop irrégulier pour recevoir un carrelage grand format.",
      "Fissures anciennes à traiter avant finition.",
      "Muret ou seuil extérieur qui prend l’eau et dégrade le revêtement.",
    ],
    solutions: [
      "Reprise des supports avant finition.",
      "Travaux de maçonnerie adaptés au projet final.",
      "Coordination entre structure, pente, étanchéité et revêtement.",
    ],
    story:
      "À Beauvallon, une salle de bain devait recevoir un carrelage mural très grand format. Le mur existant n’était pas assez droit. Plutôt que de compenser à la colle, Damien a repris le support. La pose a ensuite été plus propre, plus durable, et les raccords dans les angles sont restés nets.",
    faq: [
      {
        q: "Pourquoi un carreleur fait-il de la maçonnerie ?",
        a: "Parce que la qualité de la pose dépend directement du support. Une reprise en amont évite fissures, creux et défauts.",
      },
      {
        q: "Réalisez-vous des dalles extérieures ?",
        a: "Oui, notamment pour terrasses, abords de piscine et supports de rénovation.",
      },
      {
        q: "Pouvez-vous intervenir avant un autre corps de métier ?",
        a: "Oui, lorsque la reprise de support prépare le chantier pour la suite.",
      },
    ],
  },
  "renovation-complete": {
    slug: "renovation-complete",
    nav: "Rénovation complète",
    title: "Rénovation complète de maison et extérieur à Beauvallon",
    keyword: "rénovation complète Beauvallon",
    image: images.bain as string,
    intro:
      "Une rénovation complète réussie ne se limite pas à changer des matériaux. Il faut organiser les étapes, anticiper les surprises et garder une cohérence entre technique et esthétique. Damien Mugnier accompagne les projets de rénovation premium à Beauvallon et dans le Sud-Ouest lyonnais : salle de bain, pièce de vie, terrasse, piscine, supports et finitions.",
    variants: [
      "rénovation salle de bain",
      "rénovation maison",
      "avant après rénovation",
      "rénovation extérieure",
      "carrelage rénovation",
      "chantier premium",
      "artisan rénovation Lyon sud",
    ],
    problems: [
      "Budget mal cadré parce que le support réel n’a pas été évalué.",
      "Enchaînement des travaux qui crée des retards ou des reprises inutiles.",
      "Finitions disparates entre intérieur et extérieur.",
    ],
    solutions: [
      "Visite technique et devis détaillé avant démarrage.",
      "Priorisation des travaux invisibles avant les finitions.",
      "Choix de matériaux cohérents avec l’usage, la lumière et le style de la maison.",
    ],
    story:
      "Sur une rénovation de salle d’eau à Brignais, la photo d’inspiration montrait du marbre noir. Sur place, le vrai défi était une ancienne évacuation mal placée. La préparation a été revue pour intégrer une douche plus confortable, puis le carrelage a été posé en respectant les lignes du miroir et du meuble. C’est ce type de décision chantier qui donne une finition haut de gamme.",
    faq: [
      {
        q: "Prenez-vous des rénovations clé en main ?",
        a: "Damien peut piloter les lots liés à son périmètre et coordonner les étapes utiles selon le chantier.",
      },
      {
        q: "Faites-vous des avant/après ?",
        a: "Oui, les rénovations sont documentées quand le client l’autorise, car elles aident à comprendre le travail réel.",
      },
      {
        q: "Quel budget prévoir ?",
        a: "Le site cible surtout les projets de 10k€ à 50k€, selon surface, matériaux et préparation nécessaire.",
      },
    ],
  },
};

export const zones = [
  "Beauvallon",
  "Givors",
  "Brignais",
  "Mornant",
  "Chaponost",
  "Saint-Genis-Laval",
];

export const localProjects = [
  {
    slug: "carreleur-beauvallon",
    title: "Carreleur à Beauvallon : rénovation intérieure et carrelage grand format",
    city: "Beauvallon",
    image: images.carrelage as string,
    keyword: "carreleur Beauvallon",
    service: "carrelage-interieur" as ServiceSlug,
    text: "À Beauvallon, les demandes concernent souvent des maisons familiales où il faut moderniser sans dénaturer. Damien Mugnier intervient comme carreleur local avec une attention particulière aux supports anciens, aux seuils et aux grands formats qui agrandissent visuellement les pièces. La proximité permet une visite rapide, un devis clair et un suivi direct du chantier.",
  },
  {
    slug: "terrasse-givors",
    title: "Terrasse carrelée à Givors : pentes, dallage et finitions extérieures",
    city: "Givors",
    image: images.terrasse as string,
    keyword: "terrasse carrelage Givors",
    service: "terrasse-exterieur" as ServiceSlug,
    text: "À Givors, les terrasses doivent composer avec les pentes, les accès jardin et parfois des supports déjà fatigués. Damien Mugnier traite d’abord l’eau et la stabilité, puis le choix du carrelage extérieur. Une terrasse réussie ne doit pas seulement être belle le jour de la réception : elle doit rester confortable après les pluies, les étés chauds et les passages quotidiens.",
  },
  {
    slug: "piscine-brignais",
    title: "Plage piscine à Brignais : margelles, carrelage et spa sur mesure",
    city: "Brignais",
    image: images.piscine as string,
    keyword: "plage piscine Brignais",
    service: "piscine-spa" as ServiceSlug,
    text: "À Brignais, les projets piscine recherchent souvent un rendu sobre, propre et durable. Damien Mugnier travaille les abords comme une continuité de la maison : margelles alignées, carrelage antidérapant, découpes autour des pièces techniques et cohérence avec la terrasse. L’objectif est simple : un espace premium qui reste facile à vivre.",
  },
];
