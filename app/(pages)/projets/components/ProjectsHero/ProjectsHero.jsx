import Link from "next/link";
import styles from "./ProjectsHero.module.css";

export default function ProjectsHero() {
  return (
    <section className={styles.hero} aria-labelledby="projects-title">
      <h1 id="projects-title" className={styles.title}>Projets</h1>
      <div className={styles.introduction}>
        <p>Produits professionnels, missions en renfort et créations atypiques.</p>
        <Link href="/contact/" className={styles.primaryCta}>
          <span>Parlons de votre projet</span>
          <span aria-hidden="true">⟶</span>
        </Link>
      </div>
    </section>
  );
}
