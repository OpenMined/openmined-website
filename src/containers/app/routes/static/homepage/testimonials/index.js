import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import ExternalLink from '../../../../components/external-link';

import './testimonials.css';

const slug = name =>
  name
    .toLowerCase()
    .split(' ')
    .join('-');

const Testimonial = ({ name, link, image }) => (
  <ExternalLink to={link} className={`testimonial ${slug(name)}`}>
    <img src={image} className="image" alt={name} />
  </ExternalLink>
);

const Testimonials = ({ testimonials }) => (
  <div id="testimonials" className="section-padding">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <div className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <Testimonial {...testimonial} key={index} />
            ))}
          </div>
        </Column>
      </Row>
    </Container>
  </div>
);

export default Testimonials;
