import { data } from "@/bot/data";
import { NextResponse } from "next/server";
import stringSimilarity from "string-similarity";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    if (!question) {
      return NextResponse.json(
        { error: "No question provided." },
        { status: 400 }
      );
    }

    const questions = Object.keys(data);
    const { bestMatch } = stringSimilarity.findBestMatch(question, questions);
    const SIMILARITY_THRESHOLD = 0.3;

    if (bestMatch.rating >= SIMILARITY_THRESHOLD) {
      return NextResponse.json({ answer: data[bestMatch.target] });
    }

    return NextResponse.json(
      { answer: "I can't answer that." },
      { status: 403 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: "Internal server error. message: " + errorMessage },
      { status: 500 }
    );
  }
}
