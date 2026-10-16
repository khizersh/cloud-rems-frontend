type LeadKind = "demo-request" | "contact";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

// In-memory and per process: a basic brake, not a replacement for a CAPTCHA or edge rate limiting.
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

// Forwards the lead to LEAD_WEBHOOK_URL (CRM, automation tool, or email relay). Without it, the lead is only logged.
export async function deliverLead(kind: LeadKind, data: Record<string, string>): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL;
  const payload = { kind, submittedAt: new Date().toISOString(), source: "www.cloudrems.com", data };

  if (!url) {
    console.info("[lead] LEAD_WEBHOOK_URL not set; lead was not forwarded.", JSON.stringify(payload));
    return true;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) console.error(`[lead] webhook responded with ${res.status}`);
    return res.ok;
  } catch (error) {
    console.error("[lead] webhook request failed", error);
    return false;
  }
}
