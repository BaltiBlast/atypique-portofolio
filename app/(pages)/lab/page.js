import Link from "next/link";
import styles from "./page.module.css";
import { labProjects } from "./labProjectsData";

export const metadata = {
  title: "Le Lab",
  description:
    "Le Lab ATYPIQUE. est consacré aux projets web expérimentaux, aux expériences interactives et aux idées qui sortent des sentiers battus.",
};

export default function LabPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="lab-title">
        <h1 id="lab-title" className={styles.heroTitle}>
          <span>Le</span>
          <span>Lab</span>
        </h1>
        <div className={styles.heroIntroduction}>
          <p>
            Le Lab est l’espace dédié aux projets atypiques : outils sur mesure,
            dispositifs numériques et expériences interactives. J’y expérimente
            de nouvelles idées et j’y présente les réalisations qui sortent des
            formats habituels.
          </p>
          <Link href="/contact/" className={styles.primaryCta}>
            <span>Parlons de votre projet</span>
            <span aria-hidden="true">⟶</span>
          </Link>
        </div>
      </section>

      <section className={styles.projects} aria-label="Projets atypiques du Lab">
        <div className={styles.projectGrid}>
          {labProjects.map((project, index) => (
            <article className={styles.project} data-project={project.slug} key={project.slug}>
              <div className={styles.projectVisual} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.projectMeta}>
                <p>{project.category}</p>
                <p>{project.status}</p>
              </div>
              <h2>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.liveUrl && (
                <a href={project.liveUrl} className={styles.projectLink}>Visiter le projet</a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
