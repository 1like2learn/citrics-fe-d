import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegPlusSquare } from 'react-icons/fa';
import { Header } from '../ComparisonPage/Header';
import { DescriptionSection } from '../ComparisonPage/DecriptionSection';

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
  /* end of new styling */
  .h3 {
    margin: 2% auto 0;
    font-size: 1.75rem;
    font-family: 'Montserrat', sans-serif;
  }

  .split {
    flex-direction: column;
    display: flex;
    margin: 1% auto;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 100%;
    */ h2 {
      font-family: 'Norwester', sans-serif;
      font-size: 2.25rem;
    }
  }

  .float {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1%;
    font-size: 2.5rem;
    text-align: center;
    align-items: center;
    color: #000000;
    margin: 15% 0;

    div {
      display: flex;
      text-align: center;
      position: relative;
      justify-content: center;
      font-size: 1.1rem;
      background-color: #d35540;
      width: 100px;
      border-radius: 30px;
      color: #ffffff;

      p {
        margin: auto;
      }
    }
  }
  */ .info {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 1%;
    justify-content: center;
  }

  .icons {
    margin: 45%;
    border-radius: 10px;
    background-color: #c4c4c4;
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .graph {
    height: 35vh;
    width: 40vw;
    text-align: center;
    display: flex;
    font-size: 5rem;
  }
`;

export const CitySelect = () => {
  const cityOne = useState('');
  const cityTwo = useState('');

  return (
    <>
      <Header />
      <Container>
        <div className="split">
          {!cityOne ? (
            <div></div>
          ) : (
            <div className="icons">
              <FaRegPlusSquare size="50px" />
            </div>
          )}
        </div>

        <div className="float">
          vs.
          <br />
          <br />
          <div>
            <p>COMPARE</p>
          </div>
        </div>

        <div className="split">
          {!cityTwo ? (
            <div></div>
          ) : (
            <div className="icons">
              <FaRegPlusSquare size="50px" />
            </div>
          )}
        </div>
      </Container>
      <DescriptionSection />
    </>
  );
};
