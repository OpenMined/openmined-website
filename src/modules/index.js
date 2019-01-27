import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import notifications from './notifications';
import homepage from './homepage';

export default history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    homepage
  });
