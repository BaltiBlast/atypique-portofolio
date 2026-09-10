import Link from "next/link";
import styles from "./LabHero.module.css";

export default function LabHero() {
  return (
    <section className={styles.hero} aria-labelledby="lab-title">
      <h1 id="lab-title" className={styles.title}>
        <span>Le</span>
        <span>Lab</span>
      </h1>
      <div className={styles.introduction}>
        <p>
          Le Lab est l’espace dédié aux projets atypiques : outils sur mesure,
          dispositifs numériques et expériences interactives. J’y expérimente
          de nouvelles idées et j’y présente les réalisations qui sortent des
          formats habituels.
        </p>
        <Link href="/contact/?besoin=lab" className={styles.primaryCta}>
          <span>Donnons forme à votre idée</span>
          <span aria-hidden="true">⟶</span>
        </Link>
      </div>
    </section>
  );
}
