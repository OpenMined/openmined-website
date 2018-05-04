import React from 'react';
import RepoIcon from '../../../../components/repo-icon';

// const getGraphDisabledClasses = (current, classes) => {
//   classes = classes.split(' ');
//
//   switch (current) {
//     case 'Create':
//       if (~classes.indexOf('second') || ~classes.indexOf('mines')) {
//         classes.push('disabled');
//       }
//       break;
//
//     case 'Distribute':
//       if (
//         ~classes.indexOf('data-scientists') ||
//         ~classes.indexOf('first') ||
//         ~classes.indexOf('second') ||
//         ~classes.indexOf('mines')
//       ) {
//         classes.push('disabled');
//       }
//       if (~classes.indexOf('sonar')) {
//         classes.push('distributing');
//       }
//       break;
//
//     case 'Train':
//       if (~classes.indexOf('data-scientists') || ~classes.indexOf('first')) {
//         classes.push('disabled');
//       }
//       if (~classes.indexOf('sonar')) {
//         classes.push('distributed');
//       }
//       break;
//
//     case 'Reward':
//       if (~classes.indexOf('data-scientists') || ~classes.indexOf('first')) {
//         classes.push('disabled');
//       }
//       if (~classes.indexOf('sonar')) {
//         classes.push('distributed');
//       }
//       if (~classes.indexOf('second')) {
//         classes.push('rewarded');
//       }
//       if (~classes.indexOf('mines')) {
//         classes.push('money');
//       }
//       break;
//
//     case 'Deliver':
//       if (~classes.indexOf('data-scientists')) {
//         classes.push('finished');
//       }
//       if (~classes.indexOf('second') || ~classes.indexOf('mines')) {
//         classes.push('disabled');
//       }
//       if (~classes.indexOf('first')) {
//         classes.push('returned');
//       }
//       if (~classes.indexOf('sonar')) {
//         classes.push('distributed');
//       }
//       break;
//
//     default:
//       break;
//   }
//
//   return classes.join(' ');
// };
//
// const Graph = ({ current }) => (
//   <div className={'graph ' + current}>
//     <ul className={getGraphDisabledClasses(current, 'items data-scientists')}>
//       <li className="item data-scientist">
//         <RepoIcon repo="openmined" />
//       </li>
//     </ul>
//     <ul className={getGraphDisabledClasses(current, 'lines first')}>
//       <li className="line" />
//     </ul>
//     <ul className={getGraphDisabledClasses(current, 'items sonar')}>
//       <li className="item small" />
//       <li className="item big" />
//       <li className="item sonar">
//         <RepoIcon repo="sonar" />
//       </li>
//       <li className="item big" />
//       <li className="item small" />
//     </ul>
//     <ul className={getGraphDisabledClasses(current, 'lines second')}>
//       <li className="line" />
//       <li className="line" />
//       <li className="line" />
//     </ul>
//     <ul className={getGraphDisabledClasses(current, 'items mines')}>
//       <li className="item mine">
//         <RepoIcon repo="mine" />
//       </li>
//       <li className="item mine">
//         <RepoIcon repo="mine" />
//       </li>
//       <li className="item mine">
//         <RepoIcon repo="mine" />
//       </li>
//     </ul>
//     <svg width="0" height="0">
//       <defs>
//         <clipPath id="circles-clip">
//           <circle cx="10" cy="10" r="6" />
//           <circle cx="40" cy="10" r="6" />
//           <circle cx="70" cy="10" r="6" />
//           <circle cx="100" cy="10" r="6" />
//           <circle cx="130" cy="10" r="6" />
//           <circle cx="160" cy="10" r="6" />
//           <circle cx="190" cy="10" r="6" />
//           <circle cx="220" cy="10" r="6" />
//         </clipPath>
//       </defs>
//     </svg>
//   </div>
// );

const COLORS = {
  white: '#fff',
  yellow: '#ff0',
  red: '#f00',
  green: '#0f0'
};

const SECTIONS = [
  {
    name: 'scientist',
    icon: 'openmined',
    num: 1
  },
  {
    name: 'grid',
    icon: 'grid',
    num: 1,
    children: true
  },
  {
    name: 'mines',
    icon: 'mine',
    num: 3
  }
];

const STEPS = {
  create: {
    nodes: {
      scientist: 'active',
      grid: 'active',
      mines: 'inactive'
    },
    dots: {
      zone: [0, 1],
      direction: 'forwards',
      colors: [COLORS.white, COLORS.yellow]
    }
  },
  distribute: {
    nodes: {
      scientist: 'inactive',
      grid: 'active blinking',
      mines: 'inactive'
    }
  },
  train: {
    nodes: {
      scientist: 'inactive',
      grid: 'active still',
      mines: 'active red'
    },
    dots: {
      zone: [1, 2],
      direction: 'forwards',
      colors: [COLORS.yellow, COLORS.red]
    }
  },
  reward: {
    nodes: {
      scientist: 'inactive',
      grid: 'active still',
      mines: 'active green'
    },
    dots: {
      zone: [1, 2],
      direction: 'backwards',
      colors: [COLORS.yellow, COLORS.green]
    }
  },
  deliver: {
    nodes: {
      scientist: 'active finished',
      grid: 'active still',
      mines: 'inactive green'
    },
    dots: {
      zone: [0, 1],
      direction: 'backwards',
      colors: [COLORS.green, COLORS.yellow]
    }
  }
};

const nodeWithChildren = (node, classes) => {
  const genChild = size => (
    <li className={`node has-children ${size} ${classes}`} />
  );

  return [
    genChild('small'),
    genChild('big'),
    node,
    genChild('big'),
    genChild('small')
  ];
};

const Node = ({ icon, classes }) => (
  <li className={`node icon ${classes}`}>
    <RepoIcon repo={icon} />
  </li>
);

const Graph = ({ current }) => (
  <div className={`graph ${current.toLowerCase()}`}>
    {SECTIONS.map(({ name, icon, num, children }, index) => (
      <ul className="section" key={index}>
        {[...Array(num)].map((e, index) => {
          const classes = `${name} ${STEPS[current.toLowerCase()].nodes[name]}`;
          const node = <Node icon={icon} classes={classes} key={index} />;

          if (children) {
            return nodeWithChildren(node, classes);
          }

          return node;
        })}
      </ul>
    ))}
  </div>
);

export default Graph;
