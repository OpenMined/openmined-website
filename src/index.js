import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import Application from './Application';

import './index.css';

render(
  <Application myStore={store} myHistory={history} />,
  document.querySelector('#root')
);

registerServiceWorker();
