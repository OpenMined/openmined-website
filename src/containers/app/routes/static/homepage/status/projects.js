import React from 'react';
import moment from 'moment';
import { Row, Column, Container, Heading } from 'openmined-ui';

import SectionHeading from '../../../../components/section-heading';
import RepoIcon from '../../../../components/repo-icon';
import ExternalLink from '../../../../components/external-link';

import { generateOMRepositoryLink } from '../../../../../../helpers/repositories';

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

const Issues = ({ issues = [], link }) => (
  <ul className="issues">
    {issues.length <= 0 && (
      <li className="no-issues">
        <span>There are no issues for this repository.</span>
        <br />
        <ExternalLink to={link}>Create one.</ExternalLink>
      </li>
    )}
    {issues.length > 0 &&
      issues.map(({ url, title, number, author, createdAt, comments }, key) => (
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
      ))}
  </ul>
);

const ProjectSelector = ({ projects, current, setCurrent }) => (
  <div className="projects">
    {projects.map(({ shortName, name, description }, index) => (
      <div
        className={current === index ? 'project current' : 'project'}
        onClick={() => setCurrent(index)}
        key={index}
      >
        <RepoIcon repo={shortName} />
        <div className="info">
          <Heading level={4}>{name}</Heading>
          <p className="description">{description}</p>
        </div>
      </div>
    ))}
  </div>
);

const Projects = ({ projects, current, setCurrent }) => {
  const currentRepository = projects[current];
  const { topIssues, recentIssues } = currentRepository;
  const repositoryLink = generateOMRepositoryLink(currentRepository);

  return (
    <div id="github-projects">
      <Container>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <SectionHeading title="Project Status" level={3} />
          </Column>
        </Row>
        <Row>
          <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
            <ProjectSelector
              projects={projects}
              current={current}
              setCurrent={setCurrent}
            />
          </Column>
        </Row>
      </Container>
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
            <Issues issues={topIssues} link={repositoryLink} />
          </Column>
          <Column sizes={{ small: 12, large: 6, xlarge: 5 }}>
            <Heading level={5}>Recent Issues</Heading>
            <Issues issues={recentIssues} link={repositoryLink} />
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
