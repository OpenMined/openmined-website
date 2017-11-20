export const GET_CONTENT = 'auth/GET_CONTENT';

const initialState = {
  content: {
    hero: {}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.content
      };

    default:
      return state;
  }
};

export const getContent = () => {
  // TODO: Match this up to a hosted Wordpress API
  const content = {
    hero: {
      tagline: 'Decentralized Artificial Intelligence',
      description:
        'OpenMined is an open-source project that allows for encrypted federated learning through blockchain technology.',
      ctaLink: 'https://github.com/openmined',
      ctaText: 'Start Contributing',
      version: 'V 0.1.0 - “Hydrogen”',
      screenname: 'open-miner',
      code:
        'curl -s https://raw.githubusercontent.com/OpenMined/mine.js/hydrogen/.docker/docker-compose.yml | docker-compose -f - up'
    }
  };

  return dispatch => {
    dispatch({
      type: GET_CONTENT,
      content
    });
  };
};
