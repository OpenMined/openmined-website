import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore from './store';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/app';

import './index.css';

const { store, history } = generateStore();

render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector('#root')
);

registerServiceWorker();
