import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ── Reset ──────────────────────────────────────── */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── Typography ─────────────────────────────────── */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.2;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${({ theme }) => theme.transition.fast};
  }

  ul { list-style: none; }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  /*
   * Shared “card” surfaces — use with className on the element, not a separate styled file
   * for each use. Only call out bespoke layout in a tiny styled wrapper.
   */
  .sail-surface {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(27, 42, 74, 0.08);
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
  .sail-surface--clip {
    overflow: hidden;
  }
  .sail-padded-map {
    margin: 0;
    padding: 12px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadow.med};
  }
  .sail-padded-map--tight {
    padding: 10px;
  }
  .sail-padded-map img {
    display: block;
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.md};
  }

  /* ---- Page hero + simple grids (inner pages) — pair with h1, p, .sail-surface in markup ---- */
  .sail-page-hero {
    padding: calc(${({ theme }) => theme.layout.headerHeight} + 48px) 0 80px;
    background: ${({ theme }) => theme.colors.cream};
  }
  h1.sail-page-title {
    font-size: clamp(2.8rem, 6vw, 4.7rem);
    font-weight: 400;
    font-style: italic;
    line-height: 0.98;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 20px;
  }
  p.sail-lead {
    font-size: 1.16rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textLight};
    margin: 0 0 28px;
  }
  .sail-2col-hero {
    display: grid;
    grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
    gap: 56px;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .sail-2col-hero {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  .sail-hero-narrow {
    max-width: 480px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .sail-hero-narrow {
      max-width: 720px;
    }
  }
  .sail-link-rail {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    color: ${({ theme }) => theme.colors.text};
    transition: background ${({ theme }) => theme.transition.fast};
  }
  .sail-link-rail:hover {
    background: ${({ theme }) => theme.colors.offWhite};
  }
  .sail-link-rail:hover [aria-hidden] {
    transform: translateX(4px);
    color: ${({ theme }) => theme.colors.gold};
  }
  .sail-warn-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 22px;
    border-top: 1px solid rgba(27, 42, 74, 0.08);
  }
  .sail-warn-row p {
    font-size: 0.96rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
  .sail-warn-row strong {
    color: ${({ theme }) => theme.colors.navy};
    letter-spacing: 0.04em;
  }
  .sail-labeled {
    display: flex;
    flex-direction: column;
    gap: 2px;
    line-height: 1.35;
    flex: 1;
    min-width: 0;
  }
  .sail-label-eyebrow {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.navy};
  }
  .sail-chevron {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.navy};
    flex-shrink: 0;
    transition: transform ${({ theme }) => theme.transition.fast},
      color ${({ theme }) => theme.transition.fast};
  }
  .sail-pip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: ${({ theme }) => theme.radius.full};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.95rem;
    flex-shrink: 0;
  }
  .sail-pip--navy {
    background: ${({ theme }) => theme.colors.navy};
  }
  .sail-pip--warn {
    background: ${({ theme }) => theme.colors.gold};
  }
  .sail-pip--lg {
    width: 48px;
    height: 48px;
  }
  .sail-tips-2x2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin-top: 48px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .sail-tips-2x2 {
      grid-template-columns: 1fr;
    }
  }
  .sail-surface--tip {
    padding: 24px 28px;
    text-align: left;
  }
  .sail-surface--tip h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.35rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
  }
  .sail-surface--tip p {
    font-size: 0.98rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textLight};
    margin: 0;
  }
  .sail-surface--tip a {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .sail-surface--tip a:hover {
    color: ${({ theme }) => theme.colors.goldDark};
  }
  .sail-tip-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 12px;
  }
  .sail-call-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 24px auto 0;
    padding: 18px 28px;
    max-width: max-content;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
  }
  .sail-call-bar svg {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.05rem;
    flex-shrink: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .sail-call-bar {
      flex-direction: column;
      gap: 8px;
    }
  }
  a.sail-link-gold {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 700;
  }
  a.sail-link-gold:hover {
    color: ${({ theme }) => theme.colors.navy};
  }
`;

export default GlobalStyles;
