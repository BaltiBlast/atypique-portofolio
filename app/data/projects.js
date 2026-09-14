export const projects = [
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
  {
    slug: "atelier-nord",
    title: "Atelier Nord",
    origin: "studio",
    originLabel: "Projet Studio",
    category: "Site vitrine",
    description: "Un site vitrine conçu pour présenter une activité, ses services et son univers visuel.",
    details: "Atelier Nord imagine une présence en ligne sobre et structurée pour un atelier créatif. Le projet articule les savoir-faire, les réalisations et les informations pratiques dans une navigation directe.",
    objectives: ["Présenter clairement l’activité et les services de l’atelier.", "Créer une expérience éditoriale cohérente avec son identité visuelle."],
    technologies: ["Next.js", "CSS Modules", "CMS"],
    images: [
      { src: "/images/lab/signal-01-a.jpg", alt: "Installation artistique exposée dans une galerie contemporaine." },
      { src: "/images/lab/signal-01-b.jpg", alt: "Câbles audio suspendus sur un panneau d’atelier." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "signal-01",
    title: "Signal / 01",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Expérience audiovisuelle",
    description: "Une interface qui transforme les mouvements du curseur en compositions graphiques et sonores.",
    details: "Signal / 01 explore la traduction d’un geste simple en matière visuelle et sonore. Le visiteur compose une séquence en déplaçant son curseur, puis observe la forme évoluer selon sa vitesse et sa trajectoire.",
    objectives: ["Créer une interaction immédiatement compréhensible sans mode d’emploi.", "Faire dialoguer le mouvement, l’image et le son dans une même expérience."],
    technologies: ["Canvas", "Web Audio", "JavaScript"],
    images: [
      { src: "/images/lab/signal-01-a.jpg", alt: "Installation artistique exposée dans une galerie contemporaine." },
      { src: "/images/lab/signal-01-b.jpg", alt: "Câbles audio suspendus sur un panneau d’atelier." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "archive-sensible",
    title: "Archive sensible",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Exploration interactive",
    description: "Une collection numérique qui se parcourt par rapprochements de formes, de textures et de souvenirs.",
    details: "Archive sensible imagine une autre manière de consulter une collection. Les contenus ne sont pas classés par date ou par thème : ils se répondent par leurs couleurs, leurs matières et les souvenirs qu’ils peuvent évoquer.",
    objectives: ["Donner une place centrale à l’exploration et à la curiosité.", "Construire des rapprochements visuels qui évoluent au fil de la navigation."],
    technologies: ["Next.js", "Canvas", "API d’images"],
    images: [
      { src: "/images/lab/archive-sensible-a.jpg", alt: "Documents et archives accumulés sur une table d’atelier." },
      { src: "/images/lab/archive-sensible-b.jpg", alt: "Portraits imprimés sur de grands voiles dans une installation." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "hors-champ",
    title: "Hors champ",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Récit interactif",
    description: "Une narration dont le contenu évolue selon le rythme de lecture et les choix du visiteur.",
    details: "Hors champ est un récit numérique fragmenté. Les pauses, les retours et les choix du lecteur influencent l’ordre des scènes, jusqu’à produire une lecture différente pour chaque parcours.",
    objectives: ["Utiliser le rythme de navigation comme élément narratif.", "Laisser au lecteur une part active sans interrompre le récit."],
    technologies: ["React", "Web Animations", "Audio"],
    images: [
      { src: "/images/lab/hors-champ-a.jpg", alt: "Sculptures abstraites dans un espace d’exposition monochrome." },
      { src: "/images/lab/hors-champ-b.jpg", alt: "Sculpture monumentale noire découpée sur un ciel nuageux." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "flux-metier",
    title: "Flux métier",
    origin: "renfort",
    originLabel: "Mission en renfort",
    category: "Développement back-end",
    description: "Une intervention back-end consacrée à la fiabilisation des échanges de données d’un outil métier.",
    details: "Flux métier représente une mission de renfort centrée sur la consolidation d’échanges entre plusieurs services. Le travail porte sur la lisibilité des flux, la gestion des erreurs et la stabilité des traitements.",
    objectives: ["Fiabiliser les échanges de données entre les services existants.", "Rendre les incidents plus simples à identifier et à résoudre."],
    technologies: ["Node.js", "API REST", "Base de données"],
    images: [
      { src: "/images/lab/hors-champ-a.jpg", alt: "Sculptures abstraites dans un espace d’exposition monochrome." },
      { src: "/images/lab/hors-champ-b.jpg", alt: "Sculpture monumentale noire découpée sur un ciel nuageux." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "pilotis",
    title: "Pilotis",
    origin: "studio",
    originLabel: "Projet Studio",
    category: "Application web",
    description: "Une application web pensée pour centraliser le suivi d’une activité et simplifier les tâches quotidiennes.",
    details: "Pilotis rassemble dans une interface unique les informations utiles au suivi quotidien d’une activité. Les écrans sont organisés autour des actions fréquentes et d’une lecture rapide des éléments à traiter.",
    objectives: ["Centraliser les informations dispersées dans un outil unique.", "Réduire le nombre d’étapes nécessaires aux tâches récurrentes."],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    images: [
      { src: "/images/lab/typometre-a.jpg", alt: "Sculpture abstraite noire sur un socle clair." },
      { src: "/images/lab/typometre-b.jpg", alt: "Détail d’une sculpture texturée photographiée en noir et blanc." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "typometre",
    title: "Typomètre",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Typographie cinétique",
    description: "Un terrain de jeu typographique où les mots réagissent à la vitesse, au son et à l’espace disponible.",
    details: "Typomètre transforme la typographie en matière vivante. La taille, la tension et le rythme des lettres changent selon l’espace disponible et les sons captés autour du dispositif.",
    objectives: ["Faire ressentir la typographie comme une forme physique.", "Adapter la composition en temps réel à son environnement."],
    technologies: ["Variable Fonts", "Web Audio", "CSS"],
    images: [
      { src: "/images/lab/typometre-a.jpg", alt: "Sculpture abstraite noire sur un socle clair." },
      { src: "/images/lab/typometre-b.jpg", alt: "Détail d’une sculpture texturée photographiée en noir et blanc." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
  {
    slug: "latence",
    title: "Latence",
    origin: "lab",
    originLabel: "Projet du Lab",
    category: "Installation connectée",
    description: "Une expérience collective qui rend visibles les délais et les silences entre plusieurs interactions en ligne.",
    details: "Latence matérialise le temps invisible qui sépare deux actions connectées. Chaque échange déclenche une impulsion dont le trajet, les interruptions et le délai deviennent visibles dans l’installation.",
    objectives: ["Donner une forme tangible aux délais d’un réseau.", "Créer une expérience collective à partir d’interactions distantes."],
    technologies: ["WebSocket", "Node.js", "Électronique"],
    images: [
      { src: "/images/lab/latence-a.jpg", alt: "Connecteur et câble noir photographiés en gros plan." },
      { src: "/images/lab/latence-b.jpg", alt: "Connecteurs réseau rassemblés dans un atelier technique." },
    ],
    status: "Projet fictif",
    liveUrl: null,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export const labProjects = projects.filter((project) => project.origin === "lab");
