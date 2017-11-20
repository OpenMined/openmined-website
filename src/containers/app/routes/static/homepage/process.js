import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import ExternalLink from '../../../components/external-link';

import RepoIcon from '../../../components/repo-icon';

const Graph = ({ current }) => (
  <div className="graph">Here's an awesome graph... {current}</div>
);

const Info = ({ current, data }) => {
  let info;

  data.forEach(dataItem => {
    if (dataItem.name === current) {
      info = dataItem;
    }
  });

  return (
    <div className="info">
      <Heading level={5}>{info.title}</Heading>
      <p className="description">{info.description}</p>
      <Heading level={6}>Contribute</Heading>
      <ul className="repos">
        {info.repos.map(repo => {
          return (
            <li>
              <ExternalLink to={repo.link}>
                <div className="icon">
                  <RepoIcon repo={repo.name} />
                </div>
                <span className="name">{repo.name}</span>
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
          let active = item.name === current ? 'active' : '';

          return (
            <li
              className={active}
              onClick={() => changeCurrent(item.name)}
              key={`step-${index}`}
            >
              {item.name}
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

  componentDidUpdate() {
    if (this.props.content.graph && !this.state.current) {
      // TODO: Is there a safer way to set the state of the first item?
      this.setState({
        current: this.props.content.graph[0].name
      });
    }
  }

  render() {
    const { content } = this.props;

    return (
      <div id="process">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <Heading level={3}>{content.heading}</Heading>
              <p className="description">{content.description}</p>
            </Column>
          </Row>
          {content.graph && (
            <Row>
              <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
                <StepSelector
                  current={this.state.current}
                  data={content.graph}
                  changeCurrent={newCurrent =>
                    this.setState({ current: newCurrent })}
                />
              </Column>
              <Column
                sizes={{ small: 12, large: 6, xlarge: 5 }}
                offsets={{ xlarge: 1 }}
              >
                <Graph current={this.state.current} />
              </Column>
              <Column
                sizes={{ small: 12, large: 5, xlarge: 4 }}
                offsets={{ large: 1, xlarge: 2 }}
              >
                {this.state.current && (
                  <Info current={this.state.current} data={content.graph} />
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
