import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import SectionHeading from '../../../components/section-heading';

const Mission = ({ title, cta, content }) => (
  <div id="mission">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <SectionHeading title={title} cta={cta} />
          {content.map(({ text, strong }, key) => {
            if (strong) {
              return (
                <p key={key}>
                  <span>{text}</span>
                </p>
              );
            }

            return <p key={key}>{text}</p>;
          })}
        </Column>
      </Row>
    </Container>
  </div>
);

export default Mission;
