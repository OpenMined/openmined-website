import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackgroundGradient, Page } from 'openmined-ui';

import './not-found.css';

export default class NotFound extends Component {
  static notFound = true;

  render() {
    return (
      <Page
        title="Page Not Found"
        noCrawl
        id="not-found"
        className="header-margin-bump"
      >
        <BackgroundGradient />
        <h1>
          Page not found... <Link to="/">go home</Link>
        </h1>
      </Page>
    );
  }
}
