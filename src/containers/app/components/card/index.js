import React from 'react';
import Heading from '../heading';
import Tilt from 'react-tilt';

import ExternalLink from '../external-link';

import colabIcon from '../../assets/icons/colab.svg';
import localIcon from '../../assets/icons/local.svg';

import './card.scss';

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

const CardContent = ({ subtitle, level, heading, content, hasLinks }) => (
  <div className="card-content">
    <div className="header">
      <p className="subtitle">{subtitle}</p>
      <Heading level={level}>{heading}</Heading>
    </div>
    <p className={`content ${!hasLinks && 'no-links'}`}>{content}</p>
  </div>
);

const Card = ({
  link,
  subtitle,
  level = 4,
  heading,
  content,
  colab,
  local,
  github,
  axis
}) => {
  const hasLinks = Boolean(colab) || Boolean(local) || Boolean(github);

  const cardContent = (
    <CardContent
      subtitle={subtitle}
      level={level}
      heading={heading}
      content={content}
      hasLinks={hasLinks}
    />
  );

  return (
    <Tilt
      className="card"
      options={{ reverse: true, max: 10, scale: 1, speed: 250, axis }}
      style={{ pointerEvents: link ? 'auto' : 'none' }}
    >
      {link && (
        <ExternalLink to={link} className="card-click">
          {cardContent}
        </ExternalLink>
      )}
      {!link && cardContent}
      {hasLinks && (
        <ul className="links">
          {colab && (
            <ContentLink link={colab} icon={colabIcon} text="Try on Colab" />
          )}
          {local && (
            <ContentLink link={local} icon={localIcon} text="View Course" />
          )}
          {github && (
            <ContentLink link={github} icon={localIcon} text="View on Github" />
          )}
        </ul>
      )}
    </Tilt>
  );
};

export default Card;
