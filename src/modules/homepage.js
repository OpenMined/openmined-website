export const GET_CONTENT = 'auth/GET_CONTENT';

// TODO: Match this up to a hosted Wordpress API
const TEMP_CONTENT = {
  hero: {
    tagline: 'Decentralized Artificial Intelligence',
    description:
      'OpenMined is an open-source project that allows for encrypted federated learning through blockchain technology.',
    ctaLink: 'https://github.com/OpenMined',
    ctaText: 'Start Contributing',
    version: 'V 0.1.0 - “Hydrogen”',
    screenname: 'open-miner',
    code:
      'curl -s https://raw.githubusercontent.com/OpenMined/mine.js/hydrogen/.docker/docker-compose.yml | docker-compose -f - up'
  },
  mission: {
    heading: 'Our Mission',
    paragraphs: [
      'Currently, the Internet is structured in a manner by which the average person’s personal data is owned by a few large organizations as a by-product of interacting with their products. Most of this interaction is subconscious: viewing a cat video, liking a post, or sharing a popular news article. As the Internet grows, the use and permanent storage of this information is becoming more and more controversial. Developers want the ability to create innovative products, but the people want their privacy back.',
      'The OpenMined project is volunteer-only, open-source project aiming to create the world’s largest decentralized network of encrypted personal information. In this world, the user gets to own their information and store it themselves, while data scientists and developers pay for anonymized access to this information.'
    ]
  },
  process: {
    heading: 'The Process',
    description:
      'The OpenMined ecosystem incorporates a number of technologies including federated machine learning, blockchain, multi-party comuptation, and homomorphic encryption.  Click on the sections below to learn more about each step in the process.',
    graph: [
      {
        name: 'Create',
        title: 'Create a model',
        description:
          'A data scientist creates a model and requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      },
      {
        name: 'Distribute',
        title: 'Distribute model over blockchain',
        description:
          'A data scientist creates a model and requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      },
      {
        name: 'Train',
        title: 'Users train (mine) the model',
        description:
          'A data scientist creates a model and requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      },
      {
        name: 'Reward',
        title: 'Reward the miners',
        description:
          'A data scientist creates a model and requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      },
      {
        name: 'Deliver',
        title: 'Deliver the results securely',
        description:
          'A data scientist creates a model and requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      }
    ]
  }
};

// TODO: Have real information written for the five steps on the graph

const initialState = {
  content: {
    hero: {},
    mission: {},
    process: {}
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
  return dispatch => {
    dispatch({
      type: GET_CONTENT,
      content: TEMP_CONTENT
    });
  };
};
