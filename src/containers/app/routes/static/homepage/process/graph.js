import React from 'react';
import RepoIcon from '../../../../components/repo-icon';

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
