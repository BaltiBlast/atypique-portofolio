import LabHero from "./components/LabHero/LabHero";
import LabProjects from "./components/LabProjects/LabProjects";
import styles from "./page.module.css";
import { labProjects } from "./labProjectsData";

export const metadata = {
  title: "Le Lab",
  description:
    "Le Lab ATYPIQUE. est consacré aux projets web expérimentaux, aux expériences interactives et aux idées qui sortent des sentiers battus.",
};

export default function LabPage() {
  return (
    <main className={styles.page}>
      <LabHero />
      <LabProjects projects={labProjects} />
    </main>
  );
}
