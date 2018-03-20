import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../external-link';
import { Row, Column, Container } from 'openmined-ui';

import logo from '../../assets/logo-blackbg.svg';

import './footer-links.css';

export default ({ links, socialMedia }) => (
  <div id="footer-links">
    <Container>
      <Row>
        <Column
          sizes={{ small: 12, xlarge: 10 }}
          offsets={{ xlarge: 1 }}
          className="footer-container"
        >
          <ul className="footer-items">
            <li className="logo">
              <Link to="/">
                <img src={logo} alt="OpenMined" />
              </Link>
            </li>
            {links &&
              links.map((link, i) => {
                return (
                  <li key={`footer-link-${i}`}>
                    <Link to={link.links_link}>{link.links_text}</Link>
                  </li>
                );
              })}
          </ul>
          <ul className="social-media">
            {socialMedia &&
              socialMedia.map((link, i) => {
                return (
                  <li key={`footer-social-media-link-${i}`}>
                    <ExternalLink to={link.social_media_links_link}>
                      <i className={`fa ${link.social_media_links_icon}`} />
                    </ExternalLink>
                  </li>
                );
              })}
          </ul>
        </Column>
      </Row>
    </Container>
  </div>
);
