import React, { Component } from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';

const Graph = ({ current }) => <p>Here's an awesome graph... {current}</p>;

const Info = ({ current, data }) => {
  let currentData;

  data.forEach(dataItem => {
    if (dataItem.name === current) {
      currentData = dataItem;
    }
  });

  return <p>{currentData.title}</p>;
};

const ProcessGraph = ({ current, data, changeCurrent }) => {
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
    <div id="process-graph">
      <ul className="step-selector">
        {data.map(item => {
          if (item.arrow) {
            return (
              <li className="arrow-hold">
                <span className="arrow" />
              </li>
            );
          } else {
            let active = item.name === current ? 'active' : '';

            return (
              <li className={active} onClick={() => changeCurrent(item.name)}>
                {item.name}
              </li>
            );
          }
        })}
      </ul>
      <div className="graph-hold">
        <Graph current={current} />
        {current && <Info current={current} data={data} />}
      </div>
    </div>
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
              {content.graph && (
                <ProcessGraph
                  current={this.state.current}
                  data={content.graph}
                  changeCurrent={newCurrent =>
                    this.setState({ current: newCurrent })}
                />
              )}
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Process;
