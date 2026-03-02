import React from 'react';
import styled from 'styled-components';

/**
 * Reusable SVG wave separator between sections.
 *
 *   topColor    – the colour that bleeds DOWN into the wave
 *   bottomColor – the background behind the wave
 *   flip        – mirror vertically (wave points up instead of down)
 *   variant     – 'gentle' | 'steep' | 'double'
 *   height      – CSS height of the divider (responsive by default)
 */

type Variant = 'gentle' | 'steep' | 'double';

interface Props {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  variant?: Variant;
  height?: string;
}

const paths: Record<Variant, string> = {
  gentle:
    'M0,40 C150,100 350,0 500,40 C650,80 850,0 1000,40 L1000,0 L0,0 Z',
  steep:
    'M0,60 C200,120 300,0 500,60 C700,120 800,0 1000,60 L1000,0 L0,0 Z',
  double:
    'M0,30 C100,60 200,0 300,30 C400,60 500,0 600,30 C700,60 800,0 900,30 L1000,0 L0,0 Z',
};

const WaveDivider: React.FC<Props> = ({
  topColor = 'transparent',
  bottomColor = '#FFFFFF',
  flip = false,
  variant = 'gentle',
  height,
}) => (
  <Wrapper $flip={flip} $bg={bottomColor} $height={height} aria-hidden="true">
    <WaveSvg viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path d={paths[variant]} fill={topColor} />
    </WaveSvg>
  </Wrapper>
);

export default WaveDivider;

/* ── Styles ───────────────────────────────────────── */

const Wrapper = styled.div<{ $flip: boolean; $bg: string; $height?: string }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: ${({ $bg }) => $bg};
  transform: ${({ $flip }) => ($flip ? 'rotate(180deg)' : 'none')};
  height: ${({ $height }) => $height || 'auto'};
`;

const WaveSvg = styled.svg`
  display: block;
  width: 100%;
  height: 60px;

  @media (min-width: 768px) {
    height: 80px;
  }

  @media (min-width: 1200px) {
    height: 100px;
  }
`;
