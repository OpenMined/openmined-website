import { WORDPRESS_API_URL, handleRemoteError } from './index';

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

const getOrLoadTaxonomies = () => (dispatch, getState) =>
  new Promise(resolve => {
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
        )
          .then(response => response.json())
          .catch(error => dispatch(handleRemoteError(error)));
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

const getAllPosts = (query, isFresh, { categories, tags }) => dispatch =>
  new Promise(resolve => {
    const matchTaxonomyWithId = (list, slug) => {
      let returned = {};

      list.forEach(taxonomy => {
        if (taxonomy.slug === slug) {
          returned = taxonomy;
        }
      });

      return returned;
    };

    if (query.categories) {
      query.categories = matchTaxonomyWithId(categories, query.categories).id;
    }

    if (query.tags) {
      query.tags = matchTaxonomyWithId(tags, query.tags).id;
    }

    if (query.digs) {
      query.categories = query.digsId;

      delete query.digs;
      delete query.digsId;
    } else {
      query.categories_exclude = query.digsId;
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

        resolve(response.body);
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

const getPost = slug => dispatch =>
  new Promise(resolve => {
    fetch(WORDPRESS_API_URL + '/wp/v2/posts/?slug=' + slug)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_CURRENT_POST,
          post: response[0]
        });

        resolve(response[0]);
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

const getFeaturedMedia = id => dispatch =>
  new Promise(resolve => {
    fetch(WORDPRESS_API_URL + '/wp/v2/media/' + id)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_CURRENT_FEATURED_MEDIA,
          media: response
        });

        resolve(response);
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

const getAuthor = id => dispatch =>
  new Promise(resolve => {
    fetch(WORDPRESS_API_URL + '/wp/v2/users/' + id)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: GET_CURRENT_AUTHOR,
          author: response
        });

        resolve(response);
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

export const getPosts = (query, isFresh) => {
  return async dispatch => {
    const taxonomies = await dispatch(getOrLoadTaxonomies());

    taxonomies.categories.forEach(category => {
      if (category.slug === 'digs') {
        query.digsId = category.id;
      }
    });

    await dispatch(getAllPosts(query, isFresh, taxonomies));
  };
};

export const getCurrentPost = slug => {
  return async dispatch => {
    await dispatch(getOrLoadTaxonomies());

    const post = await dispatch(getPost(slug));

    await dispatch(getFeaturedMedia(post.featured_media));
    await dispatch(getAuthor(post.author));
  };
};
