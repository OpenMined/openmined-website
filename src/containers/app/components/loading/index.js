import React from 'react';

import './loading.css';

import logo from '../../assets/logo-square-color.png';

const Loading = ({ shouldHideWhen }) => (
  <div id="loading" className={shouldHideWhen ? 'not-showing' : ''}>
    <img src={logo} className="logo" alt="OpenMined" />
  </div>
);

export default Loading;
