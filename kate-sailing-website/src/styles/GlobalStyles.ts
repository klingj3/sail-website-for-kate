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
`;

export default GlobalStyles;
