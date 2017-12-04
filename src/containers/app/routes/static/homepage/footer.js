import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';

const Footer = ({ content }) => (
  <div id="footer">
    {content.questions && (
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <Heading level={3}>{content.questions.heading}</Heading>
          </Column>
        </Row>
      </Container>
    )}
  </div>
);

export default Footer;
