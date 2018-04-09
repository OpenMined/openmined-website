import { STATS_API_URL, handleWordpressError } from './index';
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
  new Promise(resolve => {
    fetch(STATS_API_URL)
      .then(response => response.json())
      .then(({ data }) => {
        const { repositories, members } = data;

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
      .catch(error => dispatch(handleWordpressError(error)));
  });

export const getGithubData = () => {
  return async dispatch => {
    await dispatch(fetchGithub());
  };
};
