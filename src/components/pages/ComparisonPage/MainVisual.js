import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './assets/Citrics Icon.svg';
import {
  FaSearchengin,
  FaUserCircle,
  FaRegPlusSquare,
  FaCity,
  FaTemperatureHigh,
  FaTemperatureLow,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchCities } from '../store/actions/searchBarActions';
import { Bar, Line } from 'react-chartjs-2';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;

  .h3 {
    margin: 2% auto 0;
    font-size: 1.75rem;
    font-family: 'Montserrat', sans-serif;
  }

  .split {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .float {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1%;
    font-size: 2.5rem;
    text-align: center;

    div {
      display: flex;
      text-align: center;
      position: relative;
      justify-content: center;
      left: -27.5px;
      font-size: 1rem;
      background-color: #d35540;
      width: 100px;
      border-radius: 30px;
      color: #ffffff;
    }
  }

  .info {
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin: 1% auto;
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
    margin-left: 2%;
    height: 50vh;
    width: 40vw;
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .infographic {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 2%;
  }
`;

/*
This is hard coded city data for Tampa, FL to test the graphs with.
*/

const c1 = {
  cityid: 393192,
  citynamestate: 'Tampa, Florida',
  statecode: 'FL',
  timezone: 'UTC−5 Eastern',
  latitude: 27.9477595,
  logitude: -82.458444,
  fpis: '12-71000',
  gnis: null,
  wikiimgurl:
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/TampaCollection1.png',
  website: 'www.tampagov.net',
  population: 385430.0,
  densitymisq: 3505.68,
  densitykmsq: 1353.55,
  averageage: 36.6,
  householdincome: 50489.0,
  individualincome: 34278.0,
  averagehouse: 233800.0,
  rent: 1082.0,
  costoflivingindex: 95.8,
  acastatus: 'Not Adopted',
  averagetemp: 74.91666666666667,
  averageperc: 4.965833333333333,
  avgnewcovidcases: 13765.445283018867,
  avgMoney: [
    {
      year: 2010,
      individualincome: 28922,
      householdincome: 44409,
    },
    {
      year: 2011,
      individualincome: 28348,
      householdincome: 44299,
    },
    {
      year: 2012,
      individualincome: 29072,
      householdincome: 45040,
    },
    {
      year: 2013,
      individualincome: 29772,
      householdincome: 46036,
    },
    {
      year: 2014,
      individualincome: 30563,
      householdincome: 47463,
    },
    {
      year: 2015,
      individualincome: 31445,
      householdincome: 49426,
    },
    {
      year: 2016,
      individualincome: 32389,
      householdincome: 50860,
    },
    {
      year: 2017,
      individualincome: 33962,
      householdincome: 52594,
    },
    {
      year: 2018,
      individualincome: 34769,
      householdincome: 55462,
    },
    {
      year: 2019,
      individualincome: 37292,
      householdincome: 59227,
    },
  ],
};

export const MainVisual = () => {
  const cityOne = useSelector(state => state.cityOne);
  const cityTwo = useSelector(state => state.cityTwo);

  const household = c1.avgMoney.map(c => {
    return c.householdincome;
  });

  const individual = c1.avgMoney.map(c => {
    return c.individualincome;
  });

  const labels = c1.avgMoney.map(c => {
    return c.year;
  });

  const state = {
    labels: labels,
    datasets: [
      {
        label: 'Individual Income',
        backgroundColor: 'rgba(211, 85, 64, .7)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: individual,
      },
      {
        label: 'Household Income',
        backgroundColor: 'rgba(211, 85, 64, .7)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household,
      },
    ],
  };

  return (
    <>
      <Container>
        <div className="split">
          <article className="graph">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Individual & Household Income',
                  fontSize: 16,
                },
                maintainAspectRatio: false,
                animation: {
                  duration: '1500',
                  easing: 'linear',
                },
                legend: {
                  display: true,
                  position: 'bottom',
                },
              }}
            />
          </article>

          <h3 className="h3">Quick Facts:</h3>

          <aside className="info">
            <h4 className="infographic">
              <FaCity size="30px" /> &nbsp; Population Total: &nbsp;{' '}
              {c1.population}{' '}
            </h4>

            <h4 className="infographic">
              {c1.averagetemp > 40 ? (
                <FaTemperatureHigh size="30px" />
              ) : (
                <FaTemperatureLow size="30px" />
              )}
              &nbsp; Average Yearly Temperature: {c1.averagetemp.toFixed(1)}
              &deg;
            </h4>

            <div>
              <ul>
                <li>Cost of Living Index: {c1.costoflivingindex}%</li>
                <li>Average Montly Rent Cost: ${c1.rent} </li>
                <li>Average House Cost: ${Math.round(c1.averagehouse)} </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="float">
          vs.
          <br />
          <br />
          <div>
            <p>COMPARE</p>
          </div>
        </div>

        <div className="split"></div>
      </Container>

      <Container>
        <div className="split">
          {cityOne ? (
            <div>
              {/* 
                                <img src={cityOne.img} alt={cityOne.imagAlt} size='????'>
                                <div>
                                    <Graph
                                        cityOne.details.map(dets => {
                                            return (
                                                <line src={} />
                                                <line src={} />
                                            )
                                        })
                                    />
                                </div>
                                <div>
                                        <Details 
                                            <h3></h3>
                                            <h3></h3>
                                            <h3></h3>
                                        />
                                </div>  
                                */}
            </div>
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
          {cityTwo ? (
            <div>
              {/* 
                                <img src={cityTwo.img} alt={cityTwo.imagAlt} size='????'>
                                <div>
                                    <Graph
                                        cityTwo.details.map(dets => {
                                            return (
                                                <line src={} />
                                                <line src={} />
                                            )
                                        })
                                    />
                                </div>
                                <div>
                                        <Details 
                                            <h3></h3>
                                            <h3></h3>
                                            <h3></h3>
                                        />
                                </div>  
                                */}
            </div>
          ) : (
            <div className="icons">
              <FaRegPlusSquare size="50px" />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
