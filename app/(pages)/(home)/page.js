import Hero from "./components/Hero/Hero";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import { serviceSections } from "./home.data";
import styles from "./page.module.css";

export const metadata = {
  title: { absolute: "ATYPIQUE. | Studio indépendant de développement web" },
  description:
    "Découvrez ATYPIQUE., studio indépendant de développement web : missions freelance back-end, création de projets web complets et explorations interactives dans le Lab.",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.heroFrame}>
        <Hero />
      </div>
      {serviceSections.map((section) => (
        <ServiceSection key={section.id} section={section} />
      ))}
      <ProjectsSection />
    </main>
  );
}
