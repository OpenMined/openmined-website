import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../external-link';
import { Row, Column, Container } from 'openmined-ui';

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
          <ul className="footer-items">
            <li className="logo">
              <Link to="/">
                <img src={logo} alt="OpenMined" />
              </Link>
            </li>
            {links &&
              links.map(({ link, text }, key) => {
                return (
                  <li key={key}>
                    <Link to={link}>{text}</Link>
                  </li>
                );
              })}
          </ul>
          <ul className="social-media">
            {social &&
              social.map(({ title, link }, key) => {
                let icon;

                if (title === 'Github') {
                  icon = 'fa-github';
                } else if (title === 'Twitter') {
                  icon = 'fa-twitter';
                } else if (title === 'YouTube') {
                  icon = 'fa-youtube-play';
                } else if (title === 'Facebook') {
                  icon = 'fa-facebook';
                }

                return (
                  <li key={key}>
                    <ExternalLink to={link}>
                      <i className={`fa ${icon}`} />
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
