import React from 'react';
import styled from 'styled-components';
import ComparisonCard from './ComparisonCard.js';
import { connect } from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100vw;
  min-width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  align-content: center;
  font-size: 1rem;
  overflow: hidden;
  /* new styling */

  .vs-text {
    /* width: inherit;
      height: inherit; */
    position: absolute;
    font-size: 4rem;
    top: 30%;
    color: #fff;
    background-color: #d3553fcc;
    border-radius: 50%;
    width: 135px;
    height: 135px;
    text-align: center;
    line-height: 120px;
  }

  .compare-city-selected-container {
    display: flex;
    font-family: 'Roboto', sans-serif;
  }
`;

const compare = (a, b) => {
  // Use toUpperCase() to ignore character casing
  const yearA = a.year;
  const yearB = b.year;

  let comparison = 0;
  if (yearA > yearB) {
    comparison = 1;
  } else if (yearA < yearB) {
    comparison = -1;
  }
  return comparison;
};

const MainVisual = props => {
  const { currentCities } = props;

  console.log('currentCities in Main Visuals', currentCities);

  return (
    <Container>
      <p className="vs-text">&nbsp;vs.</p>
      <div className="compare-city-selected-container">
        {currentCities.map(city => {
          return <ComparisonCard city={city} />;
        })}
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    allCities: state.allCities,
    currentCities: state.currentCities,
  };
};

export default connect(mapStateToProps, {})(MainVisual);
