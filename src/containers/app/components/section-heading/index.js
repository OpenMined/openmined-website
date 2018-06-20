import React from 'react';
import { Heading } from 'openmined-ui';

import ImageButton from '../image-button';

import './section-heading.css';

const SectionHeading = ({ level = 3, title, cta, color = 'black' }) => (
  <div className={`section-heading ${color}`}>
    <Heading level={level}>{title}</Heading>
    <span className="line" />
    {cta && <ImageButton {...cta} color={color} />}
  </div>
);

export default SectionHeading;
