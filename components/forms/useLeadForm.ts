"use client";

import { useRef, useState, type FormEvent } from "react";
import type { FieldErrors, ValidationResult } from "@/lib/validation";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useLeadForm(
  endpoint: string,
  validate: (input: Record<string, unknown>) => ValidationResult<Record<string, string>>,
) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");

  const focusFirstError = (found: FieldErrors) => {
    const first = Object.keys(found)[0];
    formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const values = Object.fromEntries(new FormData(event.currentTarget));
    const result = validate(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      setMessage("");
      focusFirstError(result.errors);
      return;
    }

    setErrors({});
    setMessage("");
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await res.json().catch(() => ({}))) as {
        message?: string;
        errors?: FieldErrors;
      };
      if (res.ok) {
        setStatus("success");
        setMessage(body.message ?? "Thank you. We have received your request.");
        return;
      }
      if (body.errors) {
        setErrors(body.errors);
        focusFirstError(body.errors);
      }
      setStatus("error");
      setMessage(body.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return { formRef, status, errors, message, onSubmit };
}
