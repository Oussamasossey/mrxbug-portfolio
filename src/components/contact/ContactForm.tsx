"use client";
import { useState } from "react";

// Set NEXT_PUBLIC_FORMSPREE_FORM_ID in the environment to point this at a real Formspree form.
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "YOUR_FORM_ID";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

type Status = "idle" | "loading" | "success" | "error";

const STATUS_MESSAGE: Record<Status, string> = {
  idle: "",
  loading: "SENDING TRANSMISSION...",
  success: "TRANSMISSION RECEIVED. I'LL BE IN TOUCH SOON.",
  error: "TRANSMISSION FAILED. PLEASE TRY AGAIN.",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <label>NAME<input name="name" autoComplete="name" required disabled={status === "loading"} /></label>
    <label>EMAIL<input name="email" type="email" autoComplete="email" required disabled={status === "loading"} /></label>
    <label>PROJECT TYPE<select name="projectType" defaultValue="" disabled={status === "loading"}><option value="" disabled>SELECT TYPE</option><option>Website</option><option>Web application</option><option>Mobile application</option><option>Other</option></select></label>
    <label>MESSAGE<textarea name="message" rows={4} required disabled={status === "loading"} /></label>
    <button className="button button-primary" type="submit" disabled={status === "loading"}>{status === "loading" ? "SENDING..." : "SEND TRANSMISSION ↗"}</button>
    <p className="form-status" data-state={status} role="status">{STATUS_MESSAGE[status]}</p>
  </form>;
}
