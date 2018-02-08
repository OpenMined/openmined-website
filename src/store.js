import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reduxHistory from 'history';
import rootReducer from './modules';

const isServer = () => !(typeof window !== 'undefined' && window.document);

export const history = isServer()
  ? reduxHistory.createMemoryHistory()
  : reduxHistory.createBrowserHistory();

export default (initialState = {}, ssr = {}) => {
  if (ssr.req) {
    initialState = { foo: ssr.res.url };
  }

  const enhancers = [];
  const middleware = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  return createStore(rootReducer, initialState, composedEnhancers);
};

// TODO: Investigate whether or not we need history to take an initial entry
/*
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createMemoryHistory';
import rootReducer from '../src/modules';

const createServerStore = (path = '/') => {
  const initialState = {};
  const history = createHistory({ initialEntries: [path] });
  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, composedEnhancers);

  return {
    history,
    store
  };
};

export default createServerStore;
*/
