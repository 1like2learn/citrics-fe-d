import React from 'react';
import CloseButton from '../CloseButton';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  img {
    width: 480px;
    height: 450px;
  }
  .city-card-cityDetails-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 4px solid #2e3c48;
    width: 100%;
    .city-card-title-section {
      display: flex;
      justify-content: space-between;
      width: inherit;
      .city-card-cityName {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        font-size: 2.25rem;
        font-family: 'Roboto';
        font-weight: 700;
      }
    }
    .city-card-cityDetails {
      height: 100%;
    }
  }
`;

export default function MultipleCityCard(props) {
  const { city } = props;
  return (
    <CardContainer>
      <img src={city.wikiimgurl} alt={city.citynamestate} />
      <div className="city-card-cityDetails-container">
        <div className="city-card-title-section">
          <div className="city-card-color"></div>
          <div className="city-card-cityName">
            <CloseButton />
            {city.citynamestate}
          </div>
        </div>
        <div className="city-card-cityDetails">
          {' '}
          {/*city details component goes here*/}
        </div>
      </div>
    </CardContainer>
  );
}
