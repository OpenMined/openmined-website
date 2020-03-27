import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import FullStory from 'react-fullstory';

// Action Creators
import { removeNotification } from '../../modules/notifications';

// UI Components
import Dialog from './components/dialog';
import Notifications from './components/notifications';
import Header from './components/header';

// Routes
import Homepage from './routes/static/homepage';
import NotFound from './routes/not-found';

class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('covid-dialog') === null) {
      localStorage.setItem('covid-dialog', true);
    }

    this.state = {
      shouldShowHeader: false,
      showingCovidModal: localStorage.getItem('covid-dialog') === 'true',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop;

      if (scrollTop >= 200 && !this.state.shouldShowHeader) {
        this.setState({
          shouldShowHeader: true,
        });
      } else if (scrollTop < 200 && this.state.shouldShowHeader) {
        this.setState({
          shouldShowHeader: false,
        });
      }
    });
  }

  render() {
    const covidCopy = {
      title: 'Help us empower COVID-19 apps with privacy',
      content: (
        <>
          <p>
            <b>Privacy is a human right.</b> Fighting the Coronavirus pandemic
            is a global responsibility, but that doesn't mean app developers
            should compromise the safety, privacy, and security of their users.
          </p>
          <p>
            OpenMined is providing <b>free open-source support</b> for all
            COVID-19 app developers to protect their user's data privacy
            properly. We are seeking to assist all developers fighting the
            Coronavirus pandemic to augment their approach with
            privacy-preserving techniques.
          </p>
        </>
      ),
      cta: 'Ready to join the fight?',
      buttons: [
        {
          text: 'Join our mission',
          color: 'primary',
          link:
            'https://blog.openmined.org/providing-opensource-privacy-for-covid19/',
        },
        {
          text: 'Read our roadmap',
          color: 'light-gray',
          link: 'https://blog.openmined.org/covid-app-privacy-advice/',
        },
      ],
    };

    return (
      <div id="app">
        <Dialog
          overlay
          {...covidCopy}
          isOpen={this.state.showingCovidModal}
          toggle={() => {
            const newState = !this.state.showingCovidModal;

            localStorage.setItem('covid-dialog', newState);
            this.setState({ showingCovidModal: newState });
          }}
        />
        <Notifications
          notifications={this.props.notifications}
          removeFunc={this.props.removeNotification}
        />
        <Header {...this.props.links} visible={this.state.shouldShowHeader} />
        <FullStory org="CMKMM" />
        <div id="content">
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications,
  links: state.homepage.content.footer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeNotification }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
