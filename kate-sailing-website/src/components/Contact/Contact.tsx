import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, SectionTitle } from 'styles/shared';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaQuestionCircle } from 'react-icons/fa';
import CopyEmail from 'components/CopyEmail';
import siteConfig from 'siteConfig.json';

const MAPS_URL = siteConfig.contact.mapsUrl;

const Contact: React.FC = () => (
  <Wrapper id="contact">
    <Container style={{ textAlign: 'center' }}>
      <SectionTitle>Find Us</SectionTitle>
      <DepartureNote>
        Schooner Liberté departs daily from{' '}
        <strong>{siteConfig.contact.venueName}</strong>.
      </DepartureNote>

      <InfoGrid>
        <InfoItem>
          <IconWrap><FaMapMarkerAlt /></IconWrap>
          <InfoLabel>Departure Point</InfoLabel>
          <InfoText>
            {siteConfig.contact.venueName}
            <br />
            {siteConfig.contact.addressLine1}
            <br />
            {siteConfig.contact.addressLine2}
          </InfoText>
          <MapsLink
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions →
          </MapsLink>
        </InfoItem>

        <InfoItem>
          <IconWrap><FaEnvelope /></IconWrap>
          <InfoLabel>Email</InfoLabel>
          <EmailCopy variant="dark" />
        </InfoItem>

        <InfoItem>
          <IconWrap><FaPhone /></IconWrap>
          <InfoLabel>Call</InfoLabel>
          <InfoLink href={`tel:${siteConfig.contact.phoneTel}`}>{siteConfig.contact.phone}</InfoLink>
        </InfoItem>
      </InfoGrid>

      <FAQNudge>
        <FaQuestionCircle />
        <span>
          Have more questions?{' '}
          <FAQLink as={Link} to="/faq">Check out our FAQ →</FAQLink>
        </span>
      </FAQNudge>
    </Container>
  </Wrapper>
);

export default Contact;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.colors.offWhite};
`;

const DepartureNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 40px;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 600;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 36px;
    max-width: 400px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

const InfoLabel = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 8px;
  letter-spacing: 0.06em;
  text-transform: none;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 10px;
`;

const EmailCopy = styled(CopyEmail)`
  font-size: 0.95rem;
`;

const InfoLink = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const MapsLink = styled.a`
  font-size: 0.85rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.04em;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.navy};
  }
`;

const FAQNudge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 48px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  svg {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const FAQLink = styled.a`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.navy};
  }
`;
