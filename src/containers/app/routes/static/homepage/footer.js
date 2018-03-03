import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ExternalLink from '../../../components/external-link';

import logo from '../../../assets/logo-blackbg.svg';

const Footer = ({ content }) => (
  <div id="footer">
    {content.questions && (
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <Heading level={3}>{content.questions.heading}</Heading>
          </Column>
          <Column
            sizes={{ small: 12, xlarge: 10 }}
            offsets={{ xlarge: 1 }}
            className="questions"
          >
            {content.questions.questions.map(question => {
              return (
                <div className="question" key={`question-${question.question}`}>
                  <p className="query">{question.question}</p>
                  <p className="answer">{question.answer}</p>
                </div>
              );
            })}
          </Column>
        </Row>
      </Container>
    )}
    {content.movement && (
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <Heading level={3}>{content.movement.heading}</Heading>
          </Column>
          <Column
            sizes={{ small: 12, xlarge: 10 }}
            offsets={{ xlarge: 1 }}
            className="ctas"
          >
            <div className="button-container">
              <ExternalLink
                to={content.movement.github.link}
                className="button white"
              >
                <i className="fa fa-github" />
                <span>Start Contributing</span>
              </ExternalLink>
              <span className="count">
                > {content.movement.github.members.length} people
              </span>
            </div>
            <div className="button-container">
              <ExternalLink
                to={content.movement.slack.link}
                className="button white"
              >
                <i className="fa fa-slack" />
                <span>Chat on Slack</span>
              </ExternalLink>
              <span className="count">> 2,300 people</span>
            </div>
            <div className="button-container">
              <ExternalLink
                to={content.movement.newsletter.link}
                className="button white"
              >
                <i className="fa fa-envelope" />
                <span>Join Newsletter</span>
              </ExternalLink>
            </div>
          </Column>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <ul className="members">
              {content.movement.github.members.map(member => {
                return (
                  <li className="member" key={`member-${member.login}`}>
                    <ExternalLink to={member.html_url}>
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: 'url(' + `${member.avatar_url}` + ')'
                        }}
                      />
                    </ExternalLink>
                  </li>
                );
              })}
            </ul>
          </Column>
        </Row>
      </Container>
    )}
    {/* TODO: In theory, a map should go here... */}
    {content.links && (
      <Container>
        <Row>
          <Column
            sizes={{ small: 12, xlarge: 10 }}
            offsets={{ xlarge: 1 }}
            className="footer"
          >
            <ul className="footer-items">
              <li className="logo">
                <img src={logo} alt="OpenMined" />
              </li>
              {content.links.map((link, i) => {
                return (
                  <li
                    key={`footer-link-${i}`}
                    className={link.icon ? 'icon' : 'text'}
                  >
                    <ExternalLink to={link.to}>
                      {link.icon && <i className={`fa ${link.icon}`} />}
                      {link.text && <span>{link.text}</span>}
                    </ExternalLink>
                  </li>
                );
              })}
            </ul>
            <div className="tagline">
              <p>Decentralized. Democratized. Data.</p>
            </div>
          </Column>
        </Row>
      </Container>
    )}
  </div>
);

export default Footer;
