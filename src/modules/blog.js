import { WORDPRESS_API_URL } from './index';

export const GET_POSTS = 'blog/GET_POSTS';
export const GET_ALL_OF_TAXONOMY = 'blog/GET_ALL_OF_TAXONOMY';
export const NO_MORE_POSTS = 'blog/NO_MORE_POSTS';
export const GET_CURRENT_POST = 'blog/GET_CURRENT_POST';

const initialState = {
  posts: [],
  categories: [],
  tags: [],
  outOfPosts: false,
  isLoading: true,
  currentPost: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.posts),
        isLoading: false
      };

    case NO_MORE_POSTS:
      return {
        ...state,
        outOfPosts: true
      };

    case GET_ALL_OF_TAXONOMY:
      return {
        ...state,
        [action.taxonomy]: action.data
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

export const getPosts = query => {
  return dispatch => {
    let queryString = Object.keys(query)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
      .join('&');

    fetch(WORDPRESS_API_URL + '/wp/v2/posts?' + queryString + '&_envelope')
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_POSTS,
          posts: response.body
        });

        if (response.headers['X-WP-TotalPages'] === query.page) {
          dispatch({
            type: NO_MORE_POSTS
          });
        }
      });
  };
};

export const getTaxonomy = taxonomy => {
  return dispatch => {
    fetch(WORDPRESS_API_URL + '/wp/v2/' + taxonomy + '/?per_page=100')
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_ALL_OF_TAXONOMY,
          taxonomy,
          data: response
        });
      });
  };
};

export const getCurrentPost = slug => {
  return dispatch => {
    fetch(WORDPRESS_API_URL + '/wp/v2/posts/?slug=' + slug)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_CURRENT_POST,
          post: response[0]
        });
      });
  };
};
