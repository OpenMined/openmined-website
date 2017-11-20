import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticateUser } from '../../../../../modules/auth';
import { BackgroundGradient, Page, Row, Column, Container } from 'openmined-ui';

import './homepage.css';

class Homepage extends Component {
  render() {
    return (
      <Page id="homepage" title="Homepage">
        <BackgroundGradient animated />
        <Container>
          <Row>
            <Column sizes={{ small: 12, medium: 6 }} offsets={{ medium: 3 }}>
              <p className="small-text">Decentralized. Democratized. Data.</p>
            </Column>
          </Row>
        </Container>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticateUser }, dispatch);

export default connect(null, mapDispatchToProps)(Homepage);
