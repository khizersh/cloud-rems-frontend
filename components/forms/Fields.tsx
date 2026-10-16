import type { ReactNode } from "react";

const controlClass =
  "mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-slate-900 shadow-sm placeholder:text-slate-500 focus-visible:border-brand-500 aria-[invalid=true]:border-red-600";

type Common = {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
};

function Wrapper({
  name,
  label,
  error,
  required,
  hint,
  children,
}: Common & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-red-600">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-slate-600"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${name}-hint`} className="mt-1 text-xs text-slate-600">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function describedBy(name: string, error?: string, hint?: string) {
  if (error) return `${name}-error`;
  return hint ? `${name}-hint` : undefined;
}

export function TextField({
  type = "text",
  autoComplete,
  inputMode,
  placeholder,
  ...common
}: Common & {
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  placeholder?: string;
}) {
  const { name, error, required, hint } = common;
  return (
    <Wrapper {...common}>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error, hint)}
        className={`${controlClass} ${error ? "border-red-600" : "border-slate-300"}`}
      />
    </Wrapper>
  );
}

export function SelectField({
  options,
  ...common
}: Common & { options: readonly string[] }) {
  const { name, error, required, hint } = common;
  return (
    <Wrapper {...common}>
      <select
        id={name}
        name={name}
        defaultValue=""
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error, hint)}
        className={`${controlClass} ${error ? "border-red-600" : "border-slate-300"}`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export function TextAreaField({ rows = 5, ...common }: Common & { rows?: number }) {
  const { name, error, required, hint } = common;
  return (
    <Wrapper {...common}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        maxLength={2000}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error, hint)}
        className={`${controlClass} ${error ? "border-red-600" : "border-slate-300"}`}
      />
    </Wrapper>
  );
}

// Hidden spam trap: bots tend to fill every input. Swap for a CAPTCHA token here if needed.
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormStatusMessage({
  status,
  message,
}: {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}) {
  if (status === "error" && message) {
    return (
      <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
        {message}
      </p>
    );
  }
  return null;
}

export function SuccessPanel({ message }: { message: string }) {
  return (
    <div role="status" className="rounded-2xl border border-leaf-500/40 bg-leaf-50 p-8 text-center">
      <p className="text-xl font-semibold text-navy-900">Request received</p>
      <p className="mt-2 text-slate-700">{message}</p>
    </div>
  );
}
