import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

// import logic from './logic.js';
import dummyData from '../../../utils/dummyData';
import SingleCityDetails from '../../common/SingleCityDetails';
import 'mapbox-gl/dist/mapbox-gl.css';
import { CitySearchDiv } from './style';
import SingleCityChart from '../../common/SingleCityChart';
import CitySearchHeader from './CitySearchHeader';
import CityDetails from '../../common/CityDetails';
// import Header from '../../common/header';

export default function CitySearch() {
  const { citynamestate, wikiimgurl, summary, latitude, longitude } = dummyData;

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_BOX_KEY,
  });

  console.log('Access Token from CitySearch', process.env.REACT_APP_MAP_BOX_KEY);
  return (
    <CitySearchDiv>
      <CitySearchHeader />
      <div className="citySearchCont">
        <section
          className="citySearchTextDescription"
          style={{ backgroundImage: `url(${wikiimgurl})` }}
        >
          <div className="citySearchTextCont">
            <h2>{citynamestate}</h2>
            <p>{summary}</p>
          </div>
        </section>

        <section className="citySearchDataPanel">
          <div className="citySearchMap">
            <Map
              style="mapbox://styles/mapbox/light-v10"
              center={[longitude, latitude]}
              containerStyle={{
                height: '50vh',
                width: '50vw',
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ 'icon-image': 'marker-15' }}
              >
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
            </Map>
          </div>

          <div className="citySearchDataCont">
            <div className="citySearchSingleCityChart">
              <SingleCityChart city={dummyData} />
            </div>
            <div className="city-search-details">
              <SingleCityDetails city={dummyData} />
              {/* <CityDetails city={dummyData}/> */}
            </div>
          </div>
        </section>
      </div>
    </CitySearchDiv>
  );
}
