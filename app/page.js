import Hero from "./components/Hero/Hero";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import styles from "./page.module.css";

export const metadata = {
  title: { absolute: "ATYPIQUE. | Studio indépendant de développement web" },
  description:
    "Découvrez ATYPIQUE., studio indépendant de développement web : missions freelance back-end, création de projets web complets et explorations interactives dans le Lab.",
};

const serviceSections = [
  {
    id: "backend",
    number: "01",
    fullWidthContentOnMobile: true,
    eyebrow: "Pour les équipes techniques",
    title: (<>Renfort<br />back-end</>),
    description:
      "J’intègre une équipe existante pour développer des fonctionnalités, renforcer une architecture ou améliorer ses processus techniques.",
    ctaLabel: "Parlons de votre besoin",
    ctaHref: "/contact/?besoin=renfort",
    secondaryCtaLabel: "Voir les projets en renfort",
    secondaryCtaHref: "/projets/#renfort",
  },
  {
    id: "studio",
    number: "02",
    fullWidthContentOnMobile: true,
    eyebrow: "Pour les entreprises et les particuliers",
    title: "Le Studio",
    description:
      "Je conçois et développe votre site, application ou logiciel, de l’idée jusqu’à sa mise en ligne.",
    ctaLabel: "Parlons de votre projet",
    ctaHref: "/contact/?besoin=studio",
    secondaryCtaLabel: "Voir les projets du Studio",
    secondaryCtaHref: "/projets/#studio",
  },
  {
    id: "lab",
    number: "03",
    fullWidthContentOnMobile: true,
    eyebrow: "Pour les idées qui sortent du cadre",
    title: "Le Lab",
    description:
      "J’imagine et développe des outils sur mesure, des dispositifs numériques et des expériences interactives pour concrétiser les projets atypiques. Du logiciel qui pilote un dispositif physique à l’expérience web expérimentale, le Lab permet d’explorer des solutions qui sortent des formats habituels.",
    ctaLabel: "Donnons forme à votre idée",
    ctaHref: "/contact/?besoin=lab",
    secondaryCtaLabel: "Découvrir le Lab",
    secondaryCtaHref: "/lab/",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.heroFrame}>
        <Hero />
      </div>
      {serviceSections.map((section) => (
        <ServiceSection key={section.id} {...section} />
      ))}
      <ProjectsSection />
    </main>
  );
}
