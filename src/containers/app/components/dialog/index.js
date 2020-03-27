import React from 'react';

import ExternalLink from '../external-link';

import './dialog.scss';

export default ({ overlay, title, content, cta, buttons, isOpen, toggle }) => {
  if (isOpen) {
    return (
      <div className="dialog">
        {overlay && <div className="overlay" />}
        <div className="modal">
          <div className="flex">
            <h3 className="title not-capped">{title}</h3>
            <i
              onClick={toggle}
              className="fa fa-times close-icon"
              aria-hidden="true"
            />
          </div>
          <div className="content">{content}</div>
          <h4 className="cta not-capped">{cta}</h4>
          <div className="button-flex">
            {buttons.map(({ text, color, link }) => (
              <ExternalLink
                to={link}
                key={text}
                className={`button ${color} large`}
              >
                {text}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
