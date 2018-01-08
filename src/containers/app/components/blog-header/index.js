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
          <Link to="/blog">
            <img src={logo} className="header-logo" alt="OpenMined" />
          </Link>
          <ul className="header-items">
            {links &&
              links.map((link, i) => {
                return (
                  <li
                    key={`header-link-${i}`}
                    className={link.links_icon ? 'icon' : 'text'}
                  >
                    <ExternalLink to={link.links_link}>
                      {link.links_icon && (
                        <i className={`fa ${link.links_icon}`} />
                      )}
                      {link.links_text && <span>{link.links_text}</span>}
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
          {excerpt && <p className="excerpt">{excerpt}</p>}
        </Column>
      </Row>
    </Container>
  </div>
);

export default BlogHeader;
