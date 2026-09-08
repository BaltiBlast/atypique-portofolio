import Link from "next/link";
import styles from "./Footer.module.css";

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/florian-fougeray/", type: "linkedin" },
  { label: "GitHub", href: "https://github.com/BaltiBlast", type: "github" },
  { label: "Malt", href: "https://www.malt.fr/profile/florianfougeray", type: "malt" },
  { label: "fougeray.florian@gmail.com", href: "mailto:fougeray.florian@gmail.com", type: "email" },
  { label: "06 43 18 02 91", href: "tel:+33643180291", type: "phone" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <Link href="/" className={styles.brand} aria-label="ATYPIQUE. — Accueil">
          ATYPIQUE.
        </Link>
        <p className={styles.tagline}>Concevoir. Développer. Livrer.</p>
      </div>
      <div className={styles.content}>
        <nav aria-label="Contact et réseaux sociaux" className={styles.contacts}>
          {contactLinks.map(({ label, href, type }) => (
            <a key={href} href={href} className={styles.contact}>
              {type === "email" ? (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" />
                    <path d="m3 5 9 8 9-8" />
                </svg>
              ) : type === "phone" ? (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              ) : (
                <span
                  className={`${styles.icon} ${styles.logo}`}
                  style={{ "--footer-logo": `url(/icons/${type}.svg)` }}
                  aria-hidden="true"
                />
              )}
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} ATYPIQUE.</p>
        </div>
      </div>
    </footer>
  );
}
