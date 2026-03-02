import React from 'react';
import styled from 'styled-components';
import { Container } from 'styles/shared';

const PrivateChartersSection: React.FC = () => (
  <Wrapper id="charters">
    <Container>
      <Inner>
        <Eyebrow>Private Charters &amp; Events</Eyebrow>
        <Heading>Charter Liberté for Your Special Occasion</Heading>
        <Body>
          Weddings, corporate outings, birthday celebrations, anniversary
          parties — whatever the occasion, there's no venue quite like the open
          water. Reserve Liberté exclusively for your group and let our crew
          handle every detail.
        </Body>
        <CTARow>
          <PrimaryButton href="/private-charters">
            Private Charters
          </PrimaryButton>
          <SecondaryButton href="/bachelorette">
            Bachelorette Parties
          </SecondaryButton>
        </CTARow>
      </Inner>
    </Container>
  </Wrapper>
);

export default PrivateChartersSection;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.navy};
  padding: 80px 0;
`;

const Inner = styled.div`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
`;

const Eyebrow = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 14px;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  letter-spacing: 0.02em;
`;

const Body = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 36px;
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 13px 32px;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.transition.med};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  transition: all ${({ theme }) => theme.transition.med};

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;
