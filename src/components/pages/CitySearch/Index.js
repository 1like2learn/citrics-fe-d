import React from 'react';

import logic from './logic.js';
import dummyData from '../../../utils/dummyData';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import map from 'map';
// import Header from '../../common/header';

export default function CitySearch() {
  const { citynamestate, wikiimgurl, latitude, longitude } = dummyData;

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_BOX_KEY,
  });
  console.log('accessToken', Map.accessToken);

  return (
    <div className="citySearch">
      {/* nav */}
      <div className="citySearchCont">
        <section
          className="citySearchTextDescription"
          style={{ backgroundImage: `url(${wikiimgurl})` }}
        >
          <div className="citySearchTextCont">
            <h2>{citynamestate}</h2>
            <p>description</p>
          </div>
        </section>

        <section className="citySearchDataPanel">
          <div>
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
            <div>graph</div>
            <div>data panel</div>
          </div>
        </section>
      </div>
    </div>
  );
}
