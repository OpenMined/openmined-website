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
          projects.map((project, key) => {
            return (
              <div
                className={
                  current === project.title ? 'project current' : 'project'
                }
                onClick={() => setCurrent(project.title)}
                key={key}
              >
                <RepoIcon
                  repo={project.link.substr(project.link.lastIndexOf('/') + 1)}
                />
                <Heading level={4}>{project.title}</Heading>
                <p className="description">{project.description}</p>
              </div>
            );
          })}
      </Column>
    </Row>
  </Container>
);

const Contributors = ({ repositories, current }) => {
  let currentRepository = {};

  if (repositories && current) {
    repositories.forEach(repository => {
      if (repository.repos_title === current) {
        currentRepository = repository;
      }
    });
  }

  if (
    currentRepository.repos_contributors &&
    currentRepository.repos_contributors.length > 0
  ) {
    return (
      <ul className="contributors">
        {currentRepository.repos_contributors.map(contributor => {
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

const Issues = ({ repositories, current }) => {
  let currentRepository = {};

  if (repositories && current) {
    repositories.forEach(repository => {
      if (repository.repos_title === current) {
        currentRepository = repository;
      }
    });
  }

  if (
    currentRepository.repos_issues &&
    currentRepository.repos_issues.length > 0
  ) {
    return (
      <ul className="issues">
        {currentRepository.repos_issues.map(issue => {
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
    if (this.props.content.projects && !this.state.currentProject) {
      this.setState({
        currentProject: this.props.content.projects[0].title
      });
    }
  }

  render() {
    const {
      repositories,
      title,
      content: { timeline, projects, cta }
    } = this.props;

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
                  {timeline &&
                    timeline.map(({ status, title, date }, key) => {
                      return (
                        <li className={'event ' + status} key={key}>
                          <span className="marker" />
                          <div className="content">
                            <Heading level={5} className="title">
                              {title}
                            </Heading>
                            <p className="date">{date}</p>
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
            projects={projects}
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
                  repositories={repositories}
                  current={this.state.currentProject}
                />
              </Column>
              <Column sizes={{ small: 12, large: 8, xlarge: 7 }}>
                <Heading level={5}>Top Issues</Heading>
                <Issues
                  repositories={repositories}
                  current={this.state.currentProject}
                />
              </Column>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Column sizes={{ small: 12 }} className="cta-container">
              <ExternalLink to={cta.link} className="button black">
                <i className="fa fa-github" />
                <span>{cta.text}</span>
              </ExternalLink>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Timeline;
