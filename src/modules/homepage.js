export const GET_CONTENT = 'homepage/GET_CONTENT';
export const GET_GITHUB_PROJECTS = 'homepage/GET_GITHUB_PROJECTS';
export const GET_GITHUB_MEMBERS = 'homepage/GET_GITHUB_MEMBERS';

// NOTE: Make sure you're running the openmined-serverless application alongside
const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://yltw3rj1r3.execute-api.us-east-1.amazonaws.com/dev';

// TODO: Match this up to a hosted Wordpress API
const TEMP_CONTENT = {
  hero: {
    tagline: 'Decentralized Artificial Intelligence',
    description:
      'OpenMined is a community focused on building open-source technology for the decentralized ownership of data and intelligence.',
    ctaLink: 'https://github.com/OpenMined/Docs#overview',
    ctaText: 'Start Contributing',
    version: 'V 0.1.0 - “Hydrogen”',
    screenname: 'open-miner',
    code:
      'curl -Ls git.io/openmined | docker-compose -f - up'
  },
  mission: {
    heading: 'Our Mission',
    paragraphs: [
      // "When using online products and services, it's commonly understood that individuals must give up a copy of their personal information in exchange for access. Developers need this data to provide innovative and custom user experiences. On the other hand, people are often left unaware of how their information is being used, often buried deep within a lengthy and confusing Terms of Service.",
      // 'With OpenMined, developers and startups can leverage top-notch AI training, all while leaving their users in complete control.',
      // 'We are a volunteer driven, open-source community making private deep learning accessible to anyone. Given recent developments in cryptography, developers do not need a copy of a dataset in order to create value from it. We believe that consumers shouldn’t have to compromise between having a great Internet experience at the risk of losing control over their online identity.'
      'It is commonly believed that individuals must provide a copy of their personal information in order for AI to train or predict over it. This belief creates a tension between developers and consumers. Developers want the ability to create innovative products and services, while consumers want to avoid sending developers a copy of their data.',
      'With OpenMined, AI can be trained on data that it never has access to.',
      'The mission of the OpenMined community is to make privacy-preserving deep learning technology accessible to consumers, who supply data, and machine learning practitioners, who train models on that data. Given recent developments in cryptography, AI-based products and services do not need a copy of a dataset in order to create value from it.'
    ]
  },
  process: {
    heading: 'The Process',
    description:
      'The OpenMined ecosystem incorporates a number of technologies including federated machine learning, blockchain, multi-party computation, and homomorphic encryption.  Click on the sections below to learn more about each step in the process.',
    graph: [
      {
        name: 'Create',
        title: 'Create a model',
        description:
          'A data scientist creates a model, defines a training bounty, requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Grid',
            link: 'https://github.com/OpenMined/Grid'
          },
          {
            name: 'PySonar',
            link: 'https://github.com/OpenMined/PySonar'
          },
        ]
      },
      {
        name: 'Distribute',
        title: 'Distribute model over blockchain',
        description:
          "Upon submission, the model is encrypted and distributed throughout Sonar, Open Mine's decentralized blockchain smart contract. It's now available for training.",
        repos: [
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      },
      {
        name: 'Train',
        title: 'Users train the model',
        description:
          'The general public, who we call "miners", anonymously pull down the encrypted model from Sonar should they have the correct data required by the model.',
        repos: [
          {
            name: 'OpenMined',
            link: 'https://github.com/OpenMined/OpenMined'
          },
          {
            name: 'Grid',
            link: 'https://github.com/OpenMined/Grid'
          },
          {
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Adapters',
            link: 'https://github.com/OpenMined/Adapters'
          },
          {
            name: 'OpenMined UI',
            link: 'https://github.com/OpenMined/openmined-ui'
          }
        ]
      },
      {
        name: 'Reward',
        title: 'Reward the miners',
        description:
          'With each party remaining unknown to the other, the miner uploads their gradient and is rewarded proportionate to how much they improve the model.',
        repos: [
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
          "Once a success criteria is met, the model is decrypted by a private key or share held only by the data scientist. All the while, neither party has access to each other's data or intellectual property.",
        repos: [
          {
            name: 'PySonar',
            link: 'https://github.com/OpenMined/PySonar'
          },
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      }
    ]
  },
  timeline: {
    heading: 'Project Timeline',
    events: [
      {
        title: 'Project Launched',
        date: 'July 2017',
        status: 'past'
      },
      {
        title: 'Hydrogen Release',
        date: 'September 2017',
        status: 'past'
      },
      {
        title: 'Helium Release',
        date: 'December 2017',
        status: 'current'
      },
      {
        title: 'Lithium Release',
        date: 'TBD',
        status: 'future'
      }
    ],
    repos: [
      {
        name: 'OpenMined',
        description: 'Playstation / XBox Mining App',
        repo: 'openmined',
        contributors: [],
        issues: []
      },
      {
        name: 'PySyft',
        description: 'Private Deep Learning',
        repo: 'PySyft',
        contributors: [],
        issues: []
      },
      {
        name: 'Adapters',
        description: 'Data Schema Conversion',
        repo: 'adapters',
        contributors: [],
        issues: []
      },
      {
        name: 'Sonar',
        description: 'Federated Learning Blockchain',
        repo: 'Sonar',
        contributors: [],
        issues: []
      }
    ],
    ctaLink: 'https://github.com/OpenMined/Docs#overview'
  },
  footer: {
    questions: {
      heading: 'Common Questions',
      questions: [
        {
          question: 'Why couldn’t I just use fake data to earn a bounty?',
          answer:
            'Data owners aren’t compensated for their data - they’re compensated for making a model smarter.  This can only be done if you have real data. If it was possible to make a model smarter by using entirely fake data, then data scientists wouldn’t have a problem finding quality datasets to train their models.'
        },
        {
          question: 'Will there be an ICO?',
          answer: 'No.'
        },
        {
          question:
            'Isn’t homomorphic encryption too slow to perform at scale currently?',
          answer:
            'Not the way we use it.  Furthermore, the most computationally intensive models will use multi-party computation instead.'
        }
      ]
    },
    movement: {
      heading: 'Join the Movement',
      github: {
        link: 'https://github.com/OpenMined',
        members: []
      },
      slack: {
        link:
          'https://join.slack.com/t/openmined/shared_invite/enQtMjU5MzE5ODk4MTc3LWI2ZGE1ODc1YjdkZDJiNjdmYTdkZmE4ZTY5N2NkNDgxZjUyNjgxMTVhMmJkOTZhZjEyZDA3MTM2MThkZWVhMjg'
      },
      newsletter: {
        link: 'http://eepurl.com/cW1Fqj'
      }
    },
    links: [
      // {
      //   to: 'https://blog.openmined.org',
      //   text: 'Blog'
      // },
      {
        to:
          'https://s3.amazonaws.com/openmined.org/assets/openmined-brand-guide.pdf',
        text: 'Brand Guide'
      },
      {
        to: 'https://github.com/OpenMined',
        icon: 'fa-github'
      },
      {
        to: 'https://twitter.com/openminedorg',
        icon: 'fa-twitter'
      },
      {
        to: 'https://www.youtube.com/c/OpenMinedOrg',
        icon: 'fa-youtube'
      },
      {
        to: 'https://www.facebook.com/openminedorg/',
        icon: 'fa-facebook'
      }
    ]
  }
};

const initialState = {
  content: {
    hero: {},
    mission: {},
    process: {},
    timeline: {},
    footer: {}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.content
      };

    case GET_GITHUB_PROJECTS:
      return {
        ...state,
        content: {
          ...state.content,
          timeline: {
            ...state.content.timeline,
            repos: action.content
          }
        }
      };

    case GET_GITHUB_MEMBERS:
      return {
        ...state,
        content: {
          ...state.content,
          footer: {
            ...state.content.footer,
            movement: {
              ...state.content.footer.movement,
              github: {
                ...state.content.footer.movement.github,
                members: action.content
              }
            }
          }
        }
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

export const getGithubProjects = () => {
  return (dispatch, getState) => {
    let repos = getState().homepage.content.timeline.repos;

    if (repos) {
      fetch(API_URL + '/projects', {
        method: 'POST',
        body: JSON.stringify({
          repos
        })
      })
        .then(response => response.json())
        .then(({ repos }) => {
          dispatch({
            type: GET_GITHUB_PROJECTS,
            content: repos
          });
        });
    }
  };
};

export const getGithubMembers = () => {
  return dispatch => {
    fetch(API_URL + '/members')
      .then(response => response.json())
      .then(({ members }) => {
        dispatch({
          type: GET_GITHUB_MEMBERS,
          content: members
        });
      });
  };
};
