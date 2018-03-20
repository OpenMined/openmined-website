import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { withWrapper } from 'create-react-server/wrapper';

// Action Creators
import { removeNotification } from '../../modules/notifications';

// UI Components
import Notifications from './components/notifications';

// Routes
import Homepage from './routes/static/homepage';
import Blog from './routes/static/blog';
import BlogPost from './routes/static/blog-post';
import NotFound from './routes/not-found';

const RedirectToWordpress = () =>
  (window.location = 'https://api.openmined.org/wp-admin/');

class App extends Component {
  componentDidMount() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
      <div id="app">
        <Notifications
          notifications={this.props.notifications}
          removeFunc={this.props.removeNotification}
        />
        <div id="content">
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/blog/:taxonomy/:slug/" component={Blog} />
            <Route path="/blog/:slug/" component={BlogPost} />
            <Route path="/blog" component={Blog} />

            <Route path="/admin" component={RedirectToWordpress} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications.notifications
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch);

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(App));
