import React from 'react';
import { Row, Column, Container, Heading } from 'openmined-ui';
// import ExternalLink from '../../../components/external-link';
import Card from '../../../components/card';

import logo from '../../../assets/logo-gradientbg.svg';
import background from '../../../assets/background-gradient.svg';

// NOTE: Might need these components down the line, but we don't right now...
// const copyText = (code, addNotification) => {
//   var textArea = document.createElement('textarea');
//
//   textArea.className = 'hidden';
//   textArea.value = code;
//
//   document.body.appendChild(textArea);
//
//   textArea.select();
//
//   try {
//     document.execCommand('copy');
//     document.body.removeChild(textArea);
//
//     // TODO: We should really improve the look and animation of notifications in openmined-ui
//     addNotification({
//       text: 'Copied to clipboard!',
//       type: 'success'
//     });
//   } catch (err) {
//     addNotification({
//       text: "Your browser is old and doesn't support copying to the clipboard.",
//       type: 'error'
//     });
//   }
// };
//
// const Console = ({ addNotification, version, username, code }) => (
//   <div id="console-container">
//     <div id="version">{version}</div>
//     <div id="console">
//       <div className="header">
//         <span />
//         <span />
//         <span />
//       </div>
//       <div className="content">
//         <p>
//           <span className="screenname">[{username}]&nbsp;</span>
//           {code}
//         </p>
//       </div>
//       <Button
//         onClick={() => copyText(code, addNotification)}
//         className="medium-gray small"
//       >
//         Copy Code
//       </Button>
//     </div>
//   </div>
// );

const Hero = ({
  tagline,
  description,
  cta,
  steps,
  console,
  addNotification
}) => (
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
      <Row>
        <Column sizes={{ small: 12 }}>
          <img src={logo} id="logo" alt="OpenMined" />
          <Heading id="tagline" level={2}>
            {tagline}
          </Heading>
          <p id="description">{description}</p>
        </Column>
      </Row>
      <Row id="steps">
        <Column
          sizes={{ small: 12, large: 6, xlarge: 5 }}
          offsets={{ xlarge: 1 }}
        >
          <Card {...steps[0]} axis="x" />
        </Column>
        <Column sizes={{ small: 12, large: 6, xlarge: 5 }}>
          <Card {...steps[1]} axis="x" />
        </Column>
      </Row>
    </Container>
  </div>
);

export default Hero;
