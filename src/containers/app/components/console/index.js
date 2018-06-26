import React from 'react';
import { Button } from 'openmined-ui';

import './console.css';

const copyText = (code, addNotification) => {
  var textArea = document.createElement('textarea');

  textArea.className = 'hidden';
  textArea.value = code;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    document.execCommand('copy');
    document.body.removeChild(textArea);

    addNotification({
      text: 'Copied to clipboard!',
      type: 'success'
    });
  } catch (err) {
    addNotification({
      text: "Your browser is old and doesn't support copying to the clipboard.",
      type: 'error'
    });
  }
};

const Console = ({ addNotification, version, username, code }) => (
  <div className="console-container">
    <div className="version">{version}</div>
    <div className="console">
      <div className="header">
        <span />
        <span />
        <span />
      </div>
      <div className="content">
        <p>
          <span className="screenname">[{username}]&nbsp;</span>
          {code}
        </p>
      </div>
      <Button
        onClick={() => copyText(code, addNotification)}
        className="medium-gray small"
      >
        Copy Code
      </Button>
    </div>
  </div>
);

export default Console;
