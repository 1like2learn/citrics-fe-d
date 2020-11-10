import React from 'react';
import styled from 'styled-components';
import {
  FaRegPlusSquare,
  FaCity,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaArrowCircleDown,
  FaArrowCircleUp,
} from 'react-icons/fa';
import {
  RiBankFill,
  RiBuilding4Line,
  RiContrastDrop2Line,
  RiDropLine,
  RiGiftLine,
  RiHome4Line,
  RiMoneyDollarBoxLine,
  RiSurgicalMaskLine,
  RiTimerLine,
  RiHospitalLine,
} from 'react-icons/ri';

const CityDetailsContainer = styled.aside`
  .population {
    border: 2px solid yellow;
    padding: 0;
    span {
      font-family: 'Roboto';
      font-size: 0.75rem;
      font-weight: 800;
    }
    .population-count-div {
      display: flex;
      align-items: flex-start;
      align-self: center;
      justify-content: flex-start;
      border: 2px solid blue;
      .population-icon {
        color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.4rem;
        border: 2px solid red;
      }
      .population-count {
        display: flex;
        height: 2.25rem;
        align-items: center;
        font-family: 'Roboto';
        font-size: 2.25rem;
        font-weight: 800;
        border: 2px solid green;
        padding: 0;
      }
    }
  }
`;

export default function CityDetails(props) {
  const { city } = props;
  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <CityDetailsContainer>
      <div className="population">
        <span>Current Population</span> &nbsp;{' '}
        <div className="population-count-div">
          <span className="population-icon">
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
          <h4 className="population-count">{formatNumber(city.population)} </h4>
        </div>
      </div>

      <h4 className="infographic">
        {city.averagetemp > 40 ? (
          <FaTemperatureHigh size="30px" />
        ) : (
          <FaTemperatureLow size="30px" />
        )}
        &nbsp; <strong>Avg Temp:</strong> &nbsp; {city.averagetemp.toFixed(1)}
        &deg;
      </h4>

      <h4 className="infographic">
        {city.averageperc > 4 ? (
          <RiContrastDrop2Line size="30px" />
        ) : (
          <RiDropLine size="30px" />
        )}
        &nbsp; <strong>Avg Prec.:</strong> &nbsp; {city.averageperc.toFixed(1)}
      </h4>

      <h4 className="infographic">
        {city.costoflivingindex > 100 ? (
          <FaArrowCircleUp size="30px" />
        ) : (
          <FaArrowCircleDown size="30px" />
        )}
        &nbsp; <strong>CLI:</strong> &nbsp; {city.costoflivingindex}%
      </h4>

      <h4 className="infographic">
        <RiTimerLine size="30px" />
        &nbsp; <strong>TZ:</strong> &nbsp; {city.timezone}
      </h4>

      <h4 className="infographic">
        <RiGiftLine size="30px" /> &nbsp; <strong>Avg Age:</strong> &nbsp;
        {Math.round(city.averageage)}
      </h4>

      <h4 className="infographic">
        {' '}
        <RiMoneyDollarBoxLine size="30px" /> &nbsp; <strong>Avg. Rent:</strong>{' '}
        &nbsp; ${formatNumber(city.rent)}{' '}
      </h4>
      <h4 className="infographic">
        {' '}
        <RiBankFill size="30px" /> &nbsp; <strong>Avg House Price:</strong>{' '}
        &nbsp; ${formatNumber(Math.round(city.averagehouse))}{' '}
      </h4>

      {city.avgnewcovidcases > 0 ? (
        <h4 className="infographic">
          <RiSurgicalMaskLine size="30px" /> &nbsp;{' '}
          <strong>Avg Covid Cases:</strong>{' '}
          {formatNumber(Math.round(city.avgnewcovidcases))}/month
        </h4>
      ) : null}
    </CityDetailsContainer>
  );
}
