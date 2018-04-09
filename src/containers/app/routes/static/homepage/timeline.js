import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import moment from 'moment';
import RepoIcon from '../../../components/repo-icon';
import ExternalLink from '../../../components/external-link';

import {
  matchRepositoryToName,
  generateOMRepositoryLink
} from '../../../../../helpers/repositories';

const ProjectSelector = ({ projects, current, setCurrent }) => (
  <Container>
    <Row>
      <Column
        sizes={{ small: 12, xlarge: 10 }}
        offsets={{ xlarge: 1 }}
        className="projects"
      >
        {projects.length > 0 &&
          projects.map((project, key) => {
            return (
              <div
                className={
                  current === project.name ? 'project current' : 'project'
                }
                onClick={() => setCurrent(project.name)}
                key={key}
              >
                <RepoIcon repo={project.shortName} />
                <Heading level={4}>{project.name}</Heading>
                <p className="description">{project.description}</p>
              </div>
            );
          })}
      </Column>
    </Row>
  </Container>
);

// NOTE: Github took away our ability to see "contributors" in the V4 API.
// See the following link for more information: https://platform.github.community/t/contributors-of-a-repository/3680

// const Contributors = ({ repositories, current }) => {
//   let currentRepository = {};
//
//   if (repositories && current) {
//     repositories.forEach(repository => {
//       if (repository.repos_title === current) {
//         currentRepository = repository;
//       }
//     });
//   }
//
//   if (
//     currentRepository.repos_contributors &&
//     currentRepository.repos_contributors.length > 0
//   ) {
//     return (
//       <ul className="contributors">
//         {currentRepository.repos_contributors.map(contributor => {
//           return (
//             <li
//               className="contributor"
//               key={`contributor-${contributor.author.login}`}
//             >
//               <ExternalLink to={contributor.author.html_url}>
//                 <div
//                   className="avatar"
//                   style={{
//                     backgroundImage: `url(${contributor.author.avatar_url})`
//                   }}
//                 />
//                 <p className="login">{contributor.author.login}</p>
//               </ExternalLink>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
//
//   return null;
// };

const Issues = ({ issues, link }) => (
  <ul className="issues">
    {issues.length <= 0 && (
      <li className="no-issues">
        <span>There are no issues for this repository.</span>
        <br />
        <ExternalLink to={link}>Create one.</ExternalLink>
      </li>
    )}
    {issues.length > 0 &&
      issues.map(({ url, title, number, author, createdAt, comments }, key) => {
        return (
          <li className="issue" key={key}>
            <i className="fa fa-github" />
            <ExternalLink to={url}>
              <p className="title">{title}</p>
              <p className="meta">
                <strong>#{number}</strong> - {author} opened this issue{' '}
                {moment(createdAt).fromNow()} &bull; {comments}{' '}
                {comments === 1 ? 'comment' : 'comments'}
              </p>
            </ExternalLink>
          </li>
        );
      })}
  </ul>
);

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
        currentProject: this.props.content.projects[0]
      });
    }
  }

  render() {
    const {
      repositories,
      title,
      content: { timeline, projects, cta }
    } = this.props;

    const currentRepository =
      repositories.length > 0
        ? matchRepositoryToName(this.state.currentProject, repositories)
        : {};

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
        {repositories.length > 0 && (
          <div id="github-projects">
            <ProjectSelector
              projects={matchRepositoryToName(projects, repositories)}
              current={this.state.currentProject}
              setCurrent={repo => this.setState({ currentProject: repo })}
            />
            <Container>
              <Row>
                {/* <Column
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
              </Column> */}
                <Column
                  sizes={{ small: 12, large: 6, xlarge: 5 }}
                  offsets={{ xlarge: 1 }}
                >
                  <Heading level={5}>Top Issues</Heading>
                  <Issues
                    issues={currentRepository.topIssues || []}
                    link={generateOMRepositoryLink(currentRepository)}
                  />
                </Column>
                <Column sizes={{ small: 12, large: 6, xlarge: 5 }}>
                  <Heading level={5}>Recent Issues</Heading>
                  <Issues
                    issues={currentRepository.recentIssues || []}
                    link={generateOMRepositoryLink(currentRepository)}
                  />
                </Column>
              </Row>
            </Container>
          </div>
        )}
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
