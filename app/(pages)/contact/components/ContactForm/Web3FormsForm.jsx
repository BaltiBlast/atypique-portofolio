"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_FORM_RESET_EVENT, createContactPayload, sendContactForm } from "../../contactForm";

export default function Web3FormsForm({ accessKey, children, className, statusClassName }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const statusRef = useRef(null);

  useEffect(() => {
    if (status === "success") statusRef.current?.focus();
  }, [status]);

  const handleChange = (event) => {
    if (status !== "success") return;
    event.currentTarget.querySelector('button[type="submit"]')?.removeAttribute("disabled");
    setStatus("idle");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]');

    if (!accessKey) {
      setStatus("error");
      setMessage("Le formulaire est temporairement indisponible.");
      return;
    }

    setStatus("sending");
    setMessage("Envoi en cours…");
    if (submitButton) submitButton.disabled = true;

    try {
      await sendContactForm(createContactPayload(new FormData(form), accessKey));
      setStatus("success");
      setMessage("Votre demande a bien été envoyée. Je vous répondrai rapidement.");
      form.reset();
      document.dispatchEvent(new Event(CONTACT_FORM_RESET_EVENT));
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
      <p ref={statusRef} className={statusClassName} role="status" aria-live="polite" tabIndex={-1} data-status={status}>{message}</p>
    </form>
  );
}
