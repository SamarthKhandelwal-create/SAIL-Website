import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Site-wide social share card, rendered at build time.
 *
 * `lib/site.ts` has pointed `ogImages` at "/opengraph-image" since it was
 * written, but this file did not exist — the route 404'd and every share of
 * every page fell back to a bare link with no preview. Adding the file is half
 * the fix; the other half is that `ogImages` was exported and never imported,
 * so no page emitted an `og:image` tag to begin with.
 *
 * Deliberately no custom font fetch: `next/og` would have to pull the WOFF at
 * build time, and a network hiccup there fails the whole build for a social
 * card. The default sans stack renders fine at this size.
 */

export const alt =
  "Students For AI Literacy — free, student-led AI literacy workshops";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#25637a",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 82,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            AI literacy, taught by students — for students.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 32, opacity: 0.92, maxWidth: 940 }}>
            Free, hands-on workshops in schools, libraries, and community
            organizations.
          </div>
          <div
            style={{
              marginTop: 28,
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 26,
              opacity: 0.75,
            }}
          >
            <span>studentsforailiteracy.org</span>
            <span>·</span>
            <span>501(c)(3) nonprofit</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
