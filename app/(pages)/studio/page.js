import MethodSection from "./components/MethodSection/MethodSection";
import NeedsSection from "./components/NeedsSection/NeedsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import StudioHero from "./components/StudioHero/StudioHero";
import SupportSection from "./components/SupportSection/SupportSection";
import styles from "./page.module.css";
import { method, needs, products, support } from "./studioData";

export const metadata = {
  title: "Studio",
  description:
    "Le Studio ATYPIQUE. : missions freelance en développement back-end et création complète de projets web. Parlons de votre projet.",
};

export default function StudioPage() {
  return (
    <main className={styles.page}>
      <StudioHero />
      <NeedsSection needs={needs} />
      <ProductsSection products={products} />
      <MethodSection method={method} />
      <SupportSection support={support} />
    </main>
  );
}
