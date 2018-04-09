export default {
  hero: {
    tagline: 'Building Safe Artificial Intelligence',
    description:
      'OpenMined is an open-source community focused on researching, developing, and elevating tools for secure, privacy-preserving, value-aligned artificial intelligence.',
    cta: {
      text: 'Join the Community',
      link: 'http://slack.openmined.org/'
    },
    console: {
      version: 'V 0.3.0 - “Lithium”',
      username: 'open-miner',
      code: 'curl -Ls git.io/openmined | docker-compose -f - up'
    }
  },
  mission: {
    title: 'Vision & Mission',
    content: [
      {
        text:
          'It is commonly believed that individuals must provide a copy of their personal information in order for AI to train or predict over it. This belief creates a tension between developers and consumers. Developers want the ability to create innovative products and services, while consumers want to avoid sending developers a copy of their data.'
      },
      {
        text:
          'With OpenMined, an AI can be trained in environments that are not secure on data it never has access to.',
        strong: true
      },
      {
        text:
          'The mission of the OpenMined community is to make Private & Secure Deep Learning technology accessible to consumers, who supply data, and machine learning practitioners, who train models on that data. Given recent developments in cryptography, AI-based products and services do not need a copy of a dataset in order to create value from it.'
      }
    ]
  },
  process: {
    title: 'Our Blueprint for Safe, Narrow AI',
    description:
      'The OpenMined ecosystem incorporates a number of technologies including federated learning, differential privacy, multi-party computation, homomorphic encryption, peer-to-peer networking, and open marketplace tools such as blockchain. Click on the sections below to learn more about each step in the process.',
    content: [
      {
        heading: 'Create',
        title: 'Create a model',
        description:
          'A data scientist creates a model in a framework such as PyTorch, Tensorflow, or Keras, defines a training bounty they are willing to pay for it to be trained, and requests a specific kind of private training data (i.e., personal health information, social media posts, smart-home metadata, etc.)',
        repositories: [
          {
            title: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            title: 'PySonar',
            link: 'https://github.com/OpenMined/PySonar'
          }
        ]
      },
      {
        heading: 'Distribute',
        title: 'Distribute via OpenGrid',
        description:
          'Upon submission, the model is encrypted/shared and uploaded to an OpenGrid network. This could be a private network within an enterprise or the public OpenGrid our community actively supports.',
        repositories: [
          {
            title: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      },
      {
        heading: 'Train',
        title: 'Users train the model',
        description:
          'Members of the OpenGrid network, who we call "miners", anonymously pull down the encrypted model from OpenGrid should they have the correct data required by the model. They then train the encrypted/shared model locally on their device.',
        repositories: [
          {
            title: 'OpenMined',
            link: 'https://github.com/OpenMined/OpenMined'
          },
          {
            title: 'PySyft',
            link: 'https://github.com/OpenMined/PySyft'
          },
          {
            title: 'Adapters',
            link: 'https://github.com/OpenMined/Adapters'
          },
          {
            title: 'Mine UI',
            link: 'https://github.com/OpenMined/Mine-UI'
          },
          {
            title: 'OpenMined UI',
            link: 'https://github.com/OpenMined/OpenMined-UI'
          }
        ]
      },
      {
        heading: 'Reward',
        title: 'Reward the miners',
        description:
          'With each party remaining unknown to the other, the miner uploads a new version of the model based on their local training. Their submission is rewarded proportionate to how much they improve the accuracy of the model.',
        repositories: [
          {
            title: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          },
          {
            title: 'Mine UI',
            link: 'https://github.com/OpenMined/Mine-UI'
          }
        ]
      },
      {
        heading: 'Deliver',
        title: 'Deliver the results securely',
        description:
          "Once a success criteria is met, the model is decrypted by a private key or share held only by the data scientist. All the while, neither party has access to each other's data or intellectual property.",
        repositories: [
          {
            title: 'PySonar',
            link: 'https://github.com/OpenMined/PySonar'
          },
          {
            title: 'Sonar',
            link: 'https://github.com/OpenMined/Sonar'
          }
        ]
      }
    ]
  },
  timeline: {
    title: 'Project Timeline',
    content: {
      timeline: [
        {
          status: 'past',
          title: 'Project Launched',
          date: 'July 2017'
        },
        {
          status: 'past',
          title: 'Hydrogen Release',
          date: 'September 2017'
        },
        {
          status: 'past',
          title: 'Helium Release',
          date: 'February 2018'
        },
        {
          status: 'present',
          title: 'Lithium Release',
          date: 'March 2018'
        }
      ],
      projects: [
        {
          title: 'OpenGrid',
          description: 'On-Demand Compute Grid',
          link: 'https://github.com/OpenMined/Grid'
        },
        {
          title: 'OpenMined',
          description: 'Playstation/Xbox Mining App',
          link: 'https://github.com/OpenMined/OpenMined'
        },
        {
          title: 'PySyft',
          description: 'Private Deep Learning (Python)',
          link: 'https://github.com/OpenMined/PySyft'
        },
        {
          title: 'Syft.js',
          description: 'Private Deep Learning (JS)',
          link: 'https://github.com/OpenMined/syft.js'
        }
      ],
      cta: {
        text: 'Start Contributing',
        link: 'https://github.com/OpenMined/Docs'
      }
    }
  },
  questions: {
    title: 'Common Questions',
    content: [
      {
        question: 'Why couldn’t I just use fake data to earn a bounty?',
        answer:
          'Data owners aren’t compensated for their data - they’re compensated for making a model smarter. This can only be done if you have real data. If it was possible to make a model smarter by using entirely fake data, then data scientists wouldn’t have a problem finding quality datasets to train their models.'
      },
      {
        question: 'Will there be an ICO?',
        answer: 'No.'
      },
      {
        question:
          'Isn’t homomorphic encryption too slow to perform at scale currently?',
        answer:
          'Not the way we use it. Furthermore, the most computationally intensive models will use multi-party computation instead.'
      }
    ]
  },
  movement: {
    title: 'Join the Movement',
    ctas: [
      {
        type: 'Github',
        text: 'Start Contributing',
        link: 'https://github.com/OpenMined',
        count: 0,
        precise: true
      },
      {
        type: 'Slack',
        text: 'Chat on Slack',
        link: 'http://slack.openmined.org',
        count: 2500,
        precise: false
      },
      {
        type: 'Newsletter',
        text: 'Join Newsletter',
        link: 'http://eepurl.com/cW1Fqj',
        count: 0,
        precise: true
      }
    ]
  },
  footer: {
    links: [
      {
        text: 'Blog',
        link: '/blog'
      },
      {
        text: 'Weekly Digs',
        link: '/digs'
      },
      {
        text: 'Brand Guide',
        link: '/assets/openmined-brand-guide.pdf'
      }
    ],
    social: [
      {
        title: 'Github',
        link: 'https://github.com/OpenMined'
      },
      {
        title: 'Twitter',
        link: 'https://twitter.com/openminedorg'
      },
      {
        title: 'YouTube',
        link: 'https://www.youtube.com/c/OpenMinedOrg'
      },
      {
        title: 'Facebook',
        link: 'https://www.facebook.com/openminedorg/'
      }
    ]
  }
};
