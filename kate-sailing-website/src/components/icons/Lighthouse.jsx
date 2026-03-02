import React from 'react';

const Lighthouse = ({ size = 80, color = '#FFFFFF', className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lighthouse top light */}
    <rect x="42" y="10" width="16" height="8" rx="2" fill={color} />
    <rect x="46" y="4" width="8" height="8" rx="1" fill={color} />
    {/* Lighthouse body */}
    <path d="M38 18 L62 18 L58 80 L42 80 Z" fill="none" stroke={color} strokeWidth="2.5" />
    {/* Windows */}
    <rect x="46" y="30" width="8" height="10" rx="1" fill={color} opacity="0.6" />
    <rect x="46" y="50" width="8" height="10" rx="1" fill={color} opacity="0.6" />
    {/* Base platform */}
    <rect x="34" y="80" width="32" height="6" rx="1" fill={color} />
    {/* Base */}
    <path d="M30 86 L70 86 L66 100 L34 100 Z" fill="none" stroke={color} strokeWidth="2.5" />
    {/* Ground line */}
    <line x1="26" y1="100" x2="74" y2="100" stroke={color} strokeWidth="2.5" />
  </svg>
);

export default Lighthouse;
