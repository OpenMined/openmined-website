import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ExternalLink from '../../../components/external-link';
import SectionHeading from '../../../components/section-heading';

import RepoIcon from '../../../components/repo-icon';

import {
  matchRepositoryToName,
  generateOMRepositoryLink
} from '../../../../../helpers/repositories';

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

const Info = ({ repositories, info }) => (
  <div className="info">
    <Heading level={5}>{info.title}</Heading>
    <p className="description">{info.description}</p>
    {info.repositories.length > 0 && (
      <div>
        <Heading level={6}>Contribute</Heading>
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
      </div>
    )}
  </div>
);

const StepSelector = ({ current, data, changeCurrent }) => (
  <div className="step-selector">
    <div className="step-progress">
      <span className="track" />
      <span className="current" />
    </div>
    <ul>
      {data.map((item, index) => (
        <li
          className={index === current ? 'active' : ''}
          onClick={() => changeCurrent(index)}
          key={`step-${index}`}
        >
          {item.heading}
        </li>
      ))}
    </ul>
  </div>
);

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: null,
      period: 5000, // (seconds),
      playing: true
    };
  }

  timer() {
    let newCurrent = this.state.current + 1;

    if (newCurrent >= this.props.content.length) {
      newCurrent = 0;
    }

    console.log('VALUES', this.state.current, newCurrent);

    this.setState({
      current: newCurrent
    });
  }

  componentWillReceiveProps() {
    if (this.props.content && this.state.current === null) {
      this.setState({
        current: 0
      });

      this.intervalId = setInterval(this.timer.bind(this), this.state.period);
    }
  }

  componentDidUpdate() {
    if (!this.state.playing) {
      clearInterval(this.intervalId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  matchContentToCurrent(current, content, repositories) {
    let info;

    content.some(item => {
      if (item.heading === content[current].heading) {
        info = item;

        return true;
      }

      return false;
    });

    return info;
  }

  render() {
    const { repositories, title, cta, content } = this.props;

    const currentInfo =
      repositories.length > 0
        ? this.matchContentToCurrent(this.state.current, content, repositories)
        : {};

    return (
      <div id="process">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <SectionHeading title={title} cta={cta} color="white" />
            </Column>
          </Row>
          {content &&
            this.state.current !== null && (
              <Row className="step-content">
                <Column
                  sizes={{ small: 12, large: 6, xlarge: 4 }}
                  offsets={{ xlarge: 1 }}
                >
                  {repositories.length > 0 && (
                    <Info info={currentInfo} repositories={repositories} />
                  )}
                </Column>
                <Column
                  sizes={{ small: 12, large: 6, xlarge: 5 }}
                  offsets={{ xlarge: 1 }}
                >
                  <Graph current={content[this.state.current].heading} />
                </Column>
              </Row>
            )}
        </Container>
        <StepSelector
          current={this.state.current}
          data={content}
          changeCurrent={newCurrent =>
            this.setState({ current: newCurrent, playing: false })
          }
        />
      </div>
    );
  }
}

export default Process;
