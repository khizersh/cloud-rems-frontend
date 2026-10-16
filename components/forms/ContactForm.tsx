"use client";

import {
  FormStatusMessage,
  HoneypotField,
  SuccessPanel,
  TextAreaField,
  TextField,
} from "@/components/forms/Fields";
import { useLeadForm } from "@/components/forms/useLeadForm";
import { validateContact } from "@/lib/validation";

export function ContactForm() {
  const { formRef, status, errors, message, onSubmit } = useLeadForm(
    "/api/contact",
    validateContact,
  );

  if (status === "success") return <SuccessPanel message={message} />;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "submitting"}
      className="relative space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <p className="text-sm text-slate-600">
        Fields marked <span className="text-red-600">*</span> are required.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField name="fullName" label="Full Name" required autoComplete="name" error={errors.fullName} />
        <TextField name="email" label="Email Address" type="email" required autoComplete="email" error={errors.email} />
      </div>
      <TextField name="phone" label="Phone Number" type="tel" autoComplete="tel" inputMode="tel" error={errors.phone} />
      <TextAreaField name="message" label="Message" required error={errors.message} />
      <HoneypotField />
      <FormStatusMessage status={status} message={message} />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
