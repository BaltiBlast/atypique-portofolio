import styles from "./RenfortSection.module.css";

export default function RenfortSection({ number, title, titleId, children }) {
  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <p className={styles.number} aria-hidden="true">
        {number}
      </p>
      <div className={styles.content}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
