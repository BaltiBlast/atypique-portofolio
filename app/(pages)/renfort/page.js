import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Renfort back-end",
  description:
    "ATYPIQUE. : renfort freelance en développement back-end pour vos équipes et vos projets web. Parlons de votre projet.",
};

const situations = [
  "Votre équipe doit accélérer le développement de nouvelles fonctionnalités.",
  "Des bugs complexes ou du code ancien ralentissent le produit.",
  "Les performances de l'application doivent être améliorées.",
  "Vous devez intégrer des API, paiements ou services externes.",
  "Le projet manque de tests, de documentation ou de visibilité sur les erreurs.",
];

const expertises = [
  ["Développement fonctionnel", "Je développe de nouvelles fonctionnalités adaptées aux besoins du produit."],
  ["API et intégrations", "Je conçois des API et connecte le produit à des services externes."],
  ["Amélioration de l'existant", "Je corrige les bugs, refactorise le code et améliore les performances."],
  ["Qualité et suivi", "J'ajoute des tests, de la documentation et des outils de suivi des erreurs."],
];

const technologies = [
  ["Back-end", "JavaScript, Node.js, Express, NestJS"],
  ["Données", "MongoDB, Mongoose, Redis"],
  ["API et services", "JWT, OAuth, WebSocket, Stripe, tâches planifiées, envoi d'emails, Swagger"],
  ["Tests et outils", "Jest, Git, GitHub, GitLab, Postman"],
  ["Front-end", "HTML, CSS, React, Next.js, Tailwind CSS, EJS"],
  ["Déploiement", "Render, Vercel, Netlify, Heroku"],
];

export default function RenfortPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="renfort-title">
        <h1 id="renfort-title" className={styles.heroTitle}>
          <span>Renfort</span>
          <span>back-end</span>
        </h1>
        <div className={styles.heroIntroduction}>
          <p>J’intègre votre équipe pour développer de nouvelles fonctionnalités, améliorer l’existant et faire avancer vos projets.</p>
          <Link href="/contact/" className={styles.primaryCta}>
            <span>Échanger sur votre besoin</span>
            <span aria-hidden="true">⟶</span>
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="situations-title">
        <p className={styles.sectionNumber} aria-hidden="true">01</p>
        <div className={styles.sectionContent}>
          <h2 id="situations-title" className={styles.sectionTitle}>Dans quelles situations puis-je intervenir ?</h2>
          <ul className={styles.situationList}>
            {situations.map((situation, index) => (
              <li key={situation}>
                <span className={styles.listNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{situation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="expertises-title">
        <p className={styles.sectionNumber} aria-hidden="true">02</p>
        <div className={styles.sectionContent}>
          <h2 id="expertises-title" className={styles.sectionTitle}>Mes domaines d’intervention</h2>
          <div className={styles.expertiseGrid}>
            {expertises.map(([title, description], index) => (
              <article className={styles.expertise} key={title}>
                <p className={styles.expertiseNumber} aria-hidden="true">/{String(index + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="technologies-title">
        <p className={styles.sectionNumber} aria-hidden="true">03</p>
        <div className={styles.sectionContent}>
          <h2 id="technologies-title" className={styles.sectionTitle}>Technologies</h2>
          <dl className={styles.technologyList}>
            {technologies.map(([category, items]) => (
              <div className={styles.technology} key={category}>
                <dt>{category}</dt>
                <dd>{items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="modalities-title">
        <p className={styles.sectionNumber} aria-hidden="true">04</p>
        <div className={styles.sectionContent}>
          <h2 id="modalities-title" className={styles.sectionTitle}>Modalités d’intervention</h2>
          <div className={styles.modalities}>
            <p>J’interviens à temps plein ou à temps partiel, sans durée minimale imposée.</p>
            <p>Les missions peuvent être réalisées à distance ou en mode hybride selon les modalités convenues.</p>
            <p>Je suis basé à Metz et mes disponibilités sont à confirmer selon la période et le volume d’intervention.</p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">Un besoin côté back-end ?</h2>
          <p>Présentez-moi votre contexte et voyons comment je peux renforcer votre équipe.</p>
        </div>
        <Link href="/contact/" className={styles.finalCtaLink}>
          <span>Échanger sur votre besoin</span>
          <span aria-hidden="true">⟶</span>
        </Link>
      </section>
    </main>
  );
}
