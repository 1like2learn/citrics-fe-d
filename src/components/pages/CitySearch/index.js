import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CitySearchDiv } from './style';
import SingleCityChart from '../../common/SingleCityChart';
import CitySearchHeader from './CitySearchHeader';
import CityDetails from '../../common/CityDetails';
import AddButton from '../../common/AddButton';

function CitySearch(props) {
  const history = useHistory();

  if (props.currentCities < 1) {
    history.push('/');
  }

  const {
    citynamestate,
    wikiimgurl,
    summary,
    latitude,
    logitude,
  } = props.currentCities[0];

  // const { dispatch } = store;

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_BOX_KEY,
  });

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
              center={[logitude, latitude]}
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
              <SingleCityChart city={props.currentCities[0]} />
            </div>
            <div className="city-search-details">
              <CityDetails city={props.currentCities[0]} />
            </div>
          </div>
        </section>
      </div>
      <AddButton />
    </CitySearchDiv>
  );
}

const mapStateToProps = state => {
  return {
    currentCities: state.currentCities,
  };
};

export default connect(mapStateToProps, {})(CitySearch);
