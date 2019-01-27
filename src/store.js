import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './modules';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const enhancers = [];
  const middleware = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  return store;
}
