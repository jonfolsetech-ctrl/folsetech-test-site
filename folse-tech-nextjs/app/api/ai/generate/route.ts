import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Verify API key
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.API_SECRET_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(
      {
        error: "AI content generation requires the Anthropic SDK. Run: npm install @anthropic-ai/sdk",
        instructions: "See /docs/AI_CONTENT_GENERATION.md for setup instructions",
      },
      { status: 501 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
