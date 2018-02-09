import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNotification } from '../../../../../modules/notifications';
import { withWrapper } from 'create-react-server/wrapper';
import { getContent, changeSomething } from '../../../../../modules/homepage';
import { Page } from 'openmined-ui';

import Loading from '../../../components/loading';
import Hero from './hero';
import Mission from './mission';
import Process from './process';
import Timeline from './timeline';
import Footer from './footer';

import './homepage.css';

class Homepage extends Component {
  static async getInitialProps(props) {
    console.log(
      'HOME - before dispatch',
      props.store.getState().homepage.something
    );

    await props.store.dispatch(changeSomething('test worked'));

    console.log(
      'HOME - after dispatch',
      props.store.getState().homepage.something
    );
  }

  componentDidMount() {
    this.props.getContent();
  }

  render() {
    const { hero, mission, process, timeline, footer } = this.props.content;

    return (
      <Page id="homepage" title={this.props.something}>
        <h1>Value: {this.props.something}</h1>
        <Loading shouldHideWhen={this.props.homepageLoaded} />
        <Hero addNotification={this.props.addNotification} {...hero} />
        <Mission {...mission} />
        <Process {...process} />
        <Timeline {...timeline} />
        <Footer {...footer} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  something: state.homepage.something,
  content: state.homepage.content,
  homepageLoaded: state.homepage.homepageLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification, getContent }, dispatch);

export default withWrapper(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
