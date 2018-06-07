import React, { Component } from 'react';
import { Row, Column, Container } from 'openmined-ui';
import ImageButton from '../../../../components/image-button';
import { matchRepositoryToName } from '../../../../../../helpers/repositories';

import Projects from './projects';
import LatestNews from './latest-news';

import './status.css';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: 0
    };
  }

  render() {
    const { repositories, projects, cta, news } = this.props;

    const matchedProjects = matchRepositoryToName(projects, repositories);

    return (
      <div id="status" className="section-padding">
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
        <LatestNews {...news} />
      </div>
    );
  }
}

export default Status;
