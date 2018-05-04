import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import SectionHeading from '../../../components/section-heading';
import Card from '../../../components/card';

const COLORS = {
  yellow: '#F1BF7A',
  green: '#9BCC9A',
  blue: '#62A4AE',
  black: '#333333'
};

const DOT_RADIUS = 6;
const DOT_DIAMETER = DOT_RADIUS * 2;
const DOT_SPACING = DOT_DIAMETER;

const IconColorFilter = ({ color, id }) => {
  const hexToRGBToPercent = hex => [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255
  ];

  const rgba = hexToRGBToPercent(color);

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

const filterName = (color, suffix = '') => color + '-filter' + suffix;

const DotsTrack = ({ colors }) => (
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

      <mask id={filterName(colors[0], '-mask')}>
        <rect fill="url(#circle-pattern)" width={DOT_DIAMETER} height="9999" />
      </mask>

      <linearGradient
        id={filterName(colors[0], '-gradient')}
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor={COLORS[colors[0]]} />
        <stop offset="100%" stopColor={COLORS[colors[1]]} />
      </linearGradient>
    </defs>

    <rect
      className="dots-mask"
      fill={`url(#${filterName(colors[0], '-gradient')})`}
      mask={`url(#${filterName(colors[0], '-mask')})`}
      x="0"
      y="0"
      width={DOT_DIAMETER}
      height="200%"
    />
  </svg>
);

const KeyframeStyles = () => (
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

const Pillar = ({ colors, icon, title, description, cards }) => (
  <Row className="pillar">
    <Column sizes={{ large: 2 }} offsets={{ xlarge: 1 }} className="icon-dots">
      <IconColorFilter
        id={`${filterName(colors[0], '-icon')}`}
        color={COLORS[colors[0]]}
      />
      <img
        src={icon}
        className={`icon ${colors[0]}`}
        style={{
          filter: `url(#${filterName(colors[0], '-icon')})`
        }}
        alt={title}
      />
      <DotsTrack colors={colors} />
    </Column>
    <Column
      sizes={{ small: 12, large: 10, xlarge: 8 }}
      className="pillar-content"
    >
      <SectionHeading title={title} level={4} />
      <p className="description">{description}</p>
      <Row>
        {cards.map((card, key) => (
          <Column sizes={{ small: 12, large: 6 }} key={key}>
            <Card {...card} />
          </Column>
        ))}
      </Row>
    </Column>
  </Row>
);

const Pillars = ({ pillars }) => (
  <div id="pillars">
    <KeyframeStyles />
    <Container>
      {pillars.map((pillar, key) => <Pillar {...pillar} key={key} />)}
    </Container>
  </div>
);

export default Pillars;
