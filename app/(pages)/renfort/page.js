import ExpertisesSection from "./components/ExpertisesSection/ExpertisesSection";
import ModalitiesSection from "./components/ModalitiesSection/ModalitiesSection";
import RenfortCta from "./components/RenfortCta/RenfortCta";
import RenfortHero from "./components/RenfortHero/RenfortHero";
import SituationsSection from "./components/SituationsSection/SituationsSection";
import TechnologiesSection from "./components/TechnologiesSection/TechnologiesSection";
import styles from "./page.module.css";
import { expertises, situations, technologies } from "./renfortData.js";

export const metadata = {
  title: "Renfort back-end",
  description:
    "ATYPIQUE. : renfort freelance en développement back-end pour vos équipes et vos projets web. Parlons de votre projet.",
};

export default function RenfortPage() {
  return (
    <main className={styles.page}>
      <RenfortHero />
      <SituationsSection situations={situations} />
      <ExpertisesSection expertises={expertises} />
      <TechnologiesSection technologies={technologies} />
      <ModalitiesSection />
      <RenfortCta />
    </main>
  );
}
