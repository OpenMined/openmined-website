import React from 'react';
import createStore from './store';
import { Provider } from 'react-redux';
import { WrapperProvider } from 'create-react-server/wrapper';

import App from './containers/app';

export default ({ state, props, req, res }) => {
  return (
    <Provider store={createStore(state)}>
      <WrapperProvider initialProps={props}>
        <App />
      </WrapperProvider>
    </Provider>
  );
};
