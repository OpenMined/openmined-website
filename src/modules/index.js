import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import notifications from './notifications';
import homepage from './homepage';
import blog from './blog';

// NOTE: Make sure you're running the openmined-serverless application alongside
export const SERVERLESS_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://yltw3rj1r3.execute-api.us-east-1.amazonaws.com/dev';

export const WORDPRESS_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://openmined-wordpress.local/wp-json'
    : 'https://api.openmined.org/wp-json';

export default combineReducers({
  routing: routerReducer,
  auth,
  notifications,
  homepage,
  blog
});
