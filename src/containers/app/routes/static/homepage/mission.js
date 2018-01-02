import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import renderHTML from 'react-render-html';

const Mission = ({ title, content }) => (
  <div id="mission">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <Heading level={3}>{title}</Heading>
          {renderHTML(content || '')}
        </Column>
      </Row>
    </Container>
  </div>
);

export default Mission;
