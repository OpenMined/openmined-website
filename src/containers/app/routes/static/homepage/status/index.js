import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ImageButton from '../../../../components/image-button';
import { matchRepositoryToName } from '../../../../../../helpers/repositories';

import Projects from './projects';

import './status.css';

const Timeline = ({ timeline }) => (
  <div id="project-timeline">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <ul className="events">
            {timeline.map(({ status, title, date }, key) => (
              <li className={'event ' + status} key={key}>
                <span className="marker" />
                <div className="content">
                  <Heading level={5} className="title">
                    {title}
                  </Heading>
                  <p className="date">{date}</p>
                </div>
              </li>
            ))}
          </ul>
        </Column>
      </Row>
    </Container>
  </div>
);

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: 0
    };
  }

  render() {
    const {
      repositories,
      title,
      content: { timeline, projects, cta }
    } = this.props;

    const matchedProjects = matchRepositoryToName(projects, repositories);

    return (
      <div id="status">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <Heading level={3}>{title}</Heading>
            </Column>
          </Row>
        </Container>
        <Timeline timeline={timeline} />
        {repositories.length > 0 && (
          <Projects
            projects={matchedProjects}
            current={this.state.currentProject}
            setCurrent={index => this.setState({ currentProject: index })}
          />
        )}
        <Container>
          <Row>
            <Column sizes={{ small: 12 }} className="cta-container">
              <ImageButton {...cta} inverted />
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Status;
