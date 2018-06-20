import React from 'react';
import ExternalLink from '../external-link';

import './image-button.css';

const ImageButton = ({ link, text, icon, color = 'black', inverted }) => (
  <ExternalLink
    to={link}
    className={`button image-button ${color}${inverted ? ' inverted' : ''}`}
  >
    <img src={icon} alt={text} />
    <span>{text}</span>
  </ExternalLink>
);

export default ImageButton;
