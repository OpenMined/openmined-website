import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import SectionHeading from '../../../../components/section-heading';

import './milestones.css';

const StageIcon = ({ icon, color, size = 'small' }) => (
  <div className={`stage-icon ${size} ${color}`}>
    <i className={`fa ${icon}`} aria-hidden="true" />
  </div>
);

const Milestones = ({ title, stages }) => (
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
          Here go the milestones...
        </Column>
      </Row>
    </Container>
  </div>
);

export default Milestones;
