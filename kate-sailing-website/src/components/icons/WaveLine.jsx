import React from 'react';

const WaveLine = ({ color = '#3EC6C0', width = 200, className = '' }) => (
  <svg
    className={className}
    width={width}
    height="24"
    viewBox="0 0 200 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 12 Q 12.5 0, 25 12 T 50 12 T 75 12 T 100 12 T 125 12 T 150 12 T 175 12 T 200 12"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M0 18 Q 12.5 6, 25 18 T 50 18 T 75 18 T 100 18 T 125 18 T 150 18 T 175 18 T 200 18"
      stroke={color}
      strokeWidth="2.5"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export default WaveLine;
