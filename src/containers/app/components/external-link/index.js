import React from 'react';

const ExternalLink = props => {
  const { to, children, ...other } = props;

  return (
    <a {...other} href={props.to} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default ExternalLink;
