import StudioSection from "../StudioSection/StudioSection";
import styles from "./NeedsSection.module.css";

export default function NeedsSection({ needs }) {
  return <StudioSection number="01" title="Votre besoin, mon point de départ" titleId="needs-title">
    <div className={styles.grid}>{needs.map(([title, description], index) => <article className={styles.card} key={title}><p className={styles.number} aria-hidden="true">/{String(index + 1).padStart(2, "0")}</p><h3>{title}</h3><p>{description}</p></article>)}</div>
    <p className={styles.closing}>Je vous accompagne du cadrage à la conception graphique, puis du développement jusqu'à la mise en ligne et aux évolutions du produit.</p>
  </StudioSection>;
}
