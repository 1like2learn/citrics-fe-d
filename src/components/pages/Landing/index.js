import React from 'react';

import logic from './logic.js';
import logo from './logo.png';
import { LandingHeader } from '../../common/Header';

logic();

export default function LandingPage() {
  return (
    <div className="landingPage">
      <LandingHeader />
      <div className="landingPageCont">
        <img src={logo} alt="Citrics Logo"></img>
        <h1>Citrics</h1>
        <p>A Nomad's Guide to the City</p>
      </div>
    </div>
  );
}
