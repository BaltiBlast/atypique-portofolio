import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet : contactez ATYPIQUE. pour une mission freelance back-end ou la création complète de votre projet web.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <h1 id="contact-title" className={styles.heroTitle}>
          Contact
        </h1>
        <div className={styles.heroIntroduction}>
          <p>
            Je suis <strong>Florian Fougeray</strong>, développeur web indépendant basé à Metz. Je développe en
            autodidacte depuis 2017 et j’ai terminé ma formation de développeur en 2019.
          </p>
          <p>
            Indépendant depuis fin 2024, j’ai réalisé avec succès plus de 15 projets, en renfort d’équipes techniques
            comme dans la conception de sites, d’applications et de logiciels sur mesure.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.formSection}`} aria-labelledby="form-title">
        <div className={styles.sectionContent}>
          <h2 id="form-title" className={styles.sectionTitle}>
            Votre projet
          </h2>
          <form className={styles.form}>
            <div className={styles.fieldWide}>
              <label htmlFor="need">
                <span className={styles.labelText}>
                  Type de besoin{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
              </label>
              <select id="need" name="need" required defaultValue="">
                <option value="" disabled>
                  Sélectionnez votre besoin
                </option>
                <option value="studio">Création d’un projet avec le Studio</option>
                <option value="renfort">Mission en renfort back-end</option>
                <option value="lab">Projet interactif avec le Lab</option>
                <option value="other">Autre besoin</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="name">
                <span className={styles.labelText}>
                  Nom et prénom{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                <span className={styles.labelText}>
                  Adresse email{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="organization">
                Entreprise ou organisation <span className={styles.optional}>Facultatif</span>
              </label>
              <input id="organization" name="organization" type="text" autoComplete="organization" />
            </div>

            <div className={styles.fieldWide}>
              <label htmlFor="budget">
                Budget indicatif <span className={styles.optional}>Facultatif</span>
              </label>
              <input id="budget" name="budget" type="text" inputMode="numeric" />
            </div>

            <div className={styles.fieldWide}>
              <label htmlFor="description">
                <span className={styles.labelText}>
                  Description du besoin{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
              </label>
              <textarea id="description" name="description" rows="8" required />
            </div>

            <div className={styles.formFooter}>
              <p>
                Les informations saisies seront utilisées uniquement pour répondre à votre demande. Les champs marqués
                d’un * sont obligatoires.
              </p>
              <button type="submit" disabled>
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
