import styled, { css } from 'styled-components';

/* ── Reusable layout wrapper ─────────────────────── */
export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

/* ── Section wrapper with standard vertical rhythm ── */
export const Section = styled.section`
  padding: 80px 0;
  position: relative;
`;

/* ── Button base mixin ────────────────────────────── */
export const buttonBase = css`
  display: inline-block;
  padding: 14px 40px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.transition.med};
  text-align: center;
  cursor: pointer;
`;

export const Button = styled.a`
  ${buttonBase}
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.navy};

  &:hover {
    background: ${({ theme }) => theme.colors.navyLight};
    border-color: ${({ theme }) => theme.colors.navyLight};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
`;

export const ButtonOutline = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.navy};
    transform: translateY(-2px);
  }
`;

export const ButtonGold = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${({ theme }) => theme.colors.gold};
  border: 2px solid ${({ theme }) => theme.colors.gold};

  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;

/* ── Section headings ─────────────────────────────── */
export const SectionLabel = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 20px;
`;

export const SectionText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
`;
