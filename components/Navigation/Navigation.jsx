"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { createMenuMotion } from "./menuMotion";

const navigationItems = ["Studio", "Le Lab", "Projets", "Contact"];

export default function Navigation() {
  const [menuState, setMenuState] = useState("closed");
  const isOpen = menuState === "opening" || menuState === "open";
  const menuId = useId();
  const toggleRef = useRef(null);
  const listRef = useRef(null);
  const motionRef = useRef(null);

  useEffect(() => {
    const motion = createMenuMotion([...listRef.current.children], setMenuState);
    motionRef.current = motion;
    return () => {
      motion.dispose();
      motionRef.current = null;
    };
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      motionRef.current?.close();
      toggleRef.current?.focus();
    }
  }

  return (
    <header className={styles.header} onKeyDown={handleKeyDown}>
      <Link href="/" className={styles.brand} aria-label="ATYPIQUE. | Accueil">
        ATYPIQUE .
      </Link>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => motionRef.current?.toggle()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
          focusable="false"
        >
          <path className={styles.topLine} d="M3 6h18" />
          <path className={styles.middleLine} d="M3 12h18" />
          <path className={styles.bottomLine} d="M3 18h18" />
        </svg>
      </button>
      <nav id={menuId} className={styles.navigation} data-state={menuState} inert={menuState === "closing"} aria-label="Navigation principale">
        <ul ref={listRef} className={styles.list}>
          {navigationItems.map((label) => (
            <li
              key={label}
              className={styles.menuEntry}
            >
              {/* Les destinations seront ajoutées avec les pages ou sections. */}
              <span className={styles.item} aria-disabled="true">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
