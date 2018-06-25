import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withWrapper } from 'create-react-server/wrapper';
import { addNotification } from '../../../../../modules/notifications';
import {
  getGithubData,
  getSlackData,
  getGhostData
} from '../../../../../modules/homepage';
import { Page } from 'openmined-ui';

import FooterLinks from '../../../components/footer-links';
import Hero from './hero';
import Testimonials from './testimonials';
import Mission from './mission';
import Pillars from './pillars';
import Process from './process';
import Milestones from './milestones';
import Status from './status';
import Footer from './footer';

class Homepage extends Component {
  static async getInitialProps(props) {
    await props.store.dispatch(getGithubData());
    await props.store.dispatch(getSlackData());
    await props.store.dispatch(getGhostData());
  }

  render() {
    const {
      hero,
      testimonials,
      mission,
      pillars,
      process,
      milestones,
      status,
      questions,
      movement,
      footer
    } = this.props.content;

    const { members, repositories } = this.props.github;

    return (
      <Page id="homepage">
        <Hero {...hero} addNotification={this.props.addNotification} />
        <Testimonials testimonials={testimonials} />
        <Mission {...mission} />
        <Pillars pillars={pillars} />
        <Process {...process} repositories={repositories} />
        <Milestones {...milestones} />
        <Status {...status} repositories={repositories} />
        <Footer questions={questions} movement={movement} members={members} />
        <FooterLinks {...footer} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content,
  github: state.homepage.github
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch);

export default withWrapper(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
