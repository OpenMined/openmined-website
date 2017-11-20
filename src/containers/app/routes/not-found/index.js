import React from 'react';
import { BackgroundGradient, Page, Heading } from 'openmined-ui';

import './not-found.css';

export default () => (
  <Page
    title="Page Not Found"
    noCrawl
    id="not-found"
    className="header-margin-bump"
  >
    <BackgroundGradient animated />
    <Heading level={1}>We can't find this page...</Heading>
  </Page>
);
