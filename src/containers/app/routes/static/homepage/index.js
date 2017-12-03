import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotification } from '../../../../../modules/notifications';
import { getContent } from '../../../../../modules/homepage';
import { Page } from 'openmined-ui';

import Hero from './hero';
import Mission from './mission';
import Process from './process';
import Timeline from './timeline';

import './homepage.css';

class Homepage extends Component {
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    const { hero, mission, process, timeline } = this.props.content;

    return (
      <Page id="homepage">
        <Hero addNotification={this.props.addNotification} content={hero} />
        <Mission content={mission} />
        <Process content={process} />
        <Timeline content={timeline} />
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
