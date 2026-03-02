import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCopy, FaCheck } from 'react-icons/fa';

const DEFAULT_EMAIL = 'schoonerliberte@gmail.com';

interface Props {
  email?: string;
  /** 'light' = on dark backgrounds (footer), 'dark' = on light backgrounds */
  variant?: 'light' | 'dark';
  className?: string;
}

const CopyEmail: React.FC<Props> = ({
  email = DEFAULT_EMAIL,
  variant = 'dark',
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // fallback for older browsers
      const el = document.createElement('textarea');
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <Wrap
      onClick={handleCopy}
      title="Click to copy email address"
      $variant={variant}
      $copied={copied}
      className={className}
    >
      <EmailText>{email}</EmailText>
      <IconWrap>{copied ? <FaCheck /> : <FaCopy />}</IconWrap>
      {copied && <CopiedBadge>Copied!</CopiedBadge>}
    </Wrap>
  );
};

export default CopyEmail;

/* ── Styles ───────────────────────────────────────── */

const Wrap = styled.button<{ $variant: 'light' | 'dark'; $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({ $variant, $copied, theme }) =>
    $copied
      ? theme.colors.gold
      : $variant === 'light'
        ? 'rgba(255,255,255,0.65)'
        : theme.colors.textLight};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ $variant, theme }) =>
      $variant === 'light' ? theme.colors.white : theme.colors.gold};
  }
`;

const EmailText = styled.span`
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
`;

const IconWrap = styled.span`
  font-size: 0.8em;
  opacity: 0.7;
  flex-shrink: 0;
`;

const CopiedBadge = styled.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.navy};
  }
`;
