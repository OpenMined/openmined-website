import React from 'react';

const DOT_RADIUS = 6;
const DOT_DIAMETER = DOT_RADIUS * 2;
const DOT_SPACING = DOT_DIAMETER;
const COLORS = {
  yellow: '#F1BF7A',
  green: '#9BCC9A',
  blue: '#62A4AE',
  black: '#333333'
};

export const IconColorFilter = ({ color, id }) => {
  const hexToRGBToPercent = hex => [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255
  ];

  const rgba = hexToRGBToPercent(COLORS[color]);

  return (
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={id} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values={`0 0 0 0 ${rgba[0]}
                     0 0 0 0 ${rgba[1]}
                     0 0 0 0 ${rgba[2]}
                     0 0 0 1 0`}
          />
        </filter>
      </defs>
    </svg>
  );
};

export const DotsTrack = ({ colors, gradientFilter, maskFilter }) => (
  <svg
    className="dots-track"
    width={DOT_DIAMETER}
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="circle-pattern"
        width={DOT_DIAMETER}
        height={DOT_DIAMETER + DOT_SPACING}
        patternUnits="userSpaceOnUse"
      >
        <circle cx={DOT_RADIUS} cy={DOT_RADIUS} r={DOT_RADIUS} fill="#fff" />
      </pattern>

      <mask id={maskFilter}>
        <rect fill="url(#circle-pattern)" width={DOT_DIAMETER} height="9999" />
      </mask>

      <linearGradient id={gradientFilter} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={COLORS[colors[0]]} />
        <stop offset="100%" stopColor={COLORS[colors[1]]} />
      </linearGradient>
    </defs>

    <rect
      className="dots-mask"
      fill={`url(#${gradientFilter})`}
      mask={`url(#${maskFilter})`}
      x="0"
      y="0"
      width={DOT_DIAMETER}
      height="200%"
    />
  </svg>
);

export const KeyframeStyles = () => (
  <style>
    {`@keyframes moveDots {
      from {
        transform: translateY(-${DOT_DIAMETER}px);
      }

      to {
        transform: translateY(${DOT_DIAMETER}px);
      }
    }`}
  </style>
);
