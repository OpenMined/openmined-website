import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
import Card from '../../../../components/card';

import logo from '../../../../assets/logo-gradientbg.svg';
import background from '../../../../assets/background-gradient.svg';

import './hero.css';

const Main = ({ tagline, description }) => (
  <Row>
    <Column sizes={{ small: 12 }}>
      <img src={logo} id="logo" alt="OpenMined" />
      <Heading id="tagline" level={2}>
        {tagline}
      </Heading>
      <p id="description">{description}</p>
    </Column>
  </Row>
);

const Steps = ({ steps }) => (
  <Row id="steps">
    <Column sizes={{ small: 12, large: 6, xlarge: 5 }} offsets={{ xlarge: 1 }}>
      <Card {...steps[0]} axis="x" />
    </Column>
    <Column sizes={{ small: 12, large: 6, xlarge: 5 }}>
      <Card {...steps[1]} axis="x" />
    </Column>
  </Row>
);

const Hero = hero => (
  <div id="hero">
    {/* TODO: This is a temporary fix until we can get this moved over to openmined-ui */}
    <div
      className="background-gradient"
      style={{
        background: `url(${background})`,
        backgroundBlendMode: 'normal',
        filter: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    <Container>
      <Main {...hero} />
      <Steps {...hero} />
    </Container>
  </div>
);

export default Hero;
