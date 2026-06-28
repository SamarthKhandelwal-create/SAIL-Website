import { NextResponse } from "next/server";
import { stats } from "@/data/stats";

/**
 * GET /api/stats
 * Returns the live impact numbers for the rolling counter.
 */
export function GET() {
  return NextResponse.json(
    { stats },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
  );
}
