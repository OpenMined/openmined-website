import React, { Component } from 'react';
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
      </Page>
    );
  }
}
