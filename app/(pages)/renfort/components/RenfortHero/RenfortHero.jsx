import Link from "next/link";
import styles from "./RenfortHero.module.css";

export default function RenfortHero() {
  return (
    <section className={styles.hero} aria-labelledby="renfort-title">
      <h1 id="renfort-title" className={styles.title}><span>Renfort</span><span>back-end</span></h1>
      <div className={styles.introduction}>
        <p>J’intègre votre équipe pour développer de nouvelles fonctionnalités, améliorer l’existant et faire avancer vos projets.</p>
        <Link href="/contact/?besoin=renfort" className={styles.cta}><span>Parlons de votre besoin</span><span aria-hidden="true">⟶</span></Link>
      </div>
    </section>
  );
}
