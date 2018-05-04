import React, { Component } from 'react';
import { Row, Column, Container } from 'openmined-ui';

import Info from './info';
import Graph from './graph';

import SectionHeading from '../../../../components/section-heading';

import './process.css';

const StepContent = ({ graph, sections, current, repositories }) => (
  <Row className="step-content">
    <Column sizes={{ small: 12, large: 6, xlarge: 4 }} offsets={{ xlarge: 1 }}>
      <Info info={current} repositories={repositories} />
    </Column>
    <Column sizes={{ small: 12, large: 6, xlarge: 5 }} offsets={{ xlarge: 1 }}>
      <Graph
        data={graph}
        sections={sections}
        current={current.heading.toLowerCase()}
      />
    </Column>
  </Row>
);

const StepSelector = ({
  state: { current, duration, playing },
  content,
  changeCurrent
}) => (
  <div className="step-selector">
    <div
      className={`step-progress${playing ? '' : ' stopped'}`}
      style={{
        animation: `progress ${duration /
          1000 *
          content.length}s linear infinite`
      }}
    />
    <ul className="step-selector-list">
      {content.map((item, index) => (
        <li
          className={`step-item ${index === current ? 'active' : ''}`}
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
      current: 0,
      duration: 5000,
      playing: true
    };
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      let newCurrent = this.state.current + 1;

      if (newCurrent >= this.props.content.length) {
        newCurrent = 0;
      }

      this.setState({
        current: newCurrent
      });
    }, this.state.duration);
  }

  componentDidUpdate() {
    if (!this.state.playing) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  prepGraphData(content) {
    const data = {};

    content.forEach(item => {
      data[item.heading.toLowerCase()] = item.graph;
    });

    return data;
  }

  render() {
    const { repositories, title, cta, content, sections } = this.props;

    return (
      <div id="process">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <SectionHeading title={title} cta={cta} color="white" />
            </Column>
          </Row>
          <StepContent
            graph={this.prepGraphData(content)}
            sections={sections}
            current={content[this.state.current]}
            repositories={repositories}
          />
        </Container>
        <StepSelector
          state={this.state}
          content={content}
          changeCurrent={newCurrent =>
            this.setState({ current: newCurrent, playing: false })
          }
        />
      </div>
    );
  }
}

export default Process;
