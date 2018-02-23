import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reduxHistory from 'history';
import rootReducer from './modules';

const isServer = !(typeof window !== 'undefined' && window.document);

export const history = isServer
  ? reduxHistory.createMemoryHistory()
  : reduxHistory.createBrowserHistory();

export default (initialState = {}, server = {}) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const middleware = [thunk, routerMiddleware(history)];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  return createStore(rootReducer, initialState, composedEnhancers);
};
