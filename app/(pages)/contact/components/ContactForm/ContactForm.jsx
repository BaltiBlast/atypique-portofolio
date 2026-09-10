import { Suspense } from "react";
import { contactNeeds } from "../../contactForm";
import ContactNeedSelect from "./ContactNeedSelect";
import Web3FormsForm from "./Web3FormsForm";
import styles from "./ContactForm.module.css";

function ContactNeedSelectFallback() {
  return <select id="need" name="need" required defaultValue=""><option value="" disabled>Sélectionnez votre besoin</option>{contactNeeds.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}</select>;
}

export default function ContactForm({ accessKey }) {
  return (
    <section className={styles.section} aria-labelledby="form-title">
      <div className={styles.content}>
        <h2 id="form-title" className={styles.title}>Votre projet</h2>
        <Web3FormsForm accessKey={accessKey} className={styles.form} statusClassName={styles.status}>
          <div className={styles.fieldWide}>
            <label htmlFor="need"><span className={styles.labelText}>Type de besoin <span className={styles.required} aria-hidden="true">*</span></span></label>
            <Suspense fallback={<ContactNeedSelectFallback />}><ContactNeedSelect /></Suspense>
          </div>
          <div className={styles.field}>
            <label htmlFor="name"><span className={styles.labelText}>Nom et prénom <span className={styles.required} aria-hidden="true">*</span></span></label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email"><span className={styles.labelText}>Adresse email <span className={styles.required} aria-hidden="true">*</span></span></label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="organization">Entreprise ou organisation <span className={styles.optional}>Facultatif</span></label>
            <input id="organization" name="organization" type="text" autoComplete="organization" />
          </div>
          <div className={styles.fieldWide}>
            <label htmlFor="budget">Budget indicatif <span className={styles.optional}>Facultatif</span></label>
            <input id="budget" name="budget" type="text" inputMode="numeric" />
          </div>
          <div className={styles.fieldWide}>
            <label htmlFor="description"><span className={styles.labelText}>Description du besoin <span className={styles.required} aria-hidden="true">*</span></span></label>
            <textarea id="description" name="description" rows="8" required />
          </div>
          <div className={styles.footer}>
            <p>Les informations saisies seront utilisées uniquement pour répondre à votre demande. Les champs marqués d’un * sont obligatoires.</p>
            <button type="submit">Envoyer ma demande</button>
          </div>
        </Web3FormsForm>
      </div>
    </section>
  );
}
