import React from 'react';
import {
  BackgroundGradient,
  Row,
  Column,
  Container,
  Heading,
  Button
} from 'openmined-ui';
import ExternalLink from '../../../components/external-link';

import logo from '../../../assets/logo-gradientbg.svg';

const copyText = (code, addNotification) => {
  var textArea = document.createElement('textarea');

  textArea.className = 'hidden';
  textArea.value = code;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // TODO: We should really improve the look and animation of notifications in openmined-ui
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

const Console = ({ console, addNotification }) => (
  <div id="console-container">
    <div id="version">{console.console_version}</div>
    <div id="console">
      <div className="header">
        <span />
        <span />
        <span />
      </div>
      <div className="content">
        <p>
          <span className="screenname">
            [{console.console_screenname}]&nbsp;
          </span>
          {console.console_code}
        </p>
      </div>
      <Button
        onClick={() => copyText(console.console_code, addNotification)}
        className="medium-gray small"
      >
        Copy Code
      </Button>
    </div>
  </div>
);

const Hero = props => (
  <div id="hero">
    <BackgroundGradient />
    <Container>
      <Row>
        <Column sizes={{ small: 12 }}>
          <img src={logo} id="logo" alt="OpenMined" />
          <Heading id="tagline" level={2}>
            {props.tagline}
          </Heading>
          <p id="description">{props.description}</p>
          <div id="cta">
            <ExternalLink
              to={props.button.button_link}
              className="button white"
            >
              {props.button.button_text}
            </ExternalLink>
          </div>
          <Console {...props} />
        </Column>
      </Row>
    </Container>
  </div>
);

export default Hero;
