import RenfortSection from "../RenfortSection/RenfortSection";
import styles from "./ModalitiesSection.module.css";

export default function ModalitiesSection() {
  return (
    <RenfortSection number="04" title="Modalités d’intervention" titleId="modalities-title">
      <div className={styles.modalities}>
        <p>J’interviens à temps plein ou à temps partiel, sans durée minimale imposée.</p>
        <p>Les missions peuvent être réalisées à distance ou en mode hybride selon les modalités convenues.</p>
        <p>Je suis basé à Metz et mes disponibilités sont à confirmer selon la période et le volume d’intervention.</p>
      </div>
    </RenfortSection>
  );
}
