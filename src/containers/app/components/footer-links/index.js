import React from 'react';
import { Row, Column, Container } from 'openmined-ui';
import { MainLinks, SocialLinks } from '../header';

import logo from '../../assets/logo-blackbg.svg';

import './footer-links.css';

export default ({ links, social }) => (
  <div id="footer-links">
    <Container>
      <Row>
        <Column
          sizes={{ small: 12, xlarge: 10 }}
          offsets={{ xlarge: 1 }}
          className="footer-container"
        >
          <MainLinks linksClass="footer-items" logo={logo} links={links} />
          <SocialLinks socialClass="social-media" social={social} />
        </Column>
      </Row>
    </Container>
  </div>
);
