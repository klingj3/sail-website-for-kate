/**
 * Schooner Liberté — Design Tokens
 *
 * Single source of truth for every colour, font, spacing value,
 * and transition used across the application.
 */

const theme = {
  /* ── Colour Palette ─────────────────────────────── */
  colors: {
    navy:       '#1B2A4A',
    navyDark:   '#131F38',
    navyLight:  '#2A3D66',
    gold:       '#C4923A',
    goldLight:  '#D4A85A',
    goldDark:   '#9B6E22',
    lightBlue:  '#DCE8F2',
    skyBlue:    '#E8F0F8',
    white:      '#FFFFFF',
    offWhite:   '#F7F5F0',
    cream:      '#FAF8F3',
    text:       '#333333',
    textLight:  '#666666',
    overlay:    'rgba(27, 42, 74, 0.45)',
  },

  /* ── Typography ─────────────────────────────────── */
  fonts: {
    heading: "'Cormorant Garamond', 'Georgia', serif",
    body:    "'Lato', 'Helvetica Neue', Arial, sans-serif",
  },

  /* ── Layout ─────────────────────────────────────── */
  layout: {
    maxWidth:    '1200px',
    headerHeight: '80px',
    headerHeightMobile: '64px',
  },

  /* ── Transitions ────────────────────────────────── */
  transition: {
    fast: '0.2s ease',
    med:  '0.3s ease',
    slow: '0.5s ease',
  },

  /* ── Shadows ────────────────────────────────────── */
  shadow: {
    soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
    med:  '0 8px 30px rgba(0, 0, 0, 0.12)',
  },

  /* ── Border Radius ──────────────────────────────── */
  radius: {
    sm:   '4px',
    md:   '8px',
    lg:   '24px',
    full: '50%',
  },

  /* ── Breakpoints (min-width) ────────────────────── */
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
} as const;

export type Theme = typeof theme;
export default theme;
