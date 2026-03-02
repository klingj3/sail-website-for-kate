import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTripadvisor, FaChevronDown } from 'react-icons/fa';

const FAREHARBOR_URL =
  'https://fareharbor.com/embeds/book/theschoonerliberte/items/?flow=18587&back=https%3A%2F%2Fwww.theliberte.com%2F&g4=yes';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Attraction_Review-g41565-d3282429-Reviews-or80-Liberte_The_Schooner-Falmouth_Cape_Cod_Massachusetts.html';

export interface HeaderProps {
  /** Start transparent over a hero, then turn solid on scroll */
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  /* When transparent prop is true, the header is "light-on-dark" until scrolled */
  const isTransparent = transparent && !scrolled;

  return (
    <Wrapper $scrolled={scrolled} $transparent={isTransparent}>
      <Inner>
        {/* ── Brand ── */}
        <Brand href="/" $light={isTransparent}>
          Schooner Liberté
        </Brand>

        {/* ── Desktop nav + socials + CTA ── */}
        <RightSide>
          <Nav>
            <NavLink href="/#about" $light={isTransparent}>
              About
            </NavLink>
            <NavLink href="/#gallery" $light={isTransparent}>
              Gallery
            </NavLink>

            {/* ── Charters dropdown ── */}
            <DropdownWrap>
              <NavLink href="/#charters" $light={isTransparent} as="a">
                Private Charters
                <ChevronIcon $light={isTransparent}>
                  <FaChevronDown />
                </ChevronIcon>
              </NavLink>
              <DropdownMenu $light={isTransparent}>
                <DropdownLink href="/private-charters" $light={isTransparent}>
                  Private Charters
                </DropdownLink>
                <DropdownLink href="/bachelorette" $light={isTransparent}>
                  Bachelorette Parties
                </DropdownLink>
              </DropdownMenu>
            </DropdownWrap>

            <NavLink href="/#contact" $light={isTransparent}>
              Contact
            </NavLink>
          </Nav>

          <Socials $light={isTransparent}>
            <SocialLink
              href="https://www.instagram.com/schoonerliberte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              $light={isTransparent}
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              $light={isTransparent}
            >
              <FaTripadvisor />
            </SocialLink>
          </Socials>

          <BookNowCta
            href={FAREHARBOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            $light={isTransparent}
          >
            Book Now
          </BookNowCta>
        </RightSide>

        {/* ── Mobile hamburger ── */}
        <Hamburger
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          $open={mobileOpen}
          $light={isTransparent}
        >
          <span />
          <span />
          <span />
        </Hamburger>
      </Inner>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <MobileMenu>
          <MobileLink href="/#about" onClick={handleNavClick}>
            About
          </MobileLink>
          <MobileLink href="/#gallery" onClick={handleNavClick}>
            Gallery
          </MobileLink>
          <MobileLink href="/#charters" onClick={handleNavClick}>
            Private Charters
          </MobileLink>
          <MobileSubLink href="/private-charters" onClick={handleNavClick}>
            Private Charters
          </MobileSubLink>
          <MobileSubLink href="/bachelorette" onClick={handleNavClick}>
            Bachelorette Parties
          </MobileSubLink>
          <MobileLink href="/#contact" onClick={handleNavClick}>
            Contact
          </MobileLink>
          <MobileSocials>
            <MobileSocialLink
              href="https://www.instagram.com/schoonerliberte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </MobileSocialLink>
            <MobileSocialLink
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
            >
              <FaTripadvisor />
            </MobileSocialLink>
          </MobileSocials>
          <MobileLinkCta
            href={FAREHARBOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            Book Now
          </MobileLinkCta>
        </MobileMenu>
      )}
    </Wrapper>
  );
};

export default Header;

/* ────────────────────────────────────────────────────
   Styled Components
   ──────────────────────────────────────────────────── */

const Wrapper = styled.header<{ $scrolled: boolean; $transparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(8px);
  transition: background ${({ theme }) => theme.transition.med},
    box-shadow ${({ theme }) => theme.transition.med};

  background: ${({ $transparent }) =>
    $transparent ? 'transparent' : 'rgba(255, 255, 255, 0.97)'};
  box-shadow: ${({ $scrolled, $transparent, theme }) =>
    $scrolled && !$transparent ? theme.shadow.soft : 'none'};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  height: ${({ theme }) => theme.layout.headerHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ theme }) => theme.layout.headerHeightMobile};
  }
`;

const Brand = styled.a<{ $light: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: color ${({ theme }) => theme.transition.med};
  color: ${({ $light, theme }) =>
    $light ? theme.colors.white : theme.colors.navy};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.25rem;
  }
`;

/* ── Right side: nav + socials ── */
const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

/* ── Nav ── */
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled.a<{ $light: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  position: relative;
  padding: 4px 0;
  transition: color ${({ theme }) => theme.transition.med};
  color: ${({ $light, theme }) =>
    $light ? 'rgba(255, 255, 255, 0.92)' : theme.colors.navy};
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gold};
    transition: width ${({ theme }) => theme.transition.med};
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${({ $light, theme }) =>
      $light ? theme.colors.white : theme.colors.navy};
  }
`;

/* ── Dropdown for Private Charters ── */
const DropdownMenu = styled.div<{ $light: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ theme }) => theme.transition.fast},
    visibility ${({ theme }) => theme.transition.fast};

  /* The actual panel */
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%) translateY(-6px) rotate(45deg);
    width: 10px;
    height: 10px;
    background: ${({ $light }) =>
      $light ? 'rgba(27, 42, 74, 0.92)' : 'rgba(255, 255, 255, 0.97)'};
    border-radius: 1px;
    z-index: 1;
  }
`;

const DropdownWrap = styled.div`
  position: relative;

  &:hover ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownLink = styled.a<{ $light: boolean }>`
  display: block;
  position: relative;
  z-index: 2;
  padding: 10px 24px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: all ${({ theme }) => theme.transition.fast};

  background: ${({ $light }) =>
    $light ? 'rgba(27, 42, 74, 0.92)' : 'rgba(255, 255, 255, 0.97)'};
  color: ${({ $light, theme }) =>
    $light ? 'rgba(255, 255, 255, 0.85)' : theme.colors.navy};
  backdrop-filter: blur(12px);

  &:first-child {
    border-radius: 6px 6px 0 0;
    padding-top: 14px;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
    padding-bottom: 14px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    padding-left: 28px;
  }
`;

const ChevronIcon = styled.span<{ $light: boolean }>`
  display: inline-flex;
  align-items: center;
  font-size: 0.55rem;
  margin-left: 2px;
  opacity: 0.6;
  transition: transform ${({ theme }) => theme.transition.fast},
    opacity ${({ theme }) => theme.transition.fast};

  ${DropdownWrap}:hover & {
    transform: rotate(180deg);
    opacity: 1;
  }
`;

/* ── Book Now CTA — white outline over hero, gold filled on scroll ── */
const BookNowCta = styled.a<{ $light: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 10px 28px;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.transition.med};

  /* Over the hero: subtle white outline that doesn't compete */
  background: ${({ $light, theme }) =>
    $light ? 'transparent' : theme.colors.gold};
  color: ${({ $light, theme }) =>
    $light ? 'rgba(255, 255, 255, 0.92)' : theme.colors.white};
  border: 2px solid
    ${({ $light, theme }) =>
      $light ? 'rgba(255, 255, 255, 0.5)' : theme.colors.gold};

  &:hover {
    background: ${({ $light, theme }) =>
      $light ? 'rgba(255, 255, 255, 0.15)' : theme.colors.goldDark};
    border-color: ${({ $light, theme }) =>
      $light ? 'rgba(255, 255, 255, 0.8)' : theme.colors.goldDark};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-1px);
    box-shadow: ${({ $light }) =>
      $light ? 'none' : '0 4px 14px rgba(196, 146, 58, 0.35)'};
  }
`;

/* ── Social icons in header ── */
const Socials = styled.div<{ $light: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 12px;
  border-left: 1px solid
    ${({ $light }) =>
      $light ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  transition: border-color ${({ theme }) => theme.transition.med};
`;

const SocialLink = styled.a<{ $light: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 1.1rem;
  transition: all ${({ theme }) => theme.transition.fast};
  color: ${({ $light, theme }) =>
    $light ? 'rgba(255, 255, 255, 0.85)' : theme.colors.navy};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    transform: scale(1.1);
  }
`;

/* ── Hamburger ── */
const Hamburger = styled.button<{ $open: boolean; $light: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;

  span {
    display: block;
    width: 100%;
    height: 2.5px;
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transition.fast};
    background: ${({ $light, theme }) =>
      $light ? theme.colors.white : theme.colors.navy};
  }

  ${({ $open }) =>
    $open &&
    `
    span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

/* ── Mobile menu ── */
const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const MobileLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.navy};
  padding: 8px 0;
`;

const MobileSubLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4px 0;
  margin-top: -8px;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const MobileLinkCta = styled(MobileLink)`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const MobileSocials = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const MobileSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  transition: all ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.navyLight};
  }
`;
