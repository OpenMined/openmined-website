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
    text: 'Learn',
    icon: paperIcon,
    link: 'https://courses.openmined.org',
  },
  joinTheCommunity: {
    type: 'Community',
    text: 'Join the Community',
    icon: getStartedIcon,
    link: 'https://slack.openmined.org',
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
    tagline: "A world where every good question is answered",
    description:
      'We’re on a mission to help each member of society to answer their most important questions by empowering them to learn from data owned and governed by others.',
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
    video: 'https://www.youtube-nocookie.com/embed/-b0CQFr6xyA',
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
      {
        text:
          'Everyone has questions they want to answer, and society constructs flows of information to help the right information reach the right people who need it while preventing information from flowing to those who might mis-use it. We call this goal Structured Transparency. However, this process is broken in several key ways. Chief among them is the requirement that someone must acquire a copy of a piece of data in order to learn insights from it. This creates tradeoffs between the benefits of sharing information with someone (innovation, insights, scientific discovery, increased accountability, etc.), and the risks that they might mis-use it (privacy invasion, IP theft, blackmail, etc.). These tradeoffs mean that sometimes good things don’t happen because information can’t be shared, and other times, bad things happen because too much information must be shared for some overriding reason.',
      },
      {
        text:
          'We are building software that alleviates this core problem by making it possible for one person to answer a question using data owned by another, without ever seeing or acquiring a copy of that data.',
        strong: true,
      },
      {
        text:
          'We call this process Remote Data Science. The advent of remote data science means that, in a huge variety of domains across society, current tradeoffs between sharing data and protecting that data will be broken. Researchers will make medical advances without patients disclosing medical information. Citizens will provide feedback to governments without disclosing their individual preferences. Products will improve based on private data of customers without customers needing to disclose information about their lives to corporations. It means 1000x more data in every scientific field. It means organizations will be made accountable for actions performed in private without needing to disclose IP, trade secrets, or private data. It means more information flows that help society, and less information flows that hurt society, and we’re very excited about it.',
      },
      {text: 'We are a charity that is fiscally hosted by the Open Collective Foundation 501(c)(3), and to accomplish our ambitious mission, we have three programs:',
      },
    ],
  },
  pillars: [
    {
      colors: ['yellow', 'green'],
      icon: nodesIcon,
      title: 'OUR BUILD PROGRAM',
      description:
        'At the core of OpenMined is the free, open source software we build which makes it all possible. With contributions from over 350 people over the last 4+ years, our flagship library is called PySyft, which is supported by subsystems and command line tools such as PyGrid and HAGrid.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'HOST YOUR DATA FOR STUDY',
          heading: 'PyGrid Server',
          content:
            'PyGrid is a server for private data. It’s like a website server except a web server is designed to host public data for people to download. PyGrid is designed to host private data for people to use to answer questions, but not be able download.',
//           github: 'https://github.com/OpenMined/PySyft/tree/dev/packages/grid'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'STUDY DATA REMOTELY',
          heading: 'PySyft Library',
          content:
            'If you want to perform data science on data hosted in someone else’s PyGrid server, PySyft is the NumPy-based library you use to do it.',
//           github: 'https://github.com/OpenMined/PySyft'
        },
      ],
    },
    {
      colors: ['green', 'blue'],
      icon: lockIcon,
      title: 'OUR EDUCATE PROGRAM',
      description:
        'Remote Data Science is a brand new field of study, and this means that a critical part of our mission is educating data owners on how to host their data and data scientists on how to use PySyft to study it. We have 3 courses so far. Two of them are:',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'TECHNICAL COURSE',
          heading: 'Remote Data Science',
          content:
            'If you want to jump straight into the technology and learn how to host your data in a PyGrid server so that others can do data science on it, this course is for you. Perfect for data scientists, statisticians, engineers, and researchers.',
//           local: 'https://courses.openmined.org/courses/introduction-to-remote-data-science'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'NON-TECHNICAL COURSE',
          heading: 'OUR PRIVACY OPPORTUNITY',
          content:
            'If you want to spend a day learning about all the ways in which the public, private, and civil sectors will innovate using remote data science, this course is for you. Perfect for entrepreneurs, investors, and policymakers.',
//           local: 'https://courses.openmined.org/courses/our-privacy-opportunity'
        },
      ],
    },
    {
      colors: ['blue', 'black'],
      icon: computerIcon,
      title: 'OUR IMPACT PROGRAM',
      description:
        'New technology needs to be demonstrated. Our impact program partners with public, private, and civil society organizations looking to pilot our software in novel use cases.',
      cards: [
        {
          // link: 'https://www.google.com',
          subtitle: 'PUBLIC SECTOR',
          heading: 'The UN PET Lab',
          content:
            'We’ve been working with the UN PET Lab to pilot PySyft and PyGrid on the UN Global Platform, forming a Federated Data Network across 5 participating national statistics offices.',
          // colab: 'https://www.google.com/search?q=colab'
        },
        {
          // link: 'https://www.google.com',
          subtitle: 'COMMUNITY',
          heading: 'PriCon 2020',
          content:
            'In 2020, we hosted a conference bringing together privacy experts from all around the world!',
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
