import Image from "next/image";
import Link from "next/link";
import styles from "./LabProjects.module.css";

export default function LabProjects({ projects }) {
  return (
      <section className={styles.projects} aria-label="Projets atypiques du Lab">
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.project} data-project={project.slug} key={project.slug}>
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
                <p>{project.category}</p>
              </div>
              <h2>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
  );
}
