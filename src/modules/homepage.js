import { WORDPRESS_API_URL, handleWordpressError } from './index';

export const GET_CONTENT = 'homepage/GET_CONTENT';
export const GET_GITHUB_PROJECTS = 'homepage/GET_GITHUB_PROJECTS';
export const GET_GITHUB_MEMBERS = 'homepage/GET_GITHUB_MEMBERS';

// TODO: Maybe we should beef this out a bit once we want on the desired format...
const initialState = {
  homepageLoaded: false,
  content: {
    hero: {
      button: {},
      console: {}
    },
    mission: {},
    process: {},
    timeline: {
      button: {}
    },
    footer: {
      questions: {},
      movement: {
        movement_github: {},
        movement_slack: {},
        movement_newsletter: {}
      }
    },
    general: {}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.content,
        homepageLoaded: true
      };

    // TODO: Is there a prettier way to do this?
    case GET_GITHUB_PROJECTS:
      return {
        ...state,
        content: {
          ...state.content,
          timeline: {
            ...state.content.timeline,
            repos: action.repos
          }
        }
      };

    // TODO: Is there a prettier way to do this?
    case GET_GITHUB_MEMBERS:
      return {
        ...state,
        content: {
          ...state.content,
          footer: {
            ...state.content.footer,
            movement: {
              ...state.content.footer.movement,
              movement_github: {
                ...state.content.footer.movement.movement_github,
                footer_movement_github_members: action.members
              }
            }
          }
        }
      };

    default:
      return state;
  }
};

// TODO: We should really clean this up. Smells like recursion!
const formatContent = (content, item) => {
  const items = {};

  Object.keys(content).forEach(key => {
    if (~key.indexOf(item + '_')) {
      if (typeof content[key] === 'object' && !Array.isArray(content[key])) {
        Object.keys(content[key]).forEach(subKey => {
          content[key][subKey.substr(subKey.indexOf('_') + 1)] =
            content[key][subKey];
          delete content[key][subKey];
        });
      } else if (
        typeof content[key] === 'object' &&
        Array.isArray(content[key])
      ) {
        content[key].forEach(item => {
          Object.keys(item).forEach(subKey => {
            item[subKey.substr(subKey.indexOf('_') + 1)] = item[subKey];
            delete item[subKey];
          });
        });
      }

      items[key.substr(key.indexOf('_') + 1)] = content[key];
    }
  });

  return items;
};

const getHomepageContent = () => dispatch =>
  new Promise(resolve => {
    fetch(WORDPRESS_API_URL + '/acf/v2/options')
      .then(response => response.json())
      .then(response => {
        const content = {};
        const items = [
          'hero',
          'mission',
          'process',
          'timeline',
          'footer',
          'general'
        ];

        items.forEach(item => {
          content[item] = formatContent(response.acf, item);
        });

        dispatch({
          type: GET_CONTENT,
          content
        });

        resolve(content);
      })
      .catch(error => dispatch(handleWordpressError(error)));
  });

const getGithubData = () => dispatch =>
  new Promise(resolve => {
    fetch(WORDPRESS_API_URL + '/github/all')
      .then(response => response.json())
      .then(({ members, repos }) => {
        dispatch({
          type: GET_GITHUB_PROJECTS,
          repos
        });

        dispatch({
          type: GET_GITHUB_MEMBERS,
          members
        });

        resolve({
          repos,
          members
        });
      })
      .catch(error => dispatch(handleWordpressError(error)));
  });

export const getContent = (shouldCallGithub = true) => {
  return async dispatch => {
    await dispatch(getHomepageContent());

    if (shouldCallGithub) {
      await dispatch(getGithubData());
    }
  };
};
