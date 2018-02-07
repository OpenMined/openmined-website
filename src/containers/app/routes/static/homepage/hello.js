import React from 'react';
import { frontloadConnect } from 'react-frontload';

const frontload = props => props.changeSomething('cereallarceny');

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: true
};

const Hello = props => {
  console.log(
    new Date()
      .getTime()
      .toString()
      .substr(8),
    'Render props',
    props
  );

  return <div>{props.something}'s profile</div>;
};

export default frontloadConnect(frontload, options)(Hello);
