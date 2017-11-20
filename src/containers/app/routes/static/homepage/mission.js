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
              if (index === 0) {
                let sentences = paragraph.match(/[^\.!\?]+[\.!\?]+/g);

                paragraph =
                  sentences.slice(0, -1).join('') +
                  ' <span>' +
                  sentences[sentences.length - 1].trim() +
                  '</span>';
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
