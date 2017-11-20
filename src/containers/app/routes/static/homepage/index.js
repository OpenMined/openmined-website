import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotification } from '../../../../../modules/notifications';
import { getContent } from '../../../../../modules/homepage';
import { Page } from 'openmined-ui';

import Hero from './hero';
import Mission from './mission';

import './homepage.css';

class Homepage extends Component {
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    return (
      <Page id="homepage">
        <Hero
          addNotification={this.props.addNotification}
          content={this.props.content.hero}
        />
        <Mission content={this.props.content.mission} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification, getContent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
