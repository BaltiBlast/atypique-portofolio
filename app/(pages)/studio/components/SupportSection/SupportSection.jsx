import Link from "next/link";
import StudioSection from "../StudioSection/StudioSection";
import styles from "./SupportSection.module.css";

export default function SupportSection({ support }) {
  return <StudioSection number="04" title="Un accompagnement complet" titleId="support-title">
    <div className={styles.grid}>{support.map(([title, description]) => <article className={styles.item} key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
    <Link href="/contact/?besoin=studio" className={styles.cta}><span>Parlons de votre projet</span><span aria-hidden="true">⟶</span></Link>
  </StudioSection>;
}
