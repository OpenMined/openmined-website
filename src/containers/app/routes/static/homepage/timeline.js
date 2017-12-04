import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import moment from 'moment';
import RepoIcon from '../../../components/repo-icon';
import ExternalLink from '../../../components/external-link';

const ProjectSelector = ({ projects, current, setCurrent }) => (
  <Container>
    <Row>
      <Column
        sizes={{ small: 12, xlarge: 10 }}
        offsets={{ xlarge: 1 }}
        className="projects"
      >
        {projects &&
          projects.map(project => {
            return (
              <div
                className={
                  current === project.name ? 'project current' : 'project'
                }
                onClick={() => setCurrent(project.name)}
                key={`project-${project.name}`}
              >
                <RepoIcon repo={project.repo} />
                <Heading level={4}>{project.name}</Heading>
                <p className="description">{project.description}</p>
              </div>
            );
          })}
      </Column>
    </Row>
  </Container>
);

const Contributors = ({ projects, current }) => {
  let currentProject;

  if (projects && current) {
    projects.forEach(project => {
      if (project.name === current) {
        currentProject = project;
      }
    });
  }

  if (currentProject && currentProject.contributors.length > 0) {
    return (
      <ul className="contributors">
        {currentProject.contributors.map(contributor => {
          return (
            <li
              className="contributor"
              key={`contributor-${contributor.author.login}`}
            >
              <ExternalLink to={contributor.author.html_url}>
                <div
                  className="avatar"
                  style={{
                    backgroundImage:
                      'url(' + `${contributor.author.avatar_url}` + ')'
                  }}
                />
                <p className="login">{contributor.author.login}</p>
              </ExternalLink>
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
};

const Issues = ({ projects, current }) => {
  let currentProject;

  if (projects && current) {
    projects.forEach(project => {
      if (project.name === current) {
        currentProject = project;
      }
    });
  }

  if (currentProject && currentProject.issues.length > 0) {
    return (
      <ul className="issues">
        {currentProject.issues.map(issue => {
          return (
            <li className="issue" key={`issue-${issue.title}`}>
              <i className="fa fa-github" />
              <ExternalLink to={issue.html_url}>
                <p className="title">{issue.title}</p>
                <p className="meta">
                  <strong>#{issue.number}</strong> - {issue.user.login} opened
                  this issue {moment(issue.created_at).fromNow()} &bull;{' '}
                  {issue.comments}{' '}
                  {issue.comments === 1 ? 'comment' : 'comments'}
                </p>
              </ExternalLink>
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
};

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProject: null
    };
  }

  componentDidUpdate() {
    if (this.props.content.repos && !this.state.currentProject) {
      // TODO: Is there a safer way to set the state of the first item?=
      this.setState({
        currentProject: this.props.content.repos[0].name
      });
    }
  }

  render() {
    const { content } = this.props;

    return (
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
                        <li
                          className={'event ' + event.status}
                          key={`event-${event.title}`}
                        >
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
        <div id="github-projects">
          <ProjectSelector
            projects={content.repos}
            current={this.state.currentProject}
            setCurrent={repo => this.setState({ currentProject: repo })}
          />
          <Container>
            <Row>
              <Column
                sizes={{ small: 12, large: 4, xlarge: 3 }}
                offsets={{ xlarge: 1 }}
              >
                <Heading level={5}>Top Contributors</Heading>
                <Contributors
                  projects={content.repos}
                  current={this.state.currentProject}
                />
              </Column>
              <Column sizes={{ small: 12, large: 8, xlarge: 7 }}>
                <Heading level={5}>Top Issues</Heading>
                <Issues
                  projects={content.repos}
                  current={this.state.currentProject}
                />
              </Column>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Column sizes={{ small: 12 }} className="cta-container">
              <ExternalLink
                to="https://github.com/OpenMined"
                className="button black"
              >
                <i className="fa fa-github" />
                <span>Start Contributing</span>
              </ExternalLink>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Timeline;
