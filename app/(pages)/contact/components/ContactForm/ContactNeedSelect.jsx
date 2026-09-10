"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT_FORM_RESET_EVENT, contactNeeds, getValidNeed } from "../../contactForm";

export default function ContactNeedSelect() {
  const searchParams = useSearchParams();
  const prefilledNeed = getValidNeed(searchParams.get("besoin") ?? "");
  const [selectedNeed, setSelectedNeed] = useState(prefilledNeed);

  useEffect(() => setSelectedNeed(prefilledNeed), [prefilledNeed]);

  useEffect(() => {
    const resetSelection = () => setSelectedNeed("");
    document.addEventListener(CONTACT_FORM_RESET_EVENT, resetSelection);
    return () => document.removeEventListener(CONTACT_FORM_RESET_EVENT, resetSelection);
  }, []);

  return (
    <select id="need" name="need" required value={selectedNeed} onChange={(event) => setSelectedNeed(event.target.value)}>
      <option value="" disabled>Sélectionnez votre besoin</option>
      {contactNeeds.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
    </select>
  );
}
