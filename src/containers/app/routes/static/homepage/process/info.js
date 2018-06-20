import React from 'react';
import { Heading } from 'openmined-ui';

import ExternalLink from '../../../../components/external-link';
import RepoIcon from '../../../../components/repo-icon';

import {
  matchRepositoryToName,
  generateOMRepositoryLink
} from '../../../../../../helpers/repositories';

const Repositories = ({ repositories, info }) => (
  <ul className="repos">
    {info.repositories.map((repository, key) => {
      const { name, shortName } = matchRepositoryToName(
        repository,
        repositories
      );

      const link = generateOMRepositoryLink(shortName);

      return (
        <li key={key}>
          <ExternalLink to={link}>
            <div className="icon">
              <RepoIcon repo={name} />
            </div>
            <span className="name">{name}</span>
          </ExternalLink>
        </li>
      );
    })}
  </ul>
);

const Info = ({ repositories, info }) => (
  <div className="info">
    <Heading level={5}>{info.title}</Heading>
    <p className="description">{info.description}</p>
    {info.repositories.length > 0 &&
      repositories.length > 0 && (
        <div>
          <p className="contribute">Contribute</p>
          <Repositories repositories={repositories} info={info} />
        </div>
      )}
  </div>
);

export default Info;
