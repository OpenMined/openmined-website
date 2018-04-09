import { STATS_API_URL, handleRemoteError } from './index';
import HOMEPAGE_CONTENT from '../content/homepage';

export const GET_GITHUB_CONTENT = 'homepage/GET_GITHUB_CONTENT';

const initialState = {
  githubContentLoaded: false,
  github: {
    repositories: [],
    members: []
  },
  content: HOMEPAGE_CONTENT
};

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

    default:
      return state;
  }
};

const fetchGithub = () => dispatch =>
  new Promise((resolve, reject) => {
    fetch(STATS_API_URL)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          dispatch(handleRemoteError(response.error));

          reject(new Error(response.error));
        }

        const { repositories, members } = response.data;

        dispatch({
          type: GET_GITHUB_CONTENT,
          repositories,
          members
        });

        resolve({
          repositories,
          members
        });
      })
      .catch(error => dispatch(handleRemoteError(error)));
  });

export const getGithubData = () => {
  return async dispatch => {
    await dispatch(fetchGithub());
  };
};
