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
