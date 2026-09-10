import ProjectsHero from "./components/ProjectsHero/ProjectsHero";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import styles from "./page.module.css";
import { projects } from "./projectsData";

export const metadata = {
  title: "Projets",
  description:
    "L’espace projets d’ATYPIQUE., entre développement web au Studio et expérimentations interactives au Lab.",
};

export default function ProjetsPage() {
  return (
    <main className={styles.page}>
      <ProjectsHero />
      <ProjectsList projects={projects} />
    </main>
  );
}
