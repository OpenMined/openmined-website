import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './store';
// import registerServiceWorker from './registerServiceWorker';
import createApp from './app';

import './index.css';

render(
  <Router history={history}>
    {createApp({
      state: window.__INITIAL__STATE__,
      props: window.__INITIAL__PROPS__
    })}
  </Router>,
  document.querySelector('#root')
);

// Disabled until we find a better caching strategy
// registerServiceWorker();
