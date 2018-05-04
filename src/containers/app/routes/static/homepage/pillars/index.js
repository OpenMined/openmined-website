import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import { IconColorFilter, DotsTrack, KeyframeStyles } from './svg';

import SectionHeading from '../../../../components/section-heading';
import Card from '../../../../components/card';

import './pillars.css';

const IconDots = ({ colors, icon, title }) => {
  const filterName = (color, suffix = '') => color + '-filter-' + suffix;

  const iconFilter = filterName(colors[0], 'icon');
  const gradientFilter = filterName(colors[0], 'gradient');
  const maskFilter = filterName(colors[0], 'mask');

  return (
    <Column sizes={{ large: 2 }} offsets={{ xlarge: 1 }} className="icon-dots">
      <IconColorFilter id={`${iconFilter}`} color={colors[0]} />
      <img
        src={icon}
        className={`icon ${colors[0]}`}
        style={{
          filter: `url(#${iconFilter})`
        }}
        alt={title}
      />
      <DotsTrack
        colors={colors}
        gradientFilter={gradientFilter}
        maskFilter={maskFilter}
      />
    </Column>
  );
};

const PillarContent = ({ title, description, cards }) => (
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
);

const Pillar = props => {
  return (
    <Row className="pillar">
      <IconDots {...props} />
      <PillarContent {...props} />
    </Row>
  );
};

const Pillars = ({ pillars }) => (
  <div id="pillars">
    <KeyframeStyles />
    <Container>
      {pillars.map((pillar, key) => <Pillar {...pillar} key={key} />)}
    </Container>
  </div>
);

export default Pillars;
