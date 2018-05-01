import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ImageButton from '../../../components/image-button';
import ExternalLink from '../../../components/external-link';

const Footer = ({ questions, movement, members }) => (
  <div id="footer">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <Heading level={3}>{questions.title}</Heading>
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
    </Container>
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <Heading level={3}>{movement.title}</Heading>
        </Column>
        <Column
          sizes={{ small: 12, xlarge: 10 }}
          offsets={{ xlarge: 1 }}
          className="ctas"
        >
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
        </Column>
        {members && (
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
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
          </Column>
        )}
      </Row>
    </Container>
    {/* TODO: In theory, a map should go here... */}
  </div>
);

export default Footer;
