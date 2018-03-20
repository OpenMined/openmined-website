import React from 'react';
import {
  BackgroundGradient,
  Row,
  Column,
  Container,
  Heading
} from 'openmined-ui';
import { Link } from 'react-router-dom';
import ExternalLink from '../../components/external-link';

import './blog-header.css';

import logo from '../../assets/logo-gradientbg.svg';

const BlogHeader = ({ title, excerpt, links }) => (
  <div id="blog-header">
    <BackgroundGradient />
    <Container>
      <Row>
        <Column sizes={{ small: 12 }} className="header">
          <Link to="/" className="header-logo">
            <img src={logo} alt="OpenMined" />
          </Link>
          <ul className="header-items">
            {links &&
              links.map((link, i) => {
                return (
                  <li key={`header-link-${i}`}>
                    <ExternalLink to={link.links_link}>
                      {link.links_text}
                    </ExternalLink>
                  </li>
                );
              })}
          </ul>
        </Column>
      </Row>
      <Row>
        <Column
          sizes={{ small: 12, medium: 10, large: 8, xlarge: 6 }}
          className="header-content"
        >
          <Heading level={1} className="title">
            {title}
          </Heading>
          {excerpt && <div className="excerpt">{excerpt}</div>}
        </Column>
      </Row>
    </Container>
  </div>
);

export default BlogHeader;
