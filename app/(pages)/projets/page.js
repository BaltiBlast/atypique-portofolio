import Link from "next/link";
import ProjectModal from "./ProjectModal/ProjectModal";
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
      <section className={styles.hero} aria-labelledby="projects-title">
        <h1 id="projects-title" className={styles.heroTitle}>Projets</h1>
        <div className={styles.heroIntroduction}>
          <p>Produits professionnels, missions en renfort et créations atypiques.</p>
          <Link href="/contact/" className={styles.primaryCta}>
            <span>Parlons de votre projet</span>
            <span aria-hidden="true">⟶</span>
          </Link>
        </div>
      </section>

      <section className={styles.projects} aria-label="Liste des projets">
        <span id="tous" className={`${styles.filterTarget} ${styles.allTarget}`} />
        <span id="studio" className={`${styles.filterTarget} ${styles.studioTarget}`} />
        <span id="lab" className={`${styles.filterTarget} ${styles.labTarget}`} />
        <span id="renfort" className={`${styles.filterTarget} ${styles.renfortTarget}`} />

        <nav className={styles.filters} aria-label="Filtrer les projets par catégorie">
          <a className={`${styles.filterLink} ${styles.filterAll}`} href="#tous">Tous les projets</a>
          <a className={`${styles.filterLink} ${styles.filterStudio}`} href="#studio">Projets Studio</a>
          <a className={`${styles.filterLink} ${styles.filterLab}`} href="#lab">Projets du Lab</a>
          <a className={`${styles.filterLink} ${styles.filterRenfort}`} href="#renfort">Missions en renfort</a>
        </nav>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <article className={styles.project} data-project={project.slug} data-origin={project.origin} key={project.slug}>
              <button
                type="button"
                className={styles.projectVisual}
                data-open-project={project.slug}
                aria-label={`Découvrir le projet ${project.title}`}
              >
                <span className={styles.projectNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.projectVisualLabel}>Découvrir le projet</span>
              </button>
              <div className={styles.projectMeta}>
                <p>{project.originLabel}</p>
              </div>
              <h2>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.emptyState} role="status">
          Aucun projet ne correspond à ce filtre.
        </p>
      </section>

      <ProjectModal projects={projects} />
    </main>
  );
}
