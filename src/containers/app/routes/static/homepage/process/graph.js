import React from 'react';
import RepoIcon from '../../../../components/repo-icon';

const getGraphDisabledClasses = (current, classes) => {
  classes = classes.split(' ');

  switch (current) {
    case 'Create':
      if (~classes.indexOf('second') || ~classes.indexOf('mines')) {
        classes.push('disabled');
      }
      break;

    case 'Distribute':
      if (
        ~classes.indexOf('data-scientists') ||
        ~classes.indexOf('first') ||
        ~classes.indexOf('second') ||
        ~classes.indexOf('mines')
      ) {
        classes.push('disabled');
      }
      if (~classes.indexOf('sonar')) {
        classes.push('distributing');
      }
      break;

    case 'Train':
      if (~classes.indexOf('data-scientists') || ~classes.indexOf('first')) {
        classes.push('disabled');
      }
      if (~classes.indexOf('sonar')) {
        classes.push('distributed');
      }
      break;

    case 'Reward':
      if (~classes.indexOf('data-scientists') || ~classes.indexOf('first')) {
        classes.push('disabled');
      }
      if (~classes.indexOf('sonar')) {
        classes.push('distributed');
      }
      if (~classes.indexOf('second')) {
        classes.push('rewarded');
      }
      if (~classes.indexOf('mines')) {
        classes.push('money');
      }
      break;

    case 'Deliver':
      if (~classes.indexOf('data-scientists')) {
        classes.push('finished');
      }
      if (~classes.indexOf('second') || ~classes.indexOf('mines')) {
        classes.push('disabled');
      }
      if (~classes.indexOf('first')) {
        classes.push('returned');
      }
      if (~classes.indexOf('sonar')) {
        classes.push('distributed');
      }
      break;

    default:
      break;
  }

  return classes.join(' ');
};

const Graph = ({ current }) => (
  <div className={'graph ' + current}>
    <ul className={getGraphDisabledClasses(current, 'items data-scientists')}>
      <li className="item data-scientist">
        <RepoIcon repo="openmined" />
      </li>
    </ul>
    <ul className={getGraphDisabledClasses(current, 'lines first')}>
      <li className="line" />
    </ul>
    <ul className={getGraphDisabledClasses(current, 'items sonar')}>
      <li className="item small" />
      <li className="item big" />
      <li className="item sonar">
        <RepoIcon repo="sonar" />
      </li>
      <li className="item big" />
      <li className="item small" />
    </ul>
    <ul className={getGraphDisabledClasses(current, 'lines second')}>
      <li className="line" />
      <li className="line" />
      <li className="line" />
    </ul>
    <ul className={getGraphDisabledClasses(current, 'items mines')}>
      <li className="item mine">
        <RepoIcon repo="mine" />
      </li>
      <li className="item mine">
        <RepoIcon repo="mine" />
      </li>
      <li className="item mine">
        <RepoIcon repo="mine" />
      </li>
    </ul>
    <svg width="0" height="0">
      <defs>
        <clipPath id="circles-clip">
          <circle cx="10" cy="10" r="6" />
          <circle cx="40" cy="10" r="6" />
          <circle cx="70" cy="10" r="6" />
          <circle cx="100" cy="10" r="6" />
          <circle cx="130" cy="10" r="6" />
          <circle cx="160" cy="10" r="6" />
          <circle cx="190" cy="10" r="6" />
          <circle cx="220" cy="10" r="6" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export default Graph;
