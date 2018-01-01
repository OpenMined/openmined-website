import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

// Action Creators
import { removeNotification } from '../../modules/notifications';

import asyncComponent from './components/async-component';

// UI Components
const Notifications = asyncComponent(() =>
  import('./components/notifications')
);

// Routes
const Homepage = asyncComponent(() => import('./routes/static/homepage'));
const Blog = asyncComponent(() => import('./routes/static/blog'));
const BlogPost = asyncComponent(() => import('./routes/static/blog-post'));
const NotFound = asyncComponent(() => import('./routes/not-found'));

class App extends Component {
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
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogPost} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
