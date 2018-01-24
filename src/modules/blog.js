import fetch from 'cross-fetch';
import { WORDPRESS_API_URL } from './index';

export const GET_POSTS = 'blog/GET_POSTS';
export const GET_ALL_OF_TAXONOMY = 'blog/GET_ALL_OF_TAXONOMY';
export const NO_MORE_POSTS = 'blog/NO_MORE_POSTS';
export const GET_CURRENT_POST = 'blog/GET_CURRENT_POST';
export const GET_CURRENT_FEATURED_MEDIA = 'blog/GET_CURRENT_FEATURED_MEDIA';
export const GET_CURRENT_AUTHOR = 'blog/GET_CURRENT_AUTHOR';

const initialState = {
  posts: [],
  categories: [],
  tags: [],
  currentPost: {},
  currentFeaturedMedia: {},
  currentAuthor: {},
  postsLoaded: false,
  categoriesLoaded: false,
  tagsLoaded: false,
  currentPostLoaded: false,
  currentFeaturedMediaLoaded: false,
  currentAuthorLoaded: false,
  outOfPosts: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      if (action.isFresh) {
        return {
          ...state,
          posts: action.posts,
          postsLoaded: true,
          outOfPosts: false
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
        currentPost: action.post,
        currentPostLoaded: true
      };

    case GET_CURRENT_FEATURED_MEDIA:
      return {
        ...state,
        currentFeaturedMedia: action.media,
        currentFeaturedMediaLoaded: true
      };

    case GET_CURRENT_AUTHOR:
      return {
        ...state,
        currentAuthor: action.author,
        currentAuthorLoaded: true
      };

    default:
      return state;
  }
};

// Get the categories and tags from the store, or find them from Wordpress
// Used like such: dispatch(getOrLoadTaxonomies()).then(({ categories, tags }) => { ... });
const getOrLoadTaxonomies = () => {
  return (dispatch, getState) => {
    return new Promise(resolve => {
      let { categoriesLoaded, tagsLoaded } = getState().blog;

      if (categoriesLoaded && tagsLoaded) {
        resolve({
          categories: getState().blog.categories,
          tags: getState().blog.tags
        });
      } else {
        const getTaxonomy = taxonomy => {
          return fetch(
            WORDPRESS_API_URL + '/wp/v2/' + taxonomy + '/?per_page=100'
          ).then(response => response.json());
        };

        Promise.all([getTaxonomy('categories'), getTaxonomy('tags')]).then(
          response => {
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

              resolve({ categories, tags });
            }
          }
        );
      }
    });
  };
};

const getAuthor = id => {
  return fetch(WORDPRESS_API_URL + '/wp/v2/users/' + id).then(response =>
    response.json()
  );
};

const getFeaturedMedia = id => {
  return fetch(WORDPRESS_API_URL + '/wp/v2/media/' + id).then(response =>
    response.json()
  );
};

export const getPosts = (query, isFresh) => {
  return dispatch => {
    const matchTaxonomyWithId = (list, slug) => {
      let returned = {};

      list.forEach(taxonomy => {
        if (taxonomy.slug === slug) {
          returned = taxonomy;
        }
      });

      return returned;
    };

    dispatch(getOrLoadTaxonomies()).then(({ categories, tags }) => {
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
    });
  };
};

export const getCurrentPost = slug => {
  return dispatch => {
    dispatch(getOrLoadTaxonomies()).then(({ categories, tags }) => {
      fetch(WORDPRESS_API_URL + '/wp/v2/posts/?slug=' + slug)
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: GET_CURRENT_POST,
            post: response[0]
          });

          getFeaturedMedia(response[0].featured_media).then(response => {
            dispatch({
              type: GET_CURRENT_FEATURED_MEDIA,
              media: response
            });
          });

          getAuthor(response[0].author).then(response => {
            dispatch({
              type: GET_CURRENT_AUTHOR,
              author: response
            });
          });
        });
    });
  };
};
