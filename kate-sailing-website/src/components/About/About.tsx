import React from 'react';
import styled from 'styled-components';
import { Container } from 'styles/shared';

const VESSEL_IMAGE =
  'https://static.wixstatic.com/media/8c57dc_d0970f20bf064665ba72ac39f4b54550~mv2.jpg/v1/fill/w_600,h_900,al_c,q_80,enc_avif,quality_auto/8c57dc_d0970f20bf064665ba72ac39f4b54550~mv2.jpg';

const About: React.FC = () => (
  <Wrapper id="about">
    <Container>
      <PageTitle>About</PageTitle>

      <Grid>
        {/* ── Left column: image + specs ── */}
        <LeftCol>
          <VesselImage src={VESSEL_IMAGE} alt="Schooner Liberté under sail" />
          <SpecsBox>
            <SpecsTitle>Vessel Specs</SpecsTitle>
            <SpecLine>74′ overall | 65′ on deck | 18.5′ beam</SpecLine>
            <SpecLine>Six sails · 1,700+ sq. ft. of sail</SpecLine>
            <SpecLine>135hp diesel · Cruises at 8.5 knots</SpecLine>
          </SpecsBox>
        </LeftCol>

        {/* ── Right column: story ── */}
        <RightCol>
          <SectionHeading>The Vessel</SectionHeading>

          <Body>
            Liberté was custom-built to safely and comfortably carry passengers
            on sailing excursions around Cape Cod. Commissioned in 2001, she is
            inspected annually by the U.S. Coast Guard and certified to carry up
            to 49 passengers. Her three-masted staysail rig, full bar, and
            spacious deck make every sail a genuine New England adventure.
            <br /><br />
            Rather than the original two-mast configuration, Liberté features a 
            three-masted staysail rig, which allows for easier sail handling, greater 
            flexibility under varying conditions, and a more comfortable sailing 
            experience for guests.
          </Body>

          <SectionHeading>The Crew</SectionHeading>

          <Body>
          Captain Ross was raised on the Caribbean island, Bequia. His father was a 
          skipper and he started working on sailboats as a teenager. In 2012 he left 
          the west indies to take a job on an Alden schooner in Maine.
          <br /><br />
          While in Maine, Ross met Kate, who shared his love of sailing and travel. 
          After a decade working aboard boats together, they purchased Liberté in 2025 
          from Chris and Jane Tietje. Now based in Falmouth with their two young daughters, 
          Ross and Kate operate Liberté with the support of a highly experienced crew—many 
          of whom have sailed aboard her for years.
          </Body>
        </RightCol>
      </Grid>
    </Container>
  </Wrapper>
);

export default About;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  padding: 80px 0 100px;
  background: ${({ theme }) => theme.colors.white};
`;

const PageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 5vw, 3.2rem);
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 48px;
  text-transform: none;
  letter-spacing: 0.02em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 56px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftCol = styled.div`
  position: sticky;
  top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
  }
`;

const VesselImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.med};
  margin-bottom: 28px;
`;

const SpecsBox = styled.div`
  padding: 0 4px;
`;

const SpecsTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 10px;
  text-transform: none;
`;

const SpecLine = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 16px;
  margin-top: 8px;
  text-transform: none;

  &:not(:first-child) {
    margin-top: 36px;
  }
`;

const Body = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 18px;
`;

const LearnMore = styled.a`
  display: inline-block;
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.04em;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.navy};
  }
`;
