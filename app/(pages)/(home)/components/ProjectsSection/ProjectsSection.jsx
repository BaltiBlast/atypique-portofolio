import Link from "next/link";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="projects-title">
      <div className={styles.heading}>
        <h2 id="projects-title" className={styles.title}>
          Projets
        </h2>
        <div className={styles.echo} aria-hidden="true">
          <span>Projets</span>
          <svg className={styles.arrow} viewBox="0 0 100 100" fill="none">
            <path d="M8 42H65L43 20L54 9L94 50L54 91L43 80L65 58H8Z" />
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>Produits professionnels, missions en renfort et créations atypiques.</p>
        <Link href="/projets/" className={styles.link}>
          <span>Voir tous les projets</span>
        </Link>
      </div>
    </section>
  );
}
