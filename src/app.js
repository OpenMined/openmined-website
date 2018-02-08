import React from 'react';
import createStore, { history } from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { WrapperProvider } from 'create-react-server/wrapper';

import App from './containers/app';

export default ({ state, props, req, res }) => {
  if (!state && !!req) {
    state = {
      foo: req.url + ':' + Date.now()
    };
  }

  return (
    <Provider store={createStore(state)}>
      <WrapperProvider initialProps={props}>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </WrapperProvider>
    </Provider>
  );
};
