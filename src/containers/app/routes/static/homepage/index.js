import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withWrapper } from 'create-react-server/wrapper';
import { addNotification } from '../../../../../modules/notifications';
import { getGithubData } from '../../../../../modules/homepage';
import { Page } from 'openmined-ui';

import FooterLinks from '../../../components/footer-links';
import Hero from './hero';
import Testimonials from './testimonials';
import Mission from './mission';
import Pillars from './pillars';
import Process from './process';
import Timeline from './timeline';
import Footer from './footer';

import './homepage.css';

class Homepage extends Component {
  static async getInitialProps(props) {
    await props.store.dispatch(getGithubData());
  }

  render() {
    const {
      hero,
      testimonials,
      mission,
      pillars,
      process,
      timeline,
      questions,
      movement,
      footer
    } = this.props.content;

    const { members, repositories } = this.props.github;

    return (
      <Page id="homepage">
        <Hero addNotification={this.props.addNotification} {...hero} />
        <Testimonials testimonials={testimonials} />
        <Mission {...mission} />
        <Pillars pillars={pillars} />
        <Process repositories={repositories} {...process} />
        <Timeline repositories={repositories} {...timeline} />
        <Footer questions={questions} movement={movement} members={members} />
        <FooterLinks {...footer} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content,
  github: state.homepage.github,
  githubContentLoaded: state.homepage.githubContentLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch);

export default withWrapper(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
