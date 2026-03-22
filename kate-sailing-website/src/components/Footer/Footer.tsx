import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaTripadvisor } from 'react-icons/fa';
import CopyEmail from 'components/CopyEmail';
import siteConfig from 'siteConfig.json';

const FAREHARBOR_URL = siteConfig.links.fareHarbor;
const TRIPADVISOR_URL = siteConfig.links.tripAdvisor;

const Footer: React.FC = () => (
  <Wrapper>
    <Inner>
      <TopRow>
        {/* Brand + tagline */}
        <Brand>
          <BrandName as={Link} to="/">Schooner Liberté</BrandName>
          <Tagline>{siteConfig.tagline}</Tagline>
          <Socials>
            <SocialLink
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
            >
              <FaTripadvisor />
            </SocialLink>
          </Socials>
        </Brand>

        {/* Quick Nav */}
        <NavCol>
          <NavHeading>Quick Links</NavHeading>
          <FooterLink href="/#sails">Ticketed Sails</FooterLink>
          <FooterLink href="/#about">About</FooterLink>
          <FooterLink href="/#gallery">Gallery</FooterLink>
          <FooterLink as={Link} to="/private-charters">Private Charters</FooterLink>
          <FooterLink as={Link} to="/bachelorette">Bachelorette Parties</FooterLink>
          <FooterLink href="/#contact">Contact</FooterLink>
          <FooterLink as={Link} to="/faq">FAQ</FooterLink>
        </NavCol>

        {/* Info */}
        <NavCol>
          <NavHeading>Visit Us</NavHeading>
          <FooterText>{siteConfig.contact.venueName}</FooterText>
          <FooterText>{siteConfig.contact.addressLine1}</FooterText>
          <FooterText>{siteConfig.contact.addressLine2}</FooterText>
          <FooterEmailCopy variant="light" />
          <FooterLink href={`tel:${siteConfig.contact.phoneTel}`}>{siteConfig.contact.phone}</FooterLink>
        </NavCol>

        {/* Book CTA */}
        <NavCol>
          <NavHeading>Book a Sail</NavHeading>
          <FooterText>{siteConfig.season}</FooterText>
          <FooterText>Morning · Afternoon · Sunset</FooterText>
          <BookButton
            href={FAREHARBOR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </BookButton>
        </NavCol>
      </TopRow>

      <Divider />

      <BottomRow>
        <Copy>© {new Date().getFullYear()} Schooner Liberté — All rights reserved.</Copy>
        <TripAdvisorLink
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTripadvisor />
          Reviews on TripAdvisor
        </TripAdvisorLink>
      </BottomRow>
    </Inner>
  </Wrapper>
);

export default Footer;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.navy};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 56px 24px 32px;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BrandName = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.04em;
`;

const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.04em;
  margin-bottom: 4px;
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
    transform: scale(1.1);
  }
`;

const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NavHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const FooterLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.03em;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.03em;
  line-height: 1.5;
`;

const BookButton = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 24px;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.transition.med};
  align-self: flex-start;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 40px 0 24px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

const Copy = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.05em;
`;

const FooterEmailCopy = styled(CopyEmail)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  margin-top: 8px;
`;

const TripAdvisorLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.04em;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  svg {
    font-size: 1rem;
  }
`;
