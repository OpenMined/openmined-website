import React from 'react';

import logo from '../../../assets/logo-square-color.svg';

const Loading = ({ isLoading }) => (
  <div id="loading" className={!isLoading ? 'not-showing' : ''}>
    <img src={logo} className="logo" alt="OpenMined" />
  </div>
);

export default Loading;
