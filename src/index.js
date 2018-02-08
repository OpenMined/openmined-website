import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app';

import './index.css';

render(
  App({
    state: window.__INITIAL__STATE__,
    props: window.__INITIAL__PROPS__
  }),
  document.querySelector('#root')
);

registerServiceWorker();
