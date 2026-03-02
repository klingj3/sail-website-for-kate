import React from 'react';

const Anchor = ({ size = 80, color = '#E8613A', className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ring at top */}
    <circle cx="40" cy="12" r="8" stroke={color} strokeWidth="3" fill="none" />
    {/* Small dot in ring */}
    <circle cx="40" cy="12" r="2" fill={color} />
    {/* Vertical shaft */}
    <line x1="40" y1="20" x2="40" y2="88" stroke={color} strokeWidth="3" />
    {/* Crossbar */}
    <line x1="20" y1="45" x2="60" y2="45" stroke={color} strokeWidth="3" />
    {/* Left fluke */}
    <path d="M10 72 Q 20 88, 40 88" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Right fluke */}
    <path d="M70 72 Q 60 88, 40 88" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Arrow tips on flukes */}
    <path d="M10 72 L6 66 L14 68 Z" fill={color} />
    <path d="M70 72 L74 66 L66 68 Z" fill={color} />
    {/* Decorative stars */}
    <circle cx="24" cy="30" r="2.5" fill={color} opacity="0.7" />
    <circle cx="56" cy="30" r="2.5" fill={color} opacity="0.7" />
    <circle cx="18" cy="36" r="1.5" fill={color} opacity="0.5" />
    <circle cx="62" cy="36" r="1.5" fill={color} opacity="0.5" />
  </svg>
);

export default Anchor;
