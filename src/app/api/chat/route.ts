import { streamText, UIMessage, convertToModelMessages } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { RISHI_PERSONA } from "@/lib/ai/system-prompt";

export const maxDuration = 30;

// Simple in-memory rate limiter — no external deps
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return new Response("Too many requests. Try again later.", {
        status: 429,
      });
    }

    // Validate input
    const body = await req.json();
    const messages: UIMessage[] = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response("Invalid request: messages must be a non-empty array.", {
        status: 400,
      });
    }

    const result = streamText({
      model: anthropic("claude-sonnet-4-20250514"),
      messages: [
        {
          role: "system",
          content: RISHI_PERSONA,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        ...(await convertToModelMessages(messages)),
      ],
      maxOutputTokens: 500,
    });

    return result.toUIMessageStreamResponse();
  } catch {
    return new Response("Internal server error.", { status: 500 });
  }
}
