import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import renderHTML from 'react-render-html';

const Mission = ({ content }) => (
  <div id="mission">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <Heading level={3}>{content.heading}</Heading>
          {content.paragraphs &&
            content.paragraphs.map((paragraph, index) => {
              if (index === 1) {
                paragraph = '<span>' + paragraph + '</span>';
              }

              return (
                <p key={`mission-paragraph-${index}`}>
                  {renderHTML(paragraph)}
                </p>
              );
            })}
        </Column>
      </Row>
    </Container>
  </div>
);

export default Mission;
