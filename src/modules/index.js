import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notifications, { addNotification } from './notifications';
import homepage from './homepage';

export const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.openmined.org';

export const STATS_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3002'
    : 'https://stats.openmined.org';

export const handleRemoteError = error =>
  addNotification({
    text: error,
    type: 'error'
  });

export default combineReducers({
  routing: routerReducer,
  notifications,
  homepage
});
