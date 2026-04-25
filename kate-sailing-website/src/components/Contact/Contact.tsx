import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, SectionTitle } from 'styles/shared';
import { FaEnvelope, FaMapMarkerAlt, FaParking, FaPhone, FaQuestionCircle } from 'react-icons/fa';
import CopyEmail from 'components/CopyEmail';
import siteConfig from 'siteConfig.json';

const MAPS_URL = siteConfig.contact.mapsUrl;
const PARKING_MAP_IMAGE = `${process.env.PUBLIC_URL}/static/map.jpg`;

const Contact: React.FC = () => (
  <Wrapper id="contact">
    <Container>
      <TitleBlock>
        <SectionTitle>Find Us</SectionTitle>
      </TitleBlock>

      <FindUsCard>
        <MapSide>
          <img
            src={PARKING_MAP_IMAGE}
            alt="Illustrated parking map for Schooner Liberte in Falmouth"
          />
        </MapSide>

        <InfoSide>
          <WarningRow>
            <RowIcon><FaParking /></RowIcon>
            <AddressText>
              <AddressLabel>Parking</AddressLabel>
              <WarningText>
                No onsite parking — use Marine Park lot or street parking nearby.{' '}
                <DetailsLink to="/parking">Full details →</DetailsLink>
              </WarningText>
            </AddressText>
          </WarningRow>

          <AddressRow
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RowIcon><FaMapMarkerAlt /></RowIcon>
            <AddressText>
              <AddressLabel>Departure point</AddressLabel>
              <AddressLines>
                {siteConfig.contact.venueName}
                <br />
                {siteConfig.contact.addressLine1}
                <br />
                {siteConfig.contact.addressLine2}
              </AddressLines>
            </AddressText>
            <RowChevron aria-hidden>→</RowChevron>
          </AddressRow>

          <InfoRow>
            <RowIcon><FaEnvelope /></RowIcon>
            <AddressText>
              <AddressLabel>Email</AddressLabel>
              <CopyEmail variant="dark" />
            </AddressText>
          </InfoRow>

          <PhoneRow href={`tel:${siteConfig.contact.phoneTel}`}>
            <RowIcon><FaPhone /></RowIcon>
            <AddressText>
              <AddressLabel>Call</AddressLabel>
              <PhoneValue>{siteConfig.contact.phone}</PhoneValue>
            </AddressText>
            <RowChevron aria-hidden>→</RowChevron>
          </PhoneRow>
        </InfoSide>
      </FindUsCard>

      <FaqBlock>
        <FAQNudge>
          <FaQuestionCircle />
          <span>
            Have more questions?{' '}
            <FAQLink as={Link} to="/faq">Check out our FAQ →</FAQLink>
          </span>
        </FAQNudge>
      </FaqBlock>
    </Container>
  </Wrapper>
);

export default Contact;

const Wrapper = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.colors.offWhite};
`;

const TitleBlock = styled.div`
  text-align: center;
  margin-bottom: 44px;
`;

/* Mobile: two stacked cards. Desktop: one unified card, no gap. */
const FindUsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    gap: 0;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadow.med};
    overflow: hidden;
  }
`;

const MapSide = styled.figure`
  margin: 0;
  padding: 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.med};
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    border-radius: ${({ theme }) => theme.radius.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 1.1;
    padding: 0;
    background: transparent;
    border-radius: 0;
    box-shadow: none;

    img {
      border-radius: 0;
    }
  }
`;

/* Mobile: own card. Desktop: right half of FindUsCard, content centered. */
const InfoSide = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.med};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 0.9;
    border-radius: 0;
    box-shadow: none;
    border-left: 1px solid rgba(27, 42, 74, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const WarningRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
`;

const WarningText = styled.span`
  font-size: 0.93rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text};
`;

const DetailsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const AddressRow = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-top: 1px solid rgba(27, 42, 74, 0.08);
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.offWhite};

    [aria-hidden] {
      transform: translateX(4px);
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-top: 1px solid rgba(27, 42, 74, 0.08);
`;

const PhoneRow = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-top: 1px solid rgba(27, 42, 74, 0.08);
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.offWhite};

    [aria-hidden] {
      transform: translateX(4px);
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const RowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.95rem;
`;

const AddressText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  line-height: 1.4;
  flex: 1;
  min-width: 0;
`;

const AddressLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navy};
`;

const AddressLines = styled.span`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.45;
`;

const PhoneValue = styled.span`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.text};
`;

const RowChevron = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.navy};
  flex-shrink: 0;
  transition: transform ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};
`;

const FaqBlock = styled.div`
  text-align: center;
  margin-top: 4px;
`;

const FAQNudge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.textLight};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  svg {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.05rem;
    flex-shrink: 0;
  }
`;

const FAQLink = styled.a`
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;
