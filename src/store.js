import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reduxHistory from 'history';
import rootReducer from './modules';

export default (initialState = {}, server = {}) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const history = !(typeof window !== 'undefined' && window.document)
    ? reduxHistory.createMemoryHistory()
    : reduxHistory.createBrowserHistory();

  const middleware = [thunk, routerMiddleware(history)];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  return createStore(rootReducer, initialState, composedEnhancers);
};
