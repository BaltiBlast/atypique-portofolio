import RenfortSection from "../RenfortSection/RenfortSection";
import styles from "./ExpertisesSection.module.css";

export default function ExpertisesSection({ expertises }) {
  return (
    <RenfortSection number="02" title="Mes domaines d’intervention" titleId="expertises-title">
      <div className={styles.grid}>
        {expertises.map(([title, description], index) => (
          <article className={styles.expertise} key={title}>
            <p className={styles.number} aria-hidden="true">
              /{String(index + 1).padStart(2, "0")}
            </p>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </RenfortSection>
  );
}
