import React from 'react';

// Global variables about our lovely dots
const DOT_RADIUS = 6;
const DOT_DIAMETER = DOT_RADIUS * 2;
const DOT_SPACING = DOT_DIAMETER;

// TODO: Maybe at some point, we could have this populate from CSS
const COLORS = {
  red: '#C3707C',
  yellow: '#F1BF7A',
  green: '#9BCC9A',
  blue: '#62A4AE',
  black: '#333333',
  white: '#FFFFFF'
};

// Just a simple way to create the names of filters
export const filterName = (color1, color2, suffix = '') =>
  `${color1}-${color2}-${suffix}`;

// Ever want to colorize something using SVG?... feed it a hex and an id and CSS filter that bad boy
export const ColorFilter = ({ color, id }) => {
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

// Create a track of moving dots in any direction with a pretty gradient
export const DotsTrack = ({
  direction = 'vertical',
  colors,
  animation,
  speed = 2000
}) => {
  const gradientFilter = filterName(
    colors[0],
    colors[1],
    direction + '-gradient'
  );
  const maskFilter = filterName(colors[0], colors[1], direction + '-mask');

  const config = {
    track: {
      width: DOT_DIAMETER,
      height: '100%'
    },
    pattern: {
      width: DOT_DIAMETER,
      height: DOT_DIAMETER + DOT_SPACING
    },
    mask: {
      width: DOT_DIAMETER,
      height: 9999
    },
    gradient: {
      x1: '0%',
      y1: '0%',
      x2: '0%',
      y2: '100%'
    },
    rect: {
      width: DOT_DIAMETER,
      height: '100%'
    }
  };

  if (direction === 'horizontal') {
    const configChanges = ['track', 'pattern', 'mask', 'rect'];

    // Flip the values...
    configChanges.forEach(change => {
      let width = config[change].width;
      let height = config[change].height;

      config[change].width = height;
      config[change].height = width;
    });

    // Gotta do the gradient manually...
    let x2 = config.gradient.x2;
    let y2 = config.gradient.y2;

    config.gradient.x2 = y2;
    config.gradient.y2 = x2;
  }

  return (
    <svg
      className="dots-track"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '1000em' }}
      {...config.track}
    >
      <defs>
        <pattern
          id={`${direction}-circle-pattern`}
          patternUnits="userSpaceOnUse"
          {...config.pattern}
        >
          <circle cx={DOT_RADIUS} cy={DOT_RADIUS} r={DOT_RADIUS} fill="#fff" />
        </pattern>

        <mask id={maskFilter}>
          <rect fill={`url(#${direction}-circle-pattern)`} {...config.mask} />
        </mask>

        <linearGradient id={gradientFilter} {...config.gradient}>
          <stop offset="0%" stopColor={COLORS[colors[0]]} />
          <stop offset="100%" stopColor={COLORS[colors[1]]} />
        </linearGradient>
      </defs>

      <rect
        style={{ animation: `${animation} ${speed}ms infinite linear` }}
        fill={`url(#${gradientFilter})`}
        mask={`url(#${maskFilter})`}
        x="0"
        y="0"
        {...config.rect}
      />
    </svg>
  );
};

// Create the basic keyframe animation required to make our dots move - just specify an axis and direction
export const KeyframeStyles = ({ axis, direction }) => {
  let XorY;
  let amount = [];

  if (axis === 'vertical') {
    XorY = 'Y';
  }

  if (axis === 'horizontal') {
    XorY = 'X';
  }

  if (direction === 'forwards') {
    amount[0] = -DOT_DIAMETER + DOT_SPACING;
    amount[1] = DOT_DIAMETER + DOT_SPACING;
  }

  if (direction === 'backwards') {
    amount[0] = DOT_DIAMETER + DOT_SPACING;
    amount[1] = -DOT_DIAMETER + DOT_SPACING;
  }

  return (
    <style>
      {`@keyframes move-dots-${axis}-${direction} {
          from { transform: translate${XorY}(${amount[0]}px); }
          to { transform: translate${XorY}(${amount[1]}px); }
        }`}
    </style>
  );
};
