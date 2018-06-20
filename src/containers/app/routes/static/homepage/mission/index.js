import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import SectionHeading from '../../../../components/section-heading';

import './mission.css';

const Paragraph = ({ text, strong }) => (
  <p>
    {strong && <strong>{text}</strong>}
    {!strong && text}
  </p>
);

const Mission = ({ title, cta, content }) => (
  <div id="mission" className="section-padding">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <SectionHeading title={title} cta={cta} level={3} />
          {content.map((paragraph, key) => (
            <Paragraph {...paragraph} key={key} />
          ))}
        </Column>
      </Row>
    </Container>
  </div>
);

export default Mission;
