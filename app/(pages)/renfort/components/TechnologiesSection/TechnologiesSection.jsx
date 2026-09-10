import RenfortSection from "../RenfortSection/RenfortSection";
import styles from "./TechnologiesSection.module.css";

export default function TechnologiesSection({ technologies }) {
  return (
    <RenfortSection number="03" title="Technologies" titleId="technologies-title">
      <dl className={styles.list}>
        {technologies.map(([category, items]) => (
          <div className={styles.technology} key={category}>
            <dt>{category}</dt>
            <dd>{items}</dd>
          </div>
        ))}
      </dl>
    </RenfortSection>
  );
}
