import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import notifications, { addNotification } from './notifications';
import homepage from './homepage';
import blog from './blog';

export const WORDPRESS_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://openmined-wordpress.local/wp-json'
    : 'https://api.openmined.org/wp-json';

export const handleWordpressError = error =>
  addNotification({
    text: error,
    type: 'error'
  });

export default combineReducers({
  routing: routerReducer,
  auth,
  notifications,
  homepage,
  blog
});
