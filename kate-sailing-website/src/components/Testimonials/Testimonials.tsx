import React from 'react';
import styled from 'styled-components';
import { FaTripadvisor, FaStar } from 'react-icons/fa';
import testimonials from 'testimonials.json';
import siteConfig from 'siteConfig.json';

const TRIPADVISOR_URL = siteConfig.links.tripAdvisor;

const Stars: React.FC = () => (
  <StarsRow aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} />
    ))}
  </StarsRow>
);

const Testimonials: React.FC = () => (
  <Wrapper id="testimonials">
    <QuoteIconTop>&ldquo;</QuoteIconTop>
    <Container>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index}>
          <Stars />
          <Headline>{testimonial.headline}</Headline>
          <Quote>{testimonial.quote}</Quote>
          <Attribution>{testimonial.attribution}</Attribution>
          <SourceBadge
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read on TripAdvisor"
          >
            <FaTripadvisor />
            <span>via TripAdvisor</span>
          </SourceBadge>
        </TestimonialCard>
      ))}
    </Container>
    <TripAdvisorCTA>
      <TripAdvisorLink
        href={TRIPADVISOR_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTripadvisor />
        Read {siteConfig.socialProof.reviewCount} reviews on TripAdvisor
      </TripAdvisorLink>
    </TripAdvisorCTA>
    <QuoteIconBottom>&rdquo;</QuoteIconBottom>
  </Wrapper>
);

export default Testimonials;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.navy};
  padding: 80px 24px 60px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px 40px 72px;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
`;

const TestimonialCard = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StarsRow = styled.div`
  display: flex;
  gap: 4px;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 0.9rem;
  margin-bottom: 16px;
`;

const Headline = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightBlue};
  margin-bottom: 20px;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

const Quote = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  flex: 1;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.05rem;
  }
`;

const Attribution = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  letter-spacing: 0.04em;
`;

const SourceBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.8;
  transition: opacity ${({ theme }) => theme.transition.fast};

  &:hover {
    opacity: 1;
  }

  svg {
    font-size: 1rem;
  }
`;

const TripAdvisorCTA = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;
`;

const TripAdvisorLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.gold};
  transition: all ${({ theme }) => theme.transition.med};

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
    transform: translateY(-2px);
  }
`;

const QuoteIconTop = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 120px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.lightBlue};
  opacity: 0.3;
  line-height: 1;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 180px;
    top: 30px;
    left: 40px;
  }
`;

const QuoteIconBottom = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 120px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.lightBlue};
  opacity: 0.3;
  line-height: 1;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 180px;
    bottom: 30px;
    right: 40px;
  }
`;
