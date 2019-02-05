import React from 'react';
import cn from 'classnames';
import background from '../../assets/background-gradient.svg';
import './background-gradient.scss';

const BackgroundGradient = ({ className }) => {
  const classes = cn('background-gradient', className);

  return (
    <div
      className={classes}
      style={{ backgroundImage: `url(${background})` }}
    />
  );
};

export default BackgroundGradient;
