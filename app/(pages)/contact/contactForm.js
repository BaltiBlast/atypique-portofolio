export const CONTACT_FORM_RESET_EVENT = "contact-form-reset";

export const contactNeeds = [
  { value: "studio", label: "Création d’un projet avec le Studio" },
  { value: "renfort", label: "Mission en renfort back-end" },
  { value: "lab", label: "Projet interactif avec le Lab" },
  { value: "other", label: "Autre besoin" },
];

const needLabels = Object.fromEntries(
  contactNeeds.map(({ value, label }) => [value, label]),
);

export function getValidNeed(value) {
  return needLabels[value] ? value : "";
}

export function createContactPayload(formData, accessKey) {
  const submittedData = Object.fromEntries(formData.entries());
  const needLabel = needLabels[submittedData.need] ?? needLabels.other;

  return {
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
  };
}

export async function sendContactForm(payload) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Web3Forms a refusé l’envoi.");
  }
}
