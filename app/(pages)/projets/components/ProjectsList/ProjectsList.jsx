import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsList.module.css";

export default function ProjectsList({ projects }) {
  return (
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
          {projects.map((project) => (
            <article
              className={styles.project}
              data-project={project.slug}
              data-origin={project.origin}
              key={project.slug}
            >
              <Link
                href={`/projets/${project.slug}/`}
                className={styles.visual}
                aria-label={`Découvrir le projet ${project.title}`}
              >
                <Image
                  src={project.images[0].src}
                  alt=""
                  width={1200}
                  height={900}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={styles.image}
                  unoptimized
                />
                <span className={styles.visualLabel}>Découvrir le projet</span>
              </Link>
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
  );
}
