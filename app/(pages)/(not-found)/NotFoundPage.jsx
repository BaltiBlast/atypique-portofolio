import Link from "next/link";
import styles from "./NotFoundPage.module.css";

export const metadata = {
  title: "Page introuvable",
  description:
    "Cette page n’existe pas ou n’est plus disponible. Retrouvez l’accueil du studio ATYPIQUE.",
};

export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page introuvable</h1>
      <p className={styles.description}>
        Cette page n’existe pas ou n’est plus disponible.
      </p>
      <Link href="/" className={styles.link}>
        <span className={styles.linkLabel}>Retour à l’accueil</span>
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
