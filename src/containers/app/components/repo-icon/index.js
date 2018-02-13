import React from 'react';

import pysyftIcon from './assets/pysyft.png';
import sonarIcon from './assets/sonar.png';
import mineIcon from './assets/mine.png';
import adaptersIcon from './assets/adapters.png';
import openminedIcon from '../../assets/logo-square-color.png';

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
      return pysyftIcon;

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
