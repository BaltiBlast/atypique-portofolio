import Link from "next/link";
import styles from "./RenfortCta.module.css";

export default function RenfortCta() {
  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Un besoin côté back-end ?</h2>
        <p>Présentez-moi votre contexte et voyons comment je peux renforcer votre équipe.</p>
      </div>
      <Link href="/contact/?besoin=renfort" className={styles.link}>
        <span>Parlons de votre besoin</span>
        <span aria-hidden="true">⟶</span>
      </Link>
    </section>
  );
}
