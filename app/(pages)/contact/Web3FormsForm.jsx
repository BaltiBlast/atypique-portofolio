"use client";

import { useEffect, useRef, useState } from "react";

const needLabels = {
  studio: "Création d’un projet avec le Studio",
  renfort: "Mission en renfort back-end",
  lab: "Projet interactif avec le Lab",
  other: "Autre besoin",
};

export default function Web3FormsForm({
  accessKey,
  children,
  className,
  statusClassName,
}) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const statusRef = useRef(null);

  useEffect(() => {
    if (status === "success") statusRef.current?.focus();
  }, [status]);

  const handleChange = (event) => {
    if (status !== "success") return;

    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = false;
    setStatus("idle");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const submittedData = Object.fromEntries(formData.entries());
    const needLabel = needLabels[submittedData.need] ?? "Autre besoin";

    if (!accessKey) {
      setStatus("error");
      setMessage("Le formulaire est temporairement indisponible.");
      return;
    }

    setStatus("sending");
    setMessage("Envoi en cours…");
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nouveau contact — ${needLabel}`,
          from_name: "Portfolio ATYPIQUE.",
          name: submittedData.name,
          email: submittedData.email,
          "Type de besoin": needLabel,
          "Entreprise ou organisation":
            submittedData.organization || "Non renseignée",
          "Budget indicatif": submittedData.budget || "Non renseigné",
          "Description du besoin": submittedData.description,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms a refusé l’envoi.");
      }

      setStatus("success");
      setMessage("Votre demande a bien été envoyée. Je vous répondrai rapidement.");
      form.reset();
      document.dispatchEvent(new Event("contact-form-reset"));
    } catch (error) {
      console.error("Impossible d’envoyer le formulaire.", error);
      setStatus("error");
      setMessage("La demande n’a pas pu être envoyée. Veuillez réessayer.");
      if (submitButton) submitButton.disabled = false;
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit} onChange={handleChange}>
      {children}
      <p
        ref={statusRef}
        className={statusClassName}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        data-status={status}
      >
        {message}
      </p>
    </form>
  );
}
