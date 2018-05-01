import React from 'react';
import { Heading } from 'openmined-ui';
import Tilt from 'react-tilt';

import ExternalLink from '../external-link';

import colabIcon from '../../assets/icons/colab.svg';
import localIcon from '../../assets/icons/local.svg';

import './card.css';

const ContentLink = ({ link, icon, text }) => (
  <li className="content-link">
    <ExternalLink to={link}>
      <div className="icon">
        <img src={icon} alt={text} />
      </div>
      <span className="text">{text}</span>
    </ExternalLink>
  </li>
);

const Card = ({
  link,
  subtitle,
  level = 4,
  heading,
  content,
  colab,
  local,
  axis
}) => (
  <Tilt
    className="card"
    options={{ reverse: true, max: 10, scale: 1, speed: 250, axis }}
  >
    <ExternalLink to={link} className="card-click">
      <div className="header">
        <p className="subtitle">{subtitle}</p>
        <Heading level={level}>{heading}</Heading>
      </div>
      <p className="content">{content}</p>
    </ExternalLink>
    <ul className="links">
      {colab && (
        <ContentLink link={colab} icon={colabIcon} text="Try on Colab" />
      )}
      {local && (
        <ContentLink link={local} icon={localIcon} text="Run Locally" />
      )}
    </ul>
  </Tilt>
);

export default Card;
