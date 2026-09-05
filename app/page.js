import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <p>Duo typographique retenu</p>
        <h1>League Gothic + Geist Sans</h1>
      </header>

      <section className={styles.specimen}>
        <p className={styles.label}>Titres — League Gothic</p>
        <p className={styles.display}>
          Je conçois.<br />
          Je développe.<br />
          Je livre.
        </p>
        <h2 className={styles.service}>Renfort back-end</h2>
        <p className={styles.bodyCopy}>
          Studio de développement web &amp; expériences interactives.
          J’intègre vos équipes pour accélérer vos projets back-end.
        </p>
        <p className={styles.navigation}>
          Studio&nbsp;&nbsp;&nbsp; Le Lab&nbsp;&nbsp;&nbsp; Projets&nbsp;&nbsp;&nbsp;
          Contact
        </p>
      </section>
    </main>
  );
}
