import React from 'react';
import {
  FaCity,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaMoneyBillWave,
  FaMedkit,
} from 'react-icons/fa';
import {
  RiBankFill,
  RiBuilding4Line,
  RiContrastDrop2Line,
  RiDropLine,
  RiGiftLine,
  RiHome4Line,
  RiMoneyDollarBoxLine,
  RiTimerLine,
  RiFahrenheitLine,
} from 'react-icons/ri';
import CityDetailsContainer from './style';

export default function SingleCityDetails(props) {
  const { city } = props;
  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <CityDetailsContainer>
      <div className="section1">
        {/* Current Population */}
        <div className="info-div">
          <span>Current Population</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.population > 500000 ? (
                <FaCity size="inherit" />
              ) : (
                <span>
                  {city.population > 100000 ? (
                    <RiBuilding4Line size="inherit" />
                  ) : (
                    <RiHome4Line size="inherit" />
                  )}
                </span>
              )}
            </span>
            <h4 className="count">{formatNumber(city.population)} </h4>
          </div>
        </div>

        {/* Average Age */}
        <div className="info-div">
          <span>Average Age</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiGiftLine size="1rem" />
            </span>
            <h4 className="count"> {Math.round(city.averageage)} </h4>
          </div>
        </div>

        {/* Average Temperature */}
        <div className="info-div">
          <span>Average Temperature</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.averagetemp > 40 ? (
                <FaTemperatureHigh size="1rem" />
              ) : (
                <FaTemperatureLow size="1rem" />
              )}
            </span>
            <h4 className="count">
              {city.averagetemp.toFixed(1)}{' '}
              <span className="fahrenheit">
                <RiFahrenheitLine />
              </span>{' '}
            </h4>
          </div>
        </div>

        {/* Average Precipitation */}
        <div className="info-div">
          <span>Average Precipitation</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.averageperc > 4 ? (
                <RiContrastDrop2Line size="1rem" />
              ) : (
                <RiDropLine size="1rem" />
              )}
            </span>
            <h4 className="count">
              {' '}
              {city.averageperc.toFixed(1)} <span className="inch">in.</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="section2">
        {/* Avg. Rental Price for 1 bedroom */}
        <div className="info-div">
          <span>Avg. Rental Price for 1 bedroom</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiMoneyDollarBoxLine size="1rem" />
            </span>
            <h4 className="count"> ${formatNumber(city.rent)} </h4>
          </div>
        </div>

        {/* Average House Price */}
        <div className="info-div">
          <span>Average House Price</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiBankFill size="1rem" />
            </span>
            <h4 className="count">
              {' '}
              ${formatNumber(Math.round(city.averagehouse))}{' '}
            </h4>
          </div>
        </div>

        {/* Average Annual Salary */}
        <div className="info-div">
          <span>Average Annual Salary</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <FaMoneyBillWave size="1rem" />
            </span>
            <h4 className="count">
              {' '}
              ${formatNumber(Math.round(city.householdincome))}{' '}
            </h4>
          </div>
        </div>
      </div>

      <div className="section3">
        {/* Cost of Living Index (CLI) */}
        <div className="info-div">
          <span>Cost of Living Index (CLI)</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              {city.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="1rem" />
              ) : (
                <FaArrowCircleDown size="1rem" />
              )}
            </span>
            <h4 className="count"> {city.costoflivingindex}% </h4>
          </div>
        </div>

        {/* Affordable Care Act (ACA) */}
        <div className="info-div">
          <span>Affordable Care Act (ACA)</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <FaMedkit size="1rem" />
            </span>
            <h4 className="count"> {city.acastatus} </h4>
          </div>
        </div>

        {/* Timezone */}
        <div className="info-div">
          <span>Timezone</span> &nbsp;{' '}
          <div className="count-div">
            <span className="icon">
              <RiTimerLine size="1rem" />
            </span>
            <h4 className="count"> {city.timezone} </h4>
          </div>
        </div>
      </div>
    </CityDetailsContainer>
  );
}
