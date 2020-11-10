import React from 'react';

import logic from './logic.js';
import logo from './logo.png';
import heroImage from './heroImage.png';
import LandingPageDiv from './style';
import { LandingHeader } from '../../common/Header';

logic();

export default function LandingPage() {
  return (
    <LandingPageDiv style={{ backgroundImage: `url(${heroImage})` }}>
      <LandingHeader />
      <div className="landingPageCont">
        <img src={logo} alt="Citrics Logo"></img>
        <h1>Citrics</h1>
        <p>A Nomad's Guide to the City</p>
      </div>
    </LandingPageDiv>
  );
}
