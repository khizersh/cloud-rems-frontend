import { businessTypes } from "@/lib/content";

export type FieldErrors = Record<string, string>;

export type DemoRequestInput = {
  fullName: string;
  companyName: string;
  businessType: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  numberOfProjects: string;
  message: string;
};

export type ContactInput = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: FieldErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9()\s-]{7,20}$/;

function str(input: Record<string, unknown>, key: string, max = 200): string {
  const v = input[key];
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function required(errors: FieldErrors, key: string, value: string, label: string) {
  if (!value) errors[key] = `${label} is required.`;
}

function checkEmail(errors: FieldErrors, value: string) {
  if (!value) errors.email = "Email address is required.";
  else if (!EMAIL_RE.test(value)) errors.email = "Enter a valid email address.";
}

function checkPhone(errors: FieldErrors, key: string, value: string, label: string, isRequired: boolean) {
  if (!value) {
    if (isRequired) errors[key] = `${label} is required.`;
  } else if (!PHONE_RE.test(value)) {
    errors[key] = `Enter a valid ${label.toLowerCase()}.`;
  }
}

export function validateDemoRequest(input: Record<string, unknown>): ValidationResult<DemoRequestInput> {
  const data: DemoRequestInput = {
    fullName: str(input, "fullName", 100),
    companyName: str(input, "companyName", 150),
    businessType: str(input, "businessType", 60),
    phone: str(input, "phone", 20),
    whatsapp: str(input, "whatsapp", 20),
    email: str(input, "email", 254),
    city: str(input, "city", 100),
    numberOfProjects: str(input, "numberOfProjects", 6),
    message: str(input, "message", 2000),
  };
  const errors: FieldErrors = {};

  required(errors, "fullName", data.fullName, "Full name");
  required(errors, "companyName", data.companyName, "Company name");
  if (!data.businessType) errors.businessType = "Select a business type.";
  else if (!(businessTypes as readonly string[]).includes(data.businessType))
    errors.businessType = "Select a valid business type.";
  checkPhone(errors, "phone", data.phone, "Phone number", true);
  checkPhone(errors, "whatsapp", data.whatsapp, "WhatsApp number", false);
  checkEmail(errors, data.email);
  required(errors, "city", data.city, "City");
  if (data.numberOfProjects && !/^\d{1,4}$/.test(data.numberOfProjects))
    errors.numberOfProjects = "Enter a whole number.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

export function validateContact(input: Record<string, unknown>): ValidationResult<ContactInput> {
  const data: ContactInput = {
    fullName: str(input, "fullName", 100),
    email: str(input, "email", 254),
    phone: str(input, "phone", 20),
    message: str(input, "message", 2000),
  };
  const errors: FieldErrors = {};

  required(errors, "fullName", data.fullName, "Full name");
  checkEmail(errors, data.email);
  checkPhone(errors, "phone", data.phone, "Phone number", false);
  if (!data.message) errors.message = "Message is required.";
  else if (data.message.length < 10) errors.message = "Message must be at least 10 characters.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
