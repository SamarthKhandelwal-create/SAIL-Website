---
name: SAIL Design System
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f5'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#40484c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#eff1f3'
  outline: '#70787d'
  outline-variant: '#c0c8cc'
  surface-tint: '#28657c'
  primary: '#25637a'
  on-primary: '#ffffff'
  primary-container: '#417c93'
  on-primary-container: '#fbfdff'
  inverse-primary: '#95cfe9'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#825026'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f683c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bce9ff'
  primary-fixed-dim: '#95cfe9'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d63'
  secondary-fixed: '#e1e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#fcb885'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#693b13'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display-xl:
    fontFamily: Oswald
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Oswald
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-gap: 160px
  content-max-width: 1100px
  gutter: 32px
  margin-mobile: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built on the "Vide Infra" (See Below) philosophy—a concept that prioritizes depth, clarity, and the intellectual rigor of AI literacy. It bridges the gap between premium enterprise technology and grassroots student activism. The aesthetic is characterized by an immersive, high-end feel that avoids the clutter of traditional non-profit sites in favor of a "Blue Space" approach: expansive negative space that allows complex ideas to breathe.

The design style is **High-End Minimalism** with a focus on fluid, single-page transitions. It utilizes heavy typographic contrast and subtle architectural layers to guide the user through a linear narrative. The emotional response is one of calm authority, forward-thinking intelligence, and institutional trust.

## Colors

The palette is restrained and sophisticated, leaning heavily on the "Muted Steel Blue" to represent the intersection of technology and the maritime metaphor of "sailing" through the AI landscape.

- **Primary (#49839b):** Used for key brand moments, active states, and primary calls to action. It should be used sparingly to maintain its impact against the white space.
- **Secondary (#747779):** Reserved for supporting text, iconography, and decorative UI lines. It grounds the design in a professional, slate-like stability.
- **Backgrounds:** The design relies on "Crisp White" for the main stage and "Off-White" for subtle section nesting or "surface-level" containers.
- **Negative Space:** "Blue Space" refers not just to the color, but to the intentional use of wide margins and deep padding to evoke a sense of high-end digital editorialism.

## Typography

This design system employs a dramatic scale contrast between headers and body copy.

- **Display & Headlines:** Oswald provides a condensed, impactful verticality. Use `display-xl` for hero sections and major transition points. It should feel architectural and "impactful yet quiet."
- **Body & Labels:** Plus Jakarta Sans offers a soft, modern counter-balance. Its high x-height ensures readability in dense "Chapter" descriptions or "About" copy.
- **Styling Note:** Use `label-caps` for secondary navigation and section identifiers to maintain the premium, organized feel of a technical dossier.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy within a fluid container to ensure that "Blue Space" (whitespace) is preserved on ultra-wide monitors.

- **Immersive Scroll:** The three main sections (Home, Chapters, Board) are separated by significant vertical gaps (`section-gap`) to allow for scroll-triggered animations and fluid transitions.
- **Grid:** A 12-column grid is used for the Executive Board and Start a Chapter sections, while the Home/About section utilizes a centered 8-column layout to increase focus and side margins.
- **Mobile Adaption:** On mobile, vertical spacing is halved, and the 12-column grid collapses into a single-column stack. Typography scales aggressively to ensure the "Display" impact is not lost on small screens.

## Elevation & Depth

To maintain the "Vide Infra" aesthetic, this design system avoids heavy drop shadows and instead uses **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** Depth is communicated by shifting background colors from pure white to subtle off-white (#f8f9fa).
- **Glassmorphism:** Navigation bars and "Start a Chapter" modals utilize a subtle backdrop-blur (12px) with a semi-transparent white fill (opacity 80%).
- **Ghost Borders:** Elements like input fields and card containers use a 1px solid border in the Secondary Slate color at 15% opacity. This creates structure without breaking the minimalist flow.
- **Interaction:** On hover, cards should not lift via shadow, but rather through a subtle background color shift or a slight expansion of the border opacity.

## Shapes

The shape language is **Soft and Precise**. Elements use a 0.25rem (4px) base radius. This creates a technical, engineered look that feels modern and refined without the playfulness of fully rounded corners.

- **Primary Buttons:** Utilize the base roundedness for a "tab" or "technical block" feel.
- **Image Treatment:** Photography, especially for the Executive Board, should follow the same 4px radius or remain sharp (0px) to maintain a professional, journalistic tone.
- **Avatars:** Board member photos should be contained within a "soft-square" (rounded-lg) rather than circles to align with the geometric precision of the system.

## Components

- **Buttons:** Primary buttons use the Steel Blue background with white text, no shadow, and a 4px radius. Secondary buttons are "Ghost" style—transparent with a Slate Grey outline.
- **Input Fields:** Minimalist design with a bottom-border only or a very light 4px rounded frame. Labels should use the `label-caps` style for a technical look.
- **Cards (Executive Board):** High-contrast portraits with `body-md` for names and `label-caps` for roles. Descriptions should be hidden until hover or revealed via a fluid expansion.
- **Navigation (Single Page):** A fixed, top-aligned bar with a blur effect. It features three distinct indicators for Home, Chapters, and Board.
- **Chapter Milestone Chips:** Small, rectangular tags with the `label-caps` typography, used to indicate chapter status or regions.
- **Fluid Scroller:** A custom component for the "Start a Chapter" section that uses horizontal progress indicators to guide the student through the three-step process.
