import React from 'react';
import Heading from '../heading';

import './section-heading.scss';

const SectionHeading = ({ level = 3, title, color = 'black', children }) => (
  <div className={`section-heading ${color}`}>
    <Heading level={level}>{title}</Heading>
    <span className="line" />
    {children && React.cloneElement(children, { color })}
  </div>
);

export default SectionHeading;
