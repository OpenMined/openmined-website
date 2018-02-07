import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Frontload } from 'react-frontload';

import App from './containers/app';

const Application = ({ isServer, myStore, myHistory }) => (
  <Frontload isServer={isServer} withLogging>
    <Provider store={myStore}>
      <ConnectedRouter history={myHistory}>
        <Route component={App} />
      </ConnectedRouter>
    </Provider>
  </Frontload>
);

export default Application;
