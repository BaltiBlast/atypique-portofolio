import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        <span className={styles.line}>Je conçois.</span>{" "}
        <span className={styles.line}>Je développe.</span>{" "}
        <span className={styles.line}>Je livre.</span>
      </h1>
      <div className={styles.introduction}>
        <p className={styles.details}>
          <span>Web | Interactif</span>
          <span>FR / 2026</span>
        </p>
        <p className={styles.description}>
          Studio de développement<br />web &amp; expériences interactives
        </p>
        <Link href="/contact/" className={styles.cta}>
          <span>Parlons de votre besoin</span>
          <span aria-hidden="true" className={styles.arrow}>⟶</span>
        </Link>
      </div>
    </section>
  );
}
