import { WORDPRESS_API_URL } from './index';

export const GET_POSTS = 'blog/GET_POSTS';
export const GET_ALL_OF_TAXONOMY = 'blog/GET_ALL_OF_TAXONOMY';
export const NO_MORE_POSTS = 'blog/NO_MORE_POSTS';
export const GET_CURRENT_POST = 'blog/GET_CURRENT_POST';

const initialState = {
  posts: [],
  categories: [],
  tags: [],
  postsLoaded: false,
  categoriesLoaded: false,
  tagsLoaded: false,
  blogReady: false,
  outOfPosts: false,
  currentPost: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      if (action.isFresh) {
        return {
          ...state,
          posts: action.posts,
          postsLoaded: true
        };
      } else {
        return {
          ...state,
          posts: state.posts.concat(action.posts),
          postsLoaded: true
        };
      }

    case NO_MORE_POSTS:
      return {
        ...state,
        outOfPosts: true
      };

    case GET_ALL_OF_TAXONOMY:
      return {
        ...state,
        [action.taxonomy]: action.data,
        [action.taxonomy + 'Loaded']: true
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

export const getPosts = (query, isFresh) => {
  return (dispatch, getState) => {
    let { categoriesLoaded, tagsLoaded } = getState().blog;

    const matchTaxonomyWithId = (list, slug) => {
      let returned = {};

      list.forEach(taxonomy => {
        if (taxonomy.slug === slug) {
          returned = taxonomy;
        }
      });

      return returned;
    };

    const loadPosts = (categories, tags) => {
      if (query.categories) {
        query.categories = matchTaxonomyWithId(categories, query.categories).id;
      }

      if (query.tags) {
        query.tags = matchTaxonomyWithId(tags, query.tags).id;
      }

      let queryString = Object.keys(query)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
        .join('&');

      fetch(WORDPRESS_API_URL + '/wp/v2/posts?' + queryString + '&_envelope')
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: GET_POSTS,
            posts: response.body,
            isFresh
          });

          if (response.headers['X-WP-TotalPages'] === query.page) {
            dispatch({
              type: NO_MORE_POSTS
            });
          }
        });
    };

    if (categoriesLoaded && tagsLoaded) {
      loadPosts(getState().blog.categories, getState().blog.tags);
    } else {
      Promise.all([
        getTaxonomy('categories'),
        getTaxonomy('tags')
      ]).then(response => {
        let categories = response[0];
        let tags = response[1];

        if (categories && tags) {
          dispatch({
            type: GET_ALL_OF_TAXONOMY,
            taxonomy: 'categories',
            data: categories
          });

          dispatch({
            type: GET_ALL_OF_TAXONOMY,
            taxonomy: 'tags',
            data: tags
          });

          loadPosts(categories, tags);
        }
      });
    }
  };
};

export const getTaxonomy = taxonomy => {
  return fetch(
    WORDPRESS_API_URL + '/wp/v2/' + taxonomy + '/?per_page=100'
  ).then(response => response.json());
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
