import React, { Component } from 'react';
import { Row, Column, Container } from '../../../../components/grid';

import MemberMap from './map';

import SectionHeading from '../../../../components/section-heading';
import ImageButton from '../../../../components/image-button';
import ExternalLink from '../../../../components/external-link';

import './footer.scss';

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

const Movement = ({
  movement,
  members,
  setCurrentMember,
  currentMember,
  ready
}) => (
  <Row>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <SectionHeading title={movement.title} level={3} />
    </Column>
    <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
      <CallsToAction movement={movement} />
    </Column>
    {ready && (
      <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
        <Members currentMember={currentMember} members={members} />
      </Column>
    )}
    {ready && (
      <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
        <MemberMap setCurrentMember={setCurrentMember} members={members} />
      </Column>
    )}
  </Row>
);

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMember: null
    };
  }

  render() {
    return (
      <div id="footer" className="section-padding">
        <Container>
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
