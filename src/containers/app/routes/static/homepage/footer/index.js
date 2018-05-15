import React, { Component } from 'react';
import { Row, Column, Container } from 'openmined-ui';

import MemberMap from './map';

import SectionHeading from '../../../../components/section-heading';
import ImageButton from '../../../../components/image-button';
import ExternalLink from '../../../../components/external-link';

import './footer.css';

const CallsToAction = ({ movement }) => (
  <div className="ctas">
    {movement.ctas.map((cta, key) => (
      <div className="button-container" key={key}>
        <ImageButton {...cta} color="white" />
        {cta.count && (
          <span className="count">{cta.count.toLocaleString()} people</span>
        )}
      </div>
    ))}
  </div>
);

const Members = ({ members, currentMember }) => (
  <ul className="members">
    {members.map(({ login, avatarUrl }, key) => {
      let classes = 'member';

      if (currentMember && currentMember.login === login) {
        classes += ' current';
      }

      return (
        <li className={classes} key={key}>
          <ExternalLink to={`https://github.com/${login}`}>
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${avatarUrl})`
              }}
            />
          </ExternalLink>
        </li>
      );
    })}
  </ul>
);

const Movement = ({ movement, members, setCurrentMember, currentMember }) => (
  <Row>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <SectionHeading title={movement.title} level={3} />
    </Column>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <CallsToAction movement={movement} />
    </Column>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <Members currentMember={currentMember} members={members} />
    </Column>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <MemberMap setCurrentMember={setCurrentMember} members={members} />
    </Column>
  </Row>
);

// const Questions = ({ questions }) => (
//   <Row>
//     <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
//       <SectionHeading level={3} title={questions.title} />
//     </Column>
//     <Column
//       sizes={{ small: 12, xlarge: 10 }}
//       offsets={{ xlarge: 1 }}
//       className="questions"
//     >
//       {questions.content.map(({ question, answer }, key) => {
//         return (
//           <div className="question" key={key}>
//             <p className="query">{question}</p>
//             <p className="answer">{answer}</p>
//           </div>
//         );
//       })}
//     </Column>
//   </Row>
// );

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMember: null
    };
  }

  render() {
    return (
      <div id="footer">
        <Container>
          {/* <Questions {...this.props} /> */}
          <Movement
            currentMember={this.state.currentMember}
            setCurrentMember={currentMember => this.setState({ currentMember })}
            {...this.props}
          />
        </Container>
      </div>
    );
  }
}

export default Footer;
