import React from 'react';
import './grid.scss';

let classLoop = (obj, separator = '-') => {
  let tempClasses = [];

  if (obj) {
    for (let key in obj) {
      tempClasses.push(key + separator + obj[key]);
    }
  }

  return tempClasses.join(' ');
};

export const Container = props => {
  const { full, ...other } = props;

  let classes = props.hasOwnProperty('className')
    ? props.className + ' container'
    : 'container';

  classes += full ? ' full' : '';

  return (
    <div {...other} className={classes}>
      {props.children}
    </div>
  );
};

export const Row = props => {
  const { isReversed, justify, align, ...other } = props;

  let classes = [
    isReversed ? 'row reverse' : 'row',
    classLoop(justify),
    classLoop(align)
  ]
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (props.hasOwnProperty('className')) {
    classes = props.className + ' ' + classes;
  }

  return (
    <div {...other} className={classes}>
      {props.children}
    </div>
  );
};

export const Column = props => {
  const { sizes, offsets, orders, ...other } = props;

  let classes = [
    'column',
    classLoop(sizes),
    classLoop(offsets, '-offset-'),
    classLoop(orders)
  ]
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (props.hasOwnProperty('className')) {
    classes = props.className + ' ' + classes;
  }

  return (
    <div {...other} className={classes}>
      {props.children}
    </div>
  );
};
