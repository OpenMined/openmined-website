import React from 'react';
import cn from 'classnames';
import './heading.scss';

const Heading = ({
  level = 3,
  className,
  children,
  notCapped,
  ...otherProps
}) => {
  const classes = cn(className, 'heading', { 'not-capped': notCapped });
  const Tag = `h${level}`;

  return (
    <Tag className={classes} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Heading;
