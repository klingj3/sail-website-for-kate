import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaTripadvisor } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import theme from 'styles/theme';

const VIDEO_SRC =
  'https://video.wixstatic.com/video/8c57dc_5bf32a5e02db4975a1d7c6613b3ede2d/720p/mp4/file.mp4';

const POSTER_SRC =
  'https://static.wixstatic.com/media/8c57dc_5bf32a5e02db4975a1d7c6613b3ede2df000.jpg/v1/fill/w_1920,h_1252,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/8c57dc_5bf32a5e02db4975a1d7c6613b3ede2df000.jpg';

const FAREHARBOR_URL =
  'https://fareharbor.com/embeds/book/theschoonerliberte/items/?flow=18587&back=https%3A%2F%2Fwww.theliberte.com%2F&g4=yes';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Attraction_Review-g41565-d3282429-Reviews-or80-Liberte_The_Schooner-Falmouth_Cape_Cod_Massachusetts.html';

const Hero: React.FC = () => (
  <Wrapper id="top">
    <Video autoPlay muted loop playsInline poster={POSTER_SRC}>
      <source src={VIDEO_SRC} type="video/mp4" />
    </Video>
    <Overlay />
    <Content>
      <Title>
        A Grand Experience
        <br />
        for All
      </Title>
      <Subheadline>
        Daily &amp; private chartered sailing excursions aboard a 74′ schooner
        &middot; Falmouth, Cape&nbsp;Cod
      </Subheadline>

      {/* ── Dual CTAs ── */}
      <CTARow>
        <PrimaryCTA href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer">
          Book Your Sail
        </PrimaryCTA>
        <SecondaryCTA href="#sails">Explore Trips</SecondaryCTA>
      </CTARow>

      {/* ── Social proof ── */}
      <SocialProof
        href={TRIPADVISOR_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Stars aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </Stars>
        <ProofText>
          <FaTripadvisor />
          <span>4.9 · 200+ Reviews</span>
        </ProofText>
      </SocialProof>
    </Content>

    {/* ── Scroll indicator ── */}
    <ScrollHint href="#sails" aria-label="Scroll down">
      <HiChevronDown />
    </ScrollHint>

    <WaveOverlay>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path
          d="M0,40 C150,100 350,0 500,40 C650,80 850,0 1000,40 L1000,100 L0,100 Z"
          fill={theme.colors.lightBlue}
        />
      </svg>
    </WaveOverlay>
  </Wrapper>
);

export default Hero;

/* ── Animations ──────────────────────────────────── */

const softBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(8px); }
`;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: visible;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(27, 42, 74, 0.52);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.03em;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.white};
  text-transform: none;
  margin-bottom: 16px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
`;

const Subheadline = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 300;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 36px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
`;

/* ── Dual CTA row ── */
const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ctaBase = `
  display: inline-block;
  padding: 14px 40px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
`;

const PrimaryCTA = styled.a`
  ${ctaBase}
  font-family: ${({ theme }) => theme.fonts.heading};
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gold};

  &:hover {
    background: ${({ theme }) => theme.colors.goldDark};
    border-color: ${({ theme }) => theme.colors.goldDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(196, 146, 58, 0.4);
  }
`;

const SecondaryCTA = styled.a`
  ${ctaBase}
  font-family: ${({ theme }) => theme.fonts.heading};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.navy};
    transform: translateY(-2px);
  }
`;

/* ── Social proof badge ── */
const SocialProof = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  transition: opacity ${({ theme }) => theme.transition.fast};

  &:hover {
    opacity: 1;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gold};
`;

const ProofText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.8);

  svg {
    font-size: 1rem;
  }
`;

/* ── Scroll indicator ── */
const ScrollHint = styled.a`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  animation: ${softBounce} 2s ease-in-out infinite;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 768px) {
    bottom: 100px;
  }

  @media (min-width: 1200px) {
    bottom: 120px;
  }
`;

const WaveOverlay = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 3;
  line-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 60px;

    @media (min-width: 768px) {
      height: 80px;
    }

    @media (min-width: 1200px) {
      height: 100px;
    }
  }
`;
