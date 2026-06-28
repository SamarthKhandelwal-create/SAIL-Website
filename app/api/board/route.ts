import { NextResponse } from "next/server";
import { board } from "@/data/board";

/**
 * GET /api/board
 * Returns the SAIL executive board roster.
 */
export function GET() {
  return NextResponse.json(
    { board },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
  );
}
