import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet : contactez ATYPIQUE. pour une mission freelance back-end ou la création complète de votre projet web.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <ContactHero />
      <ContactForm accessKey={process.env.KEY_WEB3FORMS} />
    </main>
  );
}
