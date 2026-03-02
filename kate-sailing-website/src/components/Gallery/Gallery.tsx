import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Container, SectionTitle } from 'styles/shared';
import { FaInstagram } from 'react-icons/fa';

const galleryImages = [
  {
    src: 'https://static.wixstatic.com/media/8c57dc_7a28c7ab8aa44a51b0f7ee01960c4af6~mv2.jpg/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_7a28c7ab8aa44a51b0f7ee01960c4af6~mv2.jpg',
    alt: 'Schooner Liberté crew and guests on deck',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_2b197fb080424cf6a0a8ff77520fec71~mv2.jpg/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_2b197fb080424cf6a0a8ff77520fec71~mv2.jpg',
    alt: 'Close-up of the Liberté under sail',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_ee22bdf6a36246028ed100175932a84b~mv2.jpg/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_ee22bdf6a36246028ed100175932a84b~mv2.jpg',
    alt: 'Guests relaxing aboard the schooner',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_d0970f20bf064665ba72ac39f4b54550~mv2.jpg/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_d0970f20bf064665ba72ac39f4b54550~mv2.jpg',
    alt: 'Liberté sailing at twilight',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_8d924526ee9841bfa55c985c3ccdd09a~mv2.png/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_8d924526ee9841bfa55c985c3ccdd09a~mv2.png',
    alt: 'Moonrise over the schooner',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_7e3e22afc93e4a8994c0faf492ea7bd4~mv2.png/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_7e3e22afc93e4a8994c0faf492ea7bd4~mv2.png',
    alt: 'Sunset sailing on Cape Cod',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_c21d8b562e4342f6b6a14f72d3a79c6c~mv2.jpg/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_c21d8b562e4342f6b6a14f72d3a79c6c~mv2.jpg',
    alt: 'Crew member at the helm',
  },
  {
    src: 'https://static.wixstatic.com/media/8c57dc_c99630d032a64ff9b800532f0a2f2c94~mv2.jpg/v1/fill/w_800,h_600,q_90,enc_avif,quality_auto/8c57dc_c99630d032a64ff9b800532f0a2f2c94~mv2.jpg',
    alt: 'Wedding celebration aboard the Liberté',
  },
];

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(
    () =>
      setLightbox((prev) =>
        prev !== null ? (prev + 1) % galleryImages.length : null,
      ),
    [],
  );

  const goPrev = useCallback(
    () =>
      setLightbox((prev) =>
        prev !== null
          ? (prev - 1 + galleryImages.length) % galleryImages.length
          : null,
      ),
    [],
  );

  return (
    <Wrapper id="gallery">
      <Container style={{ textAlign: 'center' }}>
        <SectionTitle>Gallery</SectionTitle>

        <Grid>
          {galleryImages.map((img, idx) => (
            <GridItem
              key={idx}
              onClick={() => setLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(idx)}
            >
              <GridImage src={img.src} alt={img.alt} loading="lazy" />
              <GridOverlay />
            </GridItem>
          ))}
        </Grid>

        <InstagramCTA>
          <InstagramLink
            href="https://www.instagram.com/schoonerliberte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Follow our journey &nbsp;@schoonerliberte
          </InstagramLink>
        </InstagramCTA>
      </Container>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <LightboxClose onClick={closeLightbox} aria-label="Close">
              &times;
            </LightboxClose>
            <LightboxNav $side="left" onClick={goPrev} aria-label="Previous">
              ‹
            </LightboxNav>
            <LightboxImg
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
            />
            <LightboxNav $side="right" onClick={goNext} aria-label="Next">
              ›
            </LightboxNav>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </Wrapper>
  );
};

export default Gallery;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.colors.white};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(27, 42, 74, 0);
  transition: background ${({ theme }) => theme.transition.med};
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;

  &:hover ${GridOverlay} {
    background: rgba(27, 42, 74, 0.2);
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transition.slow};

  ${GridItem}:hover & {
    transform: scale(1.05);
  }
`;

/* ── Instagram CTA ── */
const InstagramCTA = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.navy};
  padding: 10px 24px;
  border: 2px solid ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.transition.med};

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
  }
`;

/* ── Lightbox ── */
const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxImg = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: ${({ theme }) => theme.radius.md};
  object-fit: contain;
`;

const LightboxClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  line-height: 1;

  &:hover {
    opacity: 0.7;
  }
`;

const LightboxNav = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${({ $side }) => ($side === 'left' ? 'left: -48px' : 'right: -48px')};
  color: white;
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  line-height: 1;
  padding: 8px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    ${({ $side }) => ($side === 'left' ? 'left: 8px' : 'right: 8px')};
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
`;
