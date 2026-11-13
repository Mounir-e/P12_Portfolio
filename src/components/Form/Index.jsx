import { useRef, useState } from "react";
import "./Form.scss";

const formEndpoint = "https://formspree.io/f/xdkgvjjb";

function Form() {
  const [status, setStatus] = useState("idle");
  const dialogRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!formEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error();

      form.reset();
      setStatus("idle");
      dialogRef.current?.showModal();
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span aria-hidden="true">Nom *</span>
          <input id="name" name="name" type="text" autoComplete="family-name" placeholder="Votre nom" required />
        </label>

        <label htmlFor="firstName">
          <span aria-hidden="true">Prénom *</span>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="Votre prénom" required />
        </label>

        <label htmlFor="email">
          <span aria-hidden="true">E-mail *</span>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="votre@email.com" required />
        </label>

        <label htmlFor="message">
          <span aria-hidden="true">Message *</span>
          <textarea id="message" name="message" rows="5" minLength="10" placeholder="Votre message" required />
        </label>

        <p className="required-fields">* Champs obligatoires</p>

        {status === "error" && (
          <p className="form-feedback form-feedback-error" role="alert">
            Le message n’a pas pu être envoyé. Veuillez réessayer.
          </p>
        )}

        <button type="submit" disabled={isSending}>
          {isSending ? "Envoi en cours…" : "Envoyer"}
        </button>
      </form>

      <dialog className="confirmation-modal" ref={dialogRef} aria-labelledby="confirmation-title">
        <div className="confirmation-icon" aria-hidden="true">✓</div>
        <h2 id="confirmation-title">Message envoyé</h2>
        <p>Merci pour votre message. Je vous répondrai dans les meilleurs délais.</p>
        <button type="button" onClick={() => dialogRef.current?.close()} autoFocus>Fermer</button>
      </dialog>
    </>
  );
}

export default Form;
