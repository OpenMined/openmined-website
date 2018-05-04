import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import SectionHeading from '../../../../components/section-heading';

import './mission.css';

const Paragraph = ({ text, strong }) => (
  <p>
    {strong && <span>{text}</span>}
    {!strong && text}
  </p>
);

const Mission = ({ title, cta, content }) => (
  <div id="mission">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <SectionHeading title={title} cta={cta} />
          {content.map((paragraph, key) => (
            <Paragraph {...paragraph} key={key} />
          ))}
        </Column>
      </Row>
    </Container>
  </div>
);

export default Mission;
