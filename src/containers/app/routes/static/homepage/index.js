import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotification } from '../../../../../modules/notifications';
import { getContent } from '../../../../../modules/homepage';

import Hero from './hero';
import Mission from './mission';
import Process from './process';
import Timeline from './timeline';
import Footer from './footer';

import './homepage.css';

class Homepage extends Component {
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    const { hero, mission, process, timeline, footer } = this.props.content;

    return (
      <div id="homepage">
        <Hero addNotification={this.props.addNotification} {...hero} />
        <Mission {...mission} />
        <Process {...process} />
        <Timeline {...timeline} />
        <Footer {...footer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification, getContent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
