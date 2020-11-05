import React from 'react';

import logic from './logic.js';
import logo from '../../../styles/images/logo.png';
// import Header from '../../common/header';

logic();

export default () => (
  <div class="landingPage">
    <div class="headerComponent">Header Component</div>
    <div>
      <img src={logo} alt="Citrics Logo"></img>
      <h1>Citrics</h1>
      <p>A Nomad's Guide to the City</p>
    </div>
  </div>
);
