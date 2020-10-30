// Hero icons
import getStartedIcon from '../containers/app/assets/icons/get-started.svg';
import paperIcon from '../containers/app/assets/icons/paper.svg';

// Testimonial logos
import tensorFlowImage from '../containers/app/assets/tensorflow.svg';
import pyTorchImage from '../containers/app/assets/pytorch.svg';
import kerasImage from '../containers/app/assets/keras.svg';

// Image button icons
import githubIcon from '../containers/app/assets/icons/github.svg';
import openCollectiveIcon from '../containers/app/assets/icons/open-collective.svg';
import slackIcon from '../containers/app/assets/icons/slack.svg';
import emailIcon from '../containers/app/assets/icons/email.svg';

// Pillar icons
import lockIcon from '../containers/app/assets/icons/lock.svg';
import computerIcon from '../containers/app/assets/icons/computer.svg';
import nodesIcon from '../containers/app/assets/icons/nodes.svg';

// Milestone icons
const doneIcon = {
  icon: 'fa-check',
  color: 'success',
  text: 'Done',
};
const progressIcon = {
  icon: 'fa-refresh',
  color: 'primary',
  text: 'In Progress',
};
const plannedIcon = {
  icon: 'fa-minus',
  color: 'light-gray',
  text: 'Planned',
};

const buttons = {
  // getStarted: {
  //   type: 'Introduction',
  //   text: 'Get Started',
  //   icon: getStartedIcon,
  //   link: 'https://www.udacity.com/course/secure-and-private-ai--ud185',
  // },
  // tutorials: {
  //   type: 'Tutorials',
  //   text: 'View Tutorials',
  //   icon: paperIcon,
  //   link: 'https://github.com/OpenMined/PySyft/tree/master/examples/tutorials',
  // },
  learnPrivateAI: {
    type: 'Introduction',
    text: 'Learn Private AI',
    icon: paperIcon,
    link: 'https://www.udacity.com/course/secure-and-private-ai--ud185',
  },
  joinTheCommunity: {
    type: 'Community',
    text: 'Join the Community',
    icon: getStartedIcon,
    link: 'https://placements.openmined.org',
  },
  contribute: {
    type: 'Github',
    text: 'Start Contributing',
    icon: githubIcon,
    link: 'https://github.com/OpenMined',
  },
  donate: {
    type: 'OpenCollective',
    text: 'Donate',
    icon: openCollectiveIcon,
    link: 'https://opencollective.com/openmined',
  },
  chat: {
    type: 'Slack',
    text: 'Chat on Slack',
    icon: slackIcon,
    link: 'http://slack.openmined.org',
  },
  newsletter: {
    type: 'Mailchimp',
    text: 'Join Newsletter',
    icon: emailIcon,
    link: 'http://eepurl.com/cW1Fqj',
  },
};

export default {
  hero: {
    // tagline: 'Answer questions using data you cannot see',
    tagline: "Let's Solve Privacy",
    description:
      'OpenMined is an open-source community whose goal is to make the world more privacy-preserving by lowering the barrier-to-entry to private AI technologies.',
    // buttons: [buttons.getStarted, buttons.tutorials],
    buttons: [buttons.learnPrivateAI, buttons.joinTheCommunity],
    // steps: [
    //   {
    //     link: 'https://github.com/OpenMined/PySyft',
    //     subtitle: 'Library',
    //     heading: 'PySyft',
    //     content:
    //       'PySyft is a Python library for secure, private machine learning. PySyft extends PyTorch, Tensorflow, and Keras with capabilities for remote execution, federated learning, differential privacy, homomorphic encryption, and multi-party computation.',
    //     github: 'https://github.com/OpenMined/PySyft',
    //   },
    //   {
    //     link: 'https://github.com/OpenMined/PyGrid/',
    //     subtitle: 'Platform',
    //     heading: 'PyGrid',
    //     content:
    //       'PyGrid is a platform for private AI using PySyft, enabling one to privately host models and datasets in the cloud for encrypted, federated prediction and training.',
    //     github: 'https://github.com/OpenMined/PyGrid/',
    //   },
    // ],
    video: 'https://www.youtube-nocookie.com/embed/DppXfA6C8L8',
  },
  testimonials: [
    {
      name: 'TensorFlow',
      link: 'https://www.tensorflow.org/',
      image: tensorFlowImage,
    },
    {
      name: 'PyTorch',
      link: 'https://pytorch.org/',
      image: pyTorchImage,
    },
    {
      name: 'Keras',
      link: 'https://keras.io/',
      image: kerasImage,
    },
  ],
  mission: {
    title: 'Vision & Mission',
    cta: buttons.donate,
    content: [
      // {
      //   text:
      //     'Industry standard workflows for data science have been designed with several assumptions: data is centralized by those who collect it, the data and all its derivations are considered private, and the external use of that data should be tightly controlled or outright rejected.  This leads to a reality where innovation and competitiveness are stifled by intellectual property, against the best interests of humanity.  We envision a world in which we are not restricted to this scenario - a world in which data science tools treat privacy, security, and data integrity as first-class citizens.',
      // },
      // {
      //   text:
      //     'With OpenMined, people and organizations can host private datasets, allowing data scientists to train or query on data they "cannot see".',
      //   strong: true,
      // },
      // {
      //   text:
      //     'The mission of the OpenMined community is to create an accessible ecosystem of privacy tools in the best interests of humanity. We do this by extending popular libraries like PyTorch and TensorFlow with advanced techniques in cryptography and differential privacy.',
      // },
      {
        text:
          'Industry standard tools for artificial intelligence have been designed with several assumptions: data is centralized into a single compute cluster, the cluster exists in a secure cloud, and the resulting models will be owned by a central authority.  We envision a world in which we are not restricted to this scenario - a world in which AI tools treat privacy, security, and multi-owner governance as first class citizens.',
      },
      {
        text:
          'With OpenMined, an AI model can be governed by multiple owners and trained securely on an unseen, distributed dataset.',
        strong: true,
      },
      {
        text:
          'The mission of the OpenMined community is to create an accessible ecosystem of tools for private, secure, multi-owner governed AI. We do this by extending popular libraries like TensorFlow and PyTorch with advanced techniques in cryptography and private machine learning.',
      },
    ],
  },
  pillars: [
    {
      colors: ['yellow', 'green'],
      icon: nodesIcon,
      title: 'Remote Execution',
      description:
        'Privacy-preserving analysis begins with analysis on data you can’t see. Thus, it begins with the ability to run arbitrary computations on data which is inside a machine to which you don’t have access, otherwise known as remote execution. We extend PyTorch and Tensorflow with this ability to run remotely on an unseen machine.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'Remote Execution',
          heading: 'Federated Learning',
          content:
            'Federated learning is a type of remote execution wherein models are sent to remote data-holding machines (such as smart phones or IoT devices) for local training. This eliminates the need to store sensitive training data on a central server.',
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'Remote Execution',
          heading: 'On-device Prediction',
          content:
            'On-device prediction is a special case of remote execution wherein models are used within an application locally instead of moving a dataset to the cloud for classification.',
          // colab: 'https://www.google.com/search?q=colab'
        },
      ],
    },
    {
      colors: ['green', 'blue'],
      icon: lockIcon,
      title: 'Encrypted Computation',
      description:
        'With naive remote execution, you divulge the computations you wish to perform by sending them to the foreign machine. Encrypted computation allows you to keep your computations secret even in a foreign environment you don’t control. We extend PyTorch and Tensorflow with the ability to run in an encrypted state.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'Encrypted Computation',
          heading: 'Multi-party Computation',
          content:
            'When a model has multiple owners, multi-party computation allows for individuals to share control of a model without seeing its contents such that no sole owner can use or train it.',
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'Encrypted Computation',
          heading: 'Homomorphic Encryption',
          content:
            'When a model has a single owner, homomorphic encryption allows an owner to encrypt their model so that untrusted 3rd parties can train or use the model without being able to steal it.',
          // colab: 'https://www.google.com/search?q=colab'
        },
      ],
    },
    {
      colors: ['blue', 'black'],
      icon: computerIcon,
      title: 'Differential Privacy',
      description:
        'Eventually you must request the results of your remote (or encrypted) analysis to be revealed (i.e., statistical results, a trained model, prediction, or synthetic dataset). Differential Privacy helps us answer the question, “If I were to reveal this datapoint, what’s the maximum amount of private information I may leak?” and obfuscate the data appropriately. We extend PyTorch and Tensorflow with the ability to perform differential privacy automatically.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'Differential Privacy',
          heading: 'Published techniques',
          content:
            'We incorporate standard techniques for differentially private ML including PATE, DP-SGD, Moments Accountant, as well as Laplace and Exponential mechanisms.',
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'Differential Privacy',
          heading: 'Automatic DP',
          content:
            'We automatically track what operations you perform and add the appropriate amount of noise. This "autograd for DP" allows you to try out your own non-standard privacy functions to find optimal privacy/utility.',
          // colab: 'https://www.google.com/search?q=colab'
        },
      ],
    },
  ],
  process: {
    title: 'How it Works',
    content: [
      {
        heading: 'Create',
        title: 'Create a model',
        description:
          'A data scientist creates a model using PyTorch, TensorFlow, or Keras, and defines a training configuration (number of epochs, alpha, etc.).',
        repositories: ['PySyft'],
        graph: {
          nodes: {
            scientist: 'active',
            grid: 'active',
            workers: 'inactive',
          },
          dots: {
            zone: 1,
            direction: 'forwards',
            colors: ['white', 'yellow'],
          },
        },
      },
      {
        heading: 'Host',
        title: 'Host a model on PyGrid',
        description:
          'Using PySyft, a data scientist uploads their private model to a secure Grid node in the cloud. It can now be accessed by devices, which download the model for local training.',
        repositories: ['PySyft', 'PyGrid'],
        graph: {
          nodes: {
            scientist: 'inactive',
            grid: 'active blinking',
            workers: 'inactive',
          },
          dots: {},
        },
      },
      {
        heading: 'Train',
        title: 'Users train the model',
        description:
          'In parallel, many different devices update their local models by training on local data. These devices could be a mobile phone (Android or iOS), web browser, IoT device (Raspberry Pi), or another cloud machine.',
        repositories: ['syft.js'],
        graph: {
          nodes: {
            scientist: 'inactive',
            grid: 'active still',
            workers: 'active red',
          },
          dots: {
            zone: 3,
            direction: 'forwards',
            colors: ['yellow', 'red'],
          },
        },
      },
      {
        heading: 'Average',
        title: 'Average the results',
        description:
          'After a certain amount of training, models are averaged into a new global model which privately aggregates intelligence collected by local models.',
        repositories: ['PyGrid'],
        graph: {
          nodes: {
            scientist: 'inactive',
            grid: 'active still',
            workers: 'active green',
          },
          dots: {
            zone: 3,
            direction: 'backwards',
            colors: ['yellow', 'green'],
          },
        },
      },
      {
        heading: 'Deliver',
        title: 'Deliver the results securely',
        description:
          'Once a success criteria is met, the model is delivered back to the model owner. Mission accomplished!',
        repositories: ['PySyft'],
        graph: {
          nodes: {
            scientist: 'active finished',
            grid: 'active still',
            workers: 'inactive green',
          },
          dots: {
            zone: 1,
            direction: 'backwards',
            colors: ['green', 'yellow'],
          },
        },
      },
    ],
    sections: [
      {
        type: 'nodes',
        name: 'scientist',
        icon: 'openmined',
        num: 1,
      },
      {
        type: 'dots',
        num: 1,
      },
      {
        type: 'nodes',
        name: 'grid',
        icon: 'grid',
        num: 1,
        children: true,
      },
      {
        type: 'dots',
        num: 3,
      },
      {
        type: 'nodes',
        name: 'workers',
        icon: 'syft.js',
        num: 3,
      },
    ],
  },
  milestones: {
    title: 'Milestones',
    stages: [doneIcon, progressIcon, plannedIcon],
    milestones: [
      {
        title: 'Encrypted Machine Learning as a Service (EMLaaS)',
        status: progressIcon,
        subtitle:
          'Encrypted machine learning spread across any device or language',
        description:
          'As model owner and a data owner can use their model and data to make a prediction, without the model owner disclosing their model, and without the data owner disclosing their data.',
        features: [
          {
            status: doneIcon,
            text: 'Basic encrypted prediction',
            description:
              'is the ability for two parties to predict on encrypted data using an encrypted model in Python.',
          },
          {
            status: progressIcon,
            text: 'Scalability',
            description:
              'for the encrypted prediction server to serve large numbers of models simultaneously.',
          },
          {
            status: progressIcon,
            text: 'Javascript encrypted prediction',
            description:
              'is the ability for a web browser or Javascript server to make an encrypted prediction using an encrypted model hosted in the cloud.',
          },
          {
            status: progressIcon,
            text: 'Android encrypted prediction',
            description:
              'for an Android smartphone to make an encrypted prediction using an encrypted model hosted in the cloud.',
          },
          {
            status: plannedIcon,
            text: 'iOS encrypted prediction',
            description:
              'for an iOS smartphone to make an encrypted prediction using an encrypted model hosted in the cloud.',
          },
        ],
      },
      {
        title: 'Privacy-Preserving Data Science Platform',
        status: progressIcon,
        subtitle:
          'Privacy-preserved training and prediction in PyTorch, Tensorflow, and Keras',
        description:
          'This allows a data scientist to train AI models on data to which they do not have access, eliminating the need for a data scientist to obtain a copy of a dataset in order to work with it.',
        features: [
          {
            status: doneIcon,
            text: 'Hosting data',
            description:
              'that allows a private data owner to host their data within a secure cloud machine.',
          },
          {
            status: doneIcon,
            text: 'Secure search',
            description:
              'that allows a data scientist to search and filter through private datasets hosted on a secure cloud machine.',
          },
          {
            status: doneIcon,
            text: 'Remote execution',
            description:
              'giving the ability for a data scientist to leverage PyTorch, Tensorflow, and Keras on remote datasets they do not have access to.',
          },
          {
            status: progressIcon,
            text: 'Privacy budgeting',
            description:
              'to automatically track the privacy budget ("epsilon value") spent when doing data science on remote data.',
          },
          {
            status: progressIcon,
            text: 'Data compliance application',
            description:
              'allowing a compliance offer to review all requests for data (including statistical results) and be empowered with metadata necessary to make a correct decision.',
          },
          {
            status: progressIcon,
            text: 'Private NLP library',
            description:
              'is a specialty library empowering remote processing of natural language data.',
          },
          {
            status: plannedIcon,
            text: 'Global authentication server',
            description:
              'for doing joins across multiple data repos owned by different owners, we need a single, secure entity resolution server.',
          },
          {
            status: plannedIcon,
            text: 'Cold storage',
            description:
              'of private data which also allows for private, encrypted queries against secure attributes.',
          },
          {
            status: plannedIcon,
            text: 'Automate synthetic data',
            description:
              'is the ability to request synthetic and example data regarding a remote data resource in a privacy budget-aware way.',
          },
          {
            status: plannedIcon,
            text: 'Scalability',
            description:
              'is the ability for such data servers to scale to thousands of concurrent data scientists.',
          },
        ],
      },
      {
        title: 'Federated Learning',
        status: progressIcon,
        subtitle:
          'Training and prediction on the device where data lives, rather than in the cloud',
        description:
          'This allows an existing smartphone or IoT application to get smarter over time by training on local data and then aggregating smarter models instead of aggregating training datasets.',
        features: [
          {
            status: doneIcon,
            text: 'Basic model hosting',
            description:
              'is the ability to host a model in the cloud which can be downloaded and trained.',
          },
          {
            status: progressIcon,
            text: 'Javascript model hosting',
            description:
              'is the ability to host a model in the cloud for secure training or local training exclusively using a Javascript stack (Node.js).',
          },
          {
            status: progressIcon,
            text: 'Federated learning workflow',
            description:
              'is the ability for a user to specify a federated learning configuration such as # of epochs, learning rate plan, and asynchronous training limits.',
          },
          {
            status: progressIcon,
            text: 'Federated learning Javascript client',
            description:
              'is the ability for a Javascript runtime to download a model from a Grid server, perform local training, and upload a finished result.',
          },
          {
            status: progressIcon,
            text: 'Federated learning Android client',
            description:
              'is the ability for a Kotlin runtime to download a model from a Grid server, perform local training, and upload a finished result.',
          },
          {
            status: plannedIcon,
            text: 'Federated learning iOS client',
            description:
              'is the ability for an Swift runtime to download a model from a Grid server, perform local training, and upload a finished result.',
          },
          {
            status: plannedIcon,
            text: 'Scalability',
            description:
              'is the ability for the federated learning server to scale up to serve tens of thousands of clients simultaneously.',
          },
        ],
      },
    ],
  },
  status: {
    projects: ['PySyft', 'PyGrid', 'syft.js'],
    cta: buttons.contribute,
    news: {
      blog: {
        name: 'OpenMined Blog',
        more: 'https://blog.openmined.org',
        mailchimp: 'http://eepurl.com/cW1Fqj',
        posts: [],
      },
    },
  },
  movement: {
    title: 'Join the Movement',
    ctas: [
      {
        ...buttons.contribute,
        count: 0,
      },
      {
        ...buttons.chat,
        count: 0,
      },
      {
        ...buttons.donate,
      },
      {
        ...buttons.newsletter,
      },
    ],
  },
  footer: {
    links: [
      {
        text: 'Blog',
        link: 'https://blog.openmined.org',
      },
      {
        text: 'Store',
        link: 'https://store.openmined.org',
      },
      {
        text: 'Brand Guide',
        link: '/assets/openmined-brand-guide.pdf',
      },
    ],
    social: [
      {
        title: 'Github',
        link: 'https://github.com/OpenMined',
      },
      {
        title: 'Twitter',
        link: 'https://twitter.com/openminedorg',
      },
      {
        title: 'YouTube',
        link: 'https://www.youtube.com/c/OpenMinedOrg',
      },
      {
        title: 'Facebook',
        link: 'https://www.facebook.com/openminedorg/',
      },
    ],
  },
};
