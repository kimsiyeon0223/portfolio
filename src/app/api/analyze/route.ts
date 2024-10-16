import { NextResponse } from "next/server";
import { OpenAI } from "openai";

interface OpenAICompletionResponse {
  choices: Array<{
    message: {
      content: string | null;
    };
  }>;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    const completion = await callOpenAiWithRetry(text);

    const analysis =
      completion?.choices[0]?.message?.content ||
      "분석 결과를 찾을 수 없습니다.";

    return NextResponse.json({ analysis });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    } else {
      console.error("Unknown error occurred:", JSON.stringify(error));
    }

    return NextResponse.json(
      { error: "GPT API 요청에 실패했습니다." },
      { status: 500 },
    );
  }
}
async function callOpenAiWithRetry(
  text: string,
  retries = 3,
  delayMs = 5000,
): Promise<OpenAICompletionResponse | null> {
  for (let i = 0; i < retries; i++) {
    try {
      const completion: OpenAICompletionResponse =
        await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "Please analyze and provide feedback on the following portfolio.",
            },
            { role: "user", content: text },
          ],
        });

      return completion;
    } catch (error) {
      if (isRateLimitError(error) && i < retries - 1) {
        console.log("Too many requests, waiting before retrying...");
        await delay(delayMs);
      } else {
        throw error;
      }
    }
  }
  return null;
}

function isRateLimitError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    (error as { response: { status: number } }).response?.status === 429
  );
}
