import React, { Component } from 'react';
import { Row, Column, Container } from '../../../../components/grid';
import Heading from '../../../../components/heading';

import SectionHeading from '../../../../components/section-heading';

import './milestones.scss';

const StageIcon = ({ icon, color, size = 'small' }) => (
  <div className={`stage-icon ${size} ${color}`}>
    <i className={`fa ${icon}`} aria-hidden="true" />
  </div>
);

const Feature = ({ status, text, description }) => (
  <li className="feature">
    <StageIcon {...status} />
    <span>
      <strong>{text}</strong> {description}
    </span>
  </li>
);

const Milestone = ({
  toggleFunc,
  current,
  title,
  status,
  subtitle,
  description,
  features
}) => (
  <div className={`milestone${current ? ' current' : ''}`} onClick={toggleFunc}>
    <div className="header">
      <StageIcon {...status} size="large" />
      <div className="info">
        <Heading level={4} className="title">
          {title}
        </Heading>
        <span className="subtitle">{subtitle}</span>
      </div>
      <div className="arrow">
        <i className="fa fa-caret-right" aria-hidden="true" />
      </div>
    </div>
    <div className="content">
      <p className="description">{description}</p>
      {features && (
        <ul className="features">
          {features.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </ul>
      )}
    </div>
  </div>
);

class Milestones extends Component {
  constructor(props) {
    super(props);

    const { milestones } = props;

    milestones.forEach((milestone, index) => {
      if (index === 0) {
        milestone.current = true;
      } else {
        milestone.current = false;
      }
    });

    this.state = { milestones };
  }

  render() {
    const { title, stages } = this.props;
    const { milestones } = this.state;

    return (
      <div id="milestones" className="section-padding">
        <Container>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              <SectionHeading title={title} level={3}>
                <ul className="stages">
                  {stages.map(icon => (
                    <li key={icon.text}>
                      <StageIcon {...icon} />
                      <span>{icon.text}</span>
                    </li>
                  ))}
                </ul>
              </SectionHeading>
            </Column>
          </Row>
          <Row>
            <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
              {milestones.map((milestone, index) => (
                <Milestone
                  {...milestone}
                  toggleFunc={() => {
                    const newState = Object.assign({}, this.state);

                    newState.milestones[index].current = !newState.milestones[
                      index
                    ].current;

                    this.setState(newState);
                  }}
                  key={index}
                />
              ))}
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Milestones;
