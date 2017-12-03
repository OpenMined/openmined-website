import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';

const Timeline = ({ content }) => (
  <div id="timeline">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <Heading level={3}>{content.heading}</Heading>
        </Column>
      </Row>
    </Container>
    <div id="project-timeline">
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <ul className="events">
              {content.events &&
                content.events.map(event => {
                  return (
                    <li className={'event ' + event.status}>
                      <span className="marker" />
                      <div className="content">
                        <Heading level={5} className="title">
                          {event.title}
                        </Heading>
                        <p className="date">{event.date}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </Column>
        </Row>
      </Container>
    </div>
  </div>
);

export default Timeline;
