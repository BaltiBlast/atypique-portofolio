export const projects = [
  {
    slug: "the-photobooth-project",
    title: "The Photobooth Project",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Borne photo interactive",
    description:
      "Une borne d’arcade créée sur mesure comme photobooth interactif, avec une galerie privée accessible par QR codes.",
    details:
      "The Photobooth Project est né d’une collaboration avec un ami ingénieur pour proposer une animation ludique aux invités de son mariage. Il a conçu la borne d’arcade, ses commandes physiques et le serveur Python chargé de traduire les signaux des boutons en frappes clavier. J’ai développé l’expérience logicielle permettant de piloter l’appareil photo, de sélectionner les clichés et de les retrouver ensuite dans une galerie en ligne.",
    objectives: [
      "Transformer une borne d’arcade en expérience photographique autonome.",
      "Piloter un appareil photo et son retour vidéo depuis une interface web.",
      "Permettre aux invités de retrouver et télécharger facilement leurs photos.",
      "Relier des commandes physiques, une application web et des services cloud.",
    ],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "Python",
      "Sony Camera Remote SDK",
      "MongoDB",
      "Wasabi",
      "Sharp",
      "Archiver",
    ],
    images: [
      {
        src: "/images/projects/photobooth/main-title.png",
        alt: "Interface de validation d’une photo affichée sur la borne d’arcade The Photobooth Project.",
      },
      {
        src: "/images/projects/photobooth/arcade-cabinet.png",
        alt: "Borne d’arcade créée pour The Photobooth Project avec appareil photo, écran et boutons lumineux.",
      },
      {
        src: "/images/projects/photobooth/galery.png",
        alt: "Galerie privée de The Photobooth Project présentant les photos à télécharger.",
      },
    ],
    status: "Projet archivé, réutilisé ponctuellement",
    duration: "5 jours de développement",
    availability: "Borne d’arcade dédiée",
    liveUrl: null,
    caseStudy: {
      sections: [
        {
          title: "Le concept",
          content:
            "Les invités utilisent les boutons de la borne pour déclencher une photo, en afficher un aperçu, puis choisir de la conserver ou de l’annuler. L’expérience transpose les gestes simples d’une borne d’arcade dans un photobooth conçu pour inaugurer leur présence au mariage d’une manière ludique.",
        },
        {
          title: "De la borne à l’appareil photo",
          content:
            "Un serveur Python développé par mon ami reçoit les signaux des boutons physiques et les transforme en frappes clavier exploitées par l’interface React. Un Sony A7 III est piloté en USB avec le Camera Remote SDK de Sony. Son retour vidéo rejoint la borne par HDMI à travers une carte d’acquisition, afin d’être affiché directement dans l’interface.",
        },
        {
          title: "La galerie privée",
          content:
            "Connectée à Internet par une clé 5G, la borne transmet les clichés à une API Node.js et Express. Les images sont stockées sur Wasabi et leurs liens dans MongoDB. La galerie React, hébergée sur Render, est distribuée aux invités uniquement par QR codes : l’un ouvre la collection complète, tandis qu’un code propre à chaque cliché donne un accès direct à la photo. Sharp assure le traitement et la compression des images, qui peuvent être téléchargées individuellement ou réunies dans une archive ZIP générée avec Archiver.",
        },
        {
          title: "Ma contribution",
          content:
            "J’ai conçu l’ensemble de l’identité graphique et développé l’interface de prise de vue, la galerie, la gestion des QR codes, l’API et le stockage des photos. J’ai également intégré le pilotage de l’appareil et son retour en direct. Ce projet m’a permis d’apprendre à associer un signal physique à une action dans le navigateur, à commander un appareil photo avec un SDK dédié et à gérer un flux vidéo continu dans une interface web.",
        },
      ],
    },
  },
  {
    slug: "le-carrousel-guinguette",
    title: "Le Carrousel Guinguette",
    origin: "studio",
    originLabel: "Projet Studio",
    category: "Plateforme web et outil de gestion",
    description:
      "Une plateforme responsive pour faire connaître une guinguette, publier sa programmation et gérer les réservations.",
    details:
      "Le gérant du Carrousel, une guinguette située en Meuse, avait besoin de faire connaître ce nouveau lieu de vie et de centraliser son activité. La solution réunit un site public consacré au lieu et à sa programmation, ainsi qu’un espace d’administration pour gérer les événements, les réservations et le livre d’or.",
    objectives: [
      "Faire connaître le lieu et rendre sa programmation accessible en ligne.",
      "Permettre aux visiteurs de réserver dans la limite des places disponibles.",
      "Centraliser la gestion des événements, des réservations et du livre d’or.",
      "Informer automatiquement les visiteurs et l’administrateur aux moments clés.",
    ],
    technologies: [
      "EJS",
      "Node.js",
      "Express",
      "CSS",
      "MongoDB",
      "Mongoose",
      "Web Push",
      "Nodemailer",
      "Gemini",
    ],
    images: [
      {
        src: "/images/projects/carrousel-guinguette/home.png",
        alt: "Page d’accueil du Carrousel présentant la guinguette et ses prochains événements.",
      },
      {
        src: "/images/projects/carrousel-guinguette/event-details.png",
        alt: "Page détaillée d’un événement du Carrousel avec son formulaire de réservation.",
      },
      {
        src: "/images/projects/carrousel-guinguette/dashboard-admin.png",
        alt: "Tableau de bord du Carrousel permettant à l’administrateur de gérer les événements.",
      },
    ],
    status: "En ligne",
    duration: "10 jours de développement",
    availability: "Ordinateur, tablette et mobile",
    liveUrl: "https://le-carrousel-guinguette.fr/",
    caseStudy: {
      sections: [
        {
          title: "Le site public",
          content:
            "Le site présente la guinguette, ses informations pratiques et les événements à venir. Les visiteurs peuvent consulter le détail de chaque rendez-vous, réserver pour un groupe allant jusqu’à 20 personnes dans la limite des places disponibles, puis proposer un message dans le livre d’or. L’ensemble de l’interface est responsive.",
        },
        {
          title: "L’outil de gestion",
          content:
            "Depuis un espace protégé par un lien de connexion à usage unique envoyé par e-mail, l’administrateur peut créer, consulter, modifier et supprimer les événements. Il valide ou refuse les demandes de réservation, modère les messages du livre d’or et dispose d’une liste opérationnelle pour accueillir les personnes inscrites le jour de l’événement.",
        },
        {
          title: "Notifications et assistance",
          content:
            "Chaque demande de réservation déclenche un e-mail de confirmation. Les visiteurs sont ensuite informés lorsque leur demande est acceptée ou refusée, ainsi qu’en cas d’annulation de l’événement. La PWA installable avertit aussi l’administrateur par notification Web Push lors d’une nouvelle réservation ou d’un nouveau message dans le livre d’or. Dans le back-office, Gemini propose une correction orthographique et une optimisation SEO des événements, que le gérant peut contrôler avant validation.",
        },
        {
          title: "Ma contribution",
          content:
            "J’ai pris en charge le projet de bout en bout : compréhension du besoin, conception de l’interface et de la base de données, développement, intégration, déploiement, configuration du nom de domaine et des DNS. J’ai également construit l’identité visuelle avec l’assistance de l’IA. La mise en place des notifications Web Push était une première et m’a permis d’approfondir ce mécanisme sur différents appareils.",
        },
      ],
    },
  },
  {
    slug: "stellar-wedding",
    title: "Stellar Wedding",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Faire-part interactif",
    description: "Un faire-part de mariage interactif conçu comme un jeu vidéo.",
    details:
      "Les mariés souhaitaient inviter leurs proches d’une manière originale tout en recueillant les informations nécessaires à l’organisation du mariage : présence, accompagnants, enfants, régimes alimentaires et participation aux différents temps de la journée.",
    objectives: [
      "Transformer le faire-part de mariage en une expérience ludique et interactive.",
      "Recueillir les réponses et les informations utiles à l’organisation au fil du jeu.",
      "Centraliser les données dans Google Sheets pour faciliter le suivi des invités.",
    ],
    technologies: ["Phaser.js", "HTML", "CSS", "Node.js", "Express", "SheetDB", "Google Sheets"],
    images: [
      {
        src: "/images/projects/stellar-wedding/screen-title.png",
        alt: "Écran d’accueil en pixel art de Stellar Wedding avec les deux personnages des mariés.",
      },
      {
        src: "/images/projects/stellar-wedding/atrebois.png",
        alt: "Personnage de la mariée explorant un campement en forêt dans Stellar Wedding.",
      },
      {
        src: "/images/projects/stellar-wedding/cockpit.png",
        alt: "Formulaire d’identification intégré au cockpit du vaisseau dans Stellar Wedding.",
      },
      {
        src: "/images/projects/stellar-wedding/space-traveling.png",
        alt: "Vaisseau spatial naviguant entre des astéroïdes dans Stellar Wedding.",
      },
    ],
    status: "Projet réalisé",
    duration: "Trois semaines de développement",
    availability: "Expérience conçue pour ordinateur",
    liveUrl: "https://wedding-game.onrender.com",
    caseStudy: {
      sections: [
        {
          title: "L’expérience",
          content:
            "Inspirée par l’univers spatial d’Outer Wilds et ponctuée de références à la pop culture, l’expérience invite à incarner la mariée ou le marié, puis à partir sauver l’autre personnage après le crash de son vaisseau sur une planète inconnue. Une série de quêtes permet d’atteindre un premier vaisseau. Les informations nécessaires au décollage prennent alors la forme des réponses attendues par les mariés. Une fois celles-ci renseignées, l’invité pilote le vaisseau, évite des astéroïdes et rejoint la planète où se trouve le personnage à secourir. Le voyage se termine sur un écran de crédits et un formulaire facultatif permettant de laisser un commentaire.",
        },
        {
          title: "Ma contribution",
          content:
            "J’ai assuré l’intégralité du développement, l’intégration des illustrations fournies par les clients et le déploiement du projet. J’ai programmé les interactions, les réactions des personnages, les dialogues et les animations. Le scénario et ses références ont été imaginés par les clients, puis ajustés avec eux au cours du développement. Musicien, j’ai également réalisé une reprise et un remaster du thème du menu principal d’Outer Wilds pour l’écran-titre, conformément à la direction souhaitée par les mariés.",
        },
        {
          title: "Collecte des réponses",
          content:
            "L’API développée avec Node.js et Express reçoit les réponses saisies dans le jeu. SheetDB assure ensuite leur transmission vers une feuille Google Sheets, consultable par les mariés pour suivre les réponses des invités.",
        },
        {
          title: "Défis et apprentissages",
          content:
            "Ce projet m’a amené à sortir des habitudes du développement web classique pour travailler le son, la musique, les interactions et le level design. Ces dimensions devaient fonctionner ensemble pour maintenir la continuité entre le récit, le jeu et la collecte des informations.",
        },
      ],
    },
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export const labProjects = projects.filter((project) => project.origin === "lab");
