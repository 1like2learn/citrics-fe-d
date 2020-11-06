import React from 'react';
import CloseButton from './CloseButton';

export default function MultipleCityCard() {
  return (
    <div className="multiple-city-card-container">
      <img src="#" alt="city" />
      <div>
        <div>
          <div className="city-card-color"></div>
          <div className="city-card-cityName">
            {CloseButton}
            {/* {cityName} */}
          </div>
        </div>
        <div className="city-card-cityDetails">{/* {cityDetails} */}</div>
      </div>
    </div>
  );
}
