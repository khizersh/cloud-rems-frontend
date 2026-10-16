import { handleLeadSubmission } from "@/lib/server/submission";
import { validateDemoRequest } from "@/lib/validation";

export function POST(request: Request) {
  return handleLeadSubmission(request, "demo-request", validateDemoRequest);
}
