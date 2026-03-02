import React from 'react';

const ShipWheel = ({ size = 100, color = '#E8613A', className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle */}
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="3" fill="none" />
    {/* Inner circle (hub) */}
    <circle cx="50" cy="50" r="10" stroke={color} strokeWidth="3" fill="none" />
    {/* Center dot */}
    <circle cx="50" cy="50" r="3" fill={color} />
    {/* Spokes */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 50 + 10 * Math.cos(rad);
      const y1 = 50 + 10 * Math.sin(rad);
      const x2 = 50 + 38 * Math.cos(rad);
      const y2 = 50 + 38 * Math.sin(rad);
      return (
        <line
          key={angle}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth="2.5"
        />
      );
    })}
    {/* Handles at the end of each spoke */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 50 + 42 * Math.cos(rad);
      const cy = 50 + 42 * Math.sin(rad);
      return <circle key={`h-${angle}`} cx={cx} cy={cy} r="4" fill={color} />;
    })}
  </svg>
);

export default ShipWheel;
