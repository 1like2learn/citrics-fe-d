import React from 'react';
import CloseButton from '../CloseButton';

export default function MultipleCityCard(props) {
  return (
    <div className="multiple-city-card-container">
      <img src="#" alt="city" />
      <div>
        <div>
          <div className="city-card-color"></div>
          <div className="city-card-cityName">
            {CloseButton}
            {props.cityName}
          </div>
        </div>
        <div className="city-card-cityDetails">{props.cityDetails}</div>
      </div>
    </div>
  );
}
