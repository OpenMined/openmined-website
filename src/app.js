import React from 'react';
import createStore from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
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
        <Route component={App} />
      </WrapperProvider>
    </Provider>
  );
};
