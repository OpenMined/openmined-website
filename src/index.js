import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import createApp from './app';

import './index.css';

render(
  <BrowserRouter>
    {createApp({
      state: window.__INITIAL__STATE__,
      props: window.__INITIAL__PROPS__
    })}
  </BrowserRouter>,
  document.querySelector('#root')
);

registerServiceWorker();
