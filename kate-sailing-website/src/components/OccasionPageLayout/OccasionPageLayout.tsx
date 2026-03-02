import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Container } from 'styles/shared';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { OccasionPageData } from 'data/occasionPages';

interface Props {
  data: OccasionPageData;
}

const OccasionPageLayout: React.FC<Props> = ({ data }) => (
  <>
    <Header />
    <main>
      <PageSection>
        <Container>
          <TwoColumn>
            {/* Left: title + image */}
            <LeftCol>
              <PageTitle>{data.title}</PageTitle>
              <HeroImage src={data.image} alt={data.imageAlt} />
            </LeftCol>

            {/* Right: rendered markdown */}
            <RightCol>
              <MarkdownBody>
                <ReactMarkdown>{data.content}</ReactMarkdown>
              </MarkdownBody>
            </RightCol>
          </TwoColumn>
        </Container>
      </PageSection>

      <ContactStrip>
        <ContactText>
          Ready to book? Email{' '}
          <a href="mailto:schoonerliberte@gmail.com">schoonerliberte@gmail.com</a>{' '}
          or call <a href="tel:5085249121">(508) 524-9121</a>.
        </ContactText>
      </ContactStrip>
    </main>
    <Footer />
  </>
);

export default OccasionPageLayout;

/* ── Styles ───────────────────────────────────────── */

const PageSection = styled.section`
  padding: calc(${({ theme }) => theme.layout.headerHeight} + 48px) 0 60px;
  background: ${({ theme }) => theme.colors.white};
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 1fr;
  gap: 56px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const LeftCol = styled.div`
  position: sticky;
  top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
  }
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.colors.navy};
  line-height: 1.15;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  white-space: pre-line;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.med};
  display: block;
`;

const RightCol = styled.div``;

const MarkdownBody = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.text};

  /* First paragraph — intro text, slightly larger */
  > p:first-child {
    font-size: 1.1rem;
    margin-bottom: 1.4em;
  }

  p {
    margin-bottom: 0.65em;
  }

  /* ### headings become small bold subheads */
  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    letter-spacing: 0.01em;
    margin-top: 1.4em;
    margin-bottom: 0.35em;
  }

  /* inline bold stays inline */
  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.navy};
  }

  em {
    color: ${({ theme }) => theme.colors.textLight};
    font-style: italic;
  }

  ul {
    list-style: disc;
    padding-left: 1.4em;
    margin-bottom: 0.75em;
  }

  li {
    margin-bottom: 0.3em;
  }

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: ${({ theme }) => theme.colors.goldDark};
    }
  }
`;

/* ── Contact strip ── */
const ContactStrip = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  padding: 48px 24px;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textLight};

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.goldDark};
    }
  }
`;
