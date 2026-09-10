import StudioSection from "../StudioSection/StudioSection";
import styles from "./ProductsSection.module.css";

export default function ProductsSection({ products }) {
  return <StudioSection number="02" title="Des produits adaptés à votre projet" titleId="products-title">
    <dl className={styles.list}>{products.map(([title, description]) => <div className={styles.item} key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl>
  </StudioSection>;
}
