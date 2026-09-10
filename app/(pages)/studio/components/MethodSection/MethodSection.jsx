import StudioSection from "../StudioSection/StudioSection";
import styles from "./MethodSection.module.css";

export default function MethodSection({ method }) {
  return <StudioSection number="03" title="Une méthode claire, du début à la suite" titleId="method-title">
    <ol className={styles.list}>{method.map(([title, description], index) => <li key={title}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
  </StudioSection>;
}
