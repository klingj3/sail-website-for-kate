import React from 'react';
import styled from 'styled-components';
import { Container, SectionTitle, Button } from 'styles/shared';
import { FaWineGlassAlt, FaSun, FaShieldAlt, FaUsers } from 'react-icons/fa';
import sails from 'sails.json';
import siteConfig from 'siteConfig.json';

const features = [
  { icon: <FaWineGlassAlt />, label: 'Full Bar Aboard' },
  { icon: <FaSun />, label: 'Daily Sails' },
  { icon: <FaShieldAlt />, label: 'USCG Certified' },
  { icon: <FaUsers />, label: 'All Ages Welcome' },
];

const Sails: React.FC = () => (
  <Wrapper id="sails">
    <Container style={{ textAlign: 'center' }}>
      <SectionTitle>Ticketed Sails</SectionTitle>
      <SeasonBanner>
        Three unforgettable experiences · Departing daily from{' '}
        <strong>{siteConfig.contact.venueName}</strong>
        <br />
        <strong>{siteConfig.season}</strong>
      </SeasonBanner>

      <Grid>
        {sails.map((sail) => (
          <Card key={sail.title}>
            <CardImage
              src={`${process.env.PUBLIC_URL}${sail.image}`}
              alt={sail.title}
              loading="lazy"
            />
            <CardBody>
              <CardTitle>{sail.title}</CardTitle>
              <MetaStrip>
                <MetaItem>
                  <MetaIcon>⏱</MetaIcon>
                  <MetaText>{sail.duration}</MetaText>
                </MetaItem>
                <MetaDivider />
                <MetaItem>
                  <MetaText>Departs {sail.departs}</MetaText>
                </MetaItem>
              </MetaStrip>
              <CardText>{sail.description}</CardText>
              <Pricing>{sail.pricing}</Pricing>
              <BookButton
                href={sail.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </BookButton>
            </CardBody>
          </Card>
        ))}
      </Grid>

      {/* ── Feature strip ── */}
      <FeatureStrip>
        {features.map((f) => (
          <FeatureItem key={f.label}>
            <FeatureIcon>{f.icon}</FeatureIcon>
            <FeatureLabel>{f.label}</FeatureLabel>
          </FeatureItem>
        ))}
      </FeatureStrip>
    </Container>
  </Wrapper>
);

export default Sails;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  padding: 120px 0 80px;
  margin-top: -1px;
  background: ${({ theme }) => theme.colors.lightBlue};

  @media (min-width: 768px) {
    padding-top: 130px;
  }

  @media (min-width: 1200px) {
    padding-top: 150px;
  }
`;

const SeasonBanner = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 48px;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 600;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: transform ${({ theme }) => theme.transition.med},
              box-shadow ${({ theme }) => theme.transition.med};
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.med};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 12px;
  text-transform: none;
`;

const MetaStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MetaIcon = styled.span`
  font-size: 0.85rem;
`;

const MetaText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  white-space: nowrap;
`;

const MetaDivider = styled.div`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.colors.navy};
  opacity: 0.2;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  flex: 1;
`;

const Pricing = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 22px;
  letter-spacing: 0.04em;
`;

const BookButton = styled(Button)`
  font-size: 0.85rem;
  padding: 10px 32px;
`;

/* ── Feature strip ── */
const FeatureStrip = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 56px;
  padding: 28px 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 28px;
    padding: 24px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const FeatureLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  letter-spacing: 0.05em;
  white-space: nowrap;
`;
