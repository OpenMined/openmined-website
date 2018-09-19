import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import FullStory from 'react-fullstory';

// Action Creators
import { removeNotification } from '../../modules/notifications';

// UI Components
import Notifications from './components/notifications';
import Header from './components/header';

// Routes
import Homepage from './routes/static/homepage';
import NotFound from './routes/not-found';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowHeader: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop;

      if (scrollTop >= 200 && !this.state.shouldShowHeader) {
        this.setState({
          shouldShowHeader: true
        });
      } else if (scrollTop < 200 && this.state.shouldShowHeader) {
        this.setState({
          shouldShowHeader: false
        });
      }
    });
  }

  render() {
    return (
      <div id="app">
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

const mapStateToProps = state => ({
  notifications: state.notifications.notifications,
  links: state.homepage.content.footer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
