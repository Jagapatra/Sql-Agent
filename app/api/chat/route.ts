import { streamText, UIMessage, convertToModelMessages } from 'ai';

export const maxDuration = 30;
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model:google('gemini-2.5-flash'),
    messages: convertToModelMessages(messages),
  });
  console.log("API Route Hit")

  return result.toUIMessageStreamResponse();
}