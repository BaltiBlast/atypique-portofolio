import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/app/data/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
        <Link href="/projets/">Projets</Link>
        <span aria-hidden="true">/</span>
        <span>{project.title}</span>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            {project.originLabel} - {project.category}
          </p>
          <h1>{project.title}</h1>
        </div>
        <div className={styles.introduction}>
          <p>{project.description}</p>
          <dl className={styles.facts}>
            <div>
              <dt>Statut</dt>
              <dd>{project.status}</dd>
            </div>
            {project.duration ? (
              <div>
                <dt>Durée</dt>
                <dd>{project.duration}</dd>
              </div>
            ) : null}
            {project.availability ? (
              <div>
                <dt>Support</dt>
                <dd>{project.availability}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      <figure className={styles.cover}>
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          width={1200}
          height={900}
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={styles.image}
          priority
          unoptimized
        />
      </figure>

      <section className={styles.overview} aria-labelledby="project-overview">
        <h2 id="project-overview">Le projet</h2>
        <p>{project.details}</p>
      </section>

      {project.caseStudy ? (
        <div className={styles.caseStudy}>
          <section>
            <p className={styles.sectionNumber}>01</p>
            <h2>L’expérience</h2>
            <p>{project.caseStudy.experience}</p>
          </section>
          <section>
            <p className={styles.sectionNumber}>02</p>
            <h2>Ma contribution</h2>
            <p>{project.caseStudy.contribution}</p>
          </section>
          <section>
            <p className={styles.sectionNumber}>03</p>
            <h2>Collecte des réponses</h2>
            <p>{project.caseStudy.dataFlow}</p>
          </section>
          <section>
            <p className={styles.sectionNumber}>04</p>
            <h2>Défis et apprentissages</h2>
            <p>{project.caseStudy.challenges}</p>
          </section>
        </div>
      ) : null}

      {project.images.length > 1 ? (
        <div className={styles.gallery} aria-label={`Galerie du projet ${project.title}`}>
          {project.images.slice(1).map((image) => (
            <figure key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.image}
                unoptimized
              />
            </figure>
          ))}
        </div>
      ) : null}

      <div className={styles.information}>
        <section>
          <h2>Objectifs</h2>
          <ul>
            {project.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Technologies</h2>
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      </div>

      <footer className={styles.actions}>
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.secondaryAction}>
            <span>Visiter le projet</span>
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}
        <Link href="/contact/" className={styles.primaryAction}>
          <span>Parlons de votre projet</span>
          <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </main>
  );
}
