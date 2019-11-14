import React from 'react';

import syftIcon from './assets/syft.svg';
import gridIcon from './assets/grid.svg';
import openminedIcon from '../../assets/logo-square-color.svg';

import { equalizeNames } from '../../../../helpers/repositories';

export const hasRepoIcon = repo => {
  if (!repo) {
    return null;
  }

  repo = equalizeNames(repo);

  switch (repo) {
    case 'pysyft':
      return syftIcon;

    case 'syft.js':
      return syftIcon;

    case 'openmined':
      return openminedIcon;

    case 'grid':
      return gridIcon;

    case 'pygrid':
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
