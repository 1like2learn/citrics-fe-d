import React, { useState } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../../state/actions';

//COMPONENTS
import MultipleCityCard from '../../common/MultipleCityCard';
import Footer from '../../common/Footer';

export default function MultipleCityPage() {
  const [selectedCities, setSelectedCities] = useState();
  return (
    <div className="multiple-city-page-container">
      {/* <Header/> */}
      <div className="multiple-city-page-chart-container">
        <div className="multiple-city-page-chart-menu">
          <button>Population Trend</button>
          <button>Apartment Prices</button>
          <button>Unemployment Rate</button>
        </div>
        {/* {chartGoesHere} */}
      </div>
      <div className="multiple-city-page-selected-container">
        {selectedCities.map(city => {
          return <MultipleCityCard city={city} selectCity={setSelectedCities} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
