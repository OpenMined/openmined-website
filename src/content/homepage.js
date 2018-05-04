// Testimonial logos
import sampleImage from '../containers/app/assets/logo-square-color.svg';

// Image button icons
import githubIcon from '../containers/app/assets/icons/github.svg';
import openCollectiveIcon from '../containers/app/assets/icons/open-collective.svg';
import youtubeIcon from '../containers/app/assets/icons/youtube.svg';
import slackIcon from '../containers/app/assets/icons/slack.svg';
import emailIcon from '../containers/app/assets/icons/email.svg';

// Pillar icons
import lockIcon from '../containers/app/assets/icons/lock.svg';
import computerIcon from '../containers/app/assets/icons/computer.svg';
import nodesIcon from '../containers/app/assets/icons/nodes.svg';

const buttons = {
  contribute: {
    type: 'Github',
    text: 'Start Contributing',
    icon: githubIcon,
    link: 'https://github.com/OpenMined'
  },
  donate: {
    type: 'OpenCollective',
    text: 'Donate',
    icon: openCollectiveIcon,
    link: 'https://opencollective.com/openmined'
  },
  watchIntro: {
    type: 'YouTube',
    text: 'Watch Intro',
    icon: youtubeIcon,
    link: 'https://www.youtube.com/watch?v=sXFmKquiVnk'
  },
  chat: {
    type: 'Slack',
    text: 'Chat on Slack',
    icon: slackIcon,
    link: 'http://slack.openmined.org'
  },
  newsletter: {
    type: 'Mailchimp',
    text: 'Join Newsletter',
    icon: emailIcon,
    link: 'http://eepurl.com/cW1Fqj'
  }
};

export default {
  hero: {
    tagline: 'Building Safe Artificial Intelligence',
    description:
      'OpenMined is an open-source community focused on researching, developing, and promoting tools for secure, privacy-preserving, value-aligned artificial intelligence.',
    steps: [
      {
        link: 'https://www.google.com',
        subtitle: 'Step One',
        heading: 'Setup Worker',
        content:
          'Also called a "Mine", the worker is where your personal data is stored. Using the worker, you can download models and train them from your own hardware.',
        colab: 'https://www.google.com/search?q=colab',
        local: 'https://www.google.com/search?q=local'
      },
      {
        link: 'https://www.google.com',
        subtitle: 'Step Two',
        heading: 'Setup Client',
        content:
          'Using the “Syft” project, you may create models for workers to train. All models are encrypted via multi-party computation or homomorphic encryption.',
        colab: 'https://www.google.com/search?q=colab',
        local: 'https://www.google.com/search?q=local'
      }
    ]
  },
  testimonials: [
    {
      name: 'Sample Company 1',
      link: 'https://www.google.com',
      image: sampleImage
    },
    {
      name: 'Sample Company 2',
      link: 'https://www.google.com',
      image: sampleImage
    },
    {
      name: 'Sample Company 3',
      link: 'https://www.google.com',
      image: sampleImage
    },
    {
      name: 'Sample Company 4',
      link: 'https://www.google.com',
      image: sampleImage
    }
  ],
  mission: {
    title: 'Vision & Mission',
    cta: buttons.donate,
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
  pillars: [
    {
      colors: ['yellow', 'green'],
      icon: lockIcon,
      title: 'Secure',
      description:
        'Training on the OpenMined platform is generally done by two methods of encryption: multi-party computation and homomorphic encryption. Both methods of encryption protect the model’s intellectual property and ensures the user’s personal information is secure.',
      cards: [
        {
          link: 'https://www.google.com',
          subtitle: 'Secure',
          heading: 'Multi-party Computation',
          content:
            'This involves participation of multiple workers training a single model together and therefore is used on "shared" models.',
          colab: 'https://www.google.com/search?q=colab'
        },
        {
          link: 'https://www.google.com',
          subtitle: 'Secure',
          heading: 'Homomorphic Computation',
          content:
            'This is used when a model must be trained in an encrypted state. Here the model knows nothing of the data and the data owner knows nothing of the model.',
          colab: 'https://www.google.com/search?q=colab'
        }
      ]
    },
    {
      colors: ['green', 'blue'],
      icon: computerIcon,
      title: 'Private',
      description:
        'Privacy is at the core of OpenMined - ensuring that both the trainer of the model and the data scientist creating the model are protected. Using this system, neither the intellectual property, nor the data being trained on, are known to either party.',
      cards: [
        {
          link: 'https://www.google.com',
          subtitle: 'Private',
          heading: 'Federated Learning',
          content:
            "Federated learning is the training of AI models on the end-user's device. With OpenMined, we can ensure this is done without the potential for IP disclosure.",
          colab: 'https://www.google.com/search?q=colab'
        },
        {
          link: 'https://www.google.com',
          subtitle: 'Private',
          heading: 'Differential Privacy',
          content:
            "A model demands access to certain data in order to train properly. With differential privacy, you can ensure that the end-user's data is separated from the model.",
          colab: 'https://www.google.com/search?q=colab'
        }
      ]
    },
    {
      colors: ['blue', 'black'],
      icon: nodesIcon,
      title: 'Value-aligned',
      description:
        'Ensuring that Workers are fairly compensated and that a model is properly and accurately trained is at the core of the OpenMined system. Using value measurement, it can be determined that a model has been successfully trained with a provided margin of error.',
      cards: [
        {
          link: 'https://www.google.com',
          subtitle: 'Valuable',
          heading: 'Value Measurement',
          content:
            'This is the means by which a model can be tested for training completeness within a certain error or success tolerance.',
          colab: 'https://www.google.com/search?q=colab'
        }
      ]
    }
  ],
  process: {
    title: 'How it Works',
    cta: buttons.watchIntro,
    content: [
      {
        heading: 'Create',
        title: 'Create a model',
        description:
          'A data scientist creates a model in a framework such as PyTorch, Tensorflow, or Keras, defines a training bounty they are willing to pay for it to be trained, and requests a specific kind of private training data (i.e., personal health information, social media posts, smart-home metadata, etc.)',
        repositories: ['PySyft'],
        graph: {
          nodes: {
            scientist: 'active',
            grid: 'active',
            mines: 'inactive'
          },
          dots: {
            zone: 1,
            direction: 'forwards',
            colors: ['white', 'yellow']
          }
        }
      },
      {
        heading: 'Distribute',
        title: 'Distribute via OpenGrid',
        description:
          'Upon submission, the model is encrypted/shared and uploaded to an OpenGrid network. This could be a private network within an enterprise or the public OpenGrid our community actively supports.',
        repositories: ['Grid'],
        graph: {
          nodes: {
            scientist: 'inactive',
            grid: 'active blinking',
            mines: 'inactive'
          },
          dots: {}
        }
      },
      {
        heading: 'Train',
        title: 'Users train the model',
        description:
          'Members of the OpenGrid network, who we call "miners", anonymously pull down the encrypted model from OpenGrid should they have the correct data required by the model. They then train the encrypted/shared model locally on their device.',
        repositories: ['Grid', 'PySyft'],
        graph: {
          nodes: {
            scientist: 'inactive',
            grid: 'active still',
            mines: 'active red'
          },
          dots: {
            zone: 3,
            direction: 'forwards',
            colors: ['yellow', 'red']
          }
        }
      },
      {
        heading: 'Reward',
        title: 'Reward the miners',
        description:
          'With each party remaining unknown to the other, the miner uploads a new version of the model based on their local training. Their submission is rewarded proportionate to how much they improve the accuracy of the model.',
        repositories: ['Grid'],
        graph: {
          nodes: {
            scientist: 'inactive',
            grid: 'active still',
            mines: 'active green'
          },
          dots: {
            zone: 3,
            direction: 'backwards',
            colors: ['yellow', 'green']
          }
        }
      },
      {
        heading: 'Deliver',
        title: 'Deliver the results securely',
        description:
          "Once a success criteria is met, the model is decrypted by a private key or share held only by the data scientist. All the while, neither party has access to each other's data or intellectual property.",
        repositories: ['Grid', 'PySyft'],
        graph: {
          nodes: {
            scientist: 'active finished',
            grid: 'active still',
            mines: 'inactive green'
          },
          dots: {
            zone: 1,
            direction: 'backwards',
            colors: ['green', 'yellow']
          }
        }
      }
    ],
    sections: [
      {
        type: 'nodes',
        name: 'scientist',
        icon: 'openmined',
        num: 1
      },
      {
        type: 'dots',
        num: 1
      },
      {
        type: 'nodes',
        name: 'grid',
        icon: 'grid',
        num: 1,
        children: true
      },
      {
        type: 'dots',
        num: 3
      },
      {
        type: 'nodes',
        name: 'mines',
        icon: 'mine',
        num: 3
      }
    ]
  },
  status: {
    projects: ['Grid', 'UnityWorker', 'PySyft'],
    cta: buttons.contribute
  },
  movement: {
    title: 'Join the Movement',
    ctas: [
      {
        ...buttons.contribute,
        count: 0,
        precise: true
      },
      {
        ...buttons.chat,
        count: 2500,
        precise: false
      },
      {
        ...buttons.donate,
        count: 0,
        precise: true
      },
      {
        ...buttons.newsletter,
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
