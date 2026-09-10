import ProjectModal from "../../../../components/ProjectModal/ProjectModal";
import styles from "./LabProjects.module.css";

export default function LabProjects({ projects }) {
  return (
    <>
      <section className={styles.projects} aria-label="Projets atypiques du Lab">
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article className={styles.project} data-project={project.slug} key={project.slug}>
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
                <p>{project.category}</p>
              </div>
              <h2>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ProjectModal projects={projects} />
    </>
  );
}
