import React from 'react';

import logic from './logic.js';
import logo from '../../../assets/citricsIcon.svg';
import heroImage from './heroImage.png';
import LandingPageDiv from './style';
import { LandingHeader } from '../../common/Header';

logic();

export default function LandingPage() {
  return (
    <LandingPageDiv style={{ backgroundImage: `url(${heroImage})` }}>
      <LandingHeader />
      <div className="landingPageCont">
        <img src={logo} alt="Citrics Logo" className="landing-page-logo"></img>
        <h1 className="landing-page-h1">CITRICS</h1>
        <p className="landing-page-p">A NOMAD'S GUIDE TO THE CITY </p>
      </div>
    </LandingPageDiv>
  );
}
