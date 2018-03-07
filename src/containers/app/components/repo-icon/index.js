import React from 'react';

import syftIcon from './assets/syft.svg';
import sonarIcon from './assets/sonar.svg';
import mineIcon from './assets/mine.svg';
import adaptersIcon from './assets/adapters.svg';
import gridIcon from './assets/grid.svg';
import openminedIcon from '../../assets/logo-square-color.svg';

export const hasRepoIcon = repo => {
  if (!repo) {
    return null;
  }

  repo = repo
    .toLowerCase()
    .split('-')
    .join('')
    .split(' ')
    .join('');

  switch (repo) {
    case 'pysyft':
      return syftIcon;

    case 'syft.js':
      return syftIcon;

    case 'sonar':
      return sonarIcon;

    case 'pysonar':
      return sonarIcon;

    case 'mine':
      return mineIcon;

    case 'mineui':
      return mineIcon;

    case 'adapters':
      return adaptersIcon;

    case 'openmined':
      return openminedIcon;

    case 'openminedui':
      return openminedIcon;

    case 'grid':
      return gridIcon;

    default:
      return false;
  }
};

const RepoIcon = ({ repo }) => {
  let icon = hasRepoIcon(repo);

  if (icon) {
    return (
      <img
        src={icon}
        className={'repo-icon ' + repo.toLowerCase()}
        alt={repo}
      />
    );
  } else {
    return null;
  }
};

export default RepoIcon;
