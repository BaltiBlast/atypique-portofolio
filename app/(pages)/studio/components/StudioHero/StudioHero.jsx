import Link from "next/link";
import styles from "./StudioHero.module.css";

export default function StudioHero() {
  return (
    <section className={styles.hero} aria-labelledby="studio-title">
      <h1 id="studio-title" className={styles.title}><span>Le</span><span>Studio</span></h1>
      <div className={styles.introduction}>
        <p>Je conçois et développe des sites, applications et logiciels adaptés à votre besoin, de l'idée jusqu'à la mise en ligne.</p>
        <Link href="/contact/?besoin=studio" className={styles.cta}><span>Parlons de votre projet</span><span aria-hidden="true">⟶</span></Link>
      </div>
    </section>
  );
}
