import React from 'react';
import BackgroundGradient from '../../../../components/background-gradient';
import { Row, Column, Container } from '../../../../components/grid';
import Heading from '../../../../components/heading';
// import Card from '../../../../components/card';
import ImageButton from '../../../../components/image-button';

import logo from '../../../../assets/logo-gradientbg.svg';

import './hero.scss';

const Main = ({ tagline, description }) => (
  <Row>
    <Column sizes={{ small: 12 }}>
      <img src={logo} id="logo" alt="OpenMined" />
      <Heading id="tagline" level={1}>
        {tagline}
      </Heading>
      <p id="description">{description}</p>
    </Column>
  </Row>
);

const Buttons = ({ buttons }) => (
  <Row>
    <Column sizes={{ small: 12 }}>
      <div id="hero-buttons">
        {buttons.map((button) => (
          <ImageButton {...button} key={button.type} />
        ))}
      </div>
    </Column>
  </Row>
);

// const Steps = ({ steps }) => (
//   <Row id="steps">
//     <Column sizes={{ small: 12, large: 6, xlarge: 5 }} offsets={{ xlarge: 1 }}>
//       <Card {...steps[0]} axis="x" />
//     </Column>
//     <Column sizes={{ small: 12, large: 6, xlarge: 5 }}>
//       <Card {...steps[1]} axis="x" />
//     </Column>
//   </Row>
// );

const Video = ({ video }) => (
  <Row id="video">
    <Column
      sizes={{ small: 12, large: 8, xlarge: 6 }}
      offsets={{ large: 2, xlarge: 3 }}
    >
      <iframe
        width="640"
        height="360"
        src={video}
        frameborder="0"
        title="OpenMined"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Column>
  </Row>
);

const Hero = (hero) => (
  <div id="hero">
    <BackgroundGradient />
    <Container>
      <Main {...hero} />
      <Buttons {...hero} />
      {/* <Steps {...hero} /> */}
      <Video {...hero} />
    </Container>
  </div>
);

export default Hero;
