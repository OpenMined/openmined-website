import React from 'react';
import { Row, Column, Container } from 'openmined-ui';

import ExternalLink from '../../../components/external-link';

const Testimonials = ({ testimonials }) => (
  <div id="testimonials">
    <Container>
      <Row>
        <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
          <div className="testimonial-list">
            {testimonials.map(({ name, link, image }) => (
              <ExternalLink to={link} className="testimonial" key={name}>
                <img src={image} className="image" alt={name} />
              </ExternalLink>
            ))}
          </div>
        </Column>
      </Row>
    </Container>
  </div>
);

export default Testimonials;