import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import SectionHeading from '../../../../components/section-heading';
import ImageButton from '../../../../components/image-button';
import ExternalLink from '../../../../components/external-link';

import './footer.css';

const CallsToAction = ({ movement }) => (
  <div className="ctas">
    {movement.ctas.map((cta, key) => (
      <div className="button-container" key={key}>
        <ImageButton {...cta} color="white" />
        {cta.count !== 0 && (
          <span className="count">
            {!cta.precise && '> '}
            {cta.count.toLocaleString()} people
          </span>
        )}
      </div>
    ))}
  </div>
);

const Members = ({ members }) => (
  <ul className="members">
    {members.map(({ login, avatarUrl }, key) => {
      return (
        <li className="member" key={key}>
          <ExternalLink to={`https://github.com/${login}`}>
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${avatarUrl})`
              }}
            />
          </ExternalLink>
        </li>
      );
    })}
  </ul>
);

const Movement = ({ movement, members }) => (
  <Row>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <SectionHeading level={3} title={movement.title} />
    </Column>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <CallsToAction movement={movement} />
    </Column>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <Members members={members} />
    </Column>
  </Row>
);

const Questions = ({ questions }) => (
  <Row>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <SectionHeading level={3} title={questions.title} />
    </Column>
    <Column
      sizes={{ small: 12, xlarge: 10 }}
      offsets={{ xlarge: 1 }}
      className="questions"
    >
      {questions.content.map(({ question, answer }, key) => {
        return (
          <div className="question" key={key}>
            <p className="query">{question}</p>
            <p className="answer">{answer}</p>
          </div>
        );
      })}
    </Column>
  </Row>
);

const Footer = footer => (
  <div id="footer">
    <Container>
      {/* <Questions {...footer} /> */}
      <Movement {...footer} />
      {/* TODO: In theory, a map should go here... */}
    </Container>
  </div>
);

export default Footer;
