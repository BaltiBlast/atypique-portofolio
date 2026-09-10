import ProjectModal from "../../../../components/ProjectModal/ProjectModal";
import styles from "./ProjectsList.module.css";

export default function ProjectsList({ projects }) {
  return (
    <>
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

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              className={styles.project}
              data-project={project.slug}
              data-origin={project.origin}
              key={project.slug}
            >
              <button
                type="button"
                className={styles.visual}
                data-open-project={project.slug}
                aria-label={`Découvrir le projet ${project.title}`}
              >
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.visualLabel}>Découvrir le projet</span>
              </button>
              <div className={styles.meta}>
                <p>{project.originLabel}</p>
              </div>
              <h2>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
            </article>
          ))}
        </div>

        <p className={styles.emptyState} role="status">
          Aucun projet ne correspond à ce filtre.
        </p>
      </section>

      <ProjectModal projects={projects} />
    </>
  );
}
