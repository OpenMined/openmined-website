// Testimonial logos
import tensorFlowImage from '../containers/app/assets/tensorflow.svg';
import pyTorchImage from '../containers/app/assets/pytorch.svg';
import ipfsImage from '../containers/app/assets/ipfs.svg';

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
        link:
          'https://colab.research.google.com/drive/1-Jb_E_nDuBGHIJ_psI95k-ukh-P_aly-',
        subtitle: 'Step One',
        heading: 'Setup Worker',
        content:
          'Also called a "Mine", the worker is a server where your private data is stored. The worker downloads models and train them using federated learning and differential privacy.',
        colab:
          'https://colab.research.google.com/drive/1-Jb_E_nDuBGHIJ_psI95k-ukh-P_aly-'
        // local: 'https://www.google.com/search?q=local'
      },
      {
        link:
          'https://colab.research.google.com/drive/1Je1rk7olA9uTWWaqvvt4_gXf7yX1rTBm',
        subtitle: 'Step Two',
        heading: 'Setup Client',
        content:
          'Using the “Syft” project, you may create models for workers to train. Models can be secured via multi-party computation or homomorphic encryption.',
        colab:
          'https://colab.research.google.com/drive/1Je1rk7olA9uTWWaqvvt4_gXf7yX1rTBm'
        // local: 'https://www.google.com/search?q=local'
      }
    ]
  },
  testimonials: [
    {
      name: 'PyTorch',
      link: 'https://pytorch.org/',
      image: pyTorchImage
    },
    {
      name: 'IPFS',
      link: 'https://ipfs.io/',
      image: ipfsImage
    },
    {
      name: 'TensorFlow',
      link: 'https://www.tensorflow.org/',
      image: tensorFlowImage
    }
  ],
  mission: {
    title: 'Vision & Mission',
    cta: buttons.donate,
    content: [
      {
        text:
          'Industry standard tools for artificial intelligence have been designed with several assumptions: data is centralized into a single compute cluster, the cluster exists in a secure cloud, and the resulting models will be owned by a central authority.  We envision a world in which we are not restricted to this scenario - a world in which AI tools treat privacy, security, and multi-owner governance as first class citizens.'
      },
      {
        text:
          'With OpenMined, an AI model can be governed by multiple owners and trained securely on an unseen, distributed dataset.',
        strong: true
      },
      {
        text:
          'The mission of the OpenMined community is to create an accessible ecosystem of tools for private, secure, multi-owner governed AI. We do this by extending popular libraries like TensorFlow and PyTorch with advanced techniques in cryptography and private machine learning.'
      }
    ]
  },
  pillars: [
    {
      colors: ['yellow', 'green'],
      icon: computerIcon,
      title: 'Private',
      description:
        'Privacy is at the core of OpenMined - building tools that allow data owners to keep their data private during the model training process. This is done by utilizing two methods of privacy preservation: federated learning and differential privacy.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'Private',
          heading: 'Federated Learning',
          content:
            'Instead of bringing data all to one place for training, federated learning is done by bringing the model to the data. This allows a data owner to maintain the only copy of their information.'
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'Private',
          heading: 'Differential Privacy',
          content:
            'Differential Privacy is a set of techniques for preventing a model from accidentally memorizing secrets present in a training dataset during the learning process.'
          // colab: 'https://www.google.com/search?q=colab'
        }
      ]
    },
    {
      colors: ['green', 'blue'],
      icon: lockIcon,
      title: 'Secure',
      description:
        'OpenMined is building tools that allow models to be trained within insecure, distributed environments such as end user devices. We aim to support two methods of secure computation: multi-party computation and homomorphic encryption.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'Secure',
          heading: 'Multi-party Computation',
          content:
            'When a model has multiple owners, multi-party computation allows for individuals to share control of a model without seeing its contents such that no sole owner can use or train it.'
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'Secure',
          heading: 'Homomorphic Encryption',
          content:
            'When a model has a single owner, homomorphic encryption allows an owner to encrypt their model so that untrusted 3rd parties can train or use the model without being able to steal it.'
          // colab: 'https://www.google.com/search?q=colab'
        }
      ]
    },
    {
      colors: ['blue', 'black'],
      icon: nodesIcon,
      title: 'Governance',
      description:
        'The OpenMined ecosystem allows for various systems of shared ownership, allowing variable control structures to be designed by model owners according to their own preferences. We allow for two systems of governance: consensus and threshold governance.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'Goverance',
          heading: 'Concensus Governance',
          content:
            'The default governance structure is one in which a group of data or model owners must all agree to perform training or inference in order for it to occur.'
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'Goverance',
          heading: 'Threshold Governance',
          content:
            'An alternative governance structure is one in which a minimum threshold of data or model owners must agree to perform training or inference in order for it to occur.'
          // colab: 'https://www.google.com/search?q=colab'
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
    cta: buttons.contribute,
    news: {
      blog: {
        name: 'OpenMined Blog',
        more: 'https://blog.openmined.org',
        mailchimp: 'http://eepurl.com/cW1Fqj',
        posts: []
      },
      digs: {
        name: 'Weekly Digs',
        more: 'https://digs.openmined.org',
        mailchimp: 'http://eepurl.com/dvKtij',
        posts: []
      }
    }
  },
  movement: {
    title: 'Join the Movement',
    ctas: [
      {
        ...buttons.contribute,
        count: 0
      },
      {
        ...buttons.chat,
        count: 0
      },
      {
        ...buttons.donate
      },
      {
        ...buttons.newsletter
      }
    ]
  },
  footer: {
    links: [
      {
        text: 'Blog',
        link: 'https://blog.openmined.org'
      },
      {
        text: 'Weekly Digs',
        link: 'https://digs.openmined.org'
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
