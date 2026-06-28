import { NextResponse } from "next/server";
import { chapters } from "@/data/chapters";

/**
 * GET /api/chapters
 * Returns every SAIL chapter for the interactive map and chapter chips.
 */
export function GET() {
  return NextResponse.json(
    { chapters },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
  );
}
