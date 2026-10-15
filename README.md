# Ssixteen — website

Marketing site for Ssixteen, a social, events, SEO and brand agency.

Next.js (App Router) · TypeScript · Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Design system

The direction is grounded in the EVOKE reference: heavy condensed poster type, a white canvas, flat full-bleed colour panels, sharp edges, no shadows.

- **Tokens** live as CSS variables in `src/app/globals.css` (`@theme`). Radius and shadow scales are removed on purpose.
- **Service colours** each mark one service and always carry ink (black) text:
  social `#FF5FCF`, events `#FF7A1A`, SEO `#5B9BFF`, brand `#C8F53C` (all ≥ 7:1 with black).
- **Type**: Archivo. Display uses `type-display` (wdth 62, wght 900, uppercase, -0.015em). Text uses the normal width.
- **Buttons** are outlined in ink and invert on hover/focus. Ink is never a resting CTA fill.

## Content and placeholders

All copy is in `src/content/*.ts`. Anything in `[brackets]`, every case study, client logo slot and testimonial is placeholder content to replace before launch.

Images are `ArtSlot` placeholders (`src/components/ArtSlot.tsx`) with the correct aspect ratio, alt text and an art-direction note. Swap each for `next/image` with the same ratio and alt.
