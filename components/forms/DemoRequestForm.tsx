"use client";

import { ButtonLink } from "@/components/ButtonLink";
import {
  FormStatusMessage,
  HoneypotField,
  SelectField,
  SuccessPanel,
  TextAreaField,
  TextField,
} from "@/components/forms/Fields";
import { useLeadForm } from "@/components/forms/useLeadForm";
import { businessTypes } from "@/lib/content";
import { validateDemoRequest } from "@/lib/validation";

export function DemoRequestForm() {
  const { formRef, status, errors, message, onSubmit } = useLeadForm(
    "/api/demo-request",
    validateDemoRequest,
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
        <TextField name="companyName" label="Company Name" required autoComplete="organization" error={errors.companyName} />
        <SelectField name="businessType" label="Business Type" required options={businessTypes} error={errors.businessType} />
        <TextField name="city" label="City" required autoComplete="address-level2" error={errors.city} />
        <TextField name="phone" label="Phone Number" type="tel" required autoComplete="tel" inputMode="tel" error={errors.phone} />
        <TextField name="whatsapp" label="WhatsApp Number" type="tel" inputMode="tel" error={errors.whatsapp} />
        <TextField name="email" label="Email Address" type="email" required autoComplete="email" error={errors.email} />
        <TextField name="numberOfProjects" label="Number of Projects" inputMode="numeric" error={errors.numberOfProjects} />
      </div>
      <TextAreaField name="message" label="Message" hint="Tell us about your requirements." error={errors.message} />
      <HoneypotField />
      <FormStatusMessage status={status} message={message} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request a Demo"}
        </button>
        <ButtonLink href="/privacy-policy" variant="ghost">
          Read our Privacy Policy
        </ButtonLink>
      </div>
    </form>
  );
}
