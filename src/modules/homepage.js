import parse from 'parse-link-header';

export const GET_CONTENT = 'homepage/GET_CONTENT';
export const GET_GITHUB_PROJECTS = 'homepage/GET_GITHUB_PROJECTS';
export const GET_GITHUB_MEMBERS = 'homepage/GET_GITHUB_MEMBERS';

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
          'With each party remaining unknown to the other, the miner uploads their gradient and is rewarded proportionate to how much they improve the model.',
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
        name: 'OpenMined',
        description: 'GPU Optimized Deep Learning',
        repo: 'openmined',
        contributors: [],
        issues: []
      },
      {
        name: 'PySyft',
        description: 'Encrypted Deep Learning Library',
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
        description: 'Machine Learning Blockchain',
        repo: 'Sonar',
        contributors: [],
        issues: []
      }
    ],
    ctaLink: 'https://github.com/OpenMined'
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
          answer: 'Absolutely not.'
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
        to: '/assets/openmined-brand-guide.pdf',
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

export const getGithubMembers = () => {
  return dispatch => {
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    let membersPromises = [];
    let allMembers = [];

    const getMembersFetch = url => {
      fetch(url).then(resp => {
        const link = parse(resp.headers.get('Link')) || {};

        membersPromises.push(resp);

        if (link.next) {
          getMembersFetch(link.next.url);
        } else {
          Promise.all(membersPromises)
            .then(responses => {
              responses.forEach(response => {
                response.json().then(data => {
                  allMembers = allMembers.concat(data);
                });
              });
            })
            .then(() => {
              shuffleArray(allMembers);

              dispatch({
                type: GET_GITHUB_MEMBERS,
                content: allMembers
              });
            });
        }
      });
    };

    getMembersFetch('https://api.github.com/orgs/OpenMined/members');
  };
};
