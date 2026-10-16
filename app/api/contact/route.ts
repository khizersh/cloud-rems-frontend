import { handleLeadSubmission } from "@/lib/server/submission";
import { validateContact } from "@/lib/validation";

export function POST(request: Request) {
  return handleLeadSubmission(request, "contact", validateContact);
}
