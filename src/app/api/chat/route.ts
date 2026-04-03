import { streamText, UIMessage, convertToModelMessages } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { RISHI_PERSONA } from "@/lib/ai/system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: RISHI_PERSONA,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 500,
  });

  return result.toUIMessageStreamResponse();
}
