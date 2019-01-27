import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notifications from './notifications';
import homepage from './homepage';

export default combineReducers({
  routing: routerReducer,
  notifications,
  homepage
});
