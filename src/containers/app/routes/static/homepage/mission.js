import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';

const Mission = ({ title, content }) => (
  <div id="mission">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <Heading level={3}>{title}</Heading>
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
