import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ExternalLink from '../../../components/external-link';

const Footer = ({ questions, movement }) => (
  <div id="footer">
    {questions.questions_items && (
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <Heading level={3}>{questions.questions_title}</Heading>
          </Column>
          <Column
            sizes={{ small: 12, xlarge: 10 }}
            offsets={{ xlarge: 1 }}
            className="questions"
          >
            {questions.questions_items.map(question => {
              return (
                <div
                  className="question"
                  key={`question-${question.footer_questions_question}`}
                >
                  <p className="query">{question.footer_questions_question}</p>
                  <p className="answer">{question.footer_questions_answer}</p>
                </div>
              );
            })}
          </Column>
        </Row>
      </Container>
    )}
    {movement && (
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <Heading level={3}>{movement.movement_title}</Heading>
          </Column>
          <Column
            sizes={{ small: 12, xlarge: 10 }}
            offsets={{ xlarge: 1 }}
            className="ctas"
          >
            <div className="button-container">
              <ExternalLink
                to={movement.movement_github.footer_movement_github_link}
                className="button white"
              >
                <i className="fa fa-github" />
                <span>
                  {movement.movement_github.footer_movement_github_text}
                </span>
              </ExternalLink>
              <span className="count">
                {movement.movement_github.footer_movement_github_members &&
                  movement.movement_github.footer_movement_github_members
                    .length + ' people'}
              </span>
            </div>
            <div className="button-container">
              <ExternalLink
                to={movement.movement_slack.footer_movement_slack_link}
                className="button white"
              >
                <i className="fa fa-slack" />
                <span>
                  {movement.movement_slack.footer_movement_slack_text}
                </span>
              </ExternalLink>
              <span className="count">> 2,300 people</span>
            </div>
            <div className="button-container">
              <ExternalLink
                to={
                  movement.movement_newsletter.footer_movement_newsletter_link
                }
                className="button white"
              >
                <i className="fa fa-envelope" />
                <span>
                  {movement.movement_newsletter.footer_movement_newsletter_text}
                </span>
              </ExternalLink>
            </div>
          </Column>
          {movement.movement_github.footer_movement_github_members && (
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <ul className="members">
                {movement.movement_github.footer_movement_github_members.map(
                  member => {
                    return (
                      <li className="member" key={`member-${member.login}`}>
                        <ExternalLink to={member.html_url}>
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: `url(${member.avatar_url})`
                            }}
                          />
                        </ExternalLink>
                      </li>
                    );
                  }
                )}
              </ul>
            </Column>
          )}
        </Row>
      </Container>
    )}
    {/* TODO: In theory, a map should go here... */}
  </div>
);

export default Footer;
