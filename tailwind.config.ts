import type { Config } from "tailwindcss";

/**
 * SAIL Design System — ported from stitch-export/design-system.md
 * Palette is a refined Material-derived set around the brand steel-blue #49839b.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary": "#ffffff",
        "primary-fixed-dim": "#95cfe9",
        "surface-container-high": "#e7e8ea",
        "on-error": "#ffffff",
        "on-secondary-container": "#606365",
        "tertiary-container": "#9f683c",
        "surface-dim": "#d9dadc",
        "on-tertiary": "#ffffff",
        "on-primary-fixed": "#001f29",
        "on-primary-container": "#fbfdff",
        "on-primary-fixed-variant": "#004d63",
        "primary-fixed": "#bce9ff",
        "surface-variant": "#e1e2e4",
        "on-surface-variant": "#40484c",
        primary: "#25637a",
        brand: "#49839b",
        "surface-container-lowest": "#ffffff",
        secondary: "#5c5f61",
        "on-primary": "#ffffff",
        "on-background": "#191c1e",
        surface: "#f8f9fb",
        "inverse-on-surface": "#eff1f3",
        outline: "#70787d",
        "surface-tint": "#28657c",
        tertiary: "#825026",
        "primary-container": "#417c93",
        "surface-container-low": "#f2f4f5",
        "outline-variant": "#c0c8cc",
        background: "#f8f9fb",
        "surface-container": "#edeef0",
        "surface-container-highest": "#e1e2e4",
        error: "#ba1a1a",
        "surface-bright": "#f8f9fb",
        "inverse-primary": "#95cfe9",
        "secondary-container": "#dee0e2",
        "secondary-fixed-dim": "#c4c7c9",
        "on-surface": "#191c1e",
        "inverse-surface": "#2e3132",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "32px",
        "stack-sm": "12px",
        "margin-mobile": "24px",
        "section-gap": "160px",
        "stack-lg": "48px",
        "stack-md": "24px",
      },
      maxWidth: {
        content: "1100px",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "Oswald", "Impact", "sans-serif"],
        body: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(64px, 11vw, 120px)", { lineHeight: "0.92", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["clamp(32px, 5vw, 48px)", { lineHeight: "1.1", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "32px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
