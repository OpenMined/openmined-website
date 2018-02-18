import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ExternalLink from '../../../components/external-link';

import RepoIcon from '../../../components/repo-icon';

const getGraphDisabledClasses = (current, classes) => {
  classes = classes.split(' ');

  switch (current) {
    case 'create':
      if (~classes.indexOf('second') || ~classes.indexOf('mines')) {
        classes.push('disabled');
      }
      break;

    case 'distribute':
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

    case 'train':
      if (~classes.indexOf('data-scientists') || ~classes.indexOf('first')) {
        classes.push('disabled');
      }
      if (~classes.indexOf('sonar')) {
        classes.push('distributed');
      }
      break;

    case 'reward':
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

    case 'deliver':
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

const Info = ({ current, data }) => {
  let info;

  data.forEach(dataItem => {
    if (dataItem.graph_name === current) {
      info = dataItem;
    }
  });

  return (
    <div className="info">
      <Heading level={5}>{info.graph_title}</Heading>
      <p className="description">{info.graph_content}</p>
      <Heading level={6}>Contribute</Heading>
      <ul className="repos">
        {info.graph_repos.map(repo => {
          return (
            <li key={`repo-${repo.label}`}>
              <ExternalLink to={repo.value}>
                <div className="icon">
                  <RepoIcon repo={repo.label} />
                </div>
                <span className="name">{repo.label}</span>
              </ExternalLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const StepSelector = ({ current, data, changeCurrent }) => {
  const insertIntoArray = (arr, value) => {
    return arr.reduce((result, element, index, array) => {
      result.push(element);
      if (index < array.length - 1) {
        result.push(value);
      }
      return result;
    }, []);
  };

  data = insertIntoArray(data, { arrow: true });

  return (
    <ul className="step-selector">
      {data.map((item, index) => {
        if (item.arrow) {
          return (
            <li className="arrow-hold" key={`step-${index}`}>
              <span className="arrow" />
            </li>
          );
        } else {
          let active = item.graph_name === current ? 'active' : '';

          return (
            <li
              className={active}
              onClick={() => changeCurrent(item.graph_name)}
              key={`step-${index}`}
            >
              {item.graph_name}
            </li>
          );
        }
      })}
    </ul>
  );
};

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: null
    };
  }

  componentWillReceiveProps() {
    if (this.props.graph && !this.state.current) {
      this.setState({
        current: this.props.graph[0].graph_name
      });
    }
  }

  render() {
    const { title, content, graph } = this.props;

    return (
      <div id="process">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <Heading level={3}>{title}</Heading>
              <p className="description">{content}</p>
            </Column>
          </Row>
          {graph &&
            this.state.current && (
              <Row>
                <Column
                  sizes={{ small: 12, xlarge: 10 }}
                  offsets={{ xlarge: 1 }}
                >
                  <StepSelector
                    current={this.state.current}
                    data={graph}
                    changeCurrent={newCurrent =>
                      this.setState({ current: newCurrent })
                    }
                  />
                </Column>
                <Column
                  sizes={{ small: 12, large: 6, xlarge: 6 }}
                  offsets={{ xlarge: 1 }}
                >
                  <Graph current={this.state.current.toLowerCase()} />
                </Column>
                <Column
                  sizes={{ small: 12, large: 5, xlarge: 4 }}
                  offsets={{ large: 1, xlarge: 1 }}
                >
                  {this.state.current && (
                    <Info current={this.state.current} data={graph} />
                  )}
                </Column>
              </Row>
            )}
        </Container>
      </div>
    );
  }
}

export default Process;
