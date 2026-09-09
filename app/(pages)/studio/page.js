import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Studio",
  description:
    "Le Studio ATYPIQUE. : missions freelance en développement back-end et création complète de projets web. Parlons de votre projet.",
};

const needs = [
  ["Présenter votre activité", "Créer une présence en ligne claire et adaptée à vos objectifs."],
  ["Créer un outil sur mesure", "Développer un logiciel métier et automatiser les tâches qui ralentissent votre activité."],
  ["Lancer une application", "Transformer une idée en application web ou mobile fonctionnelle."],
  ["Faire évoluer l'existant", "Moderniser un produit, ajouter des fonctionnalités et assurer sa maintenance."],
];

const products = [
  ["Sites web", "Sites vitrines et landing pages pour présenter une activité ou lancer une offre."],
  ["Applications", "Applications web, mobiles et plateformes SaaS conçues autour de vos utilisateurs."],
  ["Outils métier", "Logiciels, tableaux de bord et espaces clients adaptés à votre fonctionnement."],
  ["Automatisation", "Outils destinés à simplifier les tâches répétitives et les échanges de données."],
];

const method = [
  ["Cadrage transparent", "Le budget, les étapes et les délais sont définis avec vous avant le lancement du projet."],
  ["Choix de la direction visuelle", "Je vous propose plusieurs pistes graphiques. Vous pouvez aussi partager vos références afin de construire une identité adaptée, sans les reproduire."],
  ["Suivi régulier", "Des rendez-vous sont organisés aux étapes importantes pour présenter les avancées, recueillir vos impressions et effectuer les ajustements nécessaires."],
  ["Maintenance", "Après la mise en ligne, un abonnement mensuel peut assurer la maintenance et le suivi de votre produit."],
];

const support = [
  ["Un interlocuteur unique", "Vous échangez directement avec moi pendant toute la réalisation."],
  ["Une prise en charge complète", "Je vous accompagne de la définition du besoin jusqu'à la mise en ligne."],
  ["Une solution sur mesure", "Chaque choix est adapté à votre activité, vos utilisateurs et vos objectifs."],
  ["Un suivi après livraison", "Une formule de maintenance peut accompagner votre produit dans la durée."],
];

export default function StudioPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="studio-title">
        <h1 id="studio-title" className={styles.heroTitle}>
          <span>Le</span>
          <span>Studio</span>
        </h1>
        <div className={styles.heroIntroduction}>
          <p>Je conçois et développe des sites, applications et logiciels adaptés à votre besoin, de l'idée jusqu'à la mise en ligne.</p>
          <Link href="/contact/" className={styles.primaryCta}>
            <span>Parlons de votre projet</span>
            <span aria-hidden="true">⟶</span>
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="needs-title">
        <p className={styles.sectionNumber} aria-hidden="true">01</p>
        <div className={styles.sectionContent}>
          <h2 id="needs-title" className={styles.sectionTitle}>Votre besoin, mon point de départ</h2>
          <div className={styles.cardGrid}>
            {needs.map(([title, description], index) => (
              <article className={styles.card} key={title}>
                <p className={styles.itemNumber} aria-hidden="true">/{String(index + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.sectionClosing}>Je vous accompagne du cadrage à la conception graphique, puis du développement jusqu'à la mise en ligne et aux évolutions du produit.</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="products-title">
        <p className={styles.sectionNumber} aria-hidden="true">02</p>
        <div className={styles.sectionContent}>
          <h2 id="products-title" className={styles.sectionTitle}>Des produits adaptés à votre projet</h2>
          <dl className={styles.itemList}>
            {products.map(([title, description]) => (
              <div className={styles.listItem} key={title}>
                <dt>{title}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="method-title">
        <p className={styles.sectionNumber} aria-hidden="true">03</p>
        <div className={styles.sectionContent}>
          <h2 id="method-title" className={styles.sectionTitle}>Une méthode claire, du début à la suite</h2>
          <ol className={styles.methodList}>
            {method.map(([title, description], index) => (
              <li key={title}>
                <span className={styles.methodNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="support-title">
        <p className={styles.sectionNumber} aria-hidden="true">04</p>
        <div className={styles.sectionContent}>
          <h2 id="support-title" className={styles.sectionTitle}>Un accompagnement complet</h2>
          <div className={styles.supportGrid}>
            {support.map(([title, description]) => (
              <article className={styles.supportItem} key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <Link href="/contact/" className={styles.finalCta}>
            <span>Parlons de votre projet</span>
            <span aria-hidden="true">⟶</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
