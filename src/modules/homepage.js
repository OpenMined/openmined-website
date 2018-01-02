import { SERVERLESS_API_URL, WORDPRESS_API_URL } from './index';

export const GET_CONTENT = 'homepage/GET_CONTENT';
export const GET_GITHUB_PROJECTS = 'homepage/GET_GITHUB_PROJECTS';
export const GET_GITHUB_MEMBERS = 'homepage/GET_GITHUB_MEMBERS';

// TODO: Maybe we should beef this out a bit once we want on the desired format...
const initialState = {
  isLoading: true,
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
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.content,
        isLoading: false
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

export const getContent = () => {
  return dispatch => {
    fetch(WORDPRESS_API_URL + '/acf/v2/options')
      .then(response => response.json())
      .then(response => {
        const content = {};
        const items = ['hero', 'mission', 'process', 'timeline', 'footer'];

        items.forEach(item => {
          content[item] = formatContent(response.acf, item);
        });

        // Load content from Wordpress
        dispatch({
          type: GET_CONTENT,
          content
        });

        // Load Github issues and contributors from Serverless
        getGithubProjects(content.timeline.repos).then(({ repos }) => {
          dispatch({
            type: GET_GITHUB_PROJECTS,
            repos
          });
        });

        // Load Github members from Serverless
        getGithubMembers().then(({ members }) => {
          dispatch({
            type: GET_GITHUB_MEMBERS,
            members
          });
        });
      });
  };
};

const getGithubProjects = repos => {
  return fetch(SERVERLESS_API_URL + '/projects', {
    method: 'POST',
    body: JSON.stringify({
      repos
    })
  }).then(response => response.json());
};

const getGithubMembers = () => {
  return fetch(SERVERLESS_API_URL + '/members').then(response =>
    response.json()
  );
};
