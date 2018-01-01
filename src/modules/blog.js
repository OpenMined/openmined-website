import { WORDPRESS_API_URL } from './index';

export const GET_RECENT_POSTS = 'blog/GET_RECENT_POSTS';
export const GET_CURRENT_POST = 'blog/GET_CURRENT_POST';

const initialState = {
  posts: [],
  currentPost: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECENT_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    case GET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post
      };

    default:
      return state;
  }
};

export const getPosts = () => {
  return dispatch => {
    fetch(WORDPRESS_API_URL + '/posts')
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_RECENT_POSTS,
          posts: response
        });
      });
  };
};

export const getCurrentPost = id => {
  return dispatch => {
    fetch(WORDPRESS_API_URL + '/posts/' + id)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_CURRENT_POST,
          post: response
        });
      });
  };
};
