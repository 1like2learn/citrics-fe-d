import React, { useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import dummyData from '../../../utils/dummyData';

import 'mapbox-gl/dist/mapbox-gl.css';

import { CitySearchDiv } from './style';
import SingleCityChart from '../../common/SingleCityChart';
import CitySearchHeader from './CitySearchHeader';
import CityDetails from '../../common/CityDetails';
import { grabCityData } from './logic';

export default function CitySearch() {
  const { citynamestate, wikiimgurl, latitude, longitude } = dummyData;
  const [imageUrl, setImageUrl] = useState(wikiimgurl);
  const [summary, setSummary] = useState();

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_BOX_KEY,
  });

  let formatedCityName = citynamestate.slice();

  formatedCityName = formatedCityName.split(',')[0].replace(' ', '_');

  useEffect(() => {
    grabCityData(formatedCityName, setImageUrl, setSummary);
  }, [setImageUrl, setSummary, citynamestate, formatedCityName]);

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
                height: '100%',
                width: '100%',
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
              <CityDetails city={dummyData} />
            </div>
          </div>
        </section>
      </div>
    </CitySearchDiv>
  );
}
