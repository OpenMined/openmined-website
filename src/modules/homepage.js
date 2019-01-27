import { addNotification } from './notifications';

import HOMEPAGE_CONTENT from '../content/homepage';

export const GET_GITHUB_CONTENT = 'homepage/GET_GITHUB_CONTENT';
export const GET_SLACK_CONTENT = 'homepage/GET_SLACK_CONTENT';
export const GET_GHOST_CONTENT = 'homepage/GET_GHOST_CONTENT';

const initialState = {
  githubContentLoaded: false,
  slackContentLoaded: false,
  ghostContentLoaded: false,
  github: {
    repositories: [],
    members: []
  },
  content: HOMEPAGE_CONTENT
};

const handleRemoteError = error =>
  addNotification({
    text: error,
    type: 'error'
  });

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_CONTENT:
      return {
        ...state,
        githubContentLoaded: true,
        github: {
          repositories: action.repositories,
          members: action.members
        },
        content: {
          ...state.content,
          movement: {
            ...state.content.movement,
            ctas: state.content.movement.ctas.map(cta => {
              if (cta.type === 'Github') {
                return {
                  ...cta,
                  count: action.members.length
                };
              }

              return cta;
            })
          }
        }
      };

    case GET_SLACK_CONTENT:
      return {
        ...state,
        slackContentLoaded: true,
        content: {
          ...state.content,
          movement: {
            ...state.content.movement,
            ctas: state.content.movement.ctas.map(cta => {
              if (cta.type === 'Slack') {
                return {
                  ...cta,
                  count: action.slack.count
                };
              }

              return cta;
            })
          }
        }
      };

    case GET_GHOST_CONTENT:
      return {
        ...state,
        ghostContentLoaded: true,
        content: {
          ...state.content,
          status: {
            ...state.content.status,
            news: {
              blog: {
                ...state.content.status.news.blog,
                posts: action.ghost.blog
              }
            }
          }
        }
      };

    default:
      return state;
  }
};

const fetchGithub = () => dispatch =>
  new Promise(resolve => {
    fetch(process.env.REACT_APP_STATS_API_URL + '/github')
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw new Error(response.error);
        } else {
          let { members, repositories } = response;

          const shuffle = a => {
            for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
          };

          members = shuffle(members);

          dispatch({
            type: GET_GITHUB_CONTENT,
            repositories,
            members
          });

          resolve({
            repositories,
            members
          });
        }
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

export const getGithubData = () => {
  return async dispatch => {
    await dispatch(fetchGithub());
  };
};

const fetchSlack = () => dispatch =>
  new Promise(resolve => {
    fetch(process.env.REACT_APP_STATS_API_URL + '/slack')
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw new Error(response.error);
        } else {
          dispatch({
            type: GET_SLACK_CONTENT,
            slack: response.metadata
          });

          resolve({
            slack: response.metadata
          });
        }
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

export const getSlackData = () => {
  return async dispatch => {
    await dispatch(fetchSlack());
  };
};

const fetchGhost = () => dispatch =>
  new Promise(resolve => {
    fetch(process.env.REACT_APP_STATS_API_URL + '/ghost')
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw new Error(response.error);
        } else {
          dispatch({
            type: GET_GHOST_CONTENT,
            ghost: response
          });

          resolve({
            ghost: response
          });
        }
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

export const getGhostData = () => {
  return async dispatch => {
    await dispatch(fetchGhost());
  };
};
