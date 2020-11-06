import React, { useState } from 'react';

import MultipleCityCard from '../../common/MultipleCityCard';

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
      {/* <Footer/> */}
    </div>
  );
}
