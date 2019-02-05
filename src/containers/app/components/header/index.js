import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../external-link';

import logo from '../../assets/logo-square-color.svg';

import './header.scss';

export const MainLinks = ({ linksClass, logo, links }) => (
  <ul className={linksClass}>
    <li className="logo">
      <Link to="/">
        <img src={logo} alt="OpenMined" />
      </Link>
    </li>
    {links &&
      links.map(({ link, text }, key) => {
        const TheLink =
          link.includes('http://') || link.includes('https://')
            ? ExternalLink
            : Link;

        return (
          <li key={key}>
            <TheLink to={link}>{text}</TheLink>
          </li>
        );
      })}
  </ul>
);

export const SocialLinks = ({ socialClass, social }) => (
  <ul className={socialClass}>
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
              <i className={`fa ${icon}`} aria-hidden="true" />
            </ExternalLink>
          </li>
        );
      })}
  </ul>
);

export default ({ links, social, visible }) => (
  <div id="header" className={visible ? 'visible' : 'hidden'}>
    <MainLinks linksClass="header-items" logo={logo} links={links} />
    <SocialLinks socialClass="social-media" social={social} />
  </div>
);
