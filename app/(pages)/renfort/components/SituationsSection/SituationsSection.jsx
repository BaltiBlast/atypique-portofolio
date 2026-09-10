import RenfortSection from "../RenfortSection/RenfortSection";
import styles from "./SituationsSection.module.css";

export default function SituationsSection({ situations }) {
  return (
    <RenfortSection number="01" title="Dans quelles situations puis-je intervenir ?" titleId="situations-title">
      <ul className={styles.list}>
        {situations.map((situation, index) => (
          <li key={situation}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{situation}</span>
          </li>
        ))}
      </ul>
    </RenfortSection>
  );
}
