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

const ColorFilter = ({ color, id }) => {
  const hexToRGBToPercent = hex => [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255
  ];

  const rgba = hexToRGBToPercent(color);

  return (
    <svg>
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

const Pillars = ({ pillars }) => (
  <div id="pillars">
    <Container>
      {pillars.map(({ colors, icon, title, description, cards }, key) => (
        <Row key={key} className="pillar">
          <Column
            sizes={{ large: 2 }}
            offsets={{ xlarge: 1 }}
            className="icon-dots"
          >
            <img src={icon} className={`icon ${colors[0]}`} alt={title} />
            <ColorFilter id={`${colors[0]}-filter`} color={COLORS[colors[0]]} />
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
      ))}
    </Container>
  </div>
);

export default Pillars;
