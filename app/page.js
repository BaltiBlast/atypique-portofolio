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
    ctaLabel: "Découvrir mon expertise",
    ctaHref: "/renfort/",
    secondaryCtaLabel: "Voir les projets en renfort",
    secondaryCtaHref: "/projets/",
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
    ctaHref: "/contact/",
    secondaryCtaLabel: "Voir les projets du Studio",
    secondaryCtaHref: "/projets/",
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
