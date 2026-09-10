"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const allowedNeeds = new Set(["studio", "renfort", "lab", "other"]);

export default function ContactNeedSelect() {
  const searchParams = useSearchParams();
  const requestedNeed = searchParams.get("besoin") ?? "";
  const prefilledNeed = allowedNeeds.has(requestedNeed) ? requestedNeed : "";
  const [selectedNeed, setSelectedNeed] = useState(prefilledNeed);

  useEffect(() => {
    setSelectedNeed(prefilledNeed);
  }, [prefilledNeed]);

  return (
    <select
      id="need"
      name="need"
      required
      value={selectedNeed}
      onChange={(event) => setSelectedNeed(event.target.value)}
    >
      <option value="" disabled>
        Sélectionnez votre besoin
      </option>
      <option value="studio">Création d’un projet avec le Studio</option>
      <option value="renfort">Mission en renfort back-end</option>
      <option value="lab">Projet interactif avec le Lab</option>
      <option value="other">Autre besoin</option>
    </select>
  );
}
