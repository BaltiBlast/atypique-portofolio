import Link from "next/link";
import styles from "./ServiceSection.module.css";

export default function ServiceSection({
  id, number, eyebrow, title, description, ctaLabel, ctaHref = "/contact/",
  secondaryCtaLabel, secondaryCtaHref, fullWidthContentOnMobile = false,
}) {
  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`${styles.layout}${fullWidthContentOnMobile ? ` ${styles.fullWidthContentOnMobile}` : ""}`}>
        <span className={styles.number} aria-hidden="true">{number}</span>
        <span className={styles.rule} aria-hidden="true" />
        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>
            {description}
          </p>
          {ctaLabel && (
            <Link href={ctaHref} className={styles.cta}>
              <span>{ctaLabel}</span>
              <span aria-hidden="true" className={styles.arrow}>⟶</span>
            </Link>
          )}
          {secondaryCtaLabel && secondaryCtaHref && (
            <a href={secondaryCtaHref} className={styles.secondaryCta}>
              {secondaryCtaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
