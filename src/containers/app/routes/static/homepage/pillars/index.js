import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import {
  ColorFilter,
  DotsTrack,
  KeyframeStyles,
  filterName
} from '../../../../components/svg-dots';
import SectionHeading from '../../../../components/section-heading';
import Card from '../../../../components/card';

import './pillars.css';

const IconDots = ({ colors, icon, title }) => {
  const iconFilter = filterName(colors[0], colors[1], 'icon');

  return (
    <div className="icon-dots">
      <ColorFilter id={`${iconFilter}`} color={colors[0]} />
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
        // The below animation class is determined by <KeyframeStyles />
        animation="move-dots-vertical-forwards"
        direction="vertical"
        speed={2000}
      />
    </div>
  );
};

const PillarContent = ({ title, description, cards }) => (
  <div className="pillar-content">
    <SectionHeading title={title} level={4} />
    <p className="description">{description}</p>
    <Row>
      {cards.map((card, key) => (
        <Column sizes={{ small: 12, large: 6 }} key={key}>
          <Card {...card} />
        </Column>
      ))}
    </Row>
  </div>
);

const Pillar = pillar => {
  return (
    <Row className="pillar">
      <Column sizes={{ large: 2 }} offsets={{ xlarge: 1 }}>
        <IconDots {...pillar} />
      </Column>
      <Column sizes={{ small: 12, large: 10, xlarge: 8 }}>
        <PillarContent {...pillar} />
      </Column>
    </Row>
  );
};

const Pillars = ({ pillars }) => (
  <div id="pillars">
    <KeyframeStyles axis="vertical" direction="forwards" />
    <Container>
      {pillars.map((pillar, key) => <Pillar {...pillar} key={key} />)}
    </Container>
  </div>
);

export default Pillars;
