import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withWrapper } from 'create-react-server/wrapper';
import { addNotification } from '../../../../../modules/notifications';
import { getContent } from '../../../../../modules/homepage';
import { Page } from 'openmined-ui';

import Loading from '../../../components/loading';
import FooterLinks from '../../../components/footer-links';
import Hero from './hero';
import Mission from './mission';
import Process from './process';
import Timeline from './timeline';
import Footer from './footer';

import './homepage.css';

class Homepage extends Component {
  static async getInitialProps(props) {
    await props.store.dispatch(getContent());
  }

  render() {
    const {
      hero,
      mission,
      process,
      timeline,
      footer,
      general
    } = this.props.content;

    return (
      <Page id="homepage">
        <Loading shouldHideWhen={this.props.homepageLoaded} />
        <Hero addNotification={this.props.addNotification} {...hero} />
        <Mission {...mission} />
        <Process {...process} />
        <Timeline {...timeline} />
        <Footer {...footer} />
        <FooterLinks links={footer.links} socialMedia={general.social_media} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content,
  homepageLoaded: state.homepage.homepageLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch);

export default withWrapper(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
