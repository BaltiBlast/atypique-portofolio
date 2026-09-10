"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ProjectModal.module.css";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ projects }) {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug),
    [projects, selectedSlug],
  );

  const closeModal = () => setSelectedSlug(null);

  useEffect(() => {
    const openProject = (event) => {
      const trigger = event.target.closest("[data-open-project]");

      if (!trigger) return;

      triggerRef.current = trigger;
      setSelectedSlug(trigger.dataset.openProject);
    };

    document.addEventListener("click", openProject);
    return () => document.removeEventListener("click", openProject);
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <section
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <header className={styles.header}>
          <p>{selectedProject.category}</p>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="Fermer la présentation du projet"
          >
            <span>Fermer</span>
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className={styles.introduction}>
          <div>
            <p className={styles.status}>{selectedProject.status}</p>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
          </div>
          <p className={styles.details}>{selectedProject.details}</p>
        </div>

        <div className={styles.gallery}>
          {selectedProject.images.map((image, index) => (
            <figure className={styles.figure} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.image}
                unoptimized
                priority={index === 0}
              />
            </figure>
          ))}
        </div>

        <div className={styles.information}>
          <section>
            <h3>Intentions</h3>
            <ul>
              {selectedProject.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Technologies explorées</h3>
            <ul className={styles.technologies}>
              {selectedProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className={styles.footer}>
          {selectedProject.liveUrl ? (
            <a
              href={selectedProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              <span>Visiter le projet</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className={styles.unpublished}>Projet non publié</p>
          )}
        </footer>
      </section>
    </div>
  );
}
