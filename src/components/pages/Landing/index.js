import React from 'react';

import logic from './logic.js';
import logo from './logo.png';
// import Header from '../../common/header';

logic();

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="headerComponent">Header Component</div>
      <div>
        <img src={logo} alt="Citrics Logo"></img>
        <h1>Citrics</h1>
        <p>A Nomad's Guide to the City</p>
      </div>
    </div>
  );
}
