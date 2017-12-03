import React from 'react';

import pysyftIcon from './assets/pysyft.svg';
import sonarIcon from './assets/sonar.svg';
import mineIcon from './assets/mine.svg';
import adaptersIcon from './assets/adapters.svg';
import openminedIcon from '../../assets/logo-square-color.svg';

const RepoIcon = ({ repo }) => {
  let icon;

  switch (repo.toLowerCase()) {
    case 'pysyft':
      icon = pysyftIcon;
      break;

    case 'sonar':
      icon = sonarIcon;
      break;

    case 'pysonar':
      icon = sonarIcon;
      break;

    case 'mine':
      icon = mineIcon;
      break;

    case 'mine-ui':
      icon = mineIcon;
      break;

    case 'adapters':
      icon = adaptersIcon;
      break;

    default:
      icon = openminedIcon;
  }

  return (
    <img src={icon} className={'repo-icon ' + repo.toLowerCase()} alt={repo} />
  );
};

export default RepoIcon;
