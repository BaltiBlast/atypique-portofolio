import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero} aria-labelledby="contact-title">
      <h1 id="contact-title" className={styles.title}>Contact</h1>
      <div className={styles.introduction}>
        <p>Je suis <strong>Florian Fougeray</strong>, développeur web indépendant basé à Metz. Je développe en autodidacte depuis 2017 et j’ai terminé ma formation de développeur en 2019.</p>
        <p>Indépendant depuis fin 2024, j’ai réalisé avec succès plus de 15 projets, en renfort d’équipes techniques comme dans la conception de sites, d’applications et de logiciels sur mesure.</p>
      </div>
    </section>
  );
}
