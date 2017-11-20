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

const version = 'V 0.1.0 - “Hydrogen”';
const screenname = 'open-miner';
const code =
  'curl -s https://raw.githubusercontent.com/OpenMined/mine.js/hydrogen/.docker/docker-compose.yml | docker-compose -f - up';

const copyText = ({ code, addNotification }) => {
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

const Console = props => (
  <div id="console-container">
    <div id="version">{props.version}</div>
    <div id="console">
      <div className="header">
        <span />
        <span />
        <span />
      </div>
      <div className="content">
        <p>
          <span className="screenname">[{props.screenname}]&nbsp;</span>
          {props.code}
        </p>
      </div>
      <Button onClick={() => copyText(props)} className="medium-gray small">
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
            Decentralized Artificial Intelligence
          </Heading>
          <p id="description">
            OpenMined is an open-source project that allows for encrypted
            federated learning through blockchain technology.
          </p>
          <div id="cta">
            <ExternalLink
              to="https://github.com/openmined"
              className="button white"
            >
              Start Contributing
            </ExternalLink>
          </div>
          <Console
            screenname={screenname}
            code={code}
            version={version}
            {...props}
          />
        </Column>
      </Row>
    </Container>
  </div>
);

export default Hero;
