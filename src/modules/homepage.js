export const GET_CONTENT = 'homepage/GET_CONTENT';
export const GET_GITHUB_PROJECTS = 'homepage/GET_GITHUB_PROJECTS';

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
          'A data scientist creates a model, defines a training bounty, requests specific user data. This could be anything from personal health information to social media posts.',
        repos: [
          {
            name: 'PySonar',
            link: 'https://github.com/OpenMined/PySonar'
          }
        ]
      },
      {
        name: 'Distribute',
        title: 'Distribute model over blockchain',
        description:
          "Upon submission, the model is encrypted and distributed throughout Sonar, Open Mine's decentralized blockchain. It's now available for training.",
        repos: [
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          },
          {
            name: 'PyYashe',
            link: 'https://github.com/OpenMined/PyYashe'
          },
          {
            name: 'PyBV',
            link: 'https://github.com/OpenMined/PyBV'
          },
          {
            name: 'PyAono',
            link: 'https://github.com/OpenMined/PyAono'
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
            name: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            name: 'Adapters',
            link: 'https://github.com/OpenMined/Adapters'
          },
          {
            name: 'Mine UI',
            link: 'https://github.com/OpenMined/mine-ui'
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
          'With each party remaining unknown to the other, the miner uploads their change gradient and is rewarded proportionate to how much they improve the model.',
        repos: [
          {
            name: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          },
          {
            name: 'Mine UI',
            link: 'https://github.com/OpenMined/mine-ui'
          }
        ]
      },
      {
        name: 'Deliver',
        title: 'Deliver the results securely',
        description:
          "Once a success criteria is met, the model is decrypted by a private key held only by the data scientist. All the while, neither party has access to each other's data or intellectual property.",
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
        name: 'PySyft',
        description: 'Encrypted Deep Learning Library',
        repo: 'PySyft',
        contributors: [],
        issues: []
      },
      {
        name: 'Sonar',
        description: 'Machine Learning Blockchain',
        repo: 'Sonar',
        contributors: [],
        issues: []
      },
      {
        name: 'MineUI',
        description: 'Federated Learning Client',
        repo: 'mine-ui',
        contributors: [],
        issues: []
      },
      {
        name: 'Adapters',
        description: 'Data Schema Conversion',
        repo: 'adapters',
        contributors: [],
        issues: []
      }
    ]
  },
  footer: {
    questions: {
      heading: 'Common Questions',
      questions: []
    }
  }
};

// TODO: Have real information written for the five steps on the graph

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
      let repoContributors = [];
      let repoIssues = [];

      repos.forEach(repo => {
        repoContributors.push(
          'https://api.github.com/repos/OpenMined/' +
            repo.repo +
            '/stats/contributors'
        );

        repoIssues.push(
          'https://api.github.com/repos/OpenMined/' +
            repo.repo +
            '/issues?sort=comments'
        );
      });

      Promise.all([
        Promise.all(
          repoContributors.map(url =>
            fetch(url)
              .then(resp => resp.json())
              .then(resp => resp.reverse().slice(0, 5))
          )
        ),
        Promise.all(
          repoIssues.map(url =>
            fetch(url)
              .then(resp => resp.json())
              .then(resp => resp.slice(0, 5))
          )
        )
      ]).then(response => {
        let newReposArray = [];

        repos.forEach((repo, index) => {
          repo.contributors = response[0][index];
          repo.issues = response[1][index];

          newReposArray.push(repo);
        });

        dispatch({
          type: GET_GITHUB_PROJECTS,
          content: newReposArray
        });
      });
    }
  };
};
