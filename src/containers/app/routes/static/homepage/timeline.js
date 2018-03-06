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
                  current === project.repos_title
                    ? 'project current'
                    : 'project'
                }
                onClick={() => setCurrent(project.repos_title)}
                key={`project-${project.repos_title}`}
              >
                <RepoIcon
                  repo={project.repos_link.substr(
                    project.repos_link.lastIndexOf('/') + 1
                  )}
                />
                <Heading level={4}>{project.repos_title}</Heading>
                <p className="description">{project.repos_description}</p>
              </div>
            );
          })}
      </Column>
    </Row>
  </Container>
);

const Contributors = ({ projects, current }) => {
  let currentProject = {};

  if (projects && current) {
    projects.forEach(project => {
      if (project.repos_title === current) {
        currentProject = project;
      }
    });
  }

  if (
    currentProject.repos_contributors &&
    currentProject.repos_contributors.length > 0
  ) {
    return (
      <ul className="contributors">
        {currentProject.repos_contributors.map(contributor => {
          return (
            <li
              className="contributor"
              key={`contributor-${contributor.author.login}`}
            >
              <ExternalLink to={contributor.author.html_url}>
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url(${contributor.author.avatar_url})`
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
  let currentProject = {};

  if (projects && current) {
    projects.forEach(project => {
      if (project.repos_title === current) {
        currentProject = project;
      }
    });
  }

  if (currentProject.repos_issues && currentProject.repos_issues.length > 0) {
    return (
      <ul className="issues">
        {currentProject.repos_issues.map(issue => {
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

  componentWillReceiveProps() {
    if (this.props.repos && !this.state.currentProject) {
      this.setState({
        currentProject: this.props.repos[0].repos_title
      });
    }
  }

  render() {
    const { title, events, repos, button } = this.props;

    return (
      <div id="timeline">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <Heading level={3}>{title}</Heading>
            </Column>
          </Row>
        </Container>
        <div id="project-timeline">
          <Container>
            <Row>
              <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
                <ul className="events">
                  {events &&
                    events.map(event => {
                      return (
                        <li
                          className={'event ' + event.events_status}
                          key={`event-${event.events_title}`}
                        >
                          <span className="marker" />
                          <div className="content">
                            <Heading level={5} className="title">
                              {event.events_title}
                            </Heading>
                            <p className="date">{event.events_date}</p>
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
            projects={repos}
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
                  projects={repos}
                  current={this.state.currentProject}
                />
              </Column>
              <Column sizes={{ small: 12, large: 8, xlarge: 7 }}>
                <Heading level={5}>Top Issues</Heading>
                <Issues projects={repos} current={this.state.currentProject} />
              </Column>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Column sizes={{ small: 12 }} className="cta-container">
              <ExternalLink to={button.button_link} className="button black">
                <i className="fa fa-github" />
                <span>{button.button_text}</span>
              </ExternalLink>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Timeline;
