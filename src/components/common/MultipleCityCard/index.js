import React from 'react';
import CloseButton from '../CloseButton';

export default function MultipleCityCard(props) {
  const { city } = props;
  return (
    <div className="multiple-city-card-container">
      <img src={city.wikiimgurl} alt={city.citynamestate} />
      <div>
        <div>
          <div className="city-card-color"></div>
          <div className="city-card-cityName">
            {CloseButton}
            {city.citynamestate}
          </div>
        </div>
        <div className="city-card-cityDetails">{props.cityDetails}</div>
      </div>
    </div>
  );
}
