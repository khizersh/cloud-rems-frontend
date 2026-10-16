import {
  clientIp,
  deliverLead,
  isRateLimited,
  isSameOrigin,
} from "@/lib/server/leads";
import type { FieldErrors, ValidationResult } from "@/lib/validation";

export async function handleLeadSubmission<T extends Record<string, string>>(
  request: Request,
  kind: "demo-request" | "contact",
  validate: (input: Record<string, unknown>) => ValidationResult<T>,
): Promise<Response> {
  if (!isSameOrigin(request)) {
    return Response.json({ message: "Request not allowed." }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error();
    body = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Respond as if it worked.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ message: "Thank you." });
  }

  if (isRateLimited(clientIp(request))) {
    return Response.json(
      { message: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const result = validate(body);
  if (!result.ok) {
    const errors: FieldErrors = result.errors;
    return Response.json({ message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const delivered = await deliverLead(kind, result.data);
  if (!delivered) {
    return Response.json(
      { message: "We could not send your request right now. Please try again shortly." },
      { status: 502 },
    );
  }
  return Response.json({ message: "Thank you. We have received your request." });
}
