import React from 'react';
import RepoIcon from '../../../../components/repo-icon';
import { KeyframeStyles, DotsTrack } from '../../../../components/svg-dots';

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

const Nodes = ({ current, type, name, icon, num, children }) => (
  <ul className="nodes">
    {[...Array(num)].map((e, index) => {
      const classes = `${name} ${current.nodes[name]}`;
      const node = <Node icon={icon} classes={classes} key={index} />;

      if (children) {
        return nodeWithChildren(node, classes);
      }

      return node;
    })}
  </ul>
);

const Dots = ({ current, shouldShow, num }) => (
  <div className={`dots ${shouldShow ? 'visible' : 'hidden'}`}>
    {[...Array(num)].map((e, index) => {
      if (shouldShow) {
        return (
          <DotsTrack
            colors={current.dots.colors}
            // The below animation class is determined by <KeyframeStyles />
            animation={`move-dots-horizontal-${current.dots.direction}`}
            direction="horizontal"
            speed={1000}
            key={index}
          />
        );
      }

      return false;
    })}
  </div>
);

const Graph = ({ data, sections, current }) => (
  <div className="graph">
    <KeyframeStyles axis="horizontal" direction="forwards" />
    <KeyframeStyles axis="horizontal" direction="backwards" />
    {sections.map((section, index) => {
      const currentStep = data[current];

      if (section.type === 'nodes') {
        return <Nodes current={currentStep} {...section} key={index} />;
      } else if (section.type === 'dots') {
        return (
          <Dots
            current={currentStep}
            shouldShow={currentStep.dots.zone === index}
            {...section}
            key={index}
          />
        );
      }

      return false;
    })}
  </div>
);

export default Graph;
