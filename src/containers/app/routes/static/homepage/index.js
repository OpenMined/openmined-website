import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotification } from '../../../../../modules/notifications';
import { Page } from 'openmined-ui';

import Hero from './hero';

import './homepage.css';

class Homepage extends Component {
  render() {
    return (
      <Page id="homepage">
        <Hero addNotification={this.props.addNotification} />
        <div id="hello" />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch);

export default connect(null, mapDispatchToProps)(Homepage);
